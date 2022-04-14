import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { decode } from 'html-entities';
import { useCategory, useScore, useData, useResult } from "../../Context";
import "./index.css";

export function Quiz() {
  const { category: { name } } = useCategory();
  const { score, setScore } = useScore();
  const { data, error } = useData();
  const { resultDispatch } = useResult();
  const [number, setNumber] = useState(0);
  const [selected, setSelected] = useState();

  const navigate = useNavigate();

  const handleSelect = (currentOption) => {
    const isCorrectoptionSelected = currentOption === data[number].correct_answer;
    const selectedOption = currentOption === selected;
    if (!selected) return '';
    if ((selectedOption && isCorrectoptionSelected) || isCorrectoptionSelected) return "green";
    if (selectedOption && !isCorrectoptionSelected) return "red";
  };

  const handleNext = () => {
    if (number < 9) {
      setNumber((num) => num + 1);
      setSelected("");
    } else {
      navigate("/result")
    };
    resultDispatch({
      type: "ADDED",
      payload: { current: data[number], selected: selected },
    });
  };

  if (error) {
    return <p className="error_msg">{error}</p>
  }

  return (
    <div className="container">
      <div className="quiz_container">
        {name && <h2>Category: {name}</h2>}

        {data[number] ? (
          <>
            <div className="ques_score space_between">
              <span>Question: {number + 1}/10</span>
              <span>Score: {score}</span>
            </div>
            <h2 key={data.length} className="question_heading">
              {decode(data[number].question)}
            </h2>

            <ul className="quiz_options_section">
              {[data[number].correct_answer, ...data[number].incorrect_answers].sort()
                .map((currentOption, index) => (
                  <li key={index}>
                    <button
                      disabled={selected}
                      key={currentOption}
                      className={`quiz_option ${handleSelect(currentOption)}`}
                      onClick={() => {
                        setSelected(currentOption);
                        if (currentOption === data[number].correct_answer) {
                          setScore((currentScore) => currentScore + 1);
                        }
                      }}
                    >
                      {currentOption}
                    </button>
                  </li>
                ))}
            </ul>

            <div className="space_between">
              <button className="btn_quit">
                <Link to="/result">Quit</Link>
              </button>
              <button className="btn_next" onClick={handleNext}>
                {number === 9 ? "End Quiz" : "Next"}
              </button>
            </div>
            <button className="show_results">
              <Link to="/result">Show the results</Link>
            </button>
          </>
        ) : (
          <i className="fas fa-spinner fa-6x fa-spin"></i>
        )}
      </div>
    </div>
  );
}
