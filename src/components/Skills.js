import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiCypress,
  SiExpress,
  SiScikitlearn,
  SiTensorflow,
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <FaJs />, level: 85 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88 },
      ],
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
        { name: 'Express.js', icon: <SiExpress />, level: 75 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 78 },
        { name: 'Firebase', icon: <SiFirebase />, level: 82 },
      ],
    },
    {
      title: 'QA & Testing',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Manual Testing', icon: <FaGitAlt />, level: 90 },
        { name: 'Cypress', icon: <SiCypress />, level: 85 },
        { name: 'Test Case Design', icon: <FaGitAlt />, level: 88 },
        { name: 'UI Testing', icon: <FaGitAlt />, level: 87 },
      ],
    },
    {
      title: 'AI & Machine Learning',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 85 },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 80 },
        { name: 'Deep Learning', icon: <SiTensorflow />, level: 78 },
        { name: 'AI Chatbots', icon: <FaPython />, level: 75 },
      ],
    },
    {
      title: 'Tools & Platforms',
      color: 'from-gray-500 to-slate-600',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'GitHub', icon: <FaGithub />, level: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
          <h2 className="text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive set of technical skills across frontend, backend, testing, and AI/ML domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass rounded-3xl p-8 card-hover"
            >
              <div
                className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold mb-6`}
              >
                {category.title}
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl text-blue-500">
                          {skill.icon}
                        </span>
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
