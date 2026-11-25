import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Runs the Vercel Functions in /api during `npm run dev`, so the contact form works locally
 * without the Vercel CLI. In production Vercel runs them natively; this plugin is dev-only.
 */
function vercelApiInDev(): Plugin {
  return {
    name: 'vercel-api-in-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const match = req.url?.match(/^\/api\/([\w-]+)(?:\?|$)/);
        if (!match) return next();
        try {
          const mod = await server.ssrLoadModule(`/api/${match[1]}.ts`);
          const handler = mod[req.method || 'GET'];
          if (typeof handler !== 'function') {
            res.statusCode = 405;
            return res.end();
          }
          const chunks: Buffer[] = [];
          for await (const c of req) chunks.push(c as Buffer);
          const headers = new Headers();
          Object.entries(req.headers).forEach(([k, v]) => v !== undefined && headers.set(k, String(v)));
          const request = new Request(`http://${req.headers.host}${req.url}`, {
            method: req.method,
            headers,
            body: ['GET', 'HEAD'].includes(req.method || '') ? undefined : Buffer.concat(chunks),
          });
          const response: Response = await handler(request);
          res.statusCode = response.status;
          response.headers.forEach((v, k) => res.setHeader(k, v));
          res.end(Buffer.from(await response.arrayBuffer()));
        } catch (err) {
          server.config.logger.error(String(err));
          res.statusCode = 500;
          res.end('API error');
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => {
  // Make server-side variables from .env (RESEND_API_KEY etc.) visible to the dev API.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''));
  return {
    plugins: [react(), vercelApiInDev()],
    // The build-time renderer doesn't need images, logos and other static files.
    publicDir: isSsrBuild ? false : 'public',
    server: {
      // Don't watch build output (a build while the dev server runs would otherwise crash it on Windows).
      watch: { ignored: ['**/dist/**', '**/dist-server/**'] },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    // manifest.json maps each page to its JavaScript file, so pre-rendered pages can preload it.
    build: {
      manifest: true,
    },
    // The build-time renderer (src/entry-server.tsx) bundles this CommonJS package so Node can import it.
    ssr: {
      noExternal: ['react-helmet-async'],
    },
  };
});
