import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Users } from 'lucide-react';

const AboutPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#403E43] to-[#221F26]">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] to-[#33C3F0]/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#33C3F0] to-[#ffffff] drop-shadow-[0_0_15px_rgba(51,195,240,0.6)]">
            About Galaxy ITT
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Your trusted partner for innovative technology solutions in sub-Saharan Africa
          </p>
        </div>
      </div>
      
      {/* Mandate Section */}
      <section id="mandate" className="py-16 px-4 bg-[#F6F6F7]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Our Mandate</h2>
            <div className="w-24 h-1 bg-[#33C3F0] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#33C3F0]">
              <h3 className="text-2xl font-semibold text-[#1A1F2C] mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become a leading provider of broadband connectivity, software solutions and drive digital transformation in sub-Saharan Africa.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#33C3F0]">
              <h3 className="text-2xl font-semibold text-[#1A1F2C] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide reliable internet services, telecommunications, & software solutions to Ministries, Departments, and Agencies (MDAs) and individuals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section id="values" className="py-16 px-4 bg-[#221F26] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#33C3F0] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg text-center group hover:bg-[#33C3F0]/10 transition-all duration-300 border border-white/10">
              <div className="w-16 h-16 rounded-full bg-[#33C3F0]/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-[#33C3F0]/30 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#33C3F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Reliability</h3>
              <p className="text-sm text-gray-300">
                We are committed to delivering dependable services and solutions that our clients can count on, every time.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg text-center group hover:bg-[#33C3F0]/10 transition-all duration-300 border border-white/10">
              <div className="w-16 h-16 rounded-full bg-[#33C3F0]/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-[#33C3F0]/30 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#33C3F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Integrity</h3>
              <p className="text-sm text-gray-300">
                We uphold the highest standards of honesty and ethical conduct in all our business relationships.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg text-center group hover:bg-[#33C3F0]/10 transition-all duration-300 border border-white/10">
              <div className="w-16 h-16 rounded-full bg-[#33C3F0]/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-[#33C3F0]/30 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#33C3F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Confidence</h3>
              <p className="text-sm text-gray-300">
                We build trust through our expertise and proven track record of delivering excellence in every project.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg text-center group hover:bg-[#33C3F0]/10 transition-all duration-300 border border-white/10">
              <div className="w-16 h-16 rounded-full bg-[#33C3F0]/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-[#33C3F0]/30 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#33C3F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Innovation</h3>
              <p className="text-sm text-gray-300">
                We continuously explore and implement cutting-edge solutions to drive digital transformation forward.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Management Section */}
      <section id="management" className="py-16 px-4 bg-[#221F26] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Management Team</h2>
            <div className="w-24 h-1 bg-[#33C3F0] mx-auto"></div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-[#2C3342]/60 p-8 rounded-lg text-center max-w-md">
              <div className="w-32 h-32 rounded-full bg-[#33C3F0]/20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-[#33C3F0]" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Baffajo Beita</h3>
              <p className="text-lg text-[#33C3F0] mb-4">Chief Executive Officer / Managing Director</p>
              <p className="text-sm text-gray-300">
                Leading Galaxy ITT's vision of digital transformation and technological innovation in sub-Saharan Africa.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Board of Directors */}
      <section id="board" className="py-16 px-4 bg-[#F6F6F7]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Board of Directors</h2>
            <div className="w-24 h-1 bg-[#33C3F0] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1A1F2C] mb-2">Executive Director Technical</h3>
              <h4 className="text-lg font-semibold text-[#33C3F0] mb-4">Engr Nura</h4>
              <p className="text-gray-700 leading-relaxed">
                Leads the technical strategy and operations, bringing extensive experience in telecommunications and IT infrastructure development.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1A1F2C] mb-2">Executive Director Business Development</h3>
              <h4 className="text-lg font-semibold text-[#33C3F0] mb-4">Umar Gumel</h4>
              <p className="text-gray-700 leading-relaxed">
                Responsible for business growth strategies and client relationship management with a strong background in business development.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Organigram Section */}
      <section id="organigram" className="py-16 px-4 bg-[#2C3342] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Company Structure</h2>
            <div className="w-24 h-1 bg-[#33C3F0] mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Our organizational structure is designed to deliver maximum value to our clients through specialized departments working in harmony.
            </p>
          </div>
          
          <div className="bg-[#1A1F2C]/60 p-8 rounded-lg overflow-x-auto">
            {/* Level 1 - CEO/MD */}
            <div className="flex flex-col items-center">
              <div className="w-64 py-4 px-6 bg-[#33C3F0] text-center rounded-lg text-white font-medium mb-8 shadow-lg shadow-[#33C3F0]/20">
                MD/CEO
              </div>
              
              {/* Level 2 - Department Heads */}
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-8 bg-[#33C3F0]/50"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 w-full">
                  {/* Admin Department */}
                  <div className="flex flex-col items-center">
                    <div className="w-full py-3 px-4 bg-[#33C3F0]/80 text-center rounded-lg text-white font-medium mb-8">
                      Admin
                    </div>
                    <div className="relative w-full">
                      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-8 bg-[#33C3F0]/50"></div>
                      <div className="grid gap-4">
                        <div className="w-full py-2 px-4 bg-[#33C3F0]/60 text-center rounded-lg text-white text-sm">
                          Chief Security
                        </div>
                        <div className="w-full py-2 px-4 bg-[#33C3F0]/60 text-center rounded-lg text-white text-sm">
                          Cleaner
                        </div>
                        <div className="w-full py-2 px-4 bg-[#33C3F0]/60 text-center rounded-lg text-white text-sm">
                          Driver
                        </div>
                        {/* Security Staff */}
                        <div className="pl-4 grid gap-2">
                          <div className="w-full py-2 px-3 bg-[#33C3F0]/40 text-center rounded-lg text-white text-xs">
                            Security One
                          </div>
                          <div className="w-full py-2 px-3 bg-[#33C3F0]/40 text-center rounded-lg text-white text-xs">
                            Security Two
                          </div>
                          <div className="w-full py-2 px-3 bg-[#33C3F0]/40 text-center rounded-lg text-white text-xs">
                            Security Three
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Network Unit */}
                  <div className="flex flex-col items-center">
                    <div className="w-full py-3 px-4 bg-[#33C3F0]/80 text-center rounded-lg text-white font-medium mb-8">
                      Network Unit
                    </div>
                    <div className="relative w-full">
                      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-8 bg-[#33C3F0]/50"></div>
                      <div className="grid gap-4">
                        <div className="w-full py-2 px-4 bg-[#33C3F0]/60 text-center rounded-lg text-white text-sm">
                          Wireless
                        </div>
                        <div className="w-full py-2 px-4 bg-[#33C3F0]/60 text-center rounded-lg text-white text-sm">
                          Server
                        </div>
                        <div className="w-full py-2 px-4 bg-[#33C3F0]/60 text-center rounded-lg text-white text-sm">
                          Rigger
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Finance */}
                  <div className="flex flex-col items-center">
                    <div className="w-full py-3 px-4 bg-[#33C3F0]/80 text-center rounded-lg text-white font-medium mb-8">
                      Finance
                    </div>
                  </div>

                  {/* Software Unit */}
                  <div className="flex flex-col items-center">
                    <div className="w-full py-3 px-4 bg-[#33C3F0]/80 text-center rounded-lg text-white font-medium mb-8">
                      Software Unit
                    </div>
                    <div className="relative w-full">
                      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-8 bg-[#33C3F0]/50"></div>
                      <div className="grid gap-4">
                        <div className="w-full py-2 px-4 bg-[#33C3F0]/60 text-center rounded-lg text-white text-sm">
                          Software Developer
                        </div>
                        <div className="w-full py-2 px-4 bg-[#33C3F0]/60 text-center rounded-lg text-white text-sm">
                          Mobile App Developer
                        </div>
                        <div className="w-full py-2 px-4 bg-[#33C3F0]/60 text-center rounded-lg text-white text-sm">
                          Frontend Developer
                        </div>
                        <div className="w-full py-2 px-4 bg-[#33C3F0]/60 text-center rounded-lg text-white text-sm">
                          Backend Developer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Careers Section */}
      <section id="careers" className="py-16 px-4 bg-[#F6F6F7]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Careers at Galaxy ITT</h2>
            <div className="w-24 h-1 bg-[#33C3F0] mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Join our team of passionate professionals dedicated to transforming businesses through cutting-edge technology solutions.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-bold text-[#1A1F2C] mb-6">Why Work With Us?</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-[#33C3F0]/20 flex items-center justify-center">
                    <span className="text-[#33C3F0] font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#1A1F2C] mb-2">Professional Growth</h4>
                  <p className="text-gray-600">Continuous learning and development opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-[#33C3F0]/20 flex items-center justify-center">
                    <span className="text-[#33C3F0] font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#1A1F2C] mb-2">Innovation Culture</h4>
                  <p className="text-gray-600">Work on cutting-edge technologies and solutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-[#33C3F0]/20 flex items-center justify-center">
                    <span className="text-[#33C3F0] font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#1A1F2C] mb-2">Impactful Work</h4>
                  <p className="text-gray-600">Make a difference in digital transformation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-[#33C3F0]/20 flex items-center justify-center">
                    <span className="text-[#33C3F0] font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#1A1F2C] mb-2">Collaborative Team</h4>
                  <p className="text-gray-600">Work with talented professionals in a supportive environment</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
