//Module 1 Topic 1
import type { JSX } from "react";
import { topic1MCQ, topic1Code } from "./M1Questions";
import {topic1MCQAnswers, /*topic1CodeAnswers*/} from "./M1Answers";
import { T1Code } from "./T1Code";
import { useState } from "react";
// import {topic1FeedbackMCQ} from "./M1Feedback";

import './TopicPages.css';

export function Topic1Quiz(): JSX.Element {
    const allQuestions = [...topic1MCQ, ...topic1Code];
    const [currentQInd, setCurrentQInd] = useState<number>(0);

    const currentQuestion = allQuestions[currentQInd];

    // const currentFeedback = topic1FeedbackMCQ.find(f => f.id === currentQuestion.id);
    // console.log("Current Feedback: ", currentFeedback); 

    const [currentAInd, setCurrentAInd] = useState<number>(0);
    // const allAnswers = [...topic1MCQAnswers, topic1CodeAnswers];

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
        if(currentAInd < 9){
            correctAnswer = topic1MCQAnswers[currentAInd].correctId;
        }

        const isCorrect = studentAnswer === correctAnswer;
        
        const savedData = JSON.parse(localStorage.getItem("module1topic1") || "{}");
        savedData[currentQuestion.id] = {
            studentAnswer,
            isCorrect
        };

        localStorage.setItem(
            "module1topic1",
            JSON.stringify(savedData)
        );
        
    }//end to handleSubmit

    return (
        <div className="t1-container">
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
                    {currentAInd < 9 && topic1MCQAnswers[currentAInd].options.map((option) => (
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
                    {currentAInd >= 9 && <T1Code questionId={currentQuestion.id} />}
                </div>
                <button onClick={handleSubmit}className="submit-button">Submit</button>
           </div>
            
        </div>
    )
}