
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

const Header = () => {
  return (
    <div className="w-full absolute top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <NavigationMenu className="mx-auto backdrop-blur-md bg-black/20 rounded-full px-4 py-1 border border-white/10 shadow-lg shadow-blue-500/10">
          <NavigationMenuList className="gap-1 md:gap-4">
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
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
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
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
              <Link to="/clients">
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 
                  "text-white hover:text-[#33C3F0] hover:bg-white/10 transition-colors bg-transparent"
                )}>
                  Clients
                </NavigationMenuLink>
              </Link>
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
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Header;
