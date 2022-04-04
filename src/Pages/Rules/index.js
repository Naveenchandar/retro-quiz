import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useName } from "../../Context";
import "./index.css";

const rulesList = [
  { id: 1, rule: 'You will be presented with a set of 10 questions.' },
  { id: 2, rule: 'Each question will have multiple choices.' },
  { id: 3, rule: 'Each question has only one correct answer.' },
  { id: 4, rule: '+1 for correct answer.' },
  { id: 5, rule: 'No negative marking for incorrect answer' },
  { id: 6, rule: 'You can answer a question only once.' },
  { id: 7, rule: 'To move to the Next question, click on the Next button.' },
  { id: 8, rule: 'To quit, click on the Quit button.' },
  { id: 9, rule: ' To view the results, click on show results button.' }
]

export function Rules() {
  const { name, setName } = useName();
  const [nameError, setNameError] = useState('');
  const navigate = useNavigate();

  const loadRules = () => {
    return (
      <div className="rules ">
        <h1 className="rules_heading">QUIZ RULES</h1>
        {rulesList.map(({ id, rule }) => (
          <p key={id}>* {rule}</p>
        ))}
      </div>
    )
  }

  const onSubmitInput = (event) => {
    event.preventDefault();
    debugger
    if (name) {
      setNameError('');
      navigate('/quiz');
    } else {
      setNameError('Please enter name');
    }
  }

  return (
    <div className="rules_container">
      {loadRules()}
      <div>
        <form className="name_container">
          <label htmlFor="username">Enter your name:</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => {
              setNameError('');
              setName(e.target.value);
            }}
          />
          {nameError && <p className="error_name">{nameError}</p>}
          <button
            disabled={nameError}
            className="submit"
            onClick={(e) => onSubmitInput(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
