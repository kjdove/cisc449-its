//Module 1 Topic 1
import type { JSX } from "react";
import { topic1MCQ, topic1Code } from "./M1Questions";
import {topic1MCQAnswers, topic1CodeAnswers} from "./M1Answers";
import { T1Code } from "./T1Code";
import { useState } from "react";
import {topic1FeedbackMCQ} from "./M1Feedback";

import './TopicPages.css';

export function Topic1Quiz(): JSX.Element {
    const allQuestions = [...topic1MCQ, ...topic1Code];
    const [currentQInd, setCurrentQInd] = useState<number>(0);

    const currentQuestion = allQuestions[currentQInd];

    const currentFeedback = topic1FeedbackMCQ.find(f => f.id === currentQuestion.id);
    const [hasSubmit, setHasSubmit] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean| null>(null);

    const [currentAInd, setCurrentAInd] = useState<number>(0);
    // const allAnswers = [...topic1MCQAnswers, topic1CodeAnswers];

    const handleQuestionChange = (index: number) => {
        setCurrentQInd(index);
        setCurrentAInd(index);
        setHasSubmit(false);
    }
    const [studentAnswers, setSA] = useState<Record<string, string | string[]>>({});
    
    const handleAnswerChange = (questionId: string, answer: string | string[]) => {
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
        else {
            const codeAnswerObj = topic1CodeAnswers.find(q => q.id === currentQuestion.id);
            switch(codeAnswerObj?.type) {
                case "fib":
                    correctAnswer = codeAnswerObj.correctAnswers;
                    break;
            }
        }

        // console.log("studentAnswer: ", studentAnswer);
        // console.log("correctAnswer: ", correctAnswer);
        // const correct = studentAnswer === correctAnswer;
        const correct = JSON.stringify(studentAnswer) === JSON.stringify(correctAnswer);
        // console.log("isCorrect: ", correct);
        setIsCorrect(correct);
        setHasSubmit(true);
        
        const savedData = JSON.parse(localStorage.getItem("module1topic1") || "{}");
        savedData[currentQuestion.id] = {
            studentAnswer,
            isCorrect: correct,
            hasSubmit: true
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
                {/* <div className="answer">
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
                </div> */}
                <div className="answer">
                    {currentAInd < 9 && topic1MCQAnswers[currentAInd].options.map((option) => {
                        const optionFeedback = currentFeedback?.options.find(
                            (f) => f.textId === option.textId
                        );

                        const selectedAnswer = studentAnswers[currentQuestion.id];
                        const correctAnswer = topic1MCQAnswers[currentAInd].correctId;

                        const shouldShowFeedback = hasSubmit && (isCorrect ||  selectedAnswer === option.textId );
                        let optionClass: string = "answer-option";

                        if (hasSubmit) {
                            if (isCorrect && option.textId === correctAnswer) {
                                optionClass += " correct-option";
                            }
                        
                            if (isCorrect && option.textId !== correctAnswer) {
                                optionClass += " incorrect-option";
                            }
                            if (!isCorrect && selectedAnswer === option.textId && option.textId !== correctAnswer) {
                                optionClass += " incorrect-option";
                            }
                        }
                        return (
                            <div key={option.textId} className={optionClass}>
                                <input
                                    type="radio"
                                    id={option.textId}
                                    name={currentQuestion.id}
                                    value={option.textId}
                                    checked={selectedAnswer === option.textId}
                                    onChange={(e) =>
                                        handleAnswerChange(currentQuestion.id, e.target.value)
                                    }
                                    disabled={hasSubmit}
                                />

                                <label htmlFor={option.textId}>
                                    {option.text}
                                </label>

                                {shouldShowFeedback && (
                                    <div className="feedback">
                                        {optionFeedback?.text}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {currentAInd >= 9 && <T1Code questionId={currentQuestion.id} studentAnswer={studentAnswers[currentQuestion.id] as string[] || []
    }
    setStudentAnswer={handleAnswerChange}/>}
                </div>
                <button onClick={handleSubmit}className="submit-button">Submit</button>
            {/*end of topic-content*/}
            </div>
        {/*end of topic-container*/}
        </div>
    )
}