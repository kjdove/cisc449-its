import type { JSX } from "react";
import {useNavigate} from 'react-router-dom';
import './Dashboard.css';
import type { TopicData } from "./Types";


export function Dashboard(): JSX.Element {
    const navigate = useNavigate();
    const m1Data = {
        ...JSON.parse(localStorage.getItem("module1topic1") || "{}"),
        ...JSON.parse(localStorage.getItem("module1topic2") || "{}"),
        ...JSON.parse(localStorage.getItem("module1topic3") || "{}"),
    }
    const m1Questions = 35;

    const m2Data = {
        ...JSON.parse(localStorage.getItem("module2topic1") || "{}"),
        ...JSON.parse(localStorage.getItem("module2topic2") || "{}"),
        ...JSON.parse(localStorage.getItem("module2topic3") || "{}"),
        ...JSON.parse(localStorage.getItem("module2topic4") || "{}"),
    }
    const m2Questions = 60;

    const m3Data = {
        ...JSON.parse(localStorage.getItem("module3topic1") || "{}"),
        ...JSON.parse(localStorage.getItem("module3topic2") || "{}"),
        ...JSON.parse(localStorage.getItem("module3topic3") || "{}"),
    }
    const m3Questions = 47;

    const moduleMasteryLevel = (data: TopicData[], questionNum: number): string => {
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

    return (
        <div className="dashboard-page">
            <h2>Dashboard</h2>
            <p>Click on a module to learn its topics.</p>

            <div className="dashboard-content">
                <div className="dashboard-left">
                    <p className="pretest-link" onClick={() => navigate("/pretest")}>Retake the pretest</p>
                    {/*circular progress bar for modules */}
                </div>
                <div className="dashboard-right">
                    <div onClick={() => navigate("/module1")} className="module1">
                       <h3>Module 1: Forms</h3>
                       <p>Mastery Level: {moduleMasteryLevel(m1Data, m1Questions)}</p>
                    </div>
                    <div onClick={() => navigate("/module2")}className="module2">
                        <h3>Module 2: Textboxes, Checkboxes, Dropdowns</h3>
                        <p>Mastery Level: {moduleMasteryLevel(m2Data, m2Questions)}</p>
                    </div>
                    <div onClick={() => navigate("/module3")}className="module3">
                        <h3>Module 3: Variations</h3>
                        <p>Mastery Level: {moduleMasteryLevel(m3Data, m3Questions)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}