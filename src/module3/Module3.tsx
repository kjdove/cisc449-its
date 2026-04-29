import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import './Module3.css';

export function Module3(): JSX.Element {
    const navigate = useNavigate();

    const [topic, setTopic] = useState<string>("");

    const handleTopicChange = (topic: string) => {
        setTopic(topic);
        navigate(`/module3/topic${topic}`);
    }

    const handleBackButton = () => {
        setTopic("");
        navigate("/module3");
    }

    return (
        <div className="m3-container">
            {topic === "" && (
               <div>
                    <h1>Module 3</h1>
                    <button className = "back-button" onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
                    <h4 className="m3-topic-link" onClick={() => handleTopicChange("1")}>1. Textbox Variations</h4>
                    <h4 className="m3-topic-link" onClick={() => handleTopicChange("2")}>2. Checkbox Variations</h4>
                    <h4 className="m3-topic-link" onClick={() => handleTopicChange("3")}>3. Dropdown Variations</h4>
                    <button className="end-button">End of Module Quiz</button>
                </div>
            )}
            {topic === "1" && (
                <div>
                    <h2>Textbox Variations</h2>
                    <button onClick={handleBackButton}>Back to Module 3</button>
                </div>
            )}
            {topic === "2" && (
                <div>
                    <h2>Checkbox Variations</h2>
                    <button onClick={handleBackButton}>Back to Module 3</button>
                </div>
            )}
            {topic === "3" && (
                <div>
                    <h2>Dropdown Variations</h2>
                    <button onClick={handleBackButton}>Back to Module 3</button>
                </div>
            )}


        </div>
    );
}