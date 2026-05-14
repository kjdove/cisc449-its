import type { JSX } from "react";
import {useNavigate} from 'react-router-dom';

export function StartPage(): JSX.Element {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/pretest');
    }
    return (
        <div className="start-page">
            <h1>Welcome to the CISC 449 ITS:</h1>
            <h2>Textboxes, Checkboxes, and Dropdowns</h2>
            <br/>
            <p>Click the button below to begin with the pretest.</p>
            <button className="submit-button" onClick={handleClick}>Take Pretest</button>
        </div>
    );
}