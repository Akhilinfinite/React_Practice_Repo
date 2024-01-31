import React, { useState } from 'react';

const SearchableDropdown = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter options based on the input value
    const filtered = options.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredOptions(filtered);
    setIsDropdownOpen(true);
  };

  const handleOptionClick = (option) => {
    setSearchTerm('');
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="select-dropdown">
      <div className="dropdown-header" onClick={handleDropdownToggle}>
        {selectedOption || 'Select an option'}
      </div>
      {isDropdownOpen && (
        <div className="dropdown-list">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <ul>
            {filteredOptions.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
