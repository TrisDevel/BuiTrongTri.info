import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const ContactInfo = ({ icon: Icon, title, content }) => (
  <motion.div 
    className="flex items-center"
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    <Icon className="h-6 w-6 text-indigo-600" />
    <div className="ml-4">
      <h4 className="text-lg font-medium text-gray-900">{title}</h4>
      <p className="mt-1 text-gray-500">{content}</p>
    </div>
  </motion.div>
);

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-xl text-gray-500">
              I'm always open to new opportunities and collaborations
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <AnimatedSection className="bg-gray-50 rounded-lg p-8">
              <div className="space-y-6">
                <ContactInfo 
                  icon={Mail}
                  title="Email"
                  content="your.email@example.com"
                />
                <ContactInfo 
                  icon={Phone}
                  title="Phone"
                  content="+1 (555) 123-4567"
                />
                <ContactInfo 
                  icon={MapPin}
                  title="Location"
                  content="San Francisco, CA"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection className="bg-gray-50 rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </motion.button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}