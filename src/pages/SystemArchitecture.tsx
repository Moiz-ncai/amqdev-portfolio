import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Building, MapPin, BarChart3, Shield, Zap } from 'lucide-react';

const SystemArchitecture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <Link to="/projects">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center text-cyan-400 hover:text-cyan-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to Projects</span>
          </motion.button>
        </Link>

        {/* Header with Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="logo mx-auto mb-6">
            <div className="logo-icon">
              <span>ش</span>
            </div>
            <span className="logo-text">Shikayat</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            AI-Powered Citizen Complaint System
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Making government more responsive to citizens through intelligent complaint management
          </p>
        </motion.div>

        {/* What is Shikayat - Simple Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>🏛️</span>
            <span>What is Shikayat?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                <strong className="text-cyan-400">Shikayat</strong> (meaning "complaint" in Urdu) is like a smart assistant for your local government. 
                Instead of waiting in long lines or filling out confusing forms, citizens can easily report problems 
                and track their complaints online.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Think of it as a <strong className="text-cyan-400">digital complaint box</strong> that automatically 
                sorts your problems, sends them to the right department, and keeps you updated on progress.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Real-World Example</h3>
              <p className="text-slate-300">
                "My street light is broken" → System automatically sends it to the electricity department → 
                You get updates: "Received" → "Under Review" → "Fixed" → "Please confirm"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Problems It Solves */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Problems Shikayat Solves</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Long Waiting Times</h3>
              <p className="text-slate-300">No more standing in queues. Submit complaints from your phone in 2 minutes.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Wrong Department</h3>
              <p className="text-slate-300">AI automatically sends your complaint to the right department. No more confusion.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">No Updates</h3>
              <p className="text-slate-300">Track your complaint like a package. Know exactly what's happening and when.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">No Data</h3>
              <p className="text-slate-300">Government gets insights to improve services and allocate resources better.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Corruption</h3>
              <p className="text-slate-300">Transparent process with digital records. No more "lost" complaints.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Slow Response</h3>
              <p className="text-slate-300">Urgent complaints (like broken water pipes) get priority automatically.</p>
            </div>
          </div>
        </motion.div>

        {/* Who Can Use It */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Who Can Use Shikayat?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span>👥</span>
                <span>For Citizens</span>
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Report problems easily with your phone</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Track complaint status in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Get updates via SMS or email</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>See what others in your area are reporting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span>🏢</span>
                <span>For Government</span>
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automatically sort and prioritize complaints</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Get daily reports on what needs attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Track department performance and response times</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Identify patterns and improve city planning</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Sectors & Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Where Can Shikayat Be Used?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20 text-center">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="text-lg font-bold text-white mb-2">City Governments</h3>
              <p className="text-slate-300 text-sm">Municipal services, infrastructure, public facilities</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20 text-center">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="text-lg font-bold text-white mb-2">Healthcare</h3>
              <p className="text-slate-300 text-sm">Hospital complaints, medical services, patient feedback</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20 text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-lg font-bold text-white mb-2">Education</h3>
              <p className="text-slate-300 text-sm">School issues, teacher feedback, facility problems</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/20 text-center">
              <div className="text-4xl mb-3">🚌</div>
              <h3 className="text-lg font-bold text-white mb-2">Transport</h3>
              <p className="text-slate-300 text-sm">Public transport issues, road problems, traffic</p>
            </div>
          </div>
        </motion.div>

        {/* How It Works - Simple Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How Shikayat Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-white mb-2">Submit</h3>
              <p className="text-slate-300 text-sm">Citizen reports a problem with location and photos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-white mb-2">AI Sorts</h3>
              <p className="text-slate-300 text-sm">System automatically categorizes and prioritizes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-white mb-2">Assign</h3>
              <p className="text-slate-300 text-sm">Complaint goes to the right department automatically</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold text-white mb-2">Track</h3>
              <p className="text-slate-300 text-sm">Both citizen and government track progress</p>
            </div>
          </div>
        </motion.div>

        {/* Benefits Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-cyan-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Shikayat Matters</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">90% Faster</h3>
              <p className="text-slate-300">Processing complaints compared to manual systems</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">100% Transparent</h3>
              <p className="text-slate-300">Complete visibility into complaint status and resolution</p>
            </div>
            <div>
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Data-Driven</h3>
              <p className="text-slate-300">Insights help improve city services and planning</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none"></div>
    </div>
  );
};

export default SystemArchitecture;