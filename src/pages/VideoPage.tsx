
import React from 'react';
import Header from '@/components/Header';
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
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C3342]">
      <Header />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">Video Resources</h1>
          
          {/* Featured Video */}
          <section className="mb-16">
            <div className="relative overflow-hidden rounded-lg aspect-video bg-black">
              <img 
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title} 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Button className="bg-[#354AA0]/80 hover:bg-[#5971D0] text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
                  <Play className="h-8 w-8" />
                </Button>
                <h2 className="text-white text-2xl md:text-3xl font-bold text-center max-w-2xl">{featuredVideo.title}</h2>
                <p className="text-white/80 mt-2">{featuredVideo.duration}</p>
              </div>
            </div>
          </section>
          
          {/* Video Categories */}
          <section>
            <Tabs defaultValue="products" className="mb-8">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-white/10 backdrop-blur-md border border-white/10">
                  <TabsTrigger value="products" className="text-white data-[state=active]:bg-[#354AA0] data-[state=active]:text-white">
                    Product Videos
                  </TabsTrigger>
                  <TabsTrigger value="tutorials" className="text-white data-[state=active]:bg-[#354AA0] data-[state=active]:text-white">
                    Tutorials
                  </TabsTrigger>
                  <TabsTrigger value="company" className="text-white data-[state=active]:bg-[#354AA0] data-[state=active]:text-white">
                    Company
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="products">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productVideos.map((video, index) => (
                    <VideoCard key={index} video={video} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tutorials">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tutorialVideos.map((video, index) => (
                    <VideoCard key={index} video={video} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="company">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {companyVideos.map((video, index) => (
                    <VideoCard key={index} video={video} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 text-center">
              <Button className="bg-transparent border border-white/20 text-white hover:bg-white/10">
                View All Videos
              </Button>
            </div>
          </section>
          
          {/* Subscribe Section */}
          <section className="mt-16 bg-gradient-to-r from-[#354AA0]/30 to-[#9B87F5]/30 backdrop-blur-md rounded-lg p-8 border border-white/10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">Subscribe to our YouTube channel for the latest videos on technology solutions, tutorials, and company updates.</p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Subscribe to Our Channel
              </Button>
            </div>
          </section>
        </div>
      </div>
      
      <footer className="bg-[#1A1F2C] text-white py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Galaxy ITT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const VideoCard = ({ video }) => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/10 overflow-hidden hover:bg-white/20 transition-colors">
      <div className="relative aspect-video">
        <img 
          src={video.thumbnail}
          alt={video.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Button className="bg-[#354AA0]/80 hover:bg-[#5971D0] text-white rounded-full h-12 w-12 flex items-center justify-center">
            <Play className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-white font-medium mb-1">{video.title}</h3>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{video.views} views</span>
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0">
        <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 hover:text-[#5971D0]">
          <Info className="h-4 w-4 mr-2" />
          Video Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VideoPage;
