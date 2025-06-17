import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PhoneForwarded, Mail } from 'lucide-react';

const ContactCTASection = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#33C3F0]/90 to-[#9B87F5]/90"></div>
        <div className="absolute inset-0 opacity-10">
          {/* Grid pattern for background */}
          <div className="h-full w-full" style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
            Ready to Transform Your Digital Infrastructure?
          </h2>
          <p className="text-xl text-white/80 mb-8" data-aos="fade-up" data-aos-delay="100">
            Contact our expert team today for a free consultation and discover how Galaxy ITT can elevate your business with cutting-edge technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact">
              <Button className="bg-white text-[#33C3F0] hover:bg-white/90 px-8 py-6 rounded-lg text-lg flex items-center gap-2">
                <PhoneForwarded className="w-5 h-5" />
                Contact Us
              </Button>
            </Link>
            <a href="mailto:info@galaxyitt.com">
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 rounded-lg text-lg flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Us
              </Button>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p className="text-white/80">Customer Support</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">15 Min</h3>
              <p className="text-white/80">Response Time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">99.9%</h3>
              <p className="text-white/80">Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection; 