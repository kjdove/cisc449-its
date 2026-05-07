//module 3 topic 2
import type { JSX } from "react";
import {useState} from "react";
import { T2Code } from "./T2Code";
import { topic2MCQAnswers } from "./M3Answers";
import { topic2MCQ, topic2Code } from "./M3Questions";

export function Topic2Quiz(): JSX.Element {
    const allQuestions = [...topic2MCQ, ...topic2Code];
    const [currentQInd, setCurrentQInd] = useState<number>(0);
    const currentQuestion = allQuestions[currentQInd];

    const [currentAInd, setCurrentAInd] = useState<number>(0);

    const handleQuestionChange = (index: number) => {
        setCurrentQInd(index);
        setCurrentAInd(index);
    }

    const [studentAnswers, setSA] = useState<Record<string, string>>({});
    
    const handleAnswerChange = (questionId: string, answer: string) => {
        setSA((prev) => ({
            ...prev,
            [questionId]: answer
        }));
    }

    const handleSubmit = () => {
        const studentAnswer = studentAnswers[currentQuestion.id]|| "";

        let correctAnswer;
        if(currentAInd < 8){
            correctAnswer = topic2MCQAnswers[currentAInd].correctId;
        }

        const isCorrect = studentAnswer === correctAnswer;
        
        const savedData = JSON.parse(localStorage.getItem("module3topic2") || "{}");
        savedData[currentQuestion.id] = {
            studentAnswer,
            isCorrect
        };

        localStorage.setItem(
            "module3topic2",
            JSON.stringify(savedData)
        );
        
    }//end to handleSubmit
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
                            <input
                                type="radio"
                                id={option.textId}
                                name={currentQuestion.id}
                                value={option.textId}
                                checked={studentAnswers[currentQuestion.id] === option.textId}
                                onChange={(e) =>
                                    handleAnswerChange(currentQuestion.id, e.target.value)
                                }
                            />
                            <label htmlFor={option.textId}>{option.text}</label>
                        </div>
                    ))}
                    {currentAInd >= 9 && <T2Code questionId={currentQuestion.id} />}
                </div>
                <button onClick={handleSubmit} className="submit-button">Submit</button>
            </div>
        </div>
    )
}