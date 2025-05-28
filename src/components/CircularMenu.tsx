import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronRight, X } from 'lucide-react';

interface MenuItem {
  label: string;
  href: string;
  description?: string;
  submenu?: MenuItem[];
}

interface CircularMenuProps {
  items: MenuItem[];
}

const CircularMenu: React.FC<CircularMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside to close the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveService(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveService(null);
    }
  };

  // Define menu colors for each service
  const menuColors = {
    'Internet Connectivity': 'bg-[#0288d1]', // Blue
    'Software Services': 'bg-[#9c27b0]',     // Purple
    'Cybersecurity': 'bg-[#e64a19]',        // Orange
    'IT Consulting': 'bg-[#00796b]'         // Teal
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Menu toggle button */}
      <button
        onClick={toggleMenu}
        className="relative z-50 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-2"
        aria-label="Toggle menu"
      >
        <Menu className="w-5 h-5 text-white" />
        <span className="text-white font-medium">Services</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed left-0 right-0 top-20 flex justify-center items-start z-50"
          >
            <div className="relative bg-black/95 backdrop-blur-xl rounded-2xl p-20 mx-4 shadow-2xl">
              {/* Close button */}
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Diamond layout container */}
              <div className="relative w-[600px] h-[600px]">
                {/* Center point */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white/10" />
                
                {/* Service diamonds */}
                {items.map((item, index) => {
                  const isTop = index === 0;
                  const isRight = index === 1;
                  const isBottom = index === 2;
                  const isLeft = index === 3;

                  const positionClasses = {
                    0: 'left-1/2 top-0 -translate-x-1/2',          // Top
                    1: 'right-0 top-1/2 -translate-y-1/2',         // Right
                    2: 'left-1/2 bottom-0 -translate-x-1/2',       // Bottom
                    3: 'left-0 top-1/2 -translate-y-1/2',          // Left
                  }[index];

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`absolute ${positionClasses}`}
                    >
                      <button
                        onClick={() => setActiveService(activeService === index ? null : index)}
                        className={`
                          relative w-48 h-48 
                          transform rotate-45 transition-all duration-300
                          ${activeService === index ? 'scale-105 ring-2 ring-white/20' : 'hover:scale-102'}
                        `}
                      >
                        <div className={`
                          absolute inset-0 ${menuColors[item.label as keyof typeof menuColors]}
                          rounded-lg shadow-lg
                        `} />
                        <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                          <span className="text-white font-bold text-2xl text-center px-4">
                            {item.label}
                          </span>
                        </div>
                      </button>

                      {/* Submenu */}
                      <AnimatePresence>
                        {activeService === index && item.submenu && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className={`
                              absolute z-50 bg-white rounded-xl shadow-2xl p-6 w-80
                              ${isTop ? 'top-full mt-8 -translate-x-1/2 left-1/2' : 
                                isRight ? 'left-full ml-8 top-1/2 -translate-y-1/2' : 
                                isBottom ? 'bottom-full mb-8 -translate-x-1/2 left-1/2' : 
                                'right-full mr-8 top-1/2 -translate-y-1/2'}
                            `}
                          >
                            <h3 className={`text-xl font-bold mb-4 ${
                              item.label === 'Internet Connectivity' ? 'text-[#0288d1]' :
                              item.label === 'Software Services' ? 'text-[#9c27b0]' :
                              item.label === 'Cybersecurity' ? 'text-[#e64a19]' :
                              'text-[#00796b]'
                            }`}>
                              {item.label}
                            </h3>
                            <div className="space-y-3">
                              {item.submenu.map((subItem) => (
                                <a
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  <div className="font-medium text-gray-900">
                                    {subItem.label}
                                  </div>
                                  {subItem.description && (
                                    <div className="text-sm text-gray-500 mt-1">
                                      {subItem.description}
                                    </div>
                                  )}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CircularMenu; 