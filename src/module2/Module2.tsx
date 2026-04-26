import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import './Module2.css';


export function Module2(): JSX.Element {
    const navigate = useNavigate();


    return (
        <div className="module2">
            <h1>Module 2</h1>
            <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>

        </div>
    );
}