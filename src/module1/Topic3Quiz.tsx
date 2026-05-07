//Module 1 Topic 3
import { useState, type JSX } from "react";
import './TopicPages.css';
import { topic3MCQ, topic3Code } from "./M1Questions";
import { topic3MCQAnswers } from "./M1Answers";
import { T3Code } from "./T3Code";

export function Topic3Quiz(): JSX.Element {
    const [currentQInd, setCurrentQInd] = useState<number>(0);
    const [currentAInd, setCurrentAInd] = useState<number>(0);
    const allQuestions = [...topic3MCQ, ...topic3Code];
    const currentQuestion = allQuestions[currentQInd];

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
        if(currentAInd < 5){
            correctAnswer = topic3MCQAnswers[currentAInd].correctId;
        }

        console.log("student: ", studentAnswer);
        console.log("correct: ", correctAnswer);

        const isCorrect = studentAnswer === correctAnswer;
        
        const savedData = JSON.parse(localStorage.getItem("module1topic3") || "{}");
        savedData[currentQuestion.id] = {
            studentAnswer,
            isCorrect
        };

        localStorage.setItem(
            "module1topic3",
            JSON.stringify(savedData)
        );
        
    }//end to handleSubmit

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
                    {currentAInd >= 5 && <T3Code questionId={currentQuestion.id} />}
                </div>
                <button onClick={handleSubmit} className="submit-button">Submit</button>
            </div>
        </div>
    )
}