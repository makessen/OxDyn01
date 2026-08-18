import { Shield, Server, FileSearch, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-slate-900 rounded-sm" />
            </div>
            <span className="font-bold tracking-tight text-lg uppercase tracking-widest text-slate-200">Substrata</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-slate-100 transition-colors">Platform</a>
            <a href="#" className="hover:text-slate-100 transition-colors">Security</a>
            <a href="#" className="hover:text-slate-100 transition-colors">Compliance</a>
            <button className="bg-slate-100 text-slate-900 px-4 py-2 rounded-sm hover:bg-white transition-colors flex items-center gap-2 font-semibold">
              Request Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 border-x border-slate-800 border-dashed">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            SOC2 TYPE II & ISO 27001 CERTIFIED
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-white">
            Total visibility into your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">regulatory reality</span>.
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
            Securely interrogate decades of internal reports and legal precedents. 100% auditable. Zero data leaves your environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-sm transition-colors flex items-center justify-center gap-2 font-semibold text-lg">
              See Live Demo <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 px-8 py-4 rounded-sm transition-colors font-semibold text-lg">
              Read Security Brief
            </button>
          </div>
        </div>
      </section>

      {/* UI Mockup Section */}
      <section className="border-y border-slate-800 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-6 py-20 border-x border-slate-800 border-dashed">
          <div className="rounded-lg border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden ring-1 ring-white/10">
            {/* Window Header */}
            <div className="bg-slate-800/80 border-b border-slate-700 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-600" />
                <div className="w-3 h-3 rounded-full bg-slate-600" />
                <div className="w-3 h-3 rounded-full bg-slate-600" />
              </div>
              <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                <Shield className="w-3 h-3" /> SECURE TUNNEL ACTIVE
              </div>
            </div>
            
            {/* App Body */}
            <div className="p-6 md:p-10">
              <div className="max-w-3xl mx-auto">
                <div className="mb-8 relative group">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-slate-800 border border-slate-600 rounded-lg p-4 flex items-center gap-4">
                    <FileSearch className="w-6 h-6 text-blue-400 shrink-0" />
                    <input 
                      type="text" 
                      readOnly
                      value="How many pollution incidents in 2019 violated the 1991 Water Industry Act?" 
                      className="bg-transparent border-none outline-none w-full text-slate-200 text-lg md:text-xl font-medium focus:ring-0"
                    />
                  </div>
                </div>

                {/* Answer Box */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 md:p-8 relative">
                  <div className="absolute -top-3 left-8 bg-blue-600 text-xs font-mono font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                    Audited Response
                  </div>
                  
                  <p className="text-lg text-slate-300 leading-relaxed mb-6 mt-2">
                    In 2019, <strong className="text-white">14 incidents</strong> were identified as direct violations of the 1991 Water Industry Act. The majority of these related to unauthorized storm overflow discharges documented across internal compliance audits.
                  </p>
                  
                  {/* Sources */}
                  <div className="border-t border-slate-700 pt-6">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Cryptographically Verified Sources</h4>
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between p-3 bg-slate-800 border border-slate-700 rounded hover:border-slate-500 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                          <span className="font-mono text-sm text-slate-300">PDF_Audit_2019_Report_Final.pdf</span>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">Pg 42, Para 3</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-800 border border-slate-700 rounded hover:border-slate-500 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                          <span className="font-mono text-sm text-slate-300">EWCA_Crim_2019_1344_Judgment.pdf</span>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">Line 118</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-x border-slate-800 border-dashed">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Verifiable Citations</h3>
            <p className="text-slate-400 leading-relaxed">
              Every generated answer is strictly tied to your original source documents. Click any claim to view the exact paragraph in your PDF or spreadsheet. Absolute transparency.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">On-Premise / VPC</h3>
            <p className="text-slate-400 leading-relaxed">
              Complete data sovereignty. Substrata deploys entirely within your firewall. Your proprietary data, legal risk models, and internal queries never leave your environment.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-6">
              <FileSearch className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Unlocks Unstructured Data</h3>
            <p className="text-slate-400 leading-relaxed">
              Interrogate decades of scattered data in natural language. Substrata seamlessly reads scans, archaic PDFs, complex Excel returns, and historical case law.
            </p>
          </div>
        </div>
      </section>
      
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-slate-700 rounded-sm" />
            <span className="font-bold tracking-widest uppercase">Substrata</span>
          </div>
          <div>
            &copy; 2026 Substrata Intelligence. All rights reserved. SOC2 Compliant.
          </div>
        </div>
      </footer>
    </main>
  );
}
