import type { JSX } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useState } from "react";
import './Module2.css';
import { Topic1Quiz } from "./Topic1Quiz";
import { Topic2Quiz } from "./Topic2Quiz";
import { Topic3Quiz } from "./Topic3Quiz";
import { Topic4Quiz } from "./Topic4Quiz";
import type { TopicData } from "../Types";

export function Module2(): JSX.Element {
    const navigate = useNavigate();

    const { topicId } = useParams();

    const handleTopicChange = (topic: string) => {
        navigate(`/module2/${topic}`);
    };

    const t1Data = JSON.parse(localStorage.getItem("module2topic1") || "{}");
    const t2Data = JSON.parse(localStorage.getItem("module2topic2") || "{}");
    const t3Data = JSON.parse(localStorage.getItem("module2topic3") || "{}");
    const t4Data = JSON.parse(localStorage.getItem("module2topic4") || "{}");

    const t1Questions = 14;
    const t2Questions = 14;
    const t3Questions = 11;
    const t4Questions = 21;

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
                            <h4 className="m2-topic-link" onClick={() => handleTopicChange("1")}>1. Textboxes {isCompleted(t1Data, t1Questions) ? "✓" : ""}</h4>
                            <h4 className="m2-topic-link" onClick={() => handleTopicChange("2")}>2. Checkboxes {isCompleted(t2Data, t2Questions) ? "✓" : ""}</h4>
                            <h4 className="m2-topic-link" onClick={() => handleTopicChange("3")}>3. Dropdowns {isCompleted(t3Data, t3Questions) ? "✓" : ""}</h4>
                            <h4 className="m2-topic-link" onClick={() => handleTopicChange("4")}>4. Differentiate between Textbox/Checkbox/Dropdown {isCompleted(t4Data, t4Questions) ? "✓" : ""}</h4>
                        </div>
                        <div className="module-right">
                            <h2 className="mastery-title">Mastery</h2>
                            <h4 className="mastery-level">{topicMasteryLevel(t1Data, t1Questions)}</h4>
                            <h4 className="mastery-level">{topicMasteryLevel(t2Data, t2Questions)}</h4>
                            <h4 className="mastery-level">{topicMasteryLevel(t3Data, t3Questions)}</h4>
                            <h4 className="mastery-level">{topicMasteryLevel(t4Data, t4Questions)}</h4>
                        </div>

                    </div>
                    <button className="end-button" onClick={() => navigate("/module2/endquiz")}>End of Module Quiz</button>
                </div>
            )}
            {topicId === "1" && (
                <div className="topic-page">
                    <Topic1Quiz />
                </div>
            )}
            {topicId === "2" && (
                <div className="topic-page">
                    <Topic2Quiz />
                </div>
            )}
            {topicId === "3" && (
                <div className="topic-page">
                    <Topic3Quiz />
                </div>
            )}
            {topicId === "4" && (
                <div className="topic-page">
                    <Topic4Quiz />
                </div>
            )}

        </div>
    );
}