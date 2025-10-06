import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 'markit',
      title: 'MarkIT',
      description: 'Advanced marking and grading platform with AI-powered assessment capabilities.',
      gradient: 'from-blue-500 to-cyan-500',
      icon: '📝',
      status: 'Completed',
    },
    {
      id: 'shikayat',
      title: 'Shikayat',
      description: 'Comprehensive complaint management system for efficient issue tracking and resolution.',
      gradient: 'from-purple-500 to-pink-500',
      icon: '📢',
      status: 'Completed',
    },
    {
      id: 'stonksai',
      title: 'StonksAI',
      description: 'AI-powered stock market analysis and prediction platform for informed trading decisions.',
      gradient: 'from-green-500 to-emerald-500',
      icon: '📈',
      status: 'In Progress',
    },
    {
      id: 'spotterai',
      title: 'SpotterAI',
      description: 'Intelligent object detection and tracking system using computer vision and deep learning.',
      gradient: 'from-orange-500 to-red-500',
      icon: '🎯',
      status: 'Completed',
    },
    {
      id: 'histree',
      title: 'Histree',
      description: 'Interactive historical data visualization platform for exploring and analyzing historical events.',
      gradient: 'from-indigo-500 to-blue-500',
      icon: '🌳',
      status: 'In Progress',
    },
    {
      id: 'parkit',
      title: 'ParkIT',
      description: 'Smart parking management solution with real-time availability tracking and reservation system.',
      gradient: 'from-teal-500 to-cyan-500',
      icon: '🅿️',
      status: 'Completed',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A collection of innovative projects showcasing expertise in AI, full-stack development, and intelligent solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Link to={`/projects/${project.id}`}>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      project.status === 'Completed'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Icon/Visual */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center`}>
                    <div className="text-8xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* View Details Link */}
                    <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 blur-xl`}></div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-20"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-slate-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none"></div>
    </div>
  );
};

export default Projects;
