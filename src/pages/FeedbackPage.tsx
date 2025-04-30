import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const FeedbackPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#403E43] to-[#221F26]">
      <Header />
      
      <HeroSection 
        title="Feedback"
        description="Share your thoughts and help us improve"
        showLogo={false}
        showButton={false}
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A1F2C]">
            We Value Your Feedback
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Your feedback is important to us. Please let us know your thoughts about our services.
          </p>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required></textarea>
            </div>
            <button type="submit" className="w-full bg-[#33C3F0] hover:bg-[#1EAEDB] text-white py-2 rounded-md">Submit Feedback</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeedbackPage;
