import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle, Bell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      setSubscriptionStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }
    
    // Here you would typically call an API to handle the subscription
    // For now, we'll simulate success
    setSubscriptionStatus('success');
    setEmail('');
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubscriptionStatus('idle');
    }, 5000);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#221F26] to-[#2A2D3E]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Newsletter Subscription */}
          <div className="bg-[#2A2D3E]/50 p-8 rounded-lg backdrop-blur-sm" data-aos="fade-right">
            <div className="flex items-center mb-6">
              <Mail className="w-8 h-8 text-[#33C3F0] mr-3" />
              <h2 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h2>
            </div>
            <p className="text-gray-300 mb-6">Stay updated with the latest in technology and telecommunications.</p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-[#221F26] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33C3F0]"
                />
                <Button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#33C3F0] hover:bg-[#1EAEDB] text-white px-4 py-2 rounded-md"
                >
                  Subscribe
                </Button>
              </div>
              {subscriptionStatus === 'success' && (
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}
              {subscriptionStatus === 'error' && (
                <div className="flex items-center text-red-400">
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          </div>

          {/* Updates Preview */}
          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-white mb-6">Latest Updates</h2>
            
            <div className="bg-[#2A2D3E] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-3">
                <Bell className="w-6 h-6 text-[#33C3F0] mr-2" />
                <span className="text-sm text-gray-400">Technology Update</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Next-Gen Network Infrastructure</h4>
              <p className="text-gray-300 text-sm">Discover how our latest network upgrades are revolutionizing connectivity.</p>
              <Link to="/news" className="flex items-center mt-4 text-[#33C3F0] hover:text-[#1EAEDB]">
                Read More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-[#2A2D3E] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-3">
                <Bell className="w-6 h-6 text-[#9B87F5] mr-2" />
                <span className="text-sm text-gray-400">Industry News</span>
              </div>
              <h4 className="text-white font-semibold mb-2">5G Evolution and Beyond</h4>
              <p className="text-gray-300 text-sm">Explore the future of telecommunications with our expert insights.</p>
              <Link to="/news" className="flex items-center mt-4 text-[#33C3F0] hover:text-[#1EAEDB]">
                Read More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection; 