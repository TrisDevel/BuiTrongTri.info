import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const TestimonialCard = ({ content, author, role, company }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <Quote className="h-8 w-8 text-indigo-500 mb-4" />
    <p className="text-gray-600 italic mb-4">{content}</p>
    <div className="border-t pt-4">
      <p className="font-semibold text-gray-900">{author}</p>
      <p className="text-gray-500 text-sm">{role} at {company}</p>
    </div>
  </motion.div>
);

export default function Testimonials() {
  const testimonials = [
    {
      content: "Một trong những developer tài năng nhất mà tôi từng làm việc cùng. Luôn đảm bảo chất lượng và tiến độ dự án.",
      author: "Nguyễn Văn A",
      role: "Project Manager",
      company: "Tech Corp"
    },
    {
      content: "Khả năng giải quyết vấn đề và tư duy logic tuyệt vời. Rất đáng tin cậy và chuyên nghiệp.",
      author: "Trần Thị B",
      role: "Technical Lead",
      company: "Innovation Labs"
    },
    {
      content: "Không chỉ là một developer giỏi mà còn là một teammate tuyệt vời. Luôn sẵn sàng chia sẻ kiến thức với đồng nghiệp.",
      author: "Lê Văn C",
      role: "Senior Developer",
      company: "StartUp X"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Đánh giá từ đồng nghiệp
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Những nhận xét từ người đã từng làm việc cùng
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index}>
              <TestimonialCard {...testimonial} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}