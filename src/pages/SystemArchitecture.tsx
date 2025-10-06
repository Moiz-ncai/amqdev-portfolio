import { FileText, Brain, Database, Shield, Users, Building2, MapPin, TrendingUp, BarChart3 } from 'lucide-react';

export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Shikayat - AI-Powered Complaint Intelligence System
          </h1>
          <p className="text-blue-200 text-lg">Current System Architecture & Data Flow</p>
        </div>

        {/* Layer 1: Input & Frontend */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
            Web App (Frontend)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <FileText className="w-12 h-12 text-blue-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">React + Vite</h3>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• React Router with Protected Routes</li>
                <li>• AuthContext for session state (localStorage)</li>
                <li>• Role-based navigation (citizen/official)</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <BarChart3 className="w-12 h-12 text-purple-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Analytics UI</h3>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• Overview cards (total, pending, resolved, avg time)</li>
                <li>• Trends (last 30 days), category & department charts</li>
                <li>• Heatmap, dedicated Analytics page</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <TrendingUp className="w-12 h-12 text-orange-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Daily Summary</h3>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• Overall AI summary for today’s complaints</li>
                <li>• Critical/High “Key Issues” list</li>
                <li>• Category-wise summaries</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Layer 2: Backend (API & AI) */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
            Backend Services (FastAPI)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <Shield className="w-12 h-12 text-red-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Auth & Security</h3>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• FastAPI auth utils with passlib[bcrypt]</li>
                <li>• bcrypt compatibility safeguards and password length checks</li>
                <li>• Role-based access (citizen/official)</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <Brain className="w-12 h-12 text-yellow-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Classifier</h3>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• Hugging Face Transformers (facebook/bart-large-mnli)</li>
                <li>• Category classification, sentiment, priority scoring</li>
                <li>• Department mapping and daily summarization</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 md:col-span-2">
              <BarChart3 className="w-12 h-12 text-cyan-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Analytics API</h3>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• Endpoints: overview, trends, category breakdown, department performance</li>
                <li>• Priority distribution and daily-summary endpoints</li>
                <li>• Lifespan startup via asynccontextmanager, served by Uvicorn</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Layer 3: Data & Models */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
            Data Layer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <Database className="w-12 h-12 text-cyan-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Database & ORM</h3>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• SQLAlchemy models: Complaint, Officer, StatusHistory, User</li>
                <li>• Seed script available (optional dummy data)</li>
                <li>• Clear/reset scripts to remove dummy data</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <Building2 className="w-12 h-12 text-pink-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Domain Logic</h3>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• Officer workload and assignment logic (in seeding)</li>
                <li>• Status progression and resolution timestamps</li>
                <li>• Consistent analytics aggregation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Layer 4: User Experience & Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
            Key User Flows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <Users className="w-12 h-12 text-green-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Citizen</h3>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• Signup/Login, file complaint, track by ID</li>
                <li>• Redirected to citizen dashboard via HomeRedirect</li>
                <li>• Access to track page (also accessible by officials)</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <MapPin className="w-12 h-12 text-pink-400 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Official</h3>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• Official dashboard + dedicated Analytics page</li>
                <li>• Daily AI summary and key issues spotlight</li>
                <li>• Department/category performance and trends</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-blue-300 text-sm">
          <p>Shikayat is built with FastAPI, React, SQLAlchemy, and Transformers (BART) for intelligent insights.</p>
        </div>
      </div>
    </div>
  );
}
