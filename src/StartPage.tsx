import type { JSX } from "react";
import {useNavigate} from 'react-router-dom';

export function StartPage(): JSX.Element {
    const navigate = useNavigate();

    const handleClick = () => {
        alert('You must complete the pretest in one sitting. Once you submit your answers and ratings for a topic, you cannot go back to change them. Are you sure you want to start the pretest?');
        navigate('/pretest');
    }
    return (
        <div className="start-page">
            <h1>Welcome to the CISC 449 ITS</h1>
            <button onClick={handleClick}>Take Pretest</button>
        </div>
    );
}