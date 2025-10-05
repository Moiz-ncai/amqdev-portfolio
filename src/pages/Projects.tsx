import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 'ai-chatbot',
      title: 'AI-Powered Chatbot',
      description: 'An intelligent conversational AI built with advanced NLP models, featuring context awareness and multi-language support.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
      status: 'Completed',
      category: 'AI/ML',
      featured: true,
    },
    {
      id: 'ml-predictive-analytics',
      title: 'Predictive Analytics Platform',
      description: 'A comprehensive ML platform for business intelligence, featuring real-time data processing and predictive modeling.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Scikit-learn', 'Docker', 'AWS', 'PostgreSQL'],
      status: 'In Progress',
      category: 'Data Science',
      featured: true,
    },
    {
      id: 'computer-vision-app',
      title: 'Computer Vision Application',
      description: 'Real-time object detection and classification system using deep learning models for industrial automation.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'OpenCV', 'PyTorch', 'FastAPI', 'Redis'],
      status: 'Completed',
      category: 'Computer Vision',
      featured: false,
    },
    {
      id: 'fullstack-ecommerce',
      title: 'E-commerce Platform',
      description: 'A modern, scalable e-commerce solution with advanced features like AI recommendations and real-time analytics.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      status: 'Completed',
      category: 'Web Development',
      featured: false,
    },
    {
      id: 'blockchain-dapp',
      title: 'Blockchain DApp',
      description: 'Decentralized application for secure document verification using smart contracts and IPFS storage.',
      image: '/api/placeholder/400/250',
      technologies: ['Solidity', 'Web3.js', 'React', 'IPFS', 'Ethereum'],
      status: 'In Progress',
      category: 'Blockchain',
      featured: false,
    },
    {
      id: 'mobile-ai-app',
      title: 'Mobile AI Assistant',
      description: 'Cross-platform mobile app with on-device AI capabilities for personal productivity and task management.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'TensorFlow Lite', 'Firebase', 'Redux'],
      status: 'Planning',
      category: 'Mobile Development',
      featured: false,
    },
  ];

  const categories = ['All', 'AI/ML', 'Data Science', 'Computer Vision', 'Web Development', 'Blockchain', 'Mobile Development'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen section-padding" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="container-max"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold neon-text mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of innovative projects showcasing my expertise in AI, machine learning, 
            and full-stack development.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white'
                    : 'glass-card text-gray-300 hover:text-white hover:bg-glass-border'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter(project => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card overflow-hidden group cursor-pointer"
                >
                  <Link to={`/projects/${project.id}`}>
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                        <div className="text-6xl font-bold neon-text opacity-50">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed'
                            ? 'bg-green-500/20 text-green-400'
                            : project.status === 'In Progress'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-neon-cyan font-medium">{project.category}</span>
                        <span className="text-xs text-gray-400">Featured</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-glass-border rounded text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-glass-border rounded text-xs text-gray-300">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-white mb-8">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card overflow-hidden group cursor-pointer"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="relative">
                    <div className="w-full h-40 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                      <div className="text-4xl font-bold neon-text opacity-50">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed'
                          ? 'bg-green-500/20 text-green-400'
                          : project.status === 'In Progress'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-neon-cyan font-medium">{project.category}</span>
                      {project.featured && (
                        <span className="text-xs text-yellow-400">⭐ Featured</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-glass-border rounded text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-glass-border rounded text-xs text-gray-300">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="glass-button glow-effect"
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
