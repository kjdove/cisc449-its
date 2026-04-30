import type { JSX } from "react";
import { topic1MCQ, topic1Code } from "./M1Questions";
import { useState } from "react";
import './Topic1Quiz.css';

export function Topic1Quiz(): JSX.Element {
   const allQuestions = [...topic1MCQ, ...topic1Code];
   const [currentInd, setCurrentInd] = useState<number>(0);

   const currentQuestion = allQuestions[currentInd];

    return (
        <div className="t1-container">
           <div className="question-list">
            {allQuestions.map((q, index) => (
                    <div
                        key={q.id}
                        className={`question-link ${index === currentInd ? "active" : ""}`}
                        onClick={() => setCurrentInd(index)}
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
                    answer
                </div>
                <button>Submit</button>
           </div>
            
        </div>
    )
}