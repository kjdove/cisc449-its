import type { JSX } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useState } from "react";
import './Module3.css';
import { Topic1Quiz } from "./Topic1Quiz";
import { Topic2Quiz } from "./Topic2Quiz";
import { Topic3Quiz } from "./Topic3Quiz";
import type { TopicData } from "../Types";

export function Module3(): JSX.Element {
    const navigate = useNavigate();
    const { topicId } = useParams();

    const handleTopicChange = (topic: string) => {
        navigate(`/module3/${topic}`);
    }
    const t1Data = JSON.parse(localStorage.getItem("module3topic1") || "{}");
    const t2Data = JSON.parse(localStorage.getItem("module3topic2") || "{}");
    const t3Data = JSON.parse(localStorage.getItem("module3topic3") || "{}");

    const t1Questions = 17;    
    const t2Questions = 21;
    const t3Questions = 9;

    const topicMasteryLevel = (data: TopicData[], questionNum: number): string => {
        const totalCorrect = Object.values(data).filter((question: TopicData) => question.isCorrect).length;
        const mastery = Math.round(totalCorrect / questionNum * 100);
        if (mastery >= 90) {
            return "Advanced";
        } else if (mastery >= 70) {
            return "Intermediate";
        } else {
            return "Beginner";
        }
    } 

    const isCompleted = (data: TopicData[], questionNum: number): boolean => {
        return Object.values(data).filter((question: TopicData) => question.isCorrect).length === questionNum;
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
                            <h4 className="m3-topic-link" onClick={() => handleTopicChange("1")}>1. Textbox Variations {isCompleted(t1Data, t1Questions) ? "✓" : ""}</h4>
                            <h4 className="m3-topic-link" onClick={() => handleTopicChange("2")}>2. Checkbox Variations {isCompleted(t2Data, t2Questions) ? "✓" : ""}</h4>
                            <h4 className="m3-topic-link" onClick={() => handleTopicChange("3")}>3. Dropdown Variations {isCompleted(t3Data, t3Questions) ? "✓" : ""}</h4>
                        </div>
                        <div className="module-right">
                            <h2 className="mastery-title">Mastery</h2>
                            <h4 className="mastery-level">{topicMasteryLevel(t1Data, t1Questions)}</h4>
                            <h4 className="mastery-level">{topicMasteryLevel(t2Data, t2Questions)}</h4>
                            <h4 className="mastery-level">{topicMasteryLevel(t3Data, t3Questions)}</h4>
                        </div>
                    </div>
                    <button onClick={() => navigate("/module3/endquiz")}className="end-button">End of Module Quiz</button>
                </div>
            )}
            {topicId === "1" && (
                <div className="topic-page">
                    <Topic1Quiz/>
                </div>
            )}
            {topicId === "2" && (
                <div className="topic-page">
                    <Topic2Quiz/>
                </div>
            )}
            {topicId === "3" && (
                <div className="topic-page">
                    <Topic3Quiz/>
                </div>
            )}


        </div>
    );
}