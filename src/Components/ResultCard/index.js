import { Link } from "react-router-dom"

export function ResultCard({ name, score, result, displayScore, dispatchResult }) {
    return (
        <div className="user_result">
            <h1>Score Card</h1>
            <p>Name: {name}</p>
            <p>Your score: {score}</p>
            <p>Correct Answers: {score}</p>
            <p>Wrong Answers: {result.length - score}</p>
            <p>Not attempted: {10 - result.length}</p>
            <p>Accuracy: {score ? `${Math.round((score * 100) / result.length)}%` : 0}</p>
            <button
                className="btn_quiz_primary"
                onClick={dispatchResult}
            >
                <Link to="/">Play again</Link>
            </button>
        </div>
    )
}