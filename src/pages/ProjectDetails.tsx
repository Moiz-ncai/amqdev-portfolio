import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import SystemArchitecture from './SystemArchitecture';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();

  // If Shikayat, show the architecture/details page directly
  if (id === 'shikayat') {
    return <SystemArchitecture />;
  }

  // Project data with empty details for you to fill later
  const projectsData: Record<string, any> = {
    markit: {
      title: 'MarkIT',
      subtitle: 'Advanced Marking & Grading Platform',
      gradient: 'from-blue-500 to-cyan-500',
      icon: '📝',
      status: 'Completed',
      year: '2024',
      // Details to be filled
      overview: '',
      features: [],
      technologies: [],
      challenges: '',
      results: '',
      images: [],
      liveUrl: '',
      githubUrl: '',
    },
    stonksai: {
      title: 'StonksAI',
      subtitle: 'AI-Powered Stock Market Analysis',
      gradient: 'from-green-500 to-emerald-500',
      icon: '📈',
      status: 'In Progress',
      year: '2024',
      overview: '',
      features: [],
      technologies: [],
      challenges: '',
      results: '',
      images: [],
      liveUrl: '',
      githubUrl: '',
    },
    spotterai: {
      title: 'SpotterAI',
      subtitle: 'Intelligent Object Detection System',
      gradient: 'from-orange-500 to-red-500',
      icon: '🎯',
      status: 'Completed',
      year: '2023',
      overview: '',
      features: [],
      technologies: [],
      challenges: '',
      results: '',
      images: [],
      liveUrl: '',
      githubUrl: '',
    },
    histree: {
      title: 'Histree',
      subtitle: 'Interactive Historical Data Visualization',
      gradient: 'from-indigo-500 to-blue-500',
      icon: '🌳',
      status: 'In Progress',
      year: '2024',
      overview: '',
      features: [],
      technologies: [],
      challenges: '',
      results: '',
      images: [],
      liveUrl: '',
      githubUrl: '',
    },
    parkit: {
      title: 'ParkIT',
      subtitle: 'Smart Parking Management Solution',
      gradient: 'from-teal-500 to-cyan-500',
      icon: '🅿️',
      status: 'Completed',
      year: '2023',
      overview: '',
      features: [],
      technologies: [],
      challenges: '',
      results: '',
      images: [],
      liveUrl: '',
      githubUrl: '',
    },
  };

  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full"
            >
              Back to Projects
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className={`text-6xl`}>{project.icon}</div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                  project.status === 'Completed'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </span>
                <span className="text-slate-400 text-sm">{project.year}</span>
              </div>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-2`}>
                {project.title}
              </h1>
              <p className="text-xl text-slate-300">{project.subtitle}</p>
            </div>
          </div>
        </motion.div>

        {/* Project Hero Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`relative h-96 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center mb-12 overflow-hidden border border-slate-700/50`}
        >
          <div className="text-9xl opacity-30">{project.icon}</div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </motion.div>

        {/* Content Sections - Placeholder for non-Shikayat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Placeholder Message */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Project Details Coming Soon</h2>
            <p className="text-slate-300 mb-6">
              Detailed information about {project.title} will be added here, including:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h3 className="font-semibold text-cyan-400 mb-2">📋 Project Overview</h3>
                <p className="text-sm text-slate-300">Comprehensive description and goals</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h3 className="font-semibold text-cyan-400 mb-2">✨ Key Features</h3>
                <p className="text-sm text-slate-300">Highlighted functionalities</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h3 className="font-semibold text-cyan-400 mb-2">⚙️ Technologies Used</h3>
                <p className="text-sm text-slate-300">Tech stack and tools</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h3 className="font-semibold text-cyan-400 mb-2">🎯 Results & Impact</h3>
                <p className="text-sm text-slate-300">Achievements and outcomes</p>
              </div>
            </div>
          </div>

          {/* Links Section (if available) */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-4 justify-center">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Live</span>
                  </motion.button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-700/50 text-white font-semibold rounded-full border border-slate-600 hover:border-cyan-500"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.button>
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none"></div>
    </div>
  );
};

export default ProjectDetails;
