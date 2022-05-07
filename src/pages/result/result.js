import "./result.css";
import "../../css/questions.css";

function Result() {
    return (
        <section className="result">
            <div className="result-title">
                <h2>Result</h2>
            </div>

            <div className="final-score">Final Score: 10 / 50</div>

            <div className="question-list">
                <div className="question-container">
                    <div className="question-header">
                        <p className="question-number">
                            <span className="question-number-text">
                                Question:
                            </span>{" "}
                            1/5
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
                        <p className="option">Disabled</p>
                    </div>
                </div>

                <div className="question-container">
                    <div className="question-header">
                        <p className="question-number">
                            <span className="question-number-text">
                                Question:
                            </span>{" "}
                            2/5
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
                        <p className="option">Incorrect</p>
                        <p className="option">Disabled</p>
                    </div>
                </div>

                <div className="question-container">
                    <div className="question-header">
                        <p className="question-number">
                            <span className="question-number-text">
                                Question:
                            </span>{" "}
                            3/5
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
                        <p className="option">Disabled</p>
                    </div>
                </div>

                <div className="question-container">
                    <div className="question-header">
                        <p className="question-number">
                            <span className="question-number-text">
                                Question:
                            </span>{" "}
                            4/5
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
                        <p className="option">Incorrect</p>
                        <p className="option">Disabled</p>
                    </div>
                </div>

                <div className="question-container">
                    <div className="question-header">
                        <p className="question-number">
                            <span className="question-number-text">
                                Question:
                            </span>{" "}
                            5/5
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
                        <p className="option">Disabled</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Result };
