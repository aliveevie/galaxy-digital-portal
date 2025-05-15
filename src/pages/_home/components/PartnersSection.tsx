import React from 'react';

const PartnersSection = () => {
  // Partners data
  const partners = [
    {
      name: "Jigawa State Government",
      logo: "/partners/jigawalogo.svg",
      website: "https://jigawastate.gov.ng/"
    },
    {
      name: "NITDA",
      logo: "/partners/Nitdalogo.png",
      website: "https://nitda.gov.ng/"
    },
    {
      name: "NCC",
      logo: "/partners/ncc.png",
      website: "https://www.ncc.gov.ng/"
    },
    {
      name: "Ministry of Communications and Digital Economy",
      logo: "/partners/Fedmini.png",
      website: "https://www.commtech.gov.ng/"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#1A1F2C] mb-2" data-aos="fade-up">
            Our Partners & Clients
          </h2>
          <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Trusted by government agencies and leading organizations
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12" data-aos="fade-up" data-aos-delay="200">
          {partners.map((partner, index) => (
            <a 
              key={index}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-16 md:h-20 w-auto object-contain" 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 