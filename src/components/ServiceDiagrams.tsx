
// 1. Technology Consulting & Solution Architecture Diagram
export function ArchitectureDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-xl bg-brand-night p-6 border border-brand-slate/25 shadow-xl font-mono text-xs text-white ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-brand-slate/20 text-[11px] text-brand-silver">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-edge-red" />
          <span className="w-2 h-2 rounded-full bg-brand-ember/60" />
          <span className="w-2 h-2 rounded-full bg-brand-slate/40" />
        </div>
        <span className="text-[10px] uppercase tracking-wider text-brand-silver/70">
          Solution Architecture Blueprint
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {/* Layer 1: Business Drivers & Constraints */}
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="text-[10px] uppercase tracking-wider text-brand-silver/70 mb-1">
            01. Business Requirements & Constraints
          </div>
          <div className="text-white font-sans text-xs font-semibold flex items-center justify-between">
            <span>Operational Scale • Compliance • Cost Bounds</span>
            <span className="text-brand-edge-red text-[10px]">Analyzed</span>
          </div>
        </div>

        {/* Arrow connector */}
        <div className="flex justify-center -my-1 text-brand-edge-red/60 text-xs">↓</div>

        {/* Layer 2: Architecture Framework & Trade-off Matrix */}
        <div className="p-3.5 rounded-lg bg-brand-deep/30 border border-brand-crimson/40">
          <div className="text-[10px] uppercase tracking-wider text-brand-edge-red font-semibold mb-1">
            02. Architecture & Tech Selection
          </div>
          <div className="text-white font-sans text-xs font-medium">
            System Boundaries • Data Contracts • Vendor Evaluation
          </div>
          <div className="mt-2 pt-2 border-t border-brand-crimson/20 grid grid-cols-3 gap-1.5 text-[10px] text-brand-silver text-center">
            <span className="bg-white/5 py-0.5 rounded">Resilience</span>
            <span className="bg-white/5 py-0.5 rounded">Scalability</span>
            <span className="bg-white/5 py-0.5 rounded">Maintainability</span>
          </div>
        </div>

        {/* Arrow connector */}
        <div className="flex justify-center -my-1 text-brand-edge-red/60 text-xs">↓</div>

        {/* Layer 3: Target State & Implementation Roadmap */}
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="text-[10px] uppercase tracking-wider text-brand-silver/70 mb-1">
            03. Target-State Architecture & Roadmap
          </div>
          <div className="text-white font-sans text-xs font-semibold flex items-center justify-between">
            <span>Phased Milestones • Risk Mitigation • Governance</span>
            <span className="text-emerald-400 text-[10px]">Execution-Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Infrastructure & Cloud Engineering Topology Diagram
export function InfrastructureDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-xl bg-brand-night p-6 border border-brand-slate/25 shadow-xl font-mono text-xs text-white ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-brand-slate/20 text-[11px] text-brand-silver">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-edge-red" />
          <span className="w-2 h-2 rounded-full bg-brand-ember/60" />
          <span className="w-2 h-2 rounded-full bg-brand-slate/40" />
        </div>
        <span className="text-[10px] uppercase tracking-wider text-brand-silver/70">
          Hybrid Infrastructure Topology
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Cloud Zone */}
        <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase tracking-wider text-brand-neon-red font-semibold">
              Public Cloud (AWS)
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="space-y-1.5 text-[11px] text-brand-silver font-sans">
            <div className="bg-white/5 p-1.5 rounded">VPC & Auto-Scaling Compute</div>
            <div className="bg-white/5 p-1.5 rounded">Managed Database Clusters</div>
            <div className="bg-white/5 p-1.5 rounded">Offsite Automated S3 Backups</div>
          </div>
        </div>

        {/* On-Premise Zone */}
        <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase tracking-wider text-brand-silver/90 font-semibold">
              On-Premises / Datacenter
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="space-y-1.5 text-[11px] text-brand-silver font-sans">
            <div className="bg-white/5 p-1.5 rounded">Hyper-V & VMware Clusters</div>
            <div className="bg-white/5 p-1.5 rounded">Low-Latency Local Storage</div>
            <div className="bg-white/5 p-1.5 rounded">VLANs & Hardware Firewalls</div>
          </div>
        </div>
      </div>

      {/* Secure Hybrid Link */}
      <div className="mt-3 p-2.5 rounded-lg bg-brand-deep/30 border border-brand-crimson/40 text-center">
        <div className="flex items-center justify-center gap-2 text-[11px] font-sans font-medium text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-edge-red" />
          <span>Encrypted Site-to-Site VPN • Continuous DR Replication • ~60% Cost Optimization</span>
        </div>
      </div>
    </div>
  );
}

// 3. Business Solutions & Digital Transformation Ecosystem Diagram
export function BusinessWorkflowDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-xl bg-brand-night p-6 border border-brand-slate/25 shadow-xl font-mono text-xs text-white ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-brand-slate/20 text-[11px] text-brand-silver">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-edge-red" />
          <span className="w-2 h-2 rounded-full bg-brand-ember/60" />
          <span className="w-2 h-2 rounded-full bg-brand-slate/40" />
        </div>
        <span className="text-[10px] uppercase tracking-wider text-brand-silver/70">
          Integrated Business Operations
        </span>
      </div>

      <div className="mt-4 space-y-3 font-sans">
        {/* Inputs */}
        <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
          <div className="p-2 rounded bg-white/5 border border-white/10 text-brand-silver">
            Legacy ERP
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10 text-brand-silver">
            Bank Portals
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10 text-brand-silver">
            Order Desk
          </div>
        </div>

        {/* Integration Hub */}
        <div className="p-3.5 rounded-lg bg-brand-deep/30 border border-brand-crimson/40 text-center">
          <div className="text-[10px] uppercase tracking-wider font-mono text-brand-edge-red font-semibold mb-1">
            Tenzor Edge Integration & Reconciliation Engine
          </div>
          <div className="text-white text-xs font-semibold">
            API Gateways • Automated Rules Engine • Event Queues
          </div>
          <div className="text-[10px] text-brand-silver/80 mt-1">
            Transforms manual data entry into instant automated synchronization
          </div>
        </div>

        {/* Real-time Outcomes */}
        <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
          <div className="p-2 rounded bg-white/5 border border-white/10 text-emerald-400">
            ✓ Real-Time Inventory & Invoices
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10 text-emerald-400">
            ✓ Automated Bank Reconciliation
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. AI-Enabled Software Engineering SDLC Diagram
export function AiEngineeringDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-xl bg-brand-night p-6 border border-brand-slate/25 shadow-xl font-mono text-xs text-white ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-brand-slate/20 text-[11px] text-brand-silver">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-edge-red" />
          <span className="w-2 h-2 rounded-full bg-brand-ember/60" />
          <span className="w-2 h-2 rounded-full bg-brand-slate/40" />
        </div>
        <span className="text-[10px] uppercase tracking-wider text-brand-silver/70">
          AI Engineering & SDLC Architecture
        </span>
      </div>

      <div className="mt-4 space-y-3 font-sans">
        {/* Codebase Context */}
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="text-[10px] uppercase tracking-wider font-mono text-brand-silver/70 mb-1">
            Proprietary Brownfield Codebase
          </div>
          <div className="text-xs text-white flex justify-between items-center">
            <span>Repository Context • Domain Schemas • Architectural Rules</span>
            <span className="text-brand-edge-red text-[10px] font-mono">Governed</span>
          </div>
        </div>

        {/* Dedicated Agents & Skills */}
        <div className="p-3.5 rounded-lg bg-brand-deep/30 border border-brand-crimson/40">
          <div className="text-[10px] uppercase tracking-wider font-mono text-brand-neon-red font-semibold mb-1">
            Project-Specific AI Agents & MCP Tooling
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2 text-[11px] text-brand-silver">
            <div className="bg-white/5 p-1.5 rounded">Codebase-Aware Agents</div>
            <div className="bg-white/5 p-1.5 rounded">Deterministic MCP Skills</div>
            <div className="bg-white/5 p-1.5 rounded">Architectural Boundary Guard</div>
            <div className="bg-white/5 p-1.5 rounded">Automated Regression Synthesis</div>
          </div>
        </div>

        {/* SDLC Outcome */}
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
          <span className="text-white font-medium">Result: Safe, Consistent Engineering Velocity</span>
          <span className="text-emerald-400 font-mono text-[10px]">+40% Faster Cycles</span>
        </div>
      </div>
    </div>
  );
}

// 5. Product & Technology Leadership Delivery Diagram
export function ProductLifecycleDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-xl bg-brand-night p-6 border border-brand-slate/25 shadow-xl font-mono text-xs text-white ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-brand-slate/20 text-[11px] text-brand-silver">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-edge-red" />
          <span className="w-2 h-2 rounded-full bg-brand-ember/60" />
          <span className="w-2 h-2 rounded-full bg-brand-slate/40" />
        </div>
        <span className="text-[10px] uppercase tracking-wider text-brand-silver/70">
          Product & Delivery Governance
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 font-sans text-center">
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
          <div className="text-brand-edge-red font-mono font-bold text-xs mb-1">01</div>
          <div className="text-xs font-semibold text-white">Discovery</div>
          <div className="text-[10px] text-brand-silver mt-1">BRD & Scope</div>
        </div>

        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
          <div className="text-brand-edge-red font-mono font-bold text-xs mb-1">02</div>
          <div className="text-xs font-semibold text-white">Architecture</div>
          <div className="text-[10px] text-brand-silver mt-1">Stack & Design</div>
        </div>

        <div className="p-2.5 rounded-lg bg-brand-deep/30 border border-brand-crimson/40">
          <div className="text-brand-neon-red font-mono font-bold text-xs mb-1">03</div>
          <div className="text-xs font-semibold text-white">Governance</div>
          <div className="text-[10px] text-brand-silver mt-1">Sprint Delivery</div>
        </div>

        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
          <div className="text-brand-edge-red font-mono font-bold text-xs mb-1">04</div>
          <div className="text-xs font-semibold text-white">Launch</div>
          <div className="text-[10px] text-emerald-400 mt-1">UAT & Rollout</div>
        </div>
      </div>

      <div className="mt-3 p-2.5 rounded-lg bg-white/5 border border-white/10 text-center font-sans text-[11px] text-brand-silver">
        Experienced fractional leadership bridging business vision and engineering execution.
      </div>
    </div>
  );
}
