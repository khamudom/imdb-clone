import React from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
  value?: string;
  options: string[];
  defaultValue?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface OptionValue {
  optionValue: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  value,
  options,
  defaultValue,
  onChange,
}) => {
  return (
    <>
      <select value={value} onChange={onChange} defaultValue={defaultValue}>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Dropdown;
