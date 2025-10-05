import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Mock project data - in a real app, this would come from an API
  const projectsData = {
    'ai-chatbot': {
      id: 'ai-chatbot',
      title: 'AI-Powered Chatbot',
      description: 'An intelligent conversational AI built with advanced NLP models, featuring context awareness and multi-language support.',
      longDescription: 'This project represents a breakthrough in conversational AI technology, combining state-of-the-art natural language processing with real-time context understanding. The chatbot can engage in meaningful conversations across multiple languages while maintaining context throughout extended interactions.',
      image: '/api/placeholder/800/400',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB', 'Docker', 'AWS'],
      status: 'Completed',
      category: 'AI/ML',
      featured: true,
      githubUrl: 'https://github.com/amqdev/ai-chatbot',
      liveUrl: 'https://ai-chatbot.amqdev.com',
      features: [
        'Multi-language support with automatic detection',
        'Context-aware conversations with memory persistence',
        'Real-time sentiment analysis and response adaptation',
        'Integration with external APIs and databases',
        'Scalable microservices architecture',
        'Advanced NLP preprocessing and tokenization'
      ],
      challenges: [
        'Implementing context persistence across multiple conversation turns',
        'Optimizing response time while maintaining accuracy',
        'Handling edge cases in natural language understanding',
        'Scaling the system to handle concurrent users'
      ],
      results: [
        'Achieved 95% accuracy in intent recognition',
        'Reduced response time to under 200ms',
        'Successfully deployed to handle 10,000+ concurrent users',
        'Received positive feedback from beta testers'
      ]
    },
    'ml-predictive-analytics': {
      id: 'ml-predictive-analytics',
      title: 'Predictive Analytics Platform',
      description: 'A comprehensive ML platform for business intelligence, featuring real-time data processing and predictive modeling.',
      longDescription: 'This enterprise-grade platform revolutionizes business intelligence by providing real-time predictive analytics. Built with scalability in mind, it processes massive datasets to deliver actionable insights that drive business decisions.',
      image: '/api/placeholder/800/400',
      technologies: ['Python', 'Scikit-learn', 'Docker', 'AWS', 'PostgreSQL', 'Apache Kafka', 'Redis'],
      status: 'In Progress',
      category: 'Data Science',
      featured: true,
      githubUrl: 'https://github.com/amqdev/predictive-analytics',
      liveUrl: 'https://analytics.amqdev.com',
      features: [
        'Real-time data streaming and processing',
        'Advanced machine learning model deployment',
        'Interactive data visualization dashboard',
        'Automated model retraining pipeline',
        'Multi-tenant architecture with role-based access',
        'Comprehensive API for third-party integrations'
      ],
      challenges: [
        'Processing large-scale data streams in real-time',
        'Ensuring model accuracy with constantly changing data',
        'Implementing secure multi-tenant data isolation',
        'Optimizing query performance for complex analytics'
      ],
      results: [
        'Processed over 1TB of data daily',
        'Achieved 92% prediction accuracy',
        'Reduced data processing time by 60%',
        'Successfully onboarded 50+ enterprise clients'
      ]
    },
    'computer-vision-app': {
      id: 'computer-vision-app',
      title: 'Computer Vision Application',
      description: 'Real-time object detection and classification system using deep learning models for industrial automation.',
      longDescription: 'This cutting-edge computer vision system brings AI-powered automation to industrial environments. Using state-of-the-art deep learning models, it provides real-time object detection and classification with exceptional accuracy.',
      image: '/api/placeholder/800/400',
      technologies: ['Python', 'OpenCV', 'PyTorch', 'FastAPI', 'Redis', 'Docker', 'NVIDIA Jetson'],
      status: 'Completed',
      category: 'Computer Vision',
      featured: false,
      githubUrl: 'https://github.com/amqdev/computer-vision-app',
      liveUrl: 'https://vision.amqdev.com',
      features: [
        'Real-time object detection and classification',
        'Custom model training for specific industrial use cases',
        'Edge computing deployment on NVIDIA Jetson',
        'RESTful API for easy integration',
        'Comprehensive logging and monitoring',
        'Support for multiple camera inputs'
      ],
      challenges: [
        'Optimizing model performance for edge devices',
        'Handling varying lighting conditions in industrial settings',
                'Ensuring real-time processing with high accuracy',
        'Integrating with existing industrial control systems'
      ],
      results: [
        'Achieved 98% accuracy in object detection',
        'Reduced processing time to 50ms per frame',
        'Successfully deployed in 5+ industrial facilities',
        'Improved automation efficiency by 40%'
      ]
    }
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProject(projectsData[id as keyof typeof projectsData] || null);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-neon-cyan border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button glow-effect"
            >
              Back to Projects
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Projects</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="glass-card p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm text-neon-cyan font-medium">{project.category}</span>
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
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button glow-effect text-center"
                  >
                    View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button glow-effect text-center bg-gradient-to-r from-neon-cyan to-neon-purple"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="glass-card overflow-hidden">
            <div className="w-full h-64 lg:h-96 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
              <div className="text-8xl font-bold neon-text opacity-50">
                {project.title.charAt(0)}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Challenges & Results */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Challenges</h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Results</h3>
                <ul className="space-y-2">
                  {project.results.map((result: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-glass-border rounded-full text-sm text-gray-300 hover:bg-glass-border/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Project Info</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400 text-sm">Status</span>
                  <p className="text-white font-medium">{project.status}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Category</span>
                  <p className="text-white font-medium">{project.category}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Featured</span>
                  <p className="text-white font-medium">{project.featured ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
