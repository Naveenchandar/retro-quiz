import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import { useCategory } from "./categoryContext";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const { category } = useCategory();

  useEffect(() => {
    (async function fetchQuestions() {
      try {
        const { status, data } = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=${category.id}&difficulty=medium&type=multiple`
        );
        if (status === 200) {
          setData(data.results);
        } else {
          throw new Error('Error, Please try again');
        }
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [category]);

  return (
    <div>
      <DataContext.Provider value={{ data, setData, error }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataContextProvider };
