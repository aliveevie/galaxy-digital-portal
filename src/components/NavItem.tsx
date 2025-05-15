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
}

export const NavItem: React.FC<NavItemProps> = ({ href, label, dropdown, rightAligned = false }) => {
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
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
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
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown 
          className={`ml-1 h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </a>

      {/* Dropdown menu */}
      <div
        className={`
          absolute z-50 w-64 mt-1 rounded-md shadow-lg bg-blue-100 
          transition-all duration-200 ease-in-out
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
          ${rightAligned ? 'right-0' : 'left-0'}
        `}
      >
        <div className="py-1 rounded-md shadow-xs">
          {dropdown.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 hover:bg-blue-200 transition-colors"
            >
              <div className="text-sm font-medium text-gray-700">{item.label}</div>
              {item.description && (
                <p className="mt-1 text-xs text-gray-500">{item.description}</p>
              )}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
};
