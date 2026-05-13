import type { JSX } from "react";
// import { useState } from "react";
import './Module1.css';
import { useNavigate, useParams } from "react-router-dom";
import { Topic1Quiz } from "./Topic1Quiz";
import { Topic2Quiz } from "./Topic2Quiz";
import { Topic3Quiz } from "./Topic3Quiz";
import type { TopicData } from "../Types";

export function Module1(): JSX.Element {
    const navigate = useNavigate();
    const { topicId } = useParams();

    const handleTopicChange = (topic: string) => {
        navigate(`/module1/${topic}`);
    };

    const t1Data = JSON.parse(localStorage.getItem("module1topic1") || "{}");
    const t2Data = JSON.parse(localStorage.getItem("module1topic2") || "{}");
    const t3Data = JSON.parse(localStorage.getItem("module1topic3") || "{}");

    const t1Questions = 13;    
    const t2Questions = 12;
    const t3Questions = 10;

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
                            <h4 className="m1-topic-link" onClick={() => handleTopicChange("1")}>1. Forms and Form.Groups {isCompleted(t1Data, t1Questions) ? "✓" : ""}</h4>
                            <h4 className="m1-topic-link" onClick={() => handleTopicChange("2")}>2. Form Attributes and Controls {isCompleted(t2Data, t2Questions) ? "✓" : ""}</h4>
                            <h4 className="m1-topic-link" onClick={() => handleTopicChange("3")}>3. How to Use the Value Attribute {isCompleted(t3Data, t3Questions) ? "✓" : ""}</h4>
                        </div>
                        <div className="module-right">
                            <h2 className="mastery-title">Mastery</h2>
                            <h4 className="mastery-level">{topicMasteryLevel(t1Data, t1Questions)}</h4>
                            <h4 className="mastery-level">{topicMasteryLevel(t2Data, t2Questions)}</h4>
                            <h4 className="mastery-level">{topicMasteryLevel(t3Data, t3Questions)}</h4>
                        </div>
                    </div>
                    <button className="end-button">End of Module Quiz</button>
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
                    <Topic3Quiz/>
                </div>
            )}
        </div>
    );
}
