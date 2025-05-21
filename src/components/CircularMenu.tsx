import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon } from 'lucide-react';

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
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setActiveSubmenu(null);
  };

  // Calculate positions in a circle
  const getCirclePosition = (index: number, total: number, radius: number) => {
    // Distribute items evenly in a circle, starting from top
    const angleStep = (2 * Math.PI) / total;
    const angle = -Math.PI / 2 + index * angleStep;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  const menuItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
  };

  const submenuVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      y: -20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.3
      }
    },
  };

  // Define gradient colors for menu items
  const menuGradients = [
    'from-blue-500 to-cyan-400',   // Ocean Blue
    'from-cyan-400 to-teal-400',   // Aqua
    'from-teal-400 to-emerald-400', // Seafoam
    'from-emerald-400 to-blue-500', // Forest
    'from-blue-400 to-indigo-500',  // Royal Blue
    'from-indigo-500 to-cyan-400',  // Deep Ocean
  ];

  return (
    <div className="relative z-50">
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 rounded-full 
        hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30"
      >
        <MenuIcon className="w-6 h-6 text-white" />
        <span className="text-white font-medium">Menu</span>
      </button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md">
            {/* Center Container */}
            <div className="fixed inset-0 flex items-center justify-center">
              {/* Menu Circle Container */}
              <div className="relative h-screen max-h-[800px] aspect-square flex items-center justify-center">
                {items.map((item, index) => {
                  const position = getCirclePosition(index, items.length, 260);
                  const gradientClass = menuGradients[index % menuGradients.length];
                  
                  return (
                    <motion.div
                      key={item.label}
                      custom={index}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        x: position.x,
                        y: position.y,
                      }}
                      className="transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <button
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                        className={`
                          relative w-44 h-44 rounded-full 
                          flex items-center justify-center
                          bg-gradient-to-br ${gradientClass}
                          hover:scale-110
                          transition-all duration-500
                          group
                          ${activeSubmenu === index ? 
                            'scale-110 shadow-[0_0_50px_rgba(59,130,246,0.5)]' : 
                            'hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]'
                          }
                          ${hoveredIndex === index ? 'animate-pulse' : ''}
                          border-2 border-white/30
                        `}
                      >
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                        <span className="text-white font-medium text-2xl group-hover:scale-110 transition-transform
                          drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                          {item.label}
                        </span>
                      </button>

                      {/* Centered Submenu */}
                      <AnimatePresence>
                        {activeSubmenu === index && item.submenu && (
                          <motion.div
                            variants={submenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                              w-[700px] bg-gradient-to-br from-white/95 to-white/90
                              rounded-2xl shadow-[0_0_60px_rgba(255,255,255,0.2)]
                              backdrop-blur-xl border border-white/30
                              overflow-hidden z-50"
                          >
                            <div className="p-10">
                              <h3 className="text-3xl font-bold mb-8 
                                bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
                                text-center"
                              >
                                {item.label}
                              </h3>
                              <div className="grid grid-cols-1 gap-5">
                                {item.submenu.map((subitem) => (
                                  <a
                                    key={subitem.label}
                                    href={subitem.href}
                                    className="group block p-6 rounded-xl
                                      bg-gradient-to-br from-white to-white/50
                                      hover:from-blue-50/90 hover:to-purple-50/90
                                      transition-all duration-300
                                      hover:shadow-lg hover:scale-[1.02]
                                      border border-white/50 hover:border-blue-200"
                                  >
                                    <div className="font-semibold text-xl text-gray-900 
                                      group-hover:text-blue-700 transition-colors">
                                      {subitem.label}
                                    </div>
                                    {subitem.description && (
                                      <div className="text-base text-gray-600 mt-2 
                                        group-hover:text-gray-800 transition-colors leading-relaxed">
                                        {subitem.description}
                                      </div>
                                    )}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              {/* Close button with enhanced styling */}
              <button
                onClick={toggleMenu}
                className="absolute top-8 right-8 text-white/90 hover:text-white 
                  transition-all transform hover:scale-110 duration-300
                  bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full p-3 backdrop-blur-sm
                  hover:from-blue-500/30 hover:to-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CircularMenu; 