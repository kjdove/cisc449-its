import type { JSX } from "react";
import { topic1MCQ, topic1Code } from "./M1Questions";
import {topic1MCQAnswers} from "./M1Answers";
import { useState } from "react";
import './Topic1Quiz.css';

/**
 * NOTES:
 * - submit button logic
 * - when a question is clicked, the answers (if MCQ) should not have a filled in radio button
 * - styling for the question list on the left (active question should be highlighted, box around the question list)
 * - styling for the question section - box around text, add Question #. before text, place underneath the header, not in middle of page
 * - styling for the answer section - add for mcq, a-d next to radio buttons 
 */

export function Topic1Quiz(): JSX.Element {
    const allQuestions = [...topic1MCQ, ...topic1Code];
    const [currentQInd, setCurrentQInd] = useState<number>(0);

    const currentQuestion = allQuestions[currentQInd];

    const allAnswers = [...topic1MCQAnswers];
    const [currentAInd, setCurrentAInd] = useState<number>(0);
    const currentAnswer = allAnswers[currentAInd];

    const handleQuestionChange = (index: number) => {
        setCurrentQInd(index);
        setCurrentAInd(index);
    }

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
           <div className="t1-content">
                <div className="question">
                    {currentQuestion.question}
                </div>
                <div className="answer">
                    {/**if currentAInd is in range of MCQ questions render this, else render the other possible question type answers */}
                    {currentAnswer.options.map((option) => (
                        <div key={option.textId} className="answer-option">
                            <input type="radio" id={option.textId} name="answer" value={option.textId} />
                            <label htmlFor={option.textId}>{option.text}</label>
                        </div>
                    ))}
                </div>
                <button>Submit</button>
           </div>
            
        </div>
    )
}