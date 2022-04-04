import React, { useState, createContext, useContext } from "react";

const NameContext = createContext();

const NameContextProvider = ({ children }) => {
  const [name, setName] = useState('');

  return (
    <div>
      <NameContext.Provider value={{ name, setName }}>
        {children}
      </NameContext.Provider>
    </div>
  );
};

const useName = () => useContext(NameContext);

export { useName, NameContextProvider };
