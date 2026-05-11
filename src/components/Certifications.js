import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCheckCircle } from 'react-icons/fi';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Certificate of Achievement',
      issuer: 'Devsinz Intern Connect',
      year: '2025',
      description: 'Recognition for outstanding performance and contribution during the internship program',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'SQA Internship',
      issuer: 'DevGate',
      year: '2025-2026',
      description: 'Comprehensive training in Software Quality Assurance, manual testing, and automation with Cypress',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Web Development',
      issuer: 'DevGate',
      year: '2025-2026',
      description: 'Full-stack web development training covering React.js, Node.js, and modern web technologies',
      color: 'from-blue-500 to-purple-500',
    },
  ];

  return (
    <section
      id="certifications"
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
          <h2 className="text-5xl font-bold mb-4 gradient-text">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-3xl p-8 card-hover relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 rounded-full blur-3xl`}
              />

              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
              >
                <FiAward className="text-3xl text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-2 relative z-10">
                {cert.title}
              </h3>
              <div className="flex items-center gap-2 mb-4 relative z-10">
                <FiCheckCircle className="text-green-500" />
                <p className="text-blue-500 font-semibold">{cert.issuer}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 relative z-10">
                {cert.description}
              </p>
              <div
                className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${cert.color} text-white text-sm font-semibold relative z-10`}
              >
                {cert.year}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass rounded-3xl p-8"
        >
          <h3 className="text-3xl font-bold mb-6 text-center gradient-text">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <FiCheckCircle className="text-2xl text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Successfully Delivered 3+ Live Websites
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Deployed production-ready websites for real clients including ATB Solutions,
                  Al-Kawish Construction, and Al-Khair Electronics
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <FiCheckCircle className="text-2xl text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Developed AI/ML Healthcare Solutions
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Created deep learning models for kidney cancer detection and chest X-ray
                  pathology detection with high accuracy
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <FiCheckCircle className="text-2xl text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Automated Testing Implementation
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Implemented Cypress automation testing frameworks, reducing manual testing
                  time and improving software quality
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <FiCheckCircle className="text-2xl text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Full-Stack Project Portfolio
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Built 15+ projects spanning e-commerce, e-learning, AI chatbots, and
                  medical imaging applications
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
