import React, { useState, createContext, useContext } from "react";

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState({
    id: 0, name: ''
  });

  return (
    <div>
      <CategoryContext.Provider value={{ category, setCategory }}>
        {children}
      </CategoryContext.Provider>
    </div>
  );
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryContextProvider };
