import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Al-Khair Electronics',
      description: 'Modern responsive electronics e-commerce platform with product listings, category browsing, shopping cart, and mobile-friendly design.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      tags: ['React.js', 'E-Commerce', 'Responsive'],
      category: 'Web',
      liveUrl: 'https://al-khair-electronics.up.railway.app',
      githubUrl: 'https://github.com/Asfii018',
    },
    {
      title: 'ATB Solutions',
      description: 'Professional business website with modern UI/UX, service showcases, and contact integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['React.js', 'Business', 'UI/UX'],
      category: 'Web',
      liveUrl: 'https://atbsolutions.co.uk',
      githubUrl: 'https://github.com/Asfii018',
    },
    {
      title: 'Al-Kawish Construction',
      description: 'Construction company website featuring project portfolios, services, and client testimonials.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
      tags: ['React.js', 'Construction', 'Portfolio'],
      category: 'Web',
      liveUrl: 'https://al-kawishconstruction.com',
      githubUrl: 'https://github.com/Asfii018',
    },
    {
      title: 'E-Learning Platform',
      description: 'Modular educational platform with authentication, course management, progress tracking, and interactive learning features.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      tags: ['React.js', 'Education', 'Authentication'],
      category: 'Web',
      liveUrl: '#',
      githubUrl: 'https://github.com/Asfii018/E-learning-platform',
    },
    {
      title: 'E-Commerce Website',
      description: 'Full-featured online store with product listings, shopping cart functionality, and checkout workflows.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['React.js', 'E-Commerce', 'Cart'],
      category: 'Web',
      liveUrl: '#',
      githubUrl: 'https://github.com/Asfii018/Ecommerce-website',
    },
    {
      title: 'Kidney Cancer Detection',
      description: 'Deep learning system using YOLOv8n to detect kidney cancer from CT scans with high accuracy and volume prediction.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      tags: ['Python', 'Deep Learning', 'YOLOv8'],
      category: 'AI/ML',
      liveUrl: '#',
      githubUrl: 'https://github.com/Asfii018',
    },
    {
      title: 'Chest X-Ray Pathology Detection',
      description: 'CNN-based model for automatic disease detection from chest X-ray images, supporting early clinical diagnosis.',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
      tags: ['Python', 'CNN', 'Medical AI'],
      category: 'AI/ML',
      liveUrl: '#',
      githubUrl: 'https://github.com/Asfii018',
    },
    {
      title: 'AI Chatbot',
      description: 'Intelligent chatbot using intent classification and automated response generation for natural conversations.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
      tags: ['Python', 'NLP', 'Machine Learning'],
      category: 'AI/ML',
      liveUrl: '#',
      githubUrl: 'https://github.com/Asfii018',
    },
  ];

  const categories = ['All', 'Web', 'AI/ML'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
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
          <h2 className="text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my best work in web development and AI/ML
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12 flex-wrap"
        >
          <FiFilter className="text-2xl text-blue-500" />
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'glass hover:bg-blue-500/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden card-hover group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-500 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveUrl !== '#' && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink />
                      Live Demo
                    </motion.a>
                  )}
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 glass hover:bg-blue-500/10 rounded-xl font-semibold transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
