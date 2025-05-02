import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Globe, Navigation, Sparkles, CheckCircle, ShieldCheck, Clock, Trophy, Wifi, Network, Server, Cloud, Lock, Users, Mail, Bell, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0, team: 0, networkSpeed: 0 });
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Email validation function
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
      setSubscriptionStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Simulating API call
    setSubscriptionStatus('success');
    setEmail('');
    setTimeout(() => setSubscriptionStatus('idle'), 3000);
  };

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

  useEffect(() => {
    const startCounting = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        
        // Animate years count
        let yearsCount = 0;
        const yearsInterval = setInterval(() => {
          yearsCount++;
          setCounts(prev => ({ ...prev, years: yearsCount }));
          if (yearsCount >= 10) clearInterval(yearsInterval);
        }, 100);

        // Animate projects count
        let projectsCount = 0;
        const projectsInterval = setInterval(() => {
          projectsCount += 5;
          setCounts(prev => ({ ...prev, projects: projectsCount }));
          if (projectsCount >= 200) clearInterval(projectsInterval);
        }, 50);

        // Animate team count
        let teamCount = 0;
        const teamInterval = setInterval(() => {
          teamCount++;
          setCounts(prev => ({ ...prev, team: teamCount }));
          if (teamCount >= 50) clearInterval(teamInterval);
        }, 60);

        // Animate network speed count
        let networkSpeedCount = 0;
        const networkSpeedInterval = setInterval(() => {
          networkSpeedCount++;
          setCounts(prev => ({ ...prev, networkSpeed: networkSpeedCount }));
          if (networkSpeedCount >= 99.99) clearInterval(networkSpeedInterval);
        }, 10);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(startCounting),
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector('#stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#403E43] to-[#221F26]">
      {/* Header */}
      <Header />
      
      {/* Modern Hero Section */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0A0F1E]">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-pink-500/20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F1E]/50 to-[#0A0F1E]"></div>
        </div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-blue-500 via-purple-500 to-pink-500 rounded-full mix-blend-normal opacity-30 animate-slow-spin"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-[128px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-[128px] opacity-30 animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 text-left max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-16"
                   data-aos="fade-down">
                <span className="w-2 h-2 rounded-full bg-[#33C3F0] mr-2 animate-pulse"></span>
                <span className="text-[#33C3F0] text-sm font-medium">Leading Technology Solutions Provider</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight"
                  data-aos="fade-right" data-aos-delay="100">
                <span className="text-white">Innovative</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#33C3F0] via-purple-500 to-pink-500">
                  Digital Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-xl"
                 data-aos="fade-right" data-aos-delay="200">
                Transforming businesses through cutting-edge digital innovation and expert IT consulting. We help organizations navigate the digital landscape.
              </p>
              
              <div className="flex flex-wrap gap-4"
                   data-aos="fade-up" data-aos-delay="300">
                <Button 
                  onClick={scrollToServices}
                  className="bg-[#33C3F0] hover:bg-[#33C3F0]/90 text-white px-8 py-6 text-lg
                    rounded-xl transition-all duration-300 shadow-lg shadow-[#33C3F0]/25
                    hover:shadow-xl hover:shadow-[#33C3F0]/30 hover:scale-[1.02]"
                >
                  Explore Our Services
                </Button>
                <Link to="/contact">
                  <Button 
                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-6 text-lg
                      rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div id="stats-section" className="grid grid-cols-3 gap-8 mt-12" data-aos="fade-up" data-aos-delay="400">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">
                    <span className="tabular-nums">{counts.years}</span>+
                  </div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">
                    <span className="tabular-nums">{counts.projects}</span>+
                  </div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">
                    <span className="tabular-nums">{counts.team}</span>+
                  </div>
                  <div className="text-sm text-gray-400">Expert Team</div>
                </div>
              </div>
            </div>

            {/* Right Content - Single Animation */}
            <div className="flex-1 relative" data-aos="zoom-in" data-aos-delay="200">
              <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                
                {/* Animation container with background matching hero section */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#0A0F1E] to-[#221F26]">
                  {/* Animated background to match hero gradients */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-500/30 to-pink-500/30 mix-blend-overlay animate-pulse"></div>
                  
                  {/* Single animation with enhanced blending */}
                  <img 
                    src="/animations/animation1.gif"
                    alt="Digital Transformation Animation"
                    className="w-full h-full object-contain"
                    style={{ 
                      mixBlendMode: 'plus-lighter',  // More aggressive blend for dark backgrounds
                      filter: 'drop-shadow(0 0 25px rgba(51,195,240,0.7))'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A1F2C]"
              data-aos="fade-up">
            Our Expert Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <ServiceCard 
                icon={<Rocket className="h-8 w-8 text-[#33C3F0]" />}
                title="IT Consulting"
                description="Strategic technology guidance to optimize your business operations and drive innovation."
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <ServiceCard 
                icon={<Globe className="h-8 w-8 text-[#33C3F0]" />}
                title="Cloud Solutions"
                description="Secure, scalable cloud infrastructure and migration services for modern businesses."
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <ServiceCard 
                icon={<Navigation className="h-8 w-8 text-[#33C3F0]" />}
                title="Software Development"
                description="Custom software solutions designed to meet your unique business requirements."
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <ServiceCard 
                icon={<Sparkles className="h-8 w-8 text-[#33C3F0]" />}
                title="Cybersecurity"
                description="Comprehensive security services to protect your valuable data and systems."
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <ServiceCard 
                icon={<Rocket className="h-8 w-8 text-[#33C3F0]" />}
                title="IT Infrastructure"
                description="Robust infrastructure solutions designed for reliability and performance."
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <ServiceCard 
                icon={<Sparkles className="h-8 w-8 text-[#33C3F0]" />}
                title="Network Installations"
                description="Professional wired and wireless network setup and configuration."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Network Visualization Section */}
      <section className="py-16 relative overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Powering Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33C3F0] to-[#9B87F5]">Digital Infrastructure</span>
          </h2>
          
          {/* Technology Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#2A2D3E] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                 data-aos="fade-up"
                 data-aos-delay="100">
              <div className="flex items-center mb-4">
                <Network className="w-8 h-8 text-[#33C3F0] mr-3" />
                <h3 className="text-xl font-semibold text-white">5G Networks</h3>
              </div>
              <p className="text-gray-300">Ultra-fast connectivity solutions with speeds up to 10Gbps and sub-millisecond latency.</p>
            </div>

            <div className="bg-[#2A2D3E] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                 data-aos="fade-up"
                 data-aos-delay="200">
              <div className="flex items-center mb-4">
                <Cloud className="w-8 h-8 text-[#9B87F5] mr-3" />
                <h3 className="text-xl font-semibold text-white">Cloud Integration</h3>
              </div>
              <p className="text-gray-300">Seamless hybrid cloud solutions with 99.99% uptime guarantee and global reach.</p>
            </div>

            <div className="bg-[#2A2D3E] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                 data-aos="fade-up"
                 data-aos-delay="300">
              <div className="flex items-center mb-4">
                <Lock className="w-8 h-8 text-[#33C3F0] mr-3" />
                <h3 className="text-xl font-semibold text-white">Cyber Security</h3>
              </div>
              <p className="text-gray-300">Enterprise-grade security with AI-powered threat detection and real-time monitoring.</p>
            </div>
          </div>

          {/* Live Network Stats */}
          <div className="bg-[#2A2D3E]/50 p-8 rounded-lg backdrop-blur-sm"
               data-aos="fade-up"
               data-aos-delay="400">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#33C3F0] mb-2">
                  <span className="tabular-nums">{counts.networkSpeed || '99.99'}%</span>
                </div>
                <div className="text-sm text-gray-300">Network Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#9B87F5] mb-2">
                  <span className="tabular-nums">10</span> Gbps
                </div>
                <div className="text-sm text-gray-300">Peak Speed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#33C3F0] mb-2">
                  <span className="tabular-nums">50</span>+
                </div>
                <div className="text-sm text-gray-300">Data Centers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#9B87F5] mb-2">
                  <span className="tabular-nums">24/7</span>
                </div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Network Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-1 h-1 bg-[#33C3F0] rounded-full animate-ping" style={{ top: '20%', left: '10%' }}></div>
          <div className="absolute w-1 h-1 bg-[#9B87F5] rounded-full animate-ping" style={{ top: '70%', left: '80%' }}></div>
          <div className="absolute w-1 h-1 bg-[#33C3F0] rounded-full animate-ping" style={{ top: '40%', left: '90%' }}></div>
          <div className="absolute w-1 h-1 bg-[#9B87F5] rounded-full animate-ping" style={{ top: '80%', left: '20%' }}></div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-[#F6F6F7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1A1F2C]"
              data-aos="fade-up">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
             data-aos="fade-up" data-aos-delay="100">
            At Galaxy ITT, we're committed to delivering exceptional value through our technology services.
            Here's why clients trust us with their digital transformation needs:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div data-aos="fade-up" data-aos-delay="200">
              <WhyChooseCard 
                icon={<Trophy className="h-8 w-8 text-[#33C3F0]" />}
                title="Proven Expertise"
                description="Years of experience delivering successful IT solutions across various industries."
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <WhyChooseCard 
                icon={<ShieldCheck className="h-8 w-8 text-[#33C3F0]" />}
                title="Security Focused"
                description="Comprehensive approach to protecting your valuable data and systems."
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <WhyChooseCard 
                icon={<Clock className="h-8 w-8 text-[#33C3F0]" />}
                title="Timely Delivery"
                description="Committed to delivering projects on schedule and within budget."
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <WhyChooseCard 
                icon={<CheckCircle className="h-8 w-8 text-[#33C3F0]" />}
                title="Quality Assurance"
                description="Rigorous testing and quality control for all our solutions."
              />
            </div>
          </div>
          
          <div className="mt-12 text-center"
               data-aos="fade-up" data-aos-delay="600">
            <Link to="/about">
              <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-[#221F26] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
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

            {/* Right Content - Image Carousel */}
            <div className="md:w-1/2" 
                 data-aos="fade-left" 
                 data-aos-duration="1200">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                
                {/* Gradient Border */}
                <div className="absolute inset-0 p-1 bg-gradient-to-br from-[#33C3F0] to-[#9B87F5] rounded-lg">
                  {/* Content Container */}
                  <div className="relative w-full h-full overflow-hidden rounded-lg bg-[#221F26]">
                    {/* Image Carousel */}
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 flex items-center justify-center animate-carousel">
                        <img 
                          src="https://images.unsplash.com/photo-1661956602868-6ae368943878?auto=format&fit=crop&q=80&w=600&h=400"
                          alt="Galaxy ITT Logo" 
                          className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(51,195,240,0.5)]"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center animate-carousel" style={{ animationDelay: '5s' }}>
                        <img 
                          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400"
                          alt="Technology Innovation"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center animate-carousel" style={{ animationDelay: '10s' }}>
                        <img 
                          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400"
                          alt="IT Solutions"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Overlay with company name */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#221F26] via-transparent">
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white text-xl font-semibold mb-2">Galaxy ITT</h3>
                        <p className="text-gray-300 text-sm">Transforming Digital Future</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-[#1A1F2C] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12"
              data-aos="fade-up">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <TestimonialCard 
                quote="Galaxy ITT transformed our business with their cloud solutions. Our operations are now more efficient than ever."
                author="Jane Smith, CEO"
                company="TechCorp"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <TestimonialCard 
                quote="The cybersecurity team at Galaxy ITT helped us prevent what could have been a catastrophic data breach."
                author="Michael Johnson, CTO"
                company="SecureData Inc."
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <TestimonialCard 
                quote="Their software development team delivered a custom solution that perfectly met our requirements and timeline."
                author="Sarah Williams, COO"
                company="Innovation Labs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#221F26] to-[#2A2D3E]">
        <div className="max-w-6xl mx-auto">
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
                    className="w-full px-4 py-3 bg-[#221F26] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33C3F0]"
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
              <h3 className="text-xl font-bold text-white mb-4">Latest Updates</h3>
              
              <div className="bg-[#2A2D3E] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-3">
                  <Bell className="w-6 h-6 text-[#9B87F5] mr-2" />
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

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-[#221F26] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/network-pattern.svg')] opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Infrastructure?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the thousands of businesses that trust Galaxy ITT for their technology and telecommunications needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white px-8 py-3">
                Contact Sales
              </Button>
            </Link>
            <Link to="/services">
              <Button className="bg-transparent border-2 border-[#33C3F0] text-white hover:bg-[#33C3F0]/10 px-8 py-3">
                View Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1A1F2C] to-[#33C3F0]">
        <div className="max-w-4xl mx-auto text-center text-white"
             data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up" data-aos-delay="100">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto"
             data-aos="fade-up" data-aos-delay="200">
            Contact us today to discover how our technology solutions can propel your business forward.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#33C3F0] hover:bg-gray-100 px-8 py-6 text-lg"
                    data-aos="fade-up" data-aos-delay="300">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer - replaced with our new Footer component */}
      <Footer />
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="pt-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const WhyChooseCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
    <div className="mx-auto bg-[#F6F6F7] rounded-full w-16 h-16 flex items-center justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, company }) => (
  <Card className="bg-[#2C3342] border-none">
    <CardContent className="pt-6">
      <p className="text-gray-200 mb-4">"{quote}"</p>
      <p className="font-semibold text-white">{author}</p>
      <p className="text-[#33C3F0]">{company}</p>
    </CardContent>
  </Card>
);

export default Index;
