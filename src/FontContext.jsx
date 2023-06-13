import { createContext, useState } from 'react';

const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState('defaultFont');

  const changeFont = (font) => {
    setFont(font);
  };

  return (
    <FontContext.Provider value={{ font, changeFont }}>
      {children}
    </FontContext.Provider>
  );
};

export default FontContext;