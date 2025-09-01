import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

type DropdownItem = {
  label: string;
  href: string;
  description?: string;
};

interface NavItemProps {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
  rightAligned?: boolean;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({ href, label, dropdown, rightAligned = false, className = 'text-white hover:text-blue-100' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Handle clicks outside the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Simple link if no dropdown
  if (!dropdown) {
    return (
      <li className="relative px-2">
        <a
          href={href}
          className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-[#33C3F0] rounded-md ${className}`}
        >
          {label}
        </a>
      </li>
    );
  }

  return (
    <li 
      className="relative px-2" 
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href={href}
        className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-[#33C3F0] rounded-md ${className}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown 
          className={`ml-1 h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#33C3F0]' : ''}`} 
        />
      </a>

      {/* Dropdown menu */}
      <div
        className={`
          absolute z-50 w-64 mt-1 rounded-md shadow-lg bg-white border border-gray-100
          transition-all duration-300 ease-in-out transform
          ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}
          ${rightAligned ? 'right-0' : 'left-0'}
        `}
      >
        <div className="py-1 rounded-md">
          {dropdown.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-3 hover:bg-[#33C3F0]/10 hover:text-[#33C3F0] transition-all duration-200 ease-in-out border-l-2 border-transparent hover:border-[#33C3F0]"
            >
              <div className="text-sm font-medium text-navy-800 hover:text-[#33C3F0] transition-colors duration-200">{item.label}</div>
              {item.description && (
                <p className="mt-1 text-xs text-gray-600 hover:text-gray-700 transition-colors duration-200">{item.description}</p>
              )}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
};
