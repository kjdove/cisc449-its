//module 2 topic 4
import { topic4MCQ, topic4Code } from './M2Questions';
import { topic4MCQAnswers, topic4CodeAnswers } from './M2Answers';
import { useState } from 'react';
import { T4Code } from './T4Code';
import {type JSX} from 'react';
import {topic4FeedbackMCQ} from "./M2Feedback";


export function Topic4Quiz(): JSX.Element {
    const allQuestions = [...topic4MCQ, ...topic4Code];
    const [currentQInd, setCurrentQInd] = useState<number>(0);
    const currentQuestion = allQuestions[currentQInd];
    const [currentAInd, setCurrentAInd] = useState<number>(0);

    
    const currentFeedback = topic4FeedbackMCQ.find(f => f.id === currentQuestion.id);
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
        if(currentAInd < 15){
            correctAnswer = topic4MCQAnswers[currentAInd].correctId;
        }
        else {
            const codeAnswerObj = topic4CodeAnswers.find(q => q.id === currentQuestion.id);
            switch(codeAnswerObj?.type) {
                case "fib":
                    correctAnswer = codeAnswerObj.correctAnswers || "";
                    break;
                case "mcq":
                    correctAnswer = codeAnswerObj.correctId || "";
                    break;
                case "ordering":
                    correctAnswer = codeAnswerObj.correctOrder || "";
                    break;
            }
        }

        const correct = JSON.stringify(studentAnswer.toString()) === JSON.stringify(correctAnswer.toString());
        setIsCorrect(correct);
        setHasSubmit(true);

        const savedData = JSON.parse(localStorage.getItem("module2topic4") || "{}");
        savedData[currentQuestion.id] = {
            studentAnswer,
            isCorrect: correct,
            hasSubmit: true
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
                    {currentAInd < 15 && topic4MCQAnswers[currentAInd].options.map((option) => {
                        const optionFeedback = currentFeedback?.options.find(
                            (f) => f.textId === option.textId
                        );

                        const selectedAnswer = studentAnswers[currentQuestion.id];
                        const correctAnswer = topic4MCQAnswers[currentAInd].correctId;

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

                    {currentAInd >= 15 && <T4Code  questionId={currentQuestion.id} studentAnswer={studentAnswers[currentQuestion.id] as string[] || []} setStudentAnswer={handleAnswerChange}/>}
                </div>
                <button onClick={handleSubmit}className="submit-button">Submit</button>
            </div>
        </div>
    )
}