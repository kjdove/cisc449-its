//module 2 topic 4
import { topic4MCQ, topic4Code } from './M2Questions';
import { topic4MCQAnswers } from './M2Answers';
import { useState } from 'react';
import { T4Code } from './T4Code';
import {type JSX} from 'react';

export function Topic4Quiz(): JSX.Element {
    const allQuestions = [...topic4MCQ, ...topic4Code];
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
        if(currentAInd < 9){
            correctAnswer = topic4MCQAnswers[currentAInd].correctId;
        }

        console.log("student: ", studentAnswer);
        console.log("correct: ", correctAnswer);

        const isCorrect = studentAnswer === correctAnswer;
        
        const savedData = JSON.parse(localStorage.getItem("module2topic4") || "{}");
        savedData[currentQuestion.id] = {
            studentAnswer,
            isCorrect
        };

        localStorage.setItem(
            "module2topic4",
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
                    {currentAInd < 9 && topic4MCQAnswers[currentAInd].options.map((option) => (
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
                    {currentAInd >= 9 && <T4Code questionId={currentQuestion.id} />}
                </div>
                <button onClick={handleSubmit}className="submit-button">Submit</button>
            </div>
        </div>
    )
}