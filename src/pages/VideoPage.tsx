import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VideoPage = () => {
  const featuredVideo = {
    title: "Galaxy ITT: Digital Transformation Solutions",
    duration: "6:42",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=450"
  };
  
  const productVideos = [
    {
      title: "Cloud Solutions Overview",
      duration: "4:18",
      thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400&h=225",
      views: "2.4K"
    },
    {
      title: "Network Installation Process",
      duration: "7:55",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400&h=225",
      views: "1.8K"
    },
    {
      title: "Cybersecurity Best Practices",
      duration: "5:23",
      thumbnail: "https://images.unsplash.com/photo-1510511233900-1982d92bd835?auto=format&fit=crop&q=80&w=400&h=225",
      views: "3.2K"
    },
  ];
  
  const tutorialVideos = [
    {
      title: "Setting Up Your Cloud Dashboard",
      duration: "8:14",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=225",
      views: "4.7K"
    },
    {
      title: "Network Troubleshooting Guide",
      duration: "12:39",
      thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400&h=225",
      views: "3.5K"
    },
    {
      title: "Software Integration Tutorial",
      duration: "6:07",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400&h=225",
      views: "2.1K"
    },
  ];

  const companyVideos = [
    {
      title: "About Galaxy ITT",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400&h=225",
      views: "5.3K"
    },
    {
      title: "Meet Our Team",
      duration: "4:52",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=225",
      views: "2.8K"
    },
    {
      title: "Client Success Stories",
      duration: "7:18",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400&h=225",
      views: "3.9K"
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
            Video Resources
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Explore our collection of product demos, tutorials, and company videos
          </p>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Featured Video */}
          <section className="mb-16">
            <div className="relative overflow-hidden rounded-lg aspect-video bg-black/30 backdrop-blur-md border border-white/10">
              <img 
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title} 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Button 
                  className="relative bg-[#33C3F0] hover:bg-[#1EAEDB] text-white rounded-full h-16 w-16
                    bg-opacity-70 backdrop-blur-sm
                    before:content-[''] before:absolute before:inset-0 before:bg-[#33C3F0] 
                    before:blur-xl before:opacity-70 before:-z-10 hover:before:opacity-90
                    transition-all duration-500 overflow-hidden shadow-[0_0_25px_rgba(51,195,240,0.6)]
                    flex items-center justify-center mb-4"
                >
                  <Play className="h-8 w-8" />
                </Button>
                <h2 className="text-white text-2xl md:text-3xl font-bold text-center max-w-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                  {featuredVideo.title}
                </h2>
                <p className="text-white/80 mt-2">{featuredVideo.duration}</p>
              </div>
            </div>
          </section>
          
          {/* Video Categories */}
          <Tabs defaultValue="products" className="space-y-8">
            <TabsList className="bg-black/30 border border-white/10 p-1">
              <TabsTrigger 
                value="products" 
                className="data-[state=active]:bg-[#33C3F0] data-[state=active]:text-white"
              >
                Product Videos
              </TabsTrigger>
              <TabsTrigger 
                value="tutorials"
                className="data-[state=active]:bg-[#33C3F0] data-[state=active]:text-white"
              >
                Tutorials
              </TabsTrigger>
              <TabsTrigger 
                value="company"
                className="data-[state=active]:bg-[#33C3F0] data-[state=active]:text-white"
              >
                Company
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="products" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productVideos.map((video, index) => (
                  <VideoCard key={index} video={video} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tutorials" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorialVideos.map((video, index) => (
                  <VideoCard key={index} video={video} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="company" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companyVideos.map((video, index) => (
                  <VideoCard key={index} video={video} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const VideoCard = ({ video }) => (
  <Card className="bg-black/30 backdrop-blur-md border border-white/10 overflow-hidden hover:shadow-[0_0_25px_rgba(51,195,240,0.3)] transition-all duration-300">
    <CardContent className="p-0">
      <div className="relative aspect-video">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button 
            className="relative bg-[#33C3F0] hover:bg-[#1EAEDB] text-white rounded-full h-12 w-12
              bg-opacity-70 backdrop-blur-sm
              before:content-[''] before:absolute before:inset-0 before:bg-[#33C3F0] 
              before:blur-xl before:opacity-70 before:-z-10 hover:before:opacity-90
              transition-all duration-500 overflow-hidden shadow-[0_0_25px_rgba(51,195,240,0.6)]
              flex items-center justify-center"
          >
            <Play className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </CardContent>
    <CardFooter className="p-4">
      <div className="space-y-2 flex-1">
        <h3 className="text-white font-medium">{video.title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{video.duration}</span>
          <span>{video.views} views</span>
        </div>
      </div>
    </CardFooter>
  </Card>
);

export default VideoPage;
