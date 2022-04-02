import React, { useState, createContext, useContext } from "react";

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

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
