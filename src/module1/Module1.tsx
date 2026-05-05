import type { JSX } from "react";
// import { useState } from "react";
import './Module1.css';
import { useNavigate, useParams } from "react-router-dom";
import { Topic1Quiz } from "./Topic1Quiz";
import { Topic2Quiz } from "./Topic2Quiz";
import { Topic3Quiz } from "./Topic3Quiz";

export function Module1(): JSX.Element {
    const navigate = useNavigate();
    const { topicId } = useParams();

    const handleTopicChange = (topic: string) => {
        navigate(`/module1/${topic}`);
    };

    const handleBackButton = () => {
        navigate("/module1");
    };

    return (
        <div className="m1-container">
            {!topicId && (
                <div>
                    <div className="module-header">
                        <button className="back-button" onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
                        <h1>Module 1: Forms</h1>
                    </div>
                    <p>Click on a topic title to complete its questions.</p>
                    <div className="module-content">
                        <div className="module-left">
                            <h2 className="topic-title">Topics</h2>
                            <h4 className="m1-topic-link" onClick={() => handleTopicChange("1")}>1. Forms and Form.Groups</h4>
                            <h4 className="m1-topic-link" onClick={() => handleTopicChange("2")}>2. Form Attributes and Controls</h4>
                            <h4 className="m1-topic-link" onClick={() => handleTopicChange("3")}>3. How to Use the Value Attribute</h4>
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
                <div className="topic-page">
                    <div className="topic-header">
                        <button className="back-button" onClick={handleBackButton}>Back to Module 1</button>
                        <h2>Forms and Form.Groups</h2>
                    </div>
                    <Topic1Quiz />
                </div>
            )}
            {topicId === "2" && (
                <div className="topic-page">
                    <div className="topic-header">
                        <button className="back-button"  onClick={handleBackButton}>Back to Module 2</button>
                        <h2>Form Attributes and Controls</h2>
                    </div>
                    <Topic2Quiz />
                </div>
            )}
            {topicId === "3" && (
                <div className="topic-page">
                    <div className="topic-header">
                        <button className="back-button" onClick={handleBackButton}>Back to Module 3</button>
                        <h2>How to Use the Value Attribute</h2>
                    </div>
                    <Topic3Quiz/>
                </div>
            )}
        </div>
    );
}
