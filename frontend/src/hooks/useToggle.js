import { useState } from 'react';

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (v) => {
    setValue((currentValue) => (typeof v === 'boolean' ? v : !currentValue));
  };

  return [value, toggleValue];
};

export { useToggle };
