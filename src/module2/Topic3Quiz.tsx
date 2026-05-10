//module 2 topic 3
import { topic3MCQ, topic3Code } from './M2Questions';
import { topic3CodeAnswers, topic3MCQAnswers } from './M2Answers';
import { useState } from 'react';
import { T3Code } from './T3Code';
import {type JSX} from 'react';
import {topic3FeedbackMCQ} from "./M2Feedback";


export function Topic3Quiz(): JSX.Element {
    const allQuestions = [...topic3MCQ, ...topic3Code];
    const [currentQInd, setCurrentQInd] = useState<number>(0);
    const currentQuestion = allQuestions[currentQInd];
    const [currentAInd, setCurrentAInd] = useState<number>(0);
    const currentFeedback = topic3FeedbackMCQ.find(f => f.id === currentQuestion.id);
    const [hasSubmit, setHasSubmit] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean| null>(null);


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
        if(currentAInd < 6){
            correctAnswer = topic3MCQAnswers[currentAInd].correctId;
        }
        else {
            const codeAnswerObj = topic3CodeAnswers.find(q => q.id === currentQuestion.id);
            switch(codeAnswerObj?.type) {
                case "fib":
                    correctAnswer = codeAnswerObj.correctAnswers;
                    break;
                case "mcq":
                    correctAnswer = codeAnswerObj.correctId;
                    break;
                case "ordering":
                    correctAnswer = codeAnswerObj.correctOrder;
                    break;
            }
        }

        const correct = JSON.stringify(studentAnswer.toString()) === JSON.stringify(correctAnswer.toString());
        setIsCorrect(correct);
        setHasSubmit(true);

        const savedData = JSON.parse(localStorage.getItem("module2topic3") || "{}");
        savedData[currentQuestion.id] = {
            studentAnswer,
            isCorrect: correct,
            hasSubmit: true
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
                        onClick={() => handleQuestionChange(index)}
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
                    {currentAInd < 6 && topic3MCQAnswers[currentAInd].options.map((option) => {
                        const optionFeedback = currentFeedback?.options.find(
                            (f) => f.textId === option.textId
                        );

                        const selectedAnswer = studentAnswers[currentQuestion.id];
                        const correctAnswer = topic3MCQAnswers[currentAInd].correctId;

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

                    {currentAInd >= 6 && <T3Code questionId={currentQuestion.id} studentAnswer={studentAnswers[currentQuestion.id] as string[] || []} setStudentAnswer={handleAnswerChange}/>}
                </div>
                <button onClick={handleSubmit}className="submit-button">Submit</button>
            </div>
        </div>
    )
}