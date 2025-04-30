import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
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
      
      <HeroSection 
        title="News"
        description="Latest company news and updates"
        showLogo={false}
        showButton={false}
      />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">Latest News</h1>
          
          {/* Featured News */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-[#354AA0]/30 to-[#9B87F5]/30 backdrop-blur-md border-white/10 overflow-hidden">
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
                    <span className="bg-[#354AA0] text-white text-xs px-3 py-1 rounded-full">Featured</span>
                    <span className="text-gray-300 text-sm ml-3">{featuredNews.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{featuredNews.title}</h2>
                  <p className="text-gray-200 mb-6">{featuredNews.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredNews.tags.map((tag, index) => (
                      <span key={index} className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button className="bg-[#354AA0] hover:bg-[#5971D0] text-white">
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
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/10 hover:bg-white/20 transition-colors">
                <CardContent className="p-6">
                  <p className="text-[#5971D0] text-sm mb-2">{news.date}</p>
                  <h3 className="text-white text-xl font-medium mb-3">{news.title}</h3>
                  <p className="text-gray-300 mb-4">{news.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {news.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white/10 text-white text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="ghost" className="text-white hover:text-[#5971D0] p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-transparent border border-white/20 text-white hover:bg-white/10">
              Load More News
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsPage;
