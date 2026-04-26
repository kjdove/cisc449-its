import type { JSX } from "react";
import { useState } from "react";
import './Module1.css';
import { useNavigate } from "react-router-dom";

export function Module1(): JSX.Element {
    const navigate = useNavigate();
    const [topic, setTopic] = useState<string>("");

    const handleTopicChange = (topic: string) => {
        setTopic(topic);
        navigate(`/module1/topic${topic}`);
    }

    const handleBackButton = () => {
        setTopic("");
        navigate("/module1");
    }

    return (
        <div className="module1">
            <h1>Module 1: Forms</h1>
            <h4 onClick={() => handleTopicChange("1")}>1. Forms and Form.Groups</h4>
            <h4 onClick={() => handleTopicChange("2")}>2. Form.Group Tags and Attributes</h4>
            <h4 onClick={() => handleTopicChange("3")}>3. ReadOnly Forms (Form Controls)</h4>
            <h4 onClick={() => handleTopicChange("4")}>4. How to Use Form Input Value</h4>

            {topic === "1" && (
                <div>
                    <h2>Forms and Form.Groups</h2>
                    <button onClick={handleBackButton}>Back to Module 1</button>
                </div>
            )}
        </div>
    );
}
