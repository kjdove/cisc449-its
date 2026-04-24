import type { JSX } from "react";
import {useNavigate} from 'react-router-dom';

export function Pretest(): JSX.Element {
    const navigate = useNavigate();

    return (
        <div className="pretest-page">
            <h1>Pretest Page</h1>
            <button onClick={() => navigate('/')}>Back to Start Page</button>
        </div>
    );
}