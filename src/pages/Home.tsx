import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Content */}
      <div className="container-max px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* AMQ Initials Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl sm:text-8xl lg:text-9xl font-bold neon-text mb-4"
          >
            AMQ
          </motion.h1>
        </motion.div>

        {/* Full Name Animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4">
            Abdul Moiz Qarni
          </h2>
        </motion.div>

        {/* Typewriter Effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-12"
        >
          <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 min-h-[2rem]">
            <Typewriter
              options={{
                strings: [
                  'AI Developer',
                  'ML Engineer', 
                  'Researcher',
                  'Full-Stack Developer',
                  'Tech Innovator'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="glass-button glow-effect text-lg px-8 py-4"
            >
              View Projects
            </motion.button>
          </Link>

          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="glass-button glow-effect text-lg px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-cyan"
            >
              About Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Code Blocks */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 glass-card p-4 text-xs opacity-60"
        >
          <code className="text-neon-cyan">
            {'<div>Hello World</div>'}
          </code>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute top-40 right-20 glass-card p-4 text-xs opacity-60"
        >
          <code className="text-neon-purple">
            {'def hello(): print("AI")'}
          </code>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 4 }}
          className="absolute bottom-40 left-20 glass-card p-4 text-xs opacity-60"
        >
          <code className="text-neon-cyan">
            {'const ai = "future";'}
          </code>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
