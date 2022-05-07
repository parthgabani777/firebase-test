import { Link } from "react-router-dom";
import "./rules.css";

function Rules() {
    return (
        <div className="rule">
            <div className="quiz-title">Quiz about Javascript</div>
            <div className="rule-title">Rules: -</div>

            <div className="rule-list">
                <p>
                    <span>1.</span> Quiz Container 5 Questions.
                </p>
                <p>
                    <span>2.</span> Compelete Quiz in 5 minutes.
                </p>
                <p>
                    <span>3.</span> Each Question Weight 10 marks.
                </p>
                <p>
                    <span>4.</span> Correct answer displayed by green color and
                    wrong answer by red color.
                </p>
                <Link to="/quiz" className="btn quiz-start-btn">
                    Start Quiz
                </Link>
            </div>
        </div>
    );
}

export { Rules };
