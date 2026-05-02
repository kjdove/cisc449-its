import type { JSX } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useState } from "react";

import './Module3.css';

export function Module3(): JSX.Element {
    const navigate = useNavigate();
    const { topicId } = useParams();


    const handleTopicChange = (topic: string) => {
        navigate(`/module3/${topic}`);
    }

    const handleBackButton = () => {
        navigate("/module3");
    }

    return (
        <div className="m3-container">
            {!topicId && (
               <div>
                    <div className="module-header">
                        <button className = "back-button" onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
                        <h1>Module 3: Variations</h1>
                    </div>
                    <p>Click on a topic title to complete its questions.</p>
                    <div className="module-content">
                        <div className="module-left">
                            <h2 className="topic-title">Topics</h2>
                            <h4 className="m3-topic-link" onClick={() => handleTopicChange("1")}>1. Textbox Variations</h4>
                            <h4 className="m3-topic-link" onClick={() => handleTopicChange("2")}>2. Checkbox Variations</h4>
                            <h4 className="m3-topic-link" onClick={() => handleTopicChange("3")}>3. Dropdown Variations</h4>
                        </div>
                        <div className="module-right">
                            <h2 className="mastery-title">Mastery</h2>
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
                    <h2>Textbox Variations</h2>
                    <button onClick={handleBackButton}>Back to Module 3</button>
                </div>
            )}
            {topicId === "2" && (
                <div>
                    <h2>Checkbox Variations</h2>
                    <button onClick={handleBackButton}>Back to Module 3</button>
                </div>
            )}
            {topicId === "3" && (
                <div>
                    <h2>Dropdown Variations</h2>
                    <button onClick={handleBackButton}>Back to Module 3</button>
                </div>
            )}


        </div>
    );
}