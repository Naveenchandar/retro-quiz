import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import { useCategory } from "./categoryContext";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const { category } = useCategory();

  useEffect(() => {
    (async function fetchQuestions() {
      try {
        const { data } = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=${category.id}&difficulty=medium&type=multiple`
        );
        setData(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [category]);

  return (
    <div>
      <DataContext.Provider value={{ data, setData }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataContextProvider };
