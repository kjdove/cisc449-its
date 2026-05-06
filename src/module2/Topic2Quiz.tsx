//module 2 topic 2
import { topic2MCQ, topic2Code } from './M2Questions';
import { topic2MCQAnswers } from './M2Answers';
import { useState } from 'react';
import { M2Code } from './M2Code';
import {type JSX} from 'react';

export function Topic2Quiz(): JSX.Element {
    const allQuestions = [...topic2MCQ, ...topic2Code];
    const [currentQInd, setCurrentQInd] = useState<number>(0);
    const currentQuestion = allQuestions[currentQInd];
    const [currentAInd, setCurrentAInd] = useState<number>(0);

    return (
        <div className="t2-container">
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
                    {currentAInd < 9 && topic2MCQAnswers[currentAInd].options.map((option) => (
                        <div key={option.textId} className="answer-option">
                            <input type="radio" id={option.textId} name="answer" value={option.textId} />
                            <label htmlFor={option.textId}>{option.text}</label>
                        </div>
                    ))}
                    {currentAInd >= 9 && <M2Code questionId={currentQuestion.id} currentAInd={currentAInd} />}
                </div>
                <button className="submit-button">Submit</button>
            </div>
        </div>
    )
}