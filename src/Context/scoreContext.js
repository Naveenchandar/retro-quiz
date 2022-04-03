import React, { useState, createContext, useContext } from "react";

const ScoreContext = createContext();

const ScoreContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  return (
    <div>
      <ScoreContext.Provider value={{ score, setScore }}>
        {children}
      </ScoreContext.Provider>
    </div>
  );
};

const useScore = () => useContext(ScoreContext);

export { useScore, ScoreContextProvider };
