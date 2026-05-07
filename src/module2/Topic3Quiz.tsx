//module 2 topic 3
import { topic3MCQ, topic3Code } from './M2Questions';
import { topic3MCQAnswers } from './M2Answers';
import { useState } from 'react';
import { T3Code } from './T3Code';
import {type JSX} from 'react';

export function Topic3Quiz(): JSX.Element {
    const allQuestions = [...topic3MCQ, ...topic3Code];
    const [currentQInd, setCurrentQInd] = useState<number>(0);
    const currentQuestion = allQuestions[currentQInd];
    const [currentAInd, setCurrentAInd] = useState<number>(0);
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
        if(currentAInd < 6){
            correctAnswer = topic3MCQAnswers[currentAInd].correctId;
        }

        const isCorrect = studentAnswer === correctAnswer;
        
        const savedData = JSON.parse(localStorage.getItem("module2topic3") || "{}");
        savedData[currentQuestion.id] = {
            studentAnswer,
            isCorrect
        };

        localStorage.setItem(
            "module2topic3",
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
                        onClick={() => {
                            setCurrentQInd(index);
                            setCurrentAInd(index);
                        }}
                    >
                        Question {index + 1}.
                    </div>
                ))}
            </div>
            <div className="topic-content">
                <div className="question">
                    <strong>Question {currentQInd + 1}.</strong> {currentQuestion.question}
                </div>
                <div className="answer">
                    {/**if currentAInd is in range of MCQ questions render this, else render the other possible question type answers */}
                    {currentAInd < 6 && topic3MCQAnswers[currentAInd].options.map((option) => (
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
                    {currentAInd >= 6 && <T3Code questionId={currentQuestion.id}/>}
                </div>
                <button onClick={handleSubmit}className="submit-button">Submit</button>
            </div>
        </div>
    )
}