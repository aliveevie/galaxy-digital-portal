import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// Import individual section components
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PartnersSection from './components/PartnersSection';
import ContactCTASection from './components/ContactCTASection';
import NewsletterSection from './components/NewsletterSection';
import SupportChat from './components/SupportChat';
import CoverageSection from './components/CoverageSection';
import CookieConsent from './components/CookieConsent';

const Index = () => {
  // Keep states that need to be shared across components
  const [showChatButton, setShowChatButton] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<'pending' | 'accepted' | 'rejected'>(
    localStorage.getItem('cookieConsent') as 'accepted' | 'rejected' | null || 'pending'
  );
  
  // Add scroll event listener for the chat button
  useEffect(() => {
    const handleScroll = () => {
      setShowChatButton(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle cookie consent
  const handleCookieConsent = (consent: 'accepted' | 'rejected') => {
    setCookieConsent(consent);
    localStorage.setItem('cookieConsent', consent);
  };
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
    });

    window.addEventListener('load', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('load', () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <AboutSection />
      <CoverageSection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactCTASection />
      <NewsletterSection />
      <Footer />
      
      {/* Cookie Consent */}
      <CookieConsent 
        cookieConsent={cookieConsent}
        onCookieConsent={handleCookieConsent}
      />
      
      {/* Support Chat Button */}
      <SupportChat 
        showChatButton={showChatButton}
        isChatOpen={isChatOpen}
        setIsChatOpen={setIsChatOpen}
      />
    </div>
  );
};

export default Index;