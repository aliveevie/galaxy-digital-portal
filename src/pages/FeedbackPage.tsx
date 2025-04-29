
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import GalaxyAnimation from '@/components/GalaxyAnimation';

interface FeedbackFormData {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  rating: string;
  feedback: string;
}

const FeedbackPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FeedbackFormData>();
  
  const onSubmit = (data: FeedbackFormData) => {
    setIsSubmitting(true);
    console.log("Feedback submitted:", data);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for your feedback!",
        description: "We appreciate you taking the time to share your thoughts with us.",
      });
      reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C3342] pb-16">
      {/* Background animation */}
      <div className="fixed inset-0 z-0">
        <GalaxyAnimation />
      </div>
      
      <Header />
      
      <div className="relative z-10 pt-32 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#33C3F0] to-[#ffffff] drop-shadow-[0_0_15px_rgba(30,174,219,0.6)]">
              Share Your Feedback
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Your insights help us improve our services and deliver better solutions
            </p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-lg shadow-lg shadow-blue-500/10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input
                      id="name"
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="Your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="Your email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">Company</Label>
                  <Input
                    id="company"
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="Your company"
                    {...register("company", { required: "Company is required" })}
                  />
                  {errors.company && <p className="text-red-400 text-sm">{errors.company.message}</p>}
                </div>
              </div>
              
              {/* Feedback Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Your Feedback</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="service-type" className="text-white">Service Type</Label>
                    <Select onValueChange={(value) => setValue("serviceType", value)}>
                      <SelectTrigger id="service-type" className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1F2C] text-white border-white/20">
                        <SelectItem value="it-consulting">IT Consulting</SelectItem>
                        <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                        <SelectItem value="software-development">Software Development</SelectItem>
                        <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                        <SelectItem value="it-infrastructure">IT Infrastructure</SelectItem>
                        <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.serviceType && <p className="text-red-400 text-sm">{errors.serviceType.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="rating" className="text-white">Rating</Label>
                    <Select onValueChange={(value) => setValue("rating", value)}>
                      <SelectTrigger id="rating" className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select a rating" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1F2C] text-white border-white/20">
                        <SelectItem value="5">Excellent (5)</SelectItem>
                        <SelectItem value="4">Very Good (4)</SelectItem>
                        <SelectItem value="3">Good (3)</SelectItem>
                        <SelectItem value="2">Fair (2)</SelectItem>
                        <SelectItem value="1">Poor (1)</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.rating && <p className="text-red-400 text-sm">{errors.rating.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="feedback" className="text-white">Detailed Feedback</Label>
                  <Textarea
                    id="feedback"
                    className="bg-white/10 border-white/20 text-white min-h-[150px]"
                    placeholder="Please share your thoughts about our services..."
                    {...register("feedback", { required: "Feedback is required" })}
                  />
                  {errors.feedback && <p className="text-red-400 text-sm">{errors.feedback.message}</p>}
                </div>
              </div>
              
              <div className="pt-4 text-center">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="relative bg-[#1EAEDB] hover:bg-[#33C3F0] text-white px-8 py-6 text-lg
                  bg-opacity-70 backdrop-blur-sm rounded-xl
                  before:content-[''] before:absolute before:inset-0 before:bg-[#1EAEDB] 
                  before:blur-xl before:opacity-70 before:-z-10 hover:before:opacity-90
                  transition-all duration-500 overflow-hidden shadow-[0_0_25px_rgba(30,174,219,0.6)]
                  after:content-[''] after:absolute after:inset-0 
                  after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent 
                  after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000
                  border border-[#33C3F0]/30 min-w-[200px]"
                >
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
