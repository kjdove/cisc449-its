//Module 1 Topic 1
import type { JSX } from "react";
import { topic1MCQ, topic1Code } from "./M1Questions";
import {topic1MCQAnswers, topic1CodeAnswers} from "./M1Answers";
import { T1Code } from "./T1Code";
import { useState } from "react";
import {topic1FeedbackMCQ, topic1FeedbackCode} from "./M1Feedback";
import { useNavigate } from "react-router-dom";
import './TopicPages.css';

export function Topic1Quiz(): JSX.Element {
    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate("/module1");
    };

    const pretestResults = JSON.parse(localStorage.getItem("pretestResults") || "{}");
    const ptM1T1 = pretestResults["1.1"] || {};

    const rating = ptM1T1.studentRating || 0;
    const ptCorrect = ptM1T1.isCorrect || false;
    let startInd = 0;

    if (ptCorrect) {
        if(8 <= rating || rating <= 10) {
            startInd = 9;
        }
        else if(4 <= rating && rating <= 7) {
            startInd = 2;
        }
    }

    const allQuestions = [...topic1MCQ, ...topic1Code];
    const [currentQInd, setCurrentQInd] = useState<number>(startInd);

    const currentQuestion = allQuestions[currentQInd];
    const [currentAInd, setCurrentAInd] = useState<number>(startInd);

    const currentFeedback = topic1FeedbackMCQ.find(f => f.id === currentQuestion.id) ;
    const currentCodeFeedback = topic1FeedbackCode.find(f => f.id === currentQuestion.id);

    const [hasSubmit, setHasSubmit] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean| null>(null);

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
                    correctAnswer = codeAnswerObj.correctAnswers || "";
                    break;
                case "ordering":
                    correctAnswer = codeAnswerObj.correctOrder || "";
                    break;
            }
        }

        const correct = JSON.stringify(studentAnswer.toString()) === JSON.stringify(correctAnswer?.toString());
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
            <div className="topic-header">
                <button className="back-button"  onClick={handleBackButton}>Back to Module 1</button>
                <h2 className='topic-title'>Forms and Form.Groups</h2>
            </div>
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
                    {currentAInd >= 9 && <T1Code questionId={currentQuestion.id} studentAnswer={studentAnswers[currentQuestion.id] as string[] || []} setStudentAnswer={handleAnswerChange}/>}
                    {currentAInd >= 9 && hasSubmit && (
                        isCorrect ? 
                        <div className={`code-feedback correct-code-feedback`}>
                            Correct!
                        </div>
                        :
                        <div className={`code-feedback incorrect-code-feedback`}>
                            {currentCodeFeedback?.feedback}
                        </div>
                    )}
                </div>
                {!hasSubmit && (
                    <button onClick={handleSubmit}className="submit-button">Submit</button>
                )}
                {hasSubmit && isCorrect && (currentQInd + 1 < allQuestions.length) && (
                    <button onClick={() => handleQuestionChange(currentQInd+1)}className="next-button">Next Question</button>

                )}
                {hasSubmit && isCorrect && (currentQInd + 1 === allQuestions.length) && (
                    <div className="congrats-message">Congratulations! You have completed all the questions for this topic.</div>
                )}
                {hasSubmit && !isCorrect && (
                    <button onClick={() => handleQuestionChange(currentQInd)}className="try-again-button">Try Again</button>
                )} 
            {/*end of topic-content*/}
            </div>
        {/*end of topic-container*/}
        </div>
    )
}