import React, { useState } from 'react';
import { MapPin, Info } from 'lucide-react';

interface CoverageLocation {
  id: string;
  name: string;
  description: string;
  coordinates: { x: number; y: number };
  isPrimary?: boolean;
}

const CoverageSection = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  
  // Coverage locations data
  const coverageLocations: CoverageLocation[] = [
    {
      id: 'nigeria',
      name: 'Nigeria',
      description: 'Galaxy\'s primary operations hub in West Africa, providing enterprise-grade connectivity solutions across the country.',
      coordinates: { x: 47.5, y: 48 },
      isPrimary: true
    },
    {
      id: 'jigawa',
      name: 'Jigawa',
      description: 'Regional service center with dedicated infrastructure supporting northern Nigeria businesses and communities.',
      coordinates: { x: 48.2, y: 45.5 }
    }
  ];
  
  const handleLocationHover = (locationId: string | null) => {
    setActiveLocation(locationId);
  };

  return (
    <section id="coverage-section" className="py-16 px-4 bg-gradient-to-b from-[#0a1128] to-[#001f54] text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Coverage</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Galaxy provides comprehensive connectivity solutions across Africa, with a strong presence in Nigeria and specialized infrastructure in key regions.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Map Container */}
          <div className="relative w-full lg:w-2/3 h-[500px] bg-[#0a1128]/30 rounded-xl p-4 backdrop-blur-sm border border-white/10"
               data-aos="fade-right" 
               data-aos-duration="1000">
            {/* Africa Map SVG */}
            <div className="relative w-full h-full">
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Africa outline - simplified path */}
                <path 
                  d="M35,10 C32,12 30,15 28,18 C26,21 25,25 23,28 C21,31 18,33 17,37 C16,41 15,45 15,49 C15,53 16,57 18,60 C20,63 23,65 25,68 C27,71 28,75 30,78 C32,81 35,83 38,85 C41,87 45,88 48,90 C51,92 54,94 58,95 C62,96 66,96 70,95 C74,94 77,92 80,90 C83,88 85,85 87,82 C89,79 90,75 91,72 C92,69 92,65 92,62 C92,59 91,56 90,53 C89,50 87,48 85,45 C83,42 80,40 78,37 C76,34 75,30 73,27 C71,24 68,22 65,20 C62,18 58,17 55,15 C52,13 49,11 45,10 C41,9 37,9 35,10 Z" 
                  fill="#1A1F2C" 
                  stroke="#33C3F0" 
                  strokeWidth="0.5"
                  className="transition-all duration-300 hover:fill-[#1A1F2C]/70"
                />
                
                {/* Coverage Location Dots */}
                {coverageLocations.map((location) => (
                  <g 
                    key={location.id}
                    onMouseEnter={() => handleLocationHover(location.id)}
                    onMouseLeave={() => handleLocationHover(null)}
                    className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
                  >
                    {/* Ping Animation Circle */}
                    <circle
                      cx={location.coordinates.x}
                      cy={location.coordinates.y}
                      r={location.isPrimary ? 2.5 : 1.8}
                      fill="transparent"
                      stroke={location.isPrimary ? "#33C3F0" : "#4ADE80"}
                      strokeWidth="0.3"
                      className="animate-ping opacity-75"
                    />
                    
                    {/* Main Location Dot */}
                    <circle
                      cx={location.coordinates.x}
                      cy={location.coordinates.y}
                      r={location.isPrimary ? 1.8 : 1.2}
                      fill={location.isPrimary ? "#33C3F0" : "#4ADE80"}
                      className="transition-all duration-300"
                      stroke="#fff"
                      strokeWidth="0.2"
                    />
                    
                    {/* Location Label */}
                    <text
                      x={location.coordinates.x + (location.isPrimary ? 2.5 : 2)}
                      y={location.coordinates.y}
                      fontSize={location.isPrimary ? "2.5" : "2"}
                      fill="#fff"
                      className="pointer-events-none"
                    >
                      {location.name}
                    </text>
                  </g>
                ))}
              </svg>
              
              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-[#0a1128]/80 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-[#33C3F0] mr-2"></div>
                  <span className="text-sm text-white">Primary Coverage</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#4ADE80] mr-2"></div>
                  <span className="text-sm text-white">Regional Coverage</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coverage Information */}
          <div className="w-full lg:w-1/3" data-aos="fade-left" data-aos-duration="1000">
            <div className="bg-[#0a1128]/30 rounded-xl p-6 backdrop-blur-sm border border-white/10 h-full">
              <h3 className="text-2xl font-bold mb-4 text-[#33C3F0]">Coverage Details</h3>
              
              {activeLocation ? (
                <div className="space-y-4">
                  {coverageLocations.filter(loc => loc.id === activeLocation).map(location => (
                    <div key={location.id} className="animate-fadeIn">
                      <h4 className="text-xl font-semibold flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-[#33C3F0]" />
                        {location.name}
                      </h4>
                      <p className="mt-2 text-gray-300">{location.description}</p>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex items-start">
                          <div className="bg-[#33C3F0]/20 p-2 rounded-full mt-1">
                            <Info className="w-4 h-4 text-[#33C3F0]" />
                          </div>
                          <div className="ml-3">
                            <h5 className="font-medium">Services Available</h5>
                            <p className="text-sm text-gray-300">Enterprise Connectivity, Cloud Solutions, Managed IT</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-[#33C3F0]/20 p-2 rounded-full mt-1">
                            <Info className="w-4 h-4 text-[#33C3F0]" />
                          </div>
                          <div className="ml-3">
                            <h5 className="font-medium">Infrastructure</h5>
                            <p className="text-sm text-gray-300">Fiber Optic Networks, Data Centers, Wireless Towers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Hover over the highlighted locations on the map to see detailed information about our coverage and infrastructure in each region.
                  </p>
                  
                  <div className="mt-6 p-4 bg-[#33C3F0]/10 rounded-lg border border-[#33C3F0]/20">
                    <h4 className="font-semibold flex items-center">
                      <Info className="w-5 h-5 mr-2 text-[#33C3F0]" />
                      Pan-African Expansion
                    </h4>
                    <p className="mt-2 text-sm text-gray-300">
                      Galaxy is continuously expanding its coverage across Africa, with plans to establish presence in East and South African markets by 2026.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
