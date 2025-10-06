import { FileText, Brain, BarChart3, Users, Shield, MapPin, TrendingUp } from 'lucide-react';

export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Shikayat
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            AI‑powered complaint intelligence that helps cities and organizations resolve issues faster, spot trends early, and deliver delightful citizen experiences.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full text-sm bg-slate-800/60 border border-slate-700 text-slate-200">AI Classification</span>
            <span className="px-4 py-2 rounded-full text-sm bg-slate-800/60 border border-slate-700 text-slate-200">Real‑time Analytics</span>
            <span className="px-4 py-2 rounded-full text-sm bg-slate-800/60 border border-slate-700 text-slate-200">Role‑based Workflows</span>
            <span className="px-4 py-2 rounded-full text-sm bg-slate-800/60 border border-slate-700 text-slate-200">Daily AI Summaries</span>
          </div>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Understands Every Complaint</h3>
            <p className="text-slate-300 text-sm">Auto‑classifies category, urgency, sentiment and routes to the right department with AI.</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-cyan-300" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">See Trends Instantly</h3>
            <p className="text-slate-300 text-sm">Live dashboards for volumes, resolution time, hotspots and department performance.</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-purple-300" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Act Before It Escalates</h3>
            <p className="text-slate-300 text-sm">Daily AI digests highlight critical issues and emerging patterns—so teams can respond fast.</p>
          </div>
        </div>

        {/* What Shikayat Does */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">What Shikayat Delivers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-green-300" />
                <h3 className="text-white font-semibold">Citizen Experience</h3>
              </div>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• Simple web filing with smart category suggestions</li>
                <li>• Live status tracking by complaint ID</li>
                <li>• Email/SMS notifications at each stage</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-red-300" />
                <h3 className="text-white font-semibold">Official Workflow</h3>
              </div>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• Role‑based dashboards and assignment queues</li>
                <li>• AI‑assisted prioritization and department routing</li>
                <li>• SLAs, resolution timestamps and audit history</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-pink-300" />
                <h3 className="text-white font-semibold">Analytics & Insights</h3>
              </div>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• Category/department heatmaps and hotspots</li>
                <li>• Trends (last 7/30/90 days), backlog, resolution time</li>
                <li>• Exportable reports for leadership briefings</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-5 h-5 text-blue-300" />
                <h3 className="text-white font-semibold">Daily AI Briefing</h3>
              </div>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• Morning summary of volumes and top categories</li>
                <li>• Critical/high “Key Issues” spotlight</li>
                <li>• Department performance notes and suggestions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Visual Preview (mock tiles) */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Product Preview</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="relative rounded-2xl h-52 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-slate-700/60 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">AI‑classified Inbox</p>
                <p className="text-slate-300 text-sm">Auto‑grouped by category & priority</p>
              </div>
            </div>
            <div className="relative rounded-2xl h-52 bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-slate-700/60 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Performance Dashboard</p>
                <p className="text-slate-300 text-sm">Trends, hotspots, SLAs</p>
              </div>
            </div>
            <div className="relative rounded-2xl h-52 bg-gradient-to-br from-cyan-500/20 to-teal-500/10 border border-slate-700/60 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Daily AI Digest</p>
                <p className="text-slate-300 text-sm">Actionable summary every morning</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-300 mb-4">Want a guided walkthrough or a tailored demo?</p>
          <a href="/contact" className="inline-block">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/40">
              Get In Touch
            </button>
          </a>
        </div>
      </div>

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none"></div>
    </div>
  );
}
