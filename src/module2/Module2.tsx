import type { JSX } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useState } from "react";

import './Module2.css';


export function Module2(): JSX.Element {
    const navigate = useNavigate();

    const { topicId } = useParams();

    const handleTopicChange = (topic: string) => {
        navigate(`/module2/${topic}`);
    };

    const handleBackButton = () => {
        navigate("/module2");
    }

    return (
        <div className="m2-container">
            {!topicId && (
                <div>
                    <div className="module-header">
                        <button className = "back-button" onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
                        <h1>Module 2: Textboxes, Checkboxes, Dropdowns</h1>
                    </div>
                    <p>Click on a topic title to complete its questions.</p>

                    <div className="module-content">
                        <div className="module-left">
                            <h2 className="topic-title">Topics</h2>
                            <h4 className="m2-topic-link" onClick={() => handleTopicChange("1")}>1. Textboxes</h4>
                            <h4 className="m2-topic-link" onClick={() => handleTopicChange("2")}>2. Checkboxes</h4>
                            <h4 className="m2-topic-link" onClick={() => handleTopicChange("3")}>3. Dropdowns</h4>
                            <h4 className="m2-topic-link" onClick={() => handleTopicChange("4")}>4. Differentiate between Textbox/Checkbox/Dropdown </h4>
                        </div>
                        <div className="module-right">
                            <h2 className="mastery-title">Mastery</h2>
                            <h4 className="mastery-level">mastery level palceholder</h4>
                            <h4 className="mastery-level">mastery level palceholder</h4>
                            <h4 className="mastery-level">mastery level palceholder</h4>
                            <h4 className="mastery-level">mastery level palceholder</h4>
                        </div>

                    </div>
                    <button className="end-button">End of Module Quiz</button>
                </div>
            )}
            {topicId === "1" && (
                <div>
                    <h2>Textboxes</h2>
                    <button onClick={handleBackButton}>Back to Module 2</button>
                </div>
            )}
            {topicId === "2" && (
                <div>
                    <h2>Checkboxes</h2>
                    <button onClick={handleBackButton}>Back to Module 2</button>
                </div>
            )}
            {topicId === "3" && (
                <div>
                    <h2>Dropdowns</h2>
                    <button onClick={handleBackButton}>Back to Module 2</button>
                </div>
            )}
            {topicId === "4" && (
                <div>
                    <h2>Differentiate between Textbox/Checkbox/Dropdown</h2>
                    <button onClick={handleBackButton}>Back to Module 2</button>
                </div>
            )}

        </div>
    );
}