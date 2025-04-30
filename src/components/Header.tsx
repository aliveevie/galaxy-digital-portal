import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, Info, Book, File, Users, Phone, Mail, Video, FileQuestion, Newspaper } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const isMobile = useIsMobile();

  const menuContent = (
    <>
      <NavigationMenuItem>
        <Link to="/">
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 
            "text-white hover:text-[#33C3F0] hover:bg-white/10 transition-colors bg-transparent"
          )}>
            Home
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-white hover:text-[#33C3F0] hover:bg-white/10 transition-colors bg-transparent">
          About
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2 bg-gradient-to-b from-[#1A1F2C]/95 to-[#2C3342]/95 backdrop-blur-md border border-white/10">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#1A1F2C]/80 to-[#2C3342] p-6 no-underline outline-none focus:shadow-md"
                  to="/about#mandate"
                >
                  <div className="mt-4 mb-2 text-lg font-medium text-white">
                    Mandate
                  </div>
                  <p className="text-sm leading-tight text-white/80 mb-4">
                    <strong>Our Vision:</strong> To become a leading provider of broadband connectivity, software solutions and drive digital transformation in sub-Saharan Africa.
                  </p>
                  <p className="text-sm leading-tight text-white/80">
                    <strong>Our Mission:</strong> To provide reliable internet services, telecommunications, & software solutions to MDAs and individuals.
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                  to="/about#management"
                >
                  <div className="text-sm font-medium leading-none text-white flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Management
                  </div>
                  <p className="line-clamp-2 text-xs leading-snug text-white/70">
                    Learn about our leadership team
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                  to="/about#board"
                >
                  <div className="text-sm font-medium leading-none text-white flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Board of Directors
                  </div>
                  <p className="line-clamp-2 text-xs leading-snug text-white/70">
                    Executive Director Technical: Engr Nura<br />
                    Executive Director Business Development: Umar Gumel
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                  to="/about#organigram"
                >
                  <div className="text-sm font-medium leading-none text-white flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Organigram
                  </div>
                  <p className="line-clamp-2 text-xs leading-snug text-white/70">
                    View our company structure
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                  to="/about#careers"
                >
                  <div className="text-sm font-medium leading-none text-white flex items-center gap-2">
                    <Book className="h-4 w-4" />
                    Careers
                  </div>
                  <p className="line-clamp-2 text-xs leading-snug text-white/70">
                    Explore career opportunities with us
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-white hover:text-[#33C3F0] hover:bg-white/10 transition-colors bg-transparent">
          Services
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-gradient-to-b from-[#1A1F2C]/95 to-[#2C3342]/95 backdrop-blur-md border border-white/10">
            {[
              {
                title: "IT Consulting",
                description: "Strategic technology guidance to optimize your business operations.",
              },
              {
                title: "Cloud Solutions",
                description: "Secure, scalable cloud infrastructure and migration services.",
              },
              {
                title: "Software Development",
                description: "Custom software solutions for your unique business needs.",
              },
              {
                title: "Cybersecurity",
                description: "Comprehensive security services to protect your valuable data.",
              },
              {
                title: "Network Installations",
                description: "Professional wired and wireless network installation services.",
              },
              {
                title: "Wireless Installations",
                description: "Expert wireless network setup and configuration services.",
              }
            ].map((service) => (
              <li key={service.title}>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                    href="/#"
                  >
                    <div className="text-sm font-medium leading-none text-white">{service.title}</div>
                    <p className="line-clamp-2 text-xs leading-snug text-white/70">
                      {service.description}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-white hover:text-[#33C3F0] hover:bg-white/10 transition-colors bg-transparent">
          Customer Service
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 w-[200px] md:w-[300px] bg-gradient-to-b from-[#1A1F2C]/95 to-[#2C3342]/95 backdrop-blur-md border border-white/10">
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                  href="/#"
                >
                  <div className="text-sm font-medium leading-none text-white">Service Desk</div>
                  <p className="text-xs leading-snug text-white/70">
                    Get help with your technical issues
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                  href="/#"
                >
                  <div className="text-sm font-medium leading-none text-white">Escalation Path</div>
                  <p className="text-xs leading-snug text-white/70">
                    How to escalate service issues
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-white hover:text-[#33C3F0] hover:bg-white/10 transition-colors bg-transparent">
          Resources
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:grid-cols-2 w-[400px] bg-gradient-to-b from-[#1A1F2C]/95 to-[#2C3342]/95 backdrop-blur-md border border-white/10">
            <li>
              <NavigationMenuLink asChild>
                <Link to="/faq" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white">
                  <div className="text-sm font-medium leading-none text-white flex items-center gap-2">
                    <FileQuestion className="h-4 w-4" />
                    FAQ
                  </div>
                  <p className="text-xs leading-snug text-white/70">
                    Frequently asked questions
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link to="/media" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white">
                  <div className="text-sm font-medium leading-none text-white flex items-center gap-2">
                    <File className="h-4 w-4" />
                    Media
                  </div>
                  <p className="text-xs leading-snug text-white/70">
                    Press releases and media resources
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link to="/news" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white">
                  <div className="text-sm font-medium leading-none text-white flex items-center gap-2">
                    <Newspaper className="h-4 w-4" />
                    News
                  </div>
                  <p className="text-xs leading-snug text-white/70">
                    Latest company news and updates
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link to="/videos" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white">
                  <div className="text-sm font-medium leading-none text-white flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Videos
                  </div>
                  <p className="text-xs leading-snug text-white/70">
                    Product demonstrations and tutorials
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-white hover:text-[#33C3F0] hover:bg-white/10 transition-colors bg-transparent">
          Contact Us
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="p-4 w-[350px] bg-gradient-to-b from-[#1A1F2C]/95 to-[#2C3342]/95 backdrop-blur-md border border-white/10 text-white">
            <h4 className="font-medium mb-2">Galaxy ITT</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 text-[#33C3F0]" />
                <span>info@galaxyitt.com.ng</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-[#33C3F0]" />
                <span>08039600006</span>
              </li>
              <li className="flex items-start gap-2">
                <Book className="h-4 w-4 mt-1 text-[#33C3F0]" />
                <span>www.galaxyitt.com.ng</span>
              </li>
              <li className="flex items-start gap-2">
                <Info className="h-4 w-4 mt-1 text-[#33C3F0]" />
                <span>No.2 Kiyawa Road, Dutse Jigawa State</span>
              </li>
              <li className="mt-3">
                <Link to="/contact" className="bg-[#33C3F0] text-white px-4 py-1.5 rounded-md text-sm inline-block hover:bg-[#1EAEDB] transition-colors">
                  Contact Page
                </Link>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </>
  );

  return (
    <div className="w-full fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {isMobile ? (
          <div className="flex justify-between items-center">
            <Link to="/" className="z-10">
              {/* Logo removed */}
            </Link>
            <Sheet>
              <SheetTrigger className="p-2 rounded-full bg-[#33C3F0]/30 backdrop-blur-md border border-white/10 shadow-lg shadow-blue-500/10">
                <Menu className="h-6 w-6 text-white" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-gradient-to-b from-[#1A1F2C]/95 to-[#2C3342]/95 backdrop-blur-md border-l border-white/10 p-0 w-[300px]">
                <NavigationMenu orientation="vertical" className="mx-auto w-full p-4 max-w-none">
                  <NavigationMenuList className="flex flex-col space-y-2 w-full items-start">
                    {menuContent}
                  </NavigationMenuList>
                </NavigationMenu>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <NavigationMenu className="backdrop-blur-md bg-[#33C3F0]/20 rounded-full px-4 py-1 border border-white/10 shadow-lg shadow-blue-500/10">
              <NavigationMenuList className="gap-1 md:gap-2">
                {menuContent}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
