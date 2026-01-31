import React from "react";
import {
  Terminal,
  Database,
  Activity,
  Send,
  Layers,
  Code2,
} from "lucide-react";

export default function UniqueLandingPage() {
  return (
    <div className="min-h-screen font-mono">
      {/* Tech-Focused Nav */}
      <nav className="border-b border-white/10 p-5 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 font-bold text-lg tracking-widest">
            <Terminal className="text-neon-cyan" />
            <span>MATRIX_CORE_v4</span>
          </div>
          <a
            href="#contact"
            className="text-xs uppercase tracking-widest border border-neon-cyan px-4 py-2 hover:bg-neon-cyan hover:text-black transition duration-300"
          >
            Initialize Contact
          </a>
        </div>
      </nav>

      {/* Industrial Hero Section */}
      <header className="pt-20 pb-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-neon-cyan text-sm mb-4 tracking-[0.3em] font-bold">
            » SYSTEM READY
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            RECODING THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              AI INFRASTRUCTURE
            </span>
          </h1>
          <p className="text-slate-400 text-lg mb-10 font-sans max-w-md">
            Matrix 360 specializes in low-latency LLM deployments and agentic
            automation. We don't just use AI; we architect it.
          </p>
          <div className="flex gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">99.9%</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-tighter">
                Uptime SLA
              </span>
            </div>
            <div className="w-[1px] bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">&lt;200ms</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-tighter">
                Inference Latency
              </span>
            </div>
          </div>
        </div>

        {/* Abstract UI Component to show off Tailwind v4 skill */}
        <div className="glass-panel p-2 rounded-xl rotate-3 hover:rotate-0 transition-transform duration-700 hidden lg:block">
          <div className="bg-black/50 rounded-lg p-6 font-mono text-sm text-blue-300">
            <p className="text-slate-500">// Deploying neural_network_v4.py</p>
            <p className="mt-2">
              <span className="text-neon-purple">import</span> matrix_core
            </p>
            <p>
              <span className="text-neon-cyan">matrix</span>
              .optimize(throughput=MAX)
            </p>
            <div className="mt-4 h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-neon-cyan w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Service Blocks (Grid v4) */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-0 border-l border-white/5">
          <Feature
            icon={<Code2 size={20} />}
            title="Agentic RAG"
            desc="Advanced retrieval-augmented generation for private data."
          />
          <Feature
            icon={<Layers size={20} />}
            title="Custom Fine-tuning"
            desc="Adapting open-source models (Llama/Mistral) for niche tasks."
          />
          <Feature
            icon={<Database size={20} />}
            title="Data Pipelines"
            desc="High-speed ETL processes designed for AI training."
          />
        </div>
      </section>

      {/* Terminal Style Contact Form */}
      <section id="contact" className="py-32 px-6 max-w-2xl mx-auto">
        <div className="border border-white/10 rounded-lg overflow-hidden">
          <div className="bg-white/10 p-3 flex gap-2 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <span className="text-[10px] text-slate-500 ml-2">
              TERMINAL - CONTACT_USER
            </span>
          </div>
          <form
            action="https://formspree.io/f/maqjzyzy"
            method="POST"
            className="p-8 space-y-6"
          >
            <div>
              <label className="text-xs text-neon-cyan mb-2 block tracking-widest uppercase">
                Input_Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full bg-transparent border-b border-white/20 p-2 focus:border-neon-cyan outline-none transition"
              />
            </div>
            <div>
              <label className="text-xs text-neon-cyan mb-2 block tracking-widest uppercase">
                Project_Brief
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border border-white/10 p-4 focus:border-neon-cyan outline-none rounded-lg transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-black py-4 hover:bg-neon-cyan transition-colors flex items-center justify-center gap-2"
            >
              EXECUTE_SUBMIT <Send size={16} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-12 border-r border-b border-white/5 hover:bg-white/[0.03] transition-colors">
      <div className="text-neon-cyan mb-6">{icon}</div>
      <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">
        {title}
      </h3>
      <p className="text-slate-500 font-sans text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
