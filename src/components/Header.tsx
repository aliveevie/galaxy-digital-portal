import React, { useState, useEffect } from 'react';
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
import { Menu, Info, Book, File, Users, Phone, Mail, Video, FileQuestion, Newspaper, Moon, Sun, MessageCircle, ChevronDown, MessageSquare } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { useTheme } from '@/hooks/use-theme';

const Header = () => {
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Toggle mobile menu sections
  const toggleMenu = (menuName: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const menuContent = (
    <>
      <NavigationMenuItem>
        <Link to="/">
          <NavigationMenuLink className={cn(
            "flex h-10 items-center px-4 text-sm font-medium transition-colors",
            scrolled 
              ? "text-gray-800 hover:text-blue-600 hover:bg-gray-50/80" 
              : "text-white hover:text-blue-300 hover:bg-white/10"
          )}>
            Home
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuTrigger className={cn(
          "flex h-10 items-center gap-1 px-4 text-sm font-medium transition-colors",
          scrolled 
            ? "text-gray-800 hover:text-blue-600 hover:bg-gray-50/80 data-[state=open]:bg-gray-50/80" 
            : "text-white hover:text-blue-300 hover:bg-white/10 data-[state=open]:bg-white/10"
        )}>
          About <ChevronDown className="h-4 w-4 ml-1" />
        </NavigationMenuTrigger>
        <NavigationMenuContent className="z-50">
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2 bg-white shadow-lg rounded-lg border border-gray-100">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-white p-6 no-underline outline-none focus:shadow-md"
                  to="/about#mandate"
                >
                  <div className="mt-4 mb-2 text-lg font-medium text-[#1A1F2C]">
                    Our Mandate
                  </div>
                  <p className="text-sm leading-tight text-[#1A1F2C]/80 mb-4">
                    <strong>Our Vision:</strong> To become a leading provider of broadband connectivity, software solutions and drive digital transformation in sub-Saharan Africa.
                  </p>
                  <p className="text-sm leading-tight text-[#1A1F2C]/80">
                    <strong>Our Mission:</strong> To provide reliable internet services, telecommunications, & software solutions to MDAs and individuals.
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-[#1A1F2C] focus:bg-gray-50 focus:text-[#1A1F2C]"
                  to="/about#values"
                >
                  <div className="text-sm font-medium leading-none text-[#1A1F2C] flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Core Values
                  </div>
                  <p className="line-clamp-2 text-xs leading-snug text-[#1A1F2C]/70">
                    Reliability • Integrity • Confidence • Innovation
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-[#1A1F2C] focus:bg-gray-50 focus:text-[#1A1F2C]"
                  to="/about#management"
                >
                  <div className="text-sm font-medium leading-none text-[#1A1F2C] flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Management
                  </div>
                  <p className="line-clamp-2 text-xs leading-snug text-[#1A1F2C]/70">
                    Learn about our leadership team
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-[#1A1F2C] focus:bg-gray-50 focus:text-[#1A1F2C]"
                  to="/about#board"
                >
                  <div className="text-sm font-medium leading-none text-[#1A1F2C] flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Board of Directors
                  </div>
                  <p className="line-clamp-2 text-xs leading-snug text-[#1A1F2C]/70">
                    Executive Director Technical: Engr Nura<br />
                    Executive Director Business Development: Umar Gumel
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-[#1A1F2C] focus:bg-gray-50 focus:text-[#1A1F2C]"
                  to="/about#organigram"
                >
                  <div className="text-sm font-medium leading-none text-[#1A1F2C] flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Organigram
                  </div>
                  <p className="line-clamp-2 text-xs leading-snug text-[#1A1F2C]/70">
                    View our company structure
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-[#1A1F2C] focus:bg-gray-50 focus:text-[#1A1F2C]"
                  to="/about#careers"
                >
                  <div className="text-sm font-medium leading-none text-[#1A1F2C] flex items-center gap-2">
                    <Book className="h-4 w-4" />
                    Careers
                  </div>
                  <p className="line-clamp-2 text-xs leading-snug text-[#1A1F2C]/70">
                    Explore career opportunities with us
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuTrigger className={cn(
          "flex h-10 items-center gap-1 px-4 text-sm font-medium transition-colors",
          scrolled 
            ? "text-gray-800 hover:text-blue-600 hover:bg-gray-50/80 data-[state=open]:bg-gray-50/80" 
            : "text-white hover:text-blue-300 hover:bg-white/10 data-[state=open]:bg-white/10"
        )}>
          Services <ChevronDown className="h-4 w-4 ml-1" />
        </NavigationMenuTrigger>
        <NavigationMenuContent className="z-50">
          <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white shadow-lg rounded-lg border border-gray-100">
            {[
              {
                title: "IT Consulting",
                description: "Strategic technology guidance to optimize your business operations and drive innovation.",
              },
              {
                title: "Cloud Solutions",
                description: "Secure, scalable cloud infrastructure and migration services for modern businesses.",
              },
              {
                title: "Software Development",
                description: "Custom software solutions designed to meet your unique business requirements.",
              },
              {
                title: "Cybersecurity",
                description: "Comprehensive security services to protect your valuable data and systems.",
              },
              {
                title: "IT Infrastructure",
                description: "Robust infrastructure solutions designed for reliability and performance.",
              },
              {
                title: "Network Installations",
                description: "Professional wired and wireless network setup and configuration.",
              }
            ].map((service) => (
              <li key={service.title}>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-[#1A1F2C] focus:bg-gray-50 focus:text-[#1A1F2C]"
                    href="/#services"
                  >
                    <div className="text-sm font-medium leading-none text-[#1A1F2C]">{service.title}</div>
                    <p className="line-clamp-2 text-xs leading-snug text-[#1A1F2C]/70">
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
        <NavigationMenuTrigger className={cn(
          "flex h-10 items-center gap-1 px-4 text-sm font-medium transition-colors",
          scrolled 
            ? "text-gray-800 hover:text-blue-600 hover:bg-gray-50/80 data-[state=open]:bg-gray-50/80" 
            : "text-white hover:text-blue-300 hover:bg-white/10 data-[state=open]:bg-white/10"
        )}>
          Customer Service <ChevronDown className="h-4 w-4 ml-1" />
        </NavigationMenuTrigger>
        <NavigationMenuContent className="z-50">
          <ul className="grid gap-3 p-6 w-[280px] md:w-[320px] bg-white shadow-lg rounded-lg border border-gray-100">
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-[#1A1F2C] focus:bg-gray-50 focus:text-[#1A1F2C]"
                  href="/#"
                >
                  <div className="text-sm font-medium leading-none text-[#1A1F2C]">Service Desk</div>
                  <p className="text-xs leading-snug text-[#1A1F2C]/70">
                    Get help with your technical issues
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-[#1A1F2C] focus:bg-gray-50 focus:text-[#1A1F2C]"
                  href="/#"
                >
                  <div className="text-sm font-medium leading-none text-[#1A1F2C]">Escalation Path</div>
                  <p className="text-xs leading-snug text-[#1A1F2C]/70">
                    How to escalate service issues
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuTrigger className={cn(
          "flex h-10 items-center gap-1 px-4 text-sm font-medium transition-colors",
          scrolled 
            ? "text-gray-800 hover:text-blue-600 hover:bg-gray-50/80 data-[state=open]:bg-gray-50/80" 
            : "text-white hover:text-blue-300 hover:bg-white/10 data-[state=open]:bg-white/10"
        )}>
          Resources <ChevronDown className="h-4 w-4 ml-1" />
        </NavigationMenuTrigger>
        <NavigationMenuContent className="z-50">
          <ul className="grid gap-3 p-6 md:grid-cols-2 w-[400px] bg-white shadow-lg rounded-lg border border-gray-100">
            <li>
              <NavigationMenuLink asChild>
                <Link to="/faq" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-[#1A1F2C] focus:bg-gray-50 focus:text-[#1A1F2C]">
                  <div className="text-sm font-medium leading-none text-[#1A1F2C] flex items-center gap-2">
                    <FileQuestion className="h-4 w-4" />
                    FAQ
                  </div>
                  <p className="text-xs leading-snug text-[#1A1F2C]/70">
                    Frequently asked questions
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link to="/media" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-[#1A1F2C] focus:bg-gray-50 focus:text-[#1A1F2C]">
                  <div className="text-sm font-medium leading-none text-[#1A1F2C] flex items-center gap-2">
                    <File className="h-4 w-4" />
                    Media
                  </div>
                  <p className="text-xs leading-snug text-[#1A1F2C]/70">
                    Press releases and media resources
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link to="/news" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-[#1A1F2C] focus:bg-gray-50 focus:text-[#1A1F2C]">
                  <div className="text-sm font-medium leading-none text-[#1A1F2C] flex items-center gap-2">
                    <Newspaper className="h-4 w-4" />
                    News
                  </div>
                  <p className="text-xs leading-snug text-[#1A1F2C]/70">
                    Latest company news and updates
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <Link to="/videos" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-[#1A1F2C] focus:bg-gray-50 focus:text-[#1A1F2C]">
                  <div className="text-sm font-medium leading-none text-[#1A1F2C] flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Videos
                  </div>
                  <p className="text-xs leading-snug text-[#1A1F2C]/70">
                    Product demonstrations and tutorials
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuTrigger className={cn(
          "flex h-10 items-center gap-1 px-4 text-sm font-medium transition-colors",
          scrolled 
            ? "text-gray-800 hover:text-blue-600 hover:bg-gray-50/80 data-[state=open]:bg-gray-50/80" 
            : "text-white hover:text-blue-300 hover:bg-white/10 data-[state=open]:bg-white/10"
        )}>
          Contact Us <ChevronDown className="h-4 w-4 ml-1" />
        </NavigationMenuTrigger>
        <NavigationMenuContent className="z-50">
          <div className="p-6 w-[350px] bg-white shadow-lg rounded-lg border border-gray-100 text-gray-800">
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
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Gradient background for the header */}
      <div className={cn(
        "absolute inset-0 w-full h-full transition-all duration-500",
        scrolled
          ? theme === 'dark'
            ? "bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-r from-white/95 via-blue-50/95 to-white/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-blue-900/70 via-indigo-800/70 to-blue-900/70 backdrop-blur-sm"
      )}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with enhanced visibility */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 relative">
              <div className={cn(
                "transition-all duration-300 overflow-hidden",
                !scrolled && "bg-white/10 p-2 rounded-lg backdrop-blur-sm"
              )}>
                <img 
                  src="/galaxy-logo.png" 
                  alt="Galaxy Digital Portal" 
                  className={cn(
                    "h-10 w-auto transition-all duration-300",
                    theme === 'dark' && !scrolled ? "filter brightness-0 invert" : ""
                  )}
                  style={{
                    filter: !scrolled ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))" : ""
                  }}
                />
              </div>
            </Link>
            
            {/* Get in Touch button for mobile view */}
            <div className="ml-4 md:hidden">
              <Link 
                to="/contact" 
                className={cn(
                  "inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full transition-colors",
                  scrolled
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20"
                )}
              >
                <MessageSquare className="mr-1.5 h-3 w-3" />
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Desktop Navigation with glass effect */}
          <div className={cn(
            "hidden md:block rounded-full transition-all duration-300",
            scrolled
              ? theme === 'dark'
                ? "bg-gray-800/50 backdrop-blur-sm"
                : "bg-white/50 backdrop-blur-sm"
              : "bg-white/10 backdrop-blur-sm"
          )}>
            <NavigationMenu>
              <NavigationMenuList className="flex items-center px-2">
                {menuContent}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            {/* Get in Touch button for desktop */}
            <div className="hidden md:block">
              <Link 
                to="/contact" 
                className={cn(
                  "inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition-colors",
                  scrolled
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20"
                )}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </div>
            
            {/* Theme Switch - Desktop only */}
            <div className="hidden md:block">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className={cn(
                  "rounded-full transition-colors",
                  scrolled 
                    ? theme === 'dark'
                      ? "bg-gray-800/70 border-gray-700 hover:bg-gray-700" 
                      : "bg-white/70 border-gray-200 hover:bg-gray-100"
                    : "bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                )}
              >
                {theme === 'dark' ? (
                  <Moon className={cn("h-5 w-5", scrolled ? "text-gray-200" : "text-white")} />
                ) : (
                  <Sun className={cn("h-5 w-5", scrolled ? "text-gray-700" : "text-white")} />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger className={cn(
                  "p-2 rounded-full transition-colors",
                  scrolled 
                    ? theme === 'dark'
                      ? "bg-gray-800 text-white hover:bg-gray-700" 
                      : "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                )}>
                  <Menu className="h-5 w-5" />
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className={cn(
                    "w-[85vw] sm:max-w-sm pt-6",
                    theme === 'dark' 
                      ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white" 
                      : "bg-gradient-to-b from-white to-blue-50 text-gray-900"
                  )}
                >
                  <NavigationMenu className="w-full">
                    <NavigationMenuList className="flex-col items-start space-y-2">
                      {menuContent}
                    </NavigationMenuList>
                  </NavigationMenu>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
