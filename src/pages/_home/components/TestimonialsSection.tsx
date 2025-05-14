import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

// Testimonial Card component
const TestimonialCard = ({ quote, author, company }) => (
  <Card className="bg-[#2C3342] border-none">
    <CardContent className="pt-6">
      <p className="text-gray-200 mb-4">"{quote}"</p>
      <p className="font-semibold text-white">{author}</p>
      <p className="text-[#33C3F0]">{company}</p>
    </CardContent>
  </Card>
);

const TestimonialsSection = () => {
  // Testimonial data
  const testimonials = [
    {
      quote: "Galaxy ITT transformed our infrastructure with their fiber solution. Our productivity has increased by 40% since implementation.",
      author: "Michael Chen",
      company: "TechCorp Solutions"
    },
    {
      quote: "Their cybersecurity services detected vulnerabilities we never knew existed. We now feel confident our data is secure.",
      author: "Sarah Johnson",
      company: "HealthFirst Medical"
    },
    {
      quote: "The cloud migration was seamless. Their team worked overnight to ensure zero downtime for our international operations.",
      author: "David Rodriguez",
      company: "Global Logistics Inc."
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#1A1F2C] text-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-[#2C3342] rounded-lg mb-4" data-aos="zoom-in">
            <Trophy className="w-6 h-6 text-[#FFD700]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Don't just take our word for it — hear from some of our satisfied clients and partners across different industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <TestimonialCard 
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <div className="text-4xl font-bold">
              <span className="text-[#33C3F0]">98%</span>
              <span className="text-sm block text-gray-400 font-normal mt-1">Customer Satisfaction</span>
            </div>
            <div className="text-4xl font-bold">
              <span className="text-[#33C3F0]">500+</span>
              <span className="text-sm block text-gray-400 font-normal mt-1">Projects Completed</span>
            </div>
            <div className="text-4xl font-bold">
              <span className="text-[#33C3F0]">24/7</span>
              <span className="text-sm block text-gray-400 font-normal mt-1">Technical Support</span>
            </div>
            <div className="text-4xl font-bold">
              <span className="text-[#33C3F0]">10+</span>
              <span className="text-sm block text-gray-400 font-normal mt-1">Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 