
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#403E43] to-[#221F26]">
      <Header />
      
      <HeroSection 
        title="Page Not Found"
        description="The page you are looking for does not exist."
        showLogo={false}
        showButton={false}
      />
      
      <div className="py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <Button asChild className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
