import React, { useState, useRef } from "react";
import "./CustomSelectDropdown.css"; 
import { Form } from 'react-bootstrap';

const CustomSelectDropdown = ({ options, onSelect, className, label }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredOptions(filtered);
    setIsDropdownOpen(true);
  };

  const handleOptionClick = (option) => {
    setSearchTerm(option);
    setIsDropdownOpen(false);
    onSelect(option, className);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100);
  };

  const handleFocus = () => {
    setIsDropdownOpen(true);
  };

  return (
    <div className={`custom-select-dropdown ${className}`} ref={dropdownRef}>
      <Form.Label>{label}</Form.Label>
      <input
        type="text"
        placeholder={`Select a ${className}`}
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {isDropdownOpen && (
        <div className="floating-table">
          <table>
            <tbody>
              {filteredOptions.map((option, index) => (
                <tr key={index} onClick={() => handleOptionClick(option)}>
                  <td>{option}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomSelectDropdown;
