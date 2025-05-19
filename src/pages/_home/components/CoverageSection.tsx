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
            {/* Africa Map Image */}
            <div className="relative w-full h-full">
              <img 
                src="/coverage/Africa.jpg" 
                alt="Africa Map" 
                className="w-full h-full object-contain"
              />
              
              {/* Nigeria Marker */}
              <div 
                className="absolute cursor-pointer"
                style={{ top: '38%', left: '43%' }}
                onMouseEnter={() => handleLocationHover('nigeria')}
                onMouseLeave={() => handleLocationHover(null)}
              >
                {/* Ping animation div */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-transparent border-2 border-[#33C3F0] animate-ping opacity-70"></div>
                
                {/* Main dot */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#33C3F0] border border-white"></div>
                
                {/* Label */}
                <span className="absolute -translate-y-1/2 left-4 text-white font-medium">Nigeria</span>
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
