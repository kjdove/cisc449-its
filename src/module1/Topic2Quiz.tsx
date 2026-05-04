//Module 1 Topic 2
import { useState, type JSX } from "react";
import { topic2MCQ, topic2Matching, topic2Code } from "./M1Questions";
import './TopicPages.css';

export function Topic2Quiz(): JSX.Element {
    const [currentQInd, setCurrentQInd] = useState<number>(0);
    // const [currentAInd, setCurrentAInd] = useState<number>(0);
    const allQuestions = [...topic2MCQ, ...topic2Matching, ...topic2Code];
    const currentQuestion = allQuestions[currentQInd];

    const handleQuestionChange = (index: number) => {
        setCurrentQInd(index);
        // setCurrentAInd(index);
    }
    return (
        <div className="t2-container">
            <div className="question-list">
                {allQuestions.map((q, index) => (
                        <div
                            key={q.id}
                            className={`question-link ${index === currentQInd ? "active" : ""}`}
                            onClick={() => handleQuestionChange(index)}
                        >
                            Question {index + 1}.
                        </div>
                ))}
            </div>
            <div className="topic-content">
                <div className="question">
                    {'question' in currentQuestion ? currentQuestion.question : currentQuestion.definition}
                </div>
            </div>
        </div>
    )
}