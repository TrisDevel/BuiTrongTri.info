import React from 'react';
import { Code, Globe, Server, BookOpen, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const SkillCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="pt-6"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
      <div className="-mt-6">
        <div>
          <motion.span 
            className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className="h-6 w-6 text-white" />
          </motion.span>
        </div>
        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{title}</h3>
        <p className="mt-5 text-base text-gray-500">{description}</p>
      </div>
    </div>
  </motion.div>
);

const TimelineItem = ({ year, title, subtitle, description }) => (
  <div className="relative pl-8 pb-8">
    <div className="absolute left-0 top-0 mt-1 -ml-1.5 h-3 w-3 rounded-full border-2 border-indigo-500 bg-white" />
    <div className="absolute left-0 top-0 mt-2 h-full w-[1px] bg-gray-200" />
    <div className="group relative flex flex-col items-start">
      <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{year}</span>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm font-medium text-gray-500">{subtitle}</p>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </div>
);

export default function About() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Chuyên sâu về React, TypeScript và các framework CSS hiện đại"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Thành thạo Node.js, Express và quản lý cơ sở dữ liệu"
    },
    {
      icon: Globe,
      title: "Web Performance",
      description: "Tối ưu hóa hiệu suất và trải nghiệm người dùng"
    }
  ];

  const education = [
    {
      year: "2018 - 2022",
      title: "Đại học Bách Khoa Hà Nội",
      subtitle: "Kỹ sư Công nghệ Thông tin",
      description: "Tốt nghiệp loại Giỏi, GPA: 3.8/4.0"
    },
    {
      year: "2022",
      title: "Chứng chỉ AWS Solutions Architect",
      subtitle: "Amazon Web Services",
      description: "Chứng nhận kiến trúc cloud chuyên nghiệp"
    }
  ];

  const experience = [
    {
      year: "2022 - Hiện tại",
      title: "Senior Frontend Developer",
      subtitle: "Tech Company X",
      description: "Phát triển và tối ưu hóa các ứng dụng web quy mô lớn"
    },
    {
      year: "2020 - 2022",
      title: "Full Stack Developer",
      subtitle: "Startup Y",
      description: "Xây dựng MVP và phát triển sản phẩm từ đầu đến cuối"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Về Tôi</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Một lập trình viên đam mê công nghệ với hơn 3 năm kinh nghiệm trong phát triển web
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">Học vấn</h3>
              </div>
              {education.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">Kinh nghiệm làm việc</h3>
              </div>
              {experience.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-16">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Kỹ năng chính</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}