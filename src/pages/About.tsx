import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const skills = [
    { name: 'Machine Learning', level: 95, color: 'from-neon-cyan to-cyan-400' },
    { name: 'Python', level: 90, color: 'from-yellow-400 to-orange-400' },
    { name: 'React/TypeScript', level: 88, color: 'from-blue-400 to-blue-600' },
    { name: 'TensorFlow/PyTorch', level: 85, color: 'from-orange-400 to-red-400' },
    { name: 'Node.js', level: 82, color: 'from-green-400 to-green-600' },
    { name: 'AWS/Cloud', level: 80, color: 'from-yellow-400 to-orange-400' },
  ];

  const experience = [
    {
      title: 'AI Research Intern',
      company: 'Tech Innovation Lab',
      period: '2023 - Present',
      description: 'Developing cutting-edge ML models for natural language processing and computer vision applications.',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Inc.',
      period: '2022 - 2023',
      description: 'Built scalable web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'ML Engineer',
      company: 'Data Science Co.',
      period: '2021 - 2022',
      description: 'Designed and implemented machine learning pipelines for predictive analytics.',
    },
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'University of Technology',
      year: '2021 - 2023',
      focus: 'Artificial Intelligence & Machine Learning',
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'Tech University',
      year: '2017 - 2021',
      focus: 'Software Development & Data Structures',
    },
  ];

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
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating intelligent solutions that bridge the gap between 
            artificial intelligence and real-world applications.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="glass-card p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm Abdul Moiz Qarni, an AI Developer and ML Engineer with a passion for 
                  creating innovative solutions that leverage the power of artificial intelligence. 
                  With a strong foundation in both theoretical knowledge and practical implementation, 
                  I specialize in developing intelligent systems that solve real-world problems.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My journey in technology began with a curiosity about how machines can learn and 
                  make decisions. This curiosity has evolved into a career focused on pushing the 
                  boundaries of what's possible with AI and machine learning.
                </p>
              </div>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-64 h-64 glass-card rounded-full flex items-center justify-center text-6xl font-bold neon-text"
                >
                  AMQ
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-6 hover:bg-glass-border transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-neon-cyan font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-6 hover:bg-glass-border transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-neon-cyan font-medium">{edu.school}</p>
                    <p className="text-gray-400 text-sm">{edu.focus}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{edu.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
