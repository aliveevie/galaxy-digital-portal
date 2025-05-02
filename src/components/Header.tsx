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
import { Menu, Info, Book, File, Users, Phone, Mail, Video, FileQuestion, Newspaper, Moon, Sun } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

interface HeaderProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

const Header = ({ theme, onThemeToggle }: HeaderProps) => {
  const isMobile = useIsMobile();

  const menuContent = (
    <>
      <NavigationMenuItem>
        <Link to="/">
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 
            "text-white hover:text-[#33C3F0] hover:bg-gray-50 transition-colors bg-transparent font-medium"
          )}>
            Home
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-white hover:text-[#33C3F0] hover:bg-gray-50 transition-colors bg-transparent font-medium">
          About
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2 bg-white shadow-md border border-gray-100">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-white p-6 no-underline outline-none focus:shadow-md"
                  to="/about#mandate"
                >
                  <div className="mt-4 mb-2 text-lg font-medium text-[#1A1F2C]">
                    Mandate
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
        <NavigationMenuTrigger className="text-white hover:text-[#33C3F0] hover:bg-gray-50 transition-colors bg-transparent font-medium">
          Services
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white shadow-md border border-gray-100">
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
        <NavigationMenuTrigger className="text-white hover:text-[#33C3F0] hover:bg-gray-50 transition-colors bg-transparent font-medium">
          Customer Service
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 w-[200px] md:w-[300px] bg-white shadow-md border border-gray-100">
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
        <NavigationMenuTrigger className="text-white hover:text-[#33C3F0] hover:bg-gray-50 transition-colors bg-transparent font-medium">
          Resources
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:grid-cols-2 w-[400px] bg-white shadow-md border border-gray-100">
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
        <NavigationMenuTrigger className="text-white hover:text-[#33C3F0] hover:bg-gray-50 transition-colors bg-transparent font-medium">
          Contact Us
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="p-4 w-[350px] bg-white shadow-md border border-gray-100 text-[#1A1F2C]">
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
    <div className="w-full fixed top-0 z-50 bg-[#1A1F2C]">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo on the left */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="/galaxy-logo.png" 
            alt="Galaxy Digital Portal" 
            className="h-8 w-auto"
            style={{
              filter: 'brightness(0) invert(1)',
              opacity: 0.95
            }}
          />
        </Link>

        {/* Menu with shaped background */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 rounded-full shadow-lg">
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex px-6 py-2">
              {menuContent}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Theme Switch */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onThemeToggle}
          className="text-white hover:text-[#33C3F0] hover:bg-white/10"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="p-2 rounded-full bg-[#1A1F2C] text-white hover:bg-[#33C3F0] transition-colors">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1A1F2C]">
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
  );
};

export default Header;
