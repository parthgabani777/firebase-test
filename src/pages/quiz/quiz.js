import "./quiz.css";
import "../../css/questions.css";
import { Link } from "react-router-dom";

function Quiz() {
    return (
        <section className="main">
            <div className="quiz-title">Quiz about Javascript</div>

            <div className="question-container">
                <div className="question-header">
                    <p className="question-number">
                        <span className="question-number-text">Question:</span>{" "}
                        1/5
                    </p>
                    <p className="quiz-score">
                        <span className="quiz-score-text">Scrore:</span> 0
                    </p>
                </div>

                <div className="question-text">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quod facilis dolor consectetur doloribus odio
                        possimus commodi voluptas, a corrupti dolore.
                    </p>
                </div>

                <div className="options-group">
                    <p className="option">Option</p>
                    <p className="option correct">Correct</p>
                    <p className="option incorrect">Incorrect</p>
                    <p className="option disabled">Disabled</p>
                </div>

                <div className="question-footer">
                    <Link to="/result" className="submit-btn">
                        End test
                    </Link>
                </div>
            </div>
        </section>
    );
}

export { Quiz };
