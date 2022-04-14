import { decode } from 'html-entities';

function ReviewResults({ result, answerType }) {
    return (
        <div className="results">
            <ol>
                {result
                    .filter(item => (
                        answerType === 'Correct' ? item.correct_answer === item.selected : item.correct_answer !== item.selected
                    ))
                    .map((correctAns) => (
                        <li key={Math.random(1)}>
                            <h4 className="questions">
                                {decode(correctAns.question)}
                            </h4>
                            <p>You answered: {decode(correctAns.selected)}</p>
                            <p>{answerType} answer: {decode(correctAns.correct_answer)}</p>
                        </li>
                    ))}
            </ol>
        </div>
    )
}

export default ReviewResults;