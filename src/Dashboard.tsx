import type { JSX } from "react";
import {useNavigate} from 'react-router-dom';
import './Dashboard.css';

export function Dashboard(): JSX.Element {
    const navigate = useNavigate();

    return (
        <div className="dashboard-page">
            <h3>dashbaord</h3>
            <p>Click on a module to learn its topics.</p>

            <div className="dashboard-content">
                <div className="dashboard-left">
                    <p className="pretest-link" onClick={() => navigate("/pretest")}>Retake the pretest</p>
                    {/*circular progress bar for modules */}
                </div>
                <div className="dashboard-right">
                    <div onClick={() => navigate("/module1")} className="module1">
                       <h3>Module 1: Forms</h3>
                       <p>Mastery Level: {/*need a variable to track students progress of completed/expert level topics */}</p>
                    </div>
                    <div onClick={() => navigate("/module2")}className="module2">
                        <h3>Module 2: Textboxes, Checkboxes, Dropdowns</h3>
                        {/**if not unlocked say it, rather than mastery level */}
                        <p>Mastery Level: {/*need a variable to track students progress of completed/expert level topics */}</p>
                    </div>
                    <div onClick={() => navigate("/module3")}className="module3">
                        <h3>Module 3: Variations</h3>
                        {/**if not unlocked say it, rather than mastery level */}
                        <p>Mastery Level: {/*need a variable to track students progress of completed/expert level topics */}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}