import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const SearchableSelect = ({ label, value, options, onChange, placeholder, required }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-semibold text-white mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="input-field cursor-pointer flex items-center justify-between hover:shadow-lg hover:shadow-cyan-400/20"
      >
        <span className={value ? 'text-white' : 'text-gray-500'}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={20}
          className={`text-cyan-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-zinc-900 rounded-xl shadow-2xl shadow-cyan-500/20 border-2 border-cyan-400/30 max-h-80 overflow-hidden">
          <div className="p-3 border-b border-gray-800">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-800 bg-zinc-800 text-white rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all placeholder-gray-500"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(option)}
                  className={`px-4 py-3 cursor-pointer transition-all text-gray-200 ${
                    value === option
                      ? 'bg-gradient-to-r from-cyan-900/50 to-blue-900/50 text-cyan-400 font-semibold border-l-4 border-cyan-400'
                      : 'hover:bg-zinc-800/60 hover:pl-5'
                  }`}
                >
                  {option}
                </div>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-gray-400">
                No options found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;
