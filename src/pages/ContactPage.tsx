
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import GalaxyAnimation from '@/components/GalaxyAnimation';
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
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C3342] pb-16">
      {/* Background animation */}
      <div className="fixed inset-0 z-0">
        <GalaxyAnimation />
      </div>
      
      <Header />
      
      <div className="relative z-10 pt-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#33C3F0] to-[#ffffff] drop-shadow-[0_0_15px_rgba(30,174,219,0.6)]">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Get in touch with our team of experts to discuss how we can help your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
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
                  className="relative bg-[#1EAEDB] hover:bg-[#33C3F0] text-white w-full py-6 text-lg
                  bg-opacity-70 backdrop-blur-sm rounded-xl
                  before:content-[''] before:absolute before:inset-0 before:bg-[#1EAEDB] 
                  before:blur-xl before:opacity-70 before:-z-10 hover:before:opacity-90
                  transition-all duration-500 overflow-hidden shadow-[0_0_25px_rgba(30,174,219,0.6)]
                  after:content-[''] after:absolute after:inset-0 
                  after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent 
                  after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000
                  border border-[#33C3F0]/30"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="space-y-6">
              <div className="bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-[#33C3F0] mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-white">Location</h3>
                      <p className="text-gray-300">
                        123 Tech Avenue<br />
                        Innovation City, IC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#33C3F0] mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="text-gray-300">contact@galaxyitt.com</p>
                      <p className="text-gray-300">support@galaxyitt.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#33C3F0] mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-white">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-300">+1 (555) 987-6543</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Office Hours</h2>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-300">Monday - Friday:</p>
                    <p className="text-white">9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-300">Saturday:</p>
                    <p className="text-white">10:00 AM - 4:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-300">Sunday:</p>
                    <p className="text-white">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
