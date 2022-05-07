import { Link } from "react-router-dom";
import "./home.css";

function Home() {
    return (
        <div className="card-grid">
            <Link to="/rules" className="card">
                <img
                    src="https://www.linkpicture.com/q/javascript_1.png"
                    alt="Image 1"
                    className="card-img"
                />
                <div className="card-content">
                    <p className="card-title">Quiz about Javascript</p>
                    <p className="card-text">Take this quiz to test yourself</p>
                    <p className="card-text">5 Questions</p>
                </div>
            </Link>
            <div className="card">
                <img
                    src="https://www.linkpicture.com/q/react_2.png"
                    alt="Image 1"
                    className="card-img"
                />
                <div className="card-content">
                    <p className="card-title">Quiz about React</p>
                    <p className="card-text">Take this quiz to test yourself</p>
                    <p className="card-text">5 Questions</p>
                </div>
            </div>
            <div className="card">
                <img
                    src="https://www.linkpicture.com/q/css.jpeg"
                    alt="Image 1"
                    className="card-img"
                />
                <div className="card-content">
                    <p className="card-title">Quiz about CSS</p>
                    <p className="card-text">Take this quiz to test yourself</p>
                    <p className="card-text">5 Questions</p>
                </div>
            </div>
        </div>
    );
}

export { Home };
