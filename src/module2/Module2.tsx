import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import './Module2.css';


export function Module2(): JSX.Element {
    const navigate = useNavigate();

    const [topic, setTopic] = useState<string>("");

    const handleTopicChange = (topic: string) => {
        setTopic(topic);
        navigate(`/module2/topic${topic}`);
    }

    const handleBackButton = () => {
        setTopic("");
        navigate("/module2");
    }

    return (
        <div className="module2">
            {topic === "" && (
                <div>
                    <h1>Module 2</h1>
                    <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
                    <h4 className="m2-topic-link" onClick={() => handleTopicChange("1")}>1. Textboxes</h4>
                    <h4 className="m2-topic-link" onClick={() => handleTopicChange("2")}>2. Checkboxes</h4>
                    <h4 className="m2-topic-link" onClick={() => handleTopicChange("3")}>3. Dropdowns</h4>
                    <h4 className="m2-topic-link" onClick={() => handleTopicChange("4")}>4. Differentiate between textbox/checkbox/dropdown </h4>


                </div>
            )}
            {topic === "1" && (
                <div>
                    <h2>Textboxes</h2>
                    <button onClick={handleBackButton}>Back to Module 2</button>
                </div>
            )}
            {topic === "2" && (
                <div>
                    <h2>Checkboxes</h2>
                    <button onClick={handleBackButton}>Back to Module 2</button>
                </div>
            )}
            {topic === "3" && (
                <div>
                    <h2>Dropdowns</h2>
                    <button onClick={handleBackButton}>Back to Module 2</button>
                </div>
            )}
            {topic === "4" && (
                <div>
                    <h2>Differentiate between textbox/checkbox/dropdown</h2>
                    <button onClick={handleBackButton}>Back to Module 2</button>
                </div>
            )}

        </div>
    );
}