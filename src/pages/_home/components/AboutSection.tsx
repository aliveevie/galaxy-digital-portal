import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-[#1A1F2C] text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2" 
               data-aos="fade-right" 
               data-aos-duration="1200">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white"
                data-aos="fade-right"
                data-aos-delay="100">
              About Galaxy ITT
            </h2>
            <p className="text-lg mb-4 text-gray-300"
               data-aos="fade-right"
               data-aos-delay="200">
              Galaxy ITT is a premier provider of innovative technology solutions, dedicated to helping businesses navigate the digital universe.
            </p>
            <p className="text-lg mb-6 text-gray-300"
               data-aos="fade-right"
               data-aos-delay="300">
              With decades of combined experience, our team of experts delivers customized solutions that drive efficiency, security, and growth.
            </p>
            <Link to="/about">
              <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white"
                      data-aos="fade-right"
                      data-aos-delay="400">
                Learn More About Us
              </Button>
            </Link>
          </div>

          {/* Image Carousel would go here */}
          <div className="md:w-1/2" data-aos="fade-left" data-aos-duration="1200">
            {/* Image carousel content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 