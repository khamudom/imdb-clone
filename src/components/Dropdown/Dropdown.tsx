import React from 'react';

type DropdownProps = {
  options: string[];
  onSelect?: (selectedOption: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = React.useState<string>('');

  React.useEffect(() => {
    const storedOption = localStorage.getItem('selectedOption');
    if (storedOption) {
      setSelectedOption(JSON.parse(storedOption));
    }
  }, [options, onSelect]);

  const handleOnSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value;
    setSelectedOption(optionValue);
    localStorage.setItem('selectedOption', JSON.stringify(optionValue));
    if (onSelect) {
      onSelect(optionValue);
    }
  };

  return (
    <>
      <select value={selectedOption} onChange={handleOnSelect}>
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
