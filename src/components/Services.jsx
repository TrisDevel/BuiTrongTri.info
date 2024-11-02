import React from 'react';
import { Code, Layout, Database, Cloud, Smartphone, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-lg mb-4">
      <Icon className="h-6 w-6 text-indigo-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default function Services() {
  const services = [
    {
      icon: Layout,
      title: "Web Development",
      description: "Thiết kế và phát triển website responsive với công nghệ hiện đại"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Phát triển ứng dụng di động đa nền tảng với React Native"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Xây dựng API và hệ thống backend mạnh mẽ, bảo mật"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Tư vấn và triển khai giải pháp cloud cho doanh nghiệp"
    },
    {
      icon: Code,
      title: "Code Review",
      description: "Đánh giá và tối ưu code theo các best practices"
    },
    {
      icon: Search,
      title: "Technical Consulting",
      description: "Tư vấn giải pháp kỹ thuật và architecture cho dự án"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Dịch vụ
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Các dịch vụ chuyên nghiệp tôi cung cấp
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <ServiceCard {...service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}