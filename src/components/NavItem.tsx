import React, { useState } from 'react';
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  if (!dropdown) {
    return (
      <li className="relative">
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
    <li className="relative" onMouseLeave={closeDropdown}>
      <button
        onClick={toggleDropdown}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      {isOpen && (
        <div 
          className={`absolute z-10 mt-1 w-screen max-w-xs transform px-2 sm:px-0 ${
            rightAligned ? 'right-0' : 'left-0'
          }`}
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-6 bg-white p-6 sm:gap-8">
              {dropdown.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                  onClick={closeDropdown}
                >
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                    {item.description && (
                      <p className="mt-1 text-xs text-gray-500">{item.description}</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </li>
  );
};
