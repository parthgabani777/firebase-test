import { Routes, Route } from "react-router-dom";
import { Home } from "./home/home";
import { Quiz } from "./quiz/quiz";
import { Result } from "./result/result";
import { Rules } from "./rules/rules";

function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/rules" element={<Rules />} />
        </Routes>
    );
}

export { PageRoutes };
