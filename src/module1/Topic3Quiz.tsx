//Module 1 Topic 3
import { useState, type JSX } from "react";
import './TopicPages.css';
import { topic3MCQ, topic3Code } from "./M1Questions";
import { topic3MCQAnswers } from "./M1Answers";
import { M1Code } from "./M1Code";

export function Topic3Quiz(): JSX.Element {
    const [currentQInd, setCurrentQInd] = useState<number>(0);
    const [currentAInd, setCurrentAInd] = useState<number>(0);
    const allQuestions = [...topic3MCQ, ...topic3Code];
    const currentQuestion = allQuestions[currentQInd];

    const handleQuestionChange = (index: number) => {
        setCurrentQInd(index);
        setCurrentAInd(index);
    }

    return (
        <div className="t3-container">
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
                    <strong>Question {currentQInd+1}.</strong> {currentQuestion.question}
                </div>
                <div className="answer">
                    {currentAInd < 5 && topic3MCQAnswers[currentAInd].options.map((option) => (
                        <div key={option.textId} className="answer-option">
                            <input type="radio" id={option.textId} name="answer" value={option.textId} />
                            <label htmlFor={option.textId}>{option.text}</label>
                        </div>
                    ))}
                    {currentAInd >= 5 && <M1Code questionId={currentQuestion.id} />}
                </div>
            </div>
        </div>
    )
}