import type { JSX } from "react";
import { useState } from "react";
import './Module1.css';
import { useNavigate } from "react-router-dom";
// import { topic1Code, topic1MCQ, topic2Code, topic2MCQ, topic3Code, topic3MCQ } from "./M1Questions";


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
        <div className="m1-container">
            {topic === "" && (
                <div >
                    <div className="m1-header">
                        <button className="back-button" onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
                        <h1>Module 1: Forms</h1>
                    </div>
                    <p>Click on a topic title to complete its questions.</p>
                    {/* <p>Review <a target="_blank" href="https://frontend-fun.github.io/react-hooks-typescript-tome/4-state/state.html#the-usestate-concept">useStates</a>.</p>
                    <p>Read over the <a target="_blank" href="https://frontend-fun.github.io/react-hooks-typescript-tome/4-state/forms.html#what-are-forms">Forms</a> section of the textbook before completing the questions in the below topics.</p> */}
                    <div className="m1-content">
                        <div className="m1-left">
                            <h2 className="topic-title">Topics</h2>
                            <h4 className="m1-topic-link" onClick={() => handleTopicChange("1")}>1. Forms and Form.Groups</h4>
                            <h4 className="m1-topic-link" onClick={() => handleTopicChange("2")}>2. Form Attributes and Controls</h4>
                            <h4 className="m1-topic-link" onClick={() => handleTopicChange("3")}>3. How to Use the Value Attribute</h4>
                        </div>
                        <div className="m1-right">
                            <h2 className="mastery-title">Mastery</h2>
                            <h4 className="mastery-level">mastery level palceholder</h4>
                            <h4 className="mastery-level">mastery level palceholder</h4>
                            <h4 className="mastery-level">mastery level palceholder</h4>


                        </div>
                    </div>
                    <button className="end-button">End of Module Quiz</button>
                    <p>Placeholder for note if u want to include it</p>
                </div>
            )}

            {topic === "1" && (
                <div>
                    <h2>Forms and Form.Groups</h2>
                    <button onClick={handleBackButton}>Back to Module 1</button>
                    
                </div>
            )}
            {topic === "2" && (
                <div>
                    <h2>Form Attributes and Controls</h2>
                    <button onClick={handleBackButton}>Back to Module 1</button>

                </div>
            )}
            {topic === "3" && (
                <div>
                    <h2>How to Use the Value Attribute</h2>
                    <button onClick={handleBackButton}>Back to Module 1</button>
                </div>
            )}
        </div>
    );
}
