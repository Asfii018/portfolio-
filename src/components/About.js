import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiCheckCircle, FiAward } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <FiCode />, value: '3+', label: 'Years Experience' },
    { icon: <FiCheckCircle />, value: '15+', label: 'Projects Completed' },
    { icon: <FiAward />, value: '3+', label: 'Certifications' },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 card-hover">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiCode className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Building responsive and scalable web applications using modern technologies
                      like React.js, Node.js, and MongoDB.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiCheckCircle className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">QA Testing</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ensuring software quality through manual and automated testing using Cypress,
                      with expertise in functional and regression testing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiAward className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Developing AI/ML solutions using Python, Deep Learning, and computer vision
                      for real-world applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Software Engineering Graduate
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a passionate Software Engineering graduate from Abasyn University, Islamabad,
              with hands-on experience in Frontend Development, QA Testing, and Machine Learning.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I specialize in building responsive web applications with clean code practices,
              ensuring software quality through structured testing, and developing AI/ML solutions
              for healthcare and automation. I'm a strong collaborator with a focus on usability
              and defect prevention.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center glass rounded-2xl p-6 card-hover"
                >
                  <div className="text-4xl text-blue-500 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
