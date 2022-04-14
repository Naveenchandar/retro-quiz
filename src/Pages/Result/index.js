import { useState } from "react";
import { Link } from "react-router-dom";
import { decode } from 'html-entities';
import { ResultCard } from "../../Components";
import { useName, useScore, useResult } from "../../Context";
import ReviewResults from '../../Components/ReviewResults';
import "./index.css";

export function Result() {
  const { score, setScore } = useScore();
  const { name, setName } = useName();
  const { result, resultDispatch } = useResult();
  const [scoreDisplay, setScoreDisplay] = useState(true);

  return (
    <div className="result_container">
      {scoreDisplay ? (
        <ResultCard
          name={name}
          score={score}
          result={result}
          displayScore={() => setScoreDisplay(false)}
        />
      ) : (
        <div>
          <h1 className="review_heading">Review</h1>
          <h2 className="correct_answers">Correct answers</h2>
          <ReviewResults
            result={result}
            answerType={'Correct'}
          />
          <h2 className="wrong_answers">Wrong answers</h2>
          <ReviewResults
            result={result}
            answerType={'Incorrect'}
          />
          <button
            className="btn_play_again"
            onClick={() => {
              setScore(0);
              setName([]);
              resultDispatch({
                type: "REMOVED",
                payload: {},
              });
            }}
          >
            <Link to="/">Play again</Link>
          </button>
        </div>
      )}
    </div>
  );
}
