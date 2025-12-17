import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/tenzor_logo_light.svg"
                alt="Tenzor Logo"
                className="h-6 w-auto"
              />
            </Link>
            <p className="text-sm">
              Precision. Performance. Progress.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm hover:text-white transition-colors">
                About
              </Link>
              <Link to="/services" className="block text-sm hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/case-studies" className="block text-sm hover:text-white transition-colors">
                Case Studies
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <div className="text-sm">Infrastructure Management</div>
              <div className="text-sm">Automation & Integration</div>
              <div className="text-sm">Business Platforms</div>
              <div className="text-sm">Application Modernization</div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <Link
              to="/contact"
              className="inline-block text-sm bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          © {new Date().getFullYear()} Tenzor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
