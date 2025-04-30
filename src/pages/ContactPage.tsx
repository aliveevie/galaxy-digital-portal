import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#403E43] to-[#221F26]">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] to-[#33C3F0]/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#33C3F0] to-[#ffffff] drop-shadow-[0_0_15px_rgba(51,195,240,0.6)]">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Get in touch with our team of experts to discuss how we can help your business
          </p>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Your Name</Label>
                  <Input
                    id="name"
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="Subject of your message"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    className="bg-white/10 border-white/20 text-white min-h-[150px]"
                    placeholder="Your message..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="relative bg-[#33C3F0] hover:bg-[#1EAEDB] text-white w-full py-6 text-lg
                    bg-opacity-70 backdrop-blur-sm rounded-xl
                    before:content-[''] before:absolute before:inset-0 before:bg-[#33C3F0] 
                    before:blur-xl before:opacity-70 before:-z-10 hover:before:opacity-90
                    transition-all duration-500 overflow-hidden shadow-[0_0_25px_rgba(51,195,240,0.6)]
                    after:content-[''] after:absolute after:inset-0 
                    after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent 
                    after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000
                    border border-[#33C3F0]/30"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#33C3F0] mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Address</h3>
                      <p className="text-gray-300">
                        Plot 9 Dutse Industrial Layout,<br />
                        Dutse, Jigawa State<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#33C3F0] mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <p className="text-gray-300">+234 803 960 0006</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#33C3F0] mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <p className="text-gray-300">info@galaxyitt.com.ng</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
