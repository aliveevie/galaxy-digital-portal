import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Galaxy ITT transformed our network infrastructure. Our operations are now faster, more secure, and incredibly reliable.",
      author: "Sarah Johnson",
      company: "Nexus Solutions"
    },
    {
      quote: "Their cloud migration services helped us scale efficiently while reducing our IT costs by over 40%. Absolutely impressed with their expertise.",
      author: "Michael Tan",
      company: "Elemental Dynamics"
    },
    {
      quote: "The cybersecurity solutions provided by Galaxy ITT gave us peace of mind. Their team was professional, thorough, and highly knowledgeable.",
      author: "Jennifer Roberts",
      company: "Quantum Finance"
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#1A1F2C] text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Don't just take our word for it. See what our clients have to say about working with Galaxy ITT.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, author, company }) => (
  <Card className="bg-[#2C3342] border-none">
    <CardContent className="pt-6">
      <p className="text-gray-200 mb-4">"{quote}"</p>
      <p className="font-semibold text-white">{author}</p>
      <p className="text-[#33C3F0]">{company}</p>
    </CardContent>
  </Card>
);

export default TestimonialsSection;