import type { JSX } from "react";
import { useState } from "react";
import './Module1.css';
import { useNavigate } from "react-router-dom";


export function Module1(): JSX.Element {
    const navigate = useNavigate();
    const [topic, setTopic] = useState<string>("");
    const url = window.location.href;
    console.log('url', url);
    
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
            {topic === "" && (
                <div>
                    <h1>Module 1: Forms</h1>
                    <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
                    <h4 className="m1-topic-link" onClick={() => handleTopicChange("1")}>1. Forms and Form.Groups</h4>
                    <h4 className="m1-topic-link" onClick={() => handleTopicChange("2")}>2. Form.Group Tags and Attributes</h4>
                    <h4 className="m1-topic-link" onClick={() => handleTopicChange("3")}>3. ReadOnly Forms (Form Controls)</h4>
                    <h4 className="m1-topic-link" onClick={() => handleTopicChange("4")}>4. How to Use Form Input Value</h4>
                </div>
            )}

            {topic === "1" && (
                <div>
                    <h2>Forms and Form.Groups</h2>
                    <button onClick={handleBackButton}>Back to Module 1</button>
                    <p>Review the <a target="_blank" href="https://frontend-fun.github.io/react-hooks-typescript-tome/4-state/forms.html#what-are-forms">Textbook</a></p>
                    
                </div>
            )}
            {topic === "2" && (
                <div>
                    <h2>Form.Group Tags and Attributes</h2>
                    <button onClick={handleBackButton}>Back to Module 1</button>
                </div>
            )}
            {topic === "3" && (
                <div>
                    <h2>ReadOnly Forms (Form Controls)</h2>
                    <button onClick={handleBackButton}>Back to Module 1</button>
                </div>
            )}
            {topic === "4" && (
                <div>
                    <h2>How to Use Form Input Value</h2>
                    <button onClick={handleBackButton}>Back to Module 1</button>
                </div>
            )}
        </div>
    );
}
