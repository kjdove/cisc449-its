//module 3 topic 3
import type { JSX } from "react";
import {useState} from "react";
import { M3Code } from "./M3Code";
import { topic3MCQAnswers } from "./M3Answers";
import { topic3MCQ, topic3Code } from "./M3Questions";

export function Topic3Quiz(): JSX.Element{
    const allQuestions = [...topic3MCQ, ...topic3Code];
    const [currentQInd, setCurrentQInd] = useState<number>(0);
    const currentQuestion = allQuestions[currentQInd];
    const [currentAInd, setCurrentAInd] = useState<number>(0);

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
                    {currentAInd >= 5 && <M3Code questionId={currentQuestion.id} />}
                </div>
                <button className="submit-button">Submit</button>
            </div>
        </div>
    )
}