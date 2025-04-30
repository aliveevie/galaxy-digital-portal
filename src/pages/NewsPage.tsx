import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const NewsPage = () => {
  const featuredNews = {
    title: "Galaxy ITT Launches New Digital Transformation Initiative for Public Sector",
    date: "April 25, 2025",
    image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?auto=format&fit=crop&q=80&w=600&h=400",
    excerpt: "Galaxy ITT has announced a comprehensive digital transformation initiative aimed at helping public sector organizations modernize their operations and improve service delivery. The program includes customized technology solutions, training, and ongoing support to ensure successful implementation.",
    tags: ["Digital Transformation", "Public Sector", "Innovation"]
  };

  const newsItems = [
    {
      title: "Galaxy ITT Awarded Major Contract for Network Infrastructure Upgrade",
      date: "April 10, 2025",
      excerpt: "The project will enhance connectivity for over 50 government facilities in the state...",
      tags: ["Infrastructure", "Government", "Networking"]
    },
    {
      title: "New Cloud Services Platform Launched for SMEs",
      date: "March 28, 2025",
      excerpt: "Galaxy ITT's new cloud platform provides affordable, scalable solutions for small and medium enterprises...",
      tags: ["Cloud Services", "SME", "Business Solutions"]
    },
    {
      title: "Galaxy ITT Hosts Technology Workshop for Education Sector",
      date: "March 15, 2025",
      excerpt: "The workshop focused on leveraging technology to enhance teaching and learning outcomes...",
      tags: ["Education", "Workshop", "Technology"]
    },
    {
      title: "Cybersecurity Partnership Announcement with International Security Firm",
      date: "February 22, 2025",
      excerpt: "The partnership will bring world-class security solutions to organizations across Nigeria...",
      tags: ["Cybersecurity", "Partnership", "Security"]
    },
    {
      title: "Galaxy ITT Expands Team with Key Technical Hires",
      date: "February 8, 2025",
      excerpt: "New team members bring expertise in cloud architecture, AI, and cybersecurity...",
      tags: ["Company News", "Hiring", "Growth"]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#403E43] to-[#221F26]">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] to-[#33C3F0]/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#33C3F0] to-[#ffffff] drop-shadow-[0_0_15px_rgba(51,195,240,0.6)]">
            Latest News
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Stay updated with Galaxy ITT's latest announcements and achievements
          </p>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Featured News */}
          <div className="mb-16">
            <Card className="bg-black/30 backdrop-blur-md border border-white/10 overflow-hidden hover:shadow-[0_0_25px_rgba(51,195,240,0.3)] transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img 
                    src={featuredNews.image}
                    alt="Featured news" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#33C3F0] text-white text-xs px-3 py-1 rounded-full">Featured</span>
                    <span className="text-gray-300 text-sm ml-3">{featuredNews.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                    {featuredNews.title}
                  </h2>
                  <p className="text-gray-200 mb-6">{featuredNews.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredNews.tags.map((tag, index) => (
                      <span key={index} className="bg-[#33C3F0]/20 text-[#33C3F0] text-xs px-3 py-1 rounded-full border border-[#33C3F0]/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    className="relative bg-[#33C3F0] hover:bg-[#1EAEDB] text-white px-6 py-5
                      bg-opacity-70 backdrop-blur-sm rounded-xl
                      before:content-[''] before:absolute before:inset-0 before:bg-[#33C3F0] 
                      before:blur-xl before:opacity-70 before:-z-10 hover:before:opacity-90
                      transition-all duration-500 overflow-hidden shadow-[0_0_25px_rgba(51,195,240,0.6)]
                      after:content-[''] after:absolute after:inset-0 
                      after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent 
                      after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000
                      border border-[#33C3F0]/30"
                  >
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          {/* News List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((news, index) => (
              <Card key={index} className="bg-black/30 backdrop-blur-md border border-white/10 overflow-hidden hover:shadow-[0_0_25px_rgba(51,195,240,0.3)] transition-all duration-300">
                <CardContent className="p-6">
                  <p className="text-[#33C3F0] text-sm mb-2">{news.date}</p>
                  <h3 className="text-white text-xl font-medium mb-3">{news.title}</h3>
                  <p className="text-gray-300 mb-4">{news.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {news.tags.map((tag, idx) => (
                      <span key={idx} className="bg-[#33C3F0]/20 text-[#33C3F0] text-xs px-3 py-1 rounded-full border border-[#33C3F0]/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-[#33C3F0]/30 text-white hover:bg-[#33C3F0]/10 hover:text-[#33C3F0] transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsPage;
