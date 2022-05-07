import { Link } from "react-router-dom";
import "../css/header.css";

function Header() {
    return (
        <header>
            <Link to="/">
                <h2 className="main-title">Quizzy</h2>
            </Link>
        </header>
    );
}

export { Header };
