import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const ProjectCard = ({ title, description, image, github, demo }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    whileHover={{ y: -10 }}
    transition={{ duration: 0.2 }}
  >
    <div className="relative pb-48">
      <motion.img
        className="absolute h-full w-full object-cover"
        src={image}
        alt={title}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-500">{description}</p>
      <div className="mt-4 flex space-x-4">
        <motion.a
          href={github}
          className="flex items-center text-gray-600 hover:text-gray-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="h-5 w-5 mr-2" />
          Code
        </motion.a>
        <motion.a
          href={demo}
          className="flex items-center text-gray-600 hover:text-gray-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink className="h-5 w-5 mr-2" />
          Demo
        </motion.a>
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A full-stack web application built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Project 2',
      description: 'Mobile-first e-commerce platform with real-time updates',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Project 3',
      description: 'Modern blog platform with CMS integration',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Projects</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Check out some of my recent work
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedSection key={index}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}