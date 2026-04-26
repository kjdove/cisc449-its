import type { JSX } from "react";
import {useNavigate} from 'react-router-dom';

export function StartPage(): JSX.Element {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/pretest');
    }
    return (
        <div className="start-page">
            <h1>Welcome to the CISC 449 ITS</h1>
            <button onClick={handleClick}>Take Pretest</button>
        </div>
    );
}