
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
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#1A1F2C]/80 to-[#2C3342] p-6 no-underline outline-none focus:shadow-md"
                  href="/#"
                >
                  <div className="mt-4 mb-2 text-lg font-medium text-white">
                    Galaxy ITT
                  </div>
                  <p className="text-sm leading-tight text-white/80">
                    Discover our innovative approach to technology solutions and how we can transform your business.
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
                  <div className="text-sm font-medium leading-none text-white">Our Team</div>
                  <p className="line-clamp-2 text-xs leading-snug text-white/70">
                    Meet the experts behind Galaxy ITT.
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
                  <div className="text-sm font-medium leading-none text-white">Our Story</div>
                  <p className="line-clamp-2 text-xs leading-snug text-white/70">
                    Learn about our history and vision.
                  </p>
                </a>
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 
              "text-white hover:text-[#33C3F0] hover:bg-white/10 transition-colors bg-transparent cursor-pointer"
            )}>
              Clients
            </NavigationMenuLink>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gradient-to-b from-[#1A1F2C]/95 to-[#2C3342]/95 backdrop-blur-md border border-white/10 text-white min-w-[200px]">
            <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer">
              <Link to="/clients/techcorp" className="w-full text-white">TechCorp</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer">
              <Link to="/clients/securedata" className="w-full text-white">SecureData Inc</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer">
              <Link to="/clients/innovation" className="w-full text-white">Innovation Labs</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 cursor-pointer">
              <Link to="/clients" className="w-full text-white">View All Clients</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <Link to="/feedback">
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 
            "text-white hover:text-[#33C3F0] hover:bg-white/10 transition-colors bg-transparent"
          )}>
            Feedback
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <Link to="/contact">
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 
            "text-white hover:text-[#33C3F0] hover:bg-white/10 transition-colors bg-transparent"
          )}>
            Contact
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link to="/management">
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 
            "text-white hover:text-[#33C3F0] hover:bg-white/10 transition-colors bg-transparent"
          )}>
            Management
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </>
  );

  return (
    <div className="w-full absolute top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {isMobile ? (
          <div className="flex justify-end">
            <Sheet>
              <SheetTrigger className="p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 shadow-lg shadow-blue-500/10">
                <Menu className="h-6 w-6 text-white" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-gradient-to-b from-[#1A1F2C]/95 to-[#2C3342]/95 backdrop-blur-md border-l border-white/10 p-0 w-[300px]">
                <NavigationMenu className="mx-auto w-full p-4">
                  <NavigationMenuList className="flex flex-col space-y-2 w-full">
                    {menuContent}
                  </NavigationMenuList>
                </NavigationMenu>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <NavigationMenu className="mx-auto backdrop-blur-md bg-black/20 rounded-full px-4 py-1 border border-white/10 shadow-lg shadow-blue-500/10">
            <NavigationMenuList className="gap-1 md:gap-4">
              {menuContent}
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </div>
  );
};

export default Header;
