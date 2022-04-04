import { ResultCard } from "../../Components";
import { useScore, useResult, useName } from "../../Context";
import "./index.css";

export function Result() {
  const { score, setScore } = useScore();
  const { name, setName } = useName();
  const { result, resultDispatch } = useResult();

  const playAgain = () => {
    setScore(0);
    setName('');
    resultDispatch({
      type: "REMOVED",
      payload: {},
    });
  }

  return (
    <div className="result_container">
      <ResultCard
        name={name}
        score={score}
        result={result}
        dispatchResult={playAgain}
      />
    </div>
  );
}
