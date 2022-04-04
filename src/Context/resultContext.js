import React, { useReducer, createContext, useContext } from "react";
import { resultReducer } from "../Reducer/result-reducer";

const ResultContext = createContext();

const ResultContextProvider = ({ children }) => {
  const [result, resultDispatch] = useReducer(resultReducer, []);

  return (
    <div>
      <ResultContext.Provider value={{ result, resultDispatch }}>
        {children}
      </ResultContext.Provider>
    </div>
  );
};

const useResult = () => useContext(ResultContext);

export { useResult, ResultContextProvider };
