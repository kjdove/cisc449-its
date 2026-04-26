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
        <div className="module3">
            {topic === "" && (
               <div>
                    <h1>Module 3</h1>
                    <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
                    <h4 className="m3-topic-link" onClick={() => handleTopicChange("1")}>1. Variations of textboxes</h4>
                    <h4 className="m3-topic-link" onClick={() => handleTopicChange("2")}>2. Variations of checkboxes</h4>
                    <h4 className="m3-topic-link" onClick={() => handleTopicChange("3")}>3. Dropdown with .map to list options</h4>
                </div>
            )}
            {topic === "1" && (
                <div>
                    <h2>Variations of textboxes</h2>
                    <button onClick={handleBackButton}>Back to Module 3</button>
                </div>
            )}
            {topic === "2" && (
                <div>
                    <h2>Variations of checkboxes</h2>
                    <button onClick={handleBackButton}>Back to Module 3</button>
                </div>
            )}
            {topic === "3" && (
                <div>
                    <h2>Dropdown with .map to list options</h2>
                    <button onClick={handleBackButton}>Back to Module 3</button>
                </div>
            )}


        </div>
    );
}