import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'QA Tester',
      company: 'DevGate',
      period: '2025 – 2026',
      type: 'Internship',
      description: [
        'Designed and executed manual test cases and scenarios based on functional requirements',
        'Performed functional, regression, and UI testing to ensure application stability and quality',
        'Identified, logged, and tracked defects using bug-tracking tools while collaborating with development teams',
        'Developed automated test scripts using Cypress for web application testing',
        'Ensured software compliance with quality standards and user expectations',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Freelance',
      period: '2024 – 2026',
      type: 'Full-time',
      description: [
        'Developed responsive and scalable web applications using React.js, JavaScript, HTML5, CSS3, Node.js, and backend integration technologies',
        'Built and integrated REST APIs, authentication systems, dashboards, and dynamic frontend features',
        'Collaborated with cross-functional teams to improve UI/UX, application performance, and system functionality',
        'Managed both frontend and backend development workflows, including deployment and database connectivity',
        'Ensured responsive design, clean code practices, and optimized application performance across devices',
      ],
      color: 'from-blue-500 to-purple-500',
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-gray-50 dark:bg-dark"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional journey in software development and quality assurance
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 glass rounded-3xl p-8 card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center`}
                    >
                      <FiBriefcase className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <p className="text-blue-500 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <FiCalendar />
                      <span>{exp.period}</span>
                    </div>
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${exp.color} text-white`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-blue-500 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`w-6 h-6 bg-gradient-to-br ${exp.color} rounded-full border-4 border-white dark:border-gray-900 shadow-lg`}
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-4xl font-bold mb-8 text-center gradient-text">Education</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-3xl p-6 card-hover">
              <div className="text-3xl mb-4">🎓</div>
              <h4 className="text-xl font-bold mb-2">BS Software Engineering</h4>
              <p className="text-blue-500 font-semibold mb-2">Abasyn University, Islamabad</p>
              <p className="text-gray-600 dark:text-gray-400">2021 – 2025</p>
            </div>
            <div className="glass rounded-3xl p-6 card-hover">
              <div className="text-3xl mb-4">📚</div>
              <h4 className="text-xl font-bold mb-2">HSSC – ICS</h4>
              <p className="text-blue-500 font-semibold mb-2">IMCB School & College</p>
              <p className="text-gray-600 dark:text-gray-400">2018 – 2020</p>
            </div>
            <div className="glass rounded-3xl p-6 card-hover">
              <div className="text-3xl mb-4">🏫</div>
              <h4 className="text-xl font-bold mb-2">SSC – Science</h4>
              <p className="text-blue-500 font-semibold mb-2">IMSB School I-10/2</p>
              <p className="text-gray-600 dark:text-gray-400">2016 – 2018</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
