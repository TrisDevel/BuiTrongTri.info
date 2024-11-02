import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const BlogCard = ({ title, excerpt, date, readTime, image }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="relative pb-48">
      <img
        className="absolute h-full w-full object-cover"
        src={image}
        alt={title}
      />
    </div>
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>{readTime} phút đọc</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <motion.a
        href="#"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        Đọc thêm
        <ArrowRight className="ml-2 h-4 w-4" />
      </motion.a>
    </div>
  </motion.div>
);

export default function Blog() {
  const posts = [
    {
      title: "Tối ưu hiệu suất React Application",
      excerpt: "Các kỹ thuật và best practices để cải thiện performance cho ứng dụng React",
      date: "15 Tháng 3, 2024",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Microservices với Node.js",
      excerpt: "Hướng dẫn xây dựng hệ thống microservices sử dụng Node.js và Docker",
      date: "10 Tháng 3, 2024",
      readTime: "7",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Modern CSS Techniques",
      excerpt: "Những kỹ thuật CSS hiện đại giúp code gọn gàng và dễ bảo trì hơn",
      date: "5 Tháng 3, 2024",
      readTime: "4",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Blog
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Chia sẻ kiến thức và kinh nghiệm về lập trình
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <AnimatedSection key={index}>
              <BlogCard {...post} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}