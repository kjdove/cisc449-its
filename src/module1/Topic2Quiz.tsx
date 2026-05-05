//Module 1 Topic 2
import { useState, type JSX } from "react";
import { topic2MCQ, topic2Matching, topic2Code } from "./M1Questions";
import { topic2MCQAnswers } from "./M1Answers";
import './TopicPages.css';
import { M1Code } from "./M1Code";

export function Topic2Quiz(): JSX.Element {
    const [currentQInd, setCurrentQInd] = useState<number>(0);
    const [currentAInd, setCurrentAInd] = useState<number>(0);
    const allQuestions = [...topic2MCQ, ...topic2Matching, ...topic2Code];
    const currentQuestion = allQuestions[currentQInd];

    const handleQuestionChange = (index: number) => {
        setCurrentQInd(index);
        setCurrentAInd(index);
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
                    <strong>Question {currentQInd+1}.</strong> {currentQuestion.question}
                </div>
                <div className="answer">
                    {currentAInd < 9 && topic2MCQAnswers[currentAInd].options.map((option) => (
                        <div key={option.textId} className="answer-option">
                            <input type="radio" id={option.textId} name="answer" value={option.textId} />
                            <label htmlFor={option.textId}>{option.text}</label>
                        </div>
                    ))}
                    {currentAInd >= 9 && <M1Code questionId={currentQuestion.id} />}
                </div>
                <button className="submit-button">Submit</button>
            </div>
        </div>
    )
}