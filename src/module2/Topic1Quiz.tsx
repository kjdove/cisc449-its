//Module 2 Topic 1
import { topic1MCQ, topic1Code } from './M2Questions';
import { topic1MCQAnswers } from './M2Answers';
import { useState } from 'react';
import { T1Code } from './T1Code';
import {type JSX} from 'react';

export function Topic1Quiz(): JSX.Element {
    const allQuestions = [...topic1MCQ, ...topic1Code];
    const [currentQInd, setCurrentQInd] = useState<number>(0);
    const currentQuestion = allQuestions[currentQInd];
    const [currentAInd, setCurrentAInd] = useState<number>(0);

    const handleQuestionChange = (index: number) => {
        setCurrentQInd(index);
        setCurrentAInd(index);
    }

    return(
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
                    {/**if currentAInd is in range of MCQ questions render this, else render the other possible question type answers */}
                    {currentAInd < 9 && topic1MCQAnswers[currentAInd].options.map((option) => (
                        <div key={option.textId} className="answer-option">
                            <input type="radio" id={option.textId} name="answer" value={option.textId} />
                            <label htmlFor={option.textId}>{option.text}</label>
                        </div>
                    ))}
                    {currentAInd >= 9  && <T1Code questionId={currentQuestion.id}/>}
                </div>
                <button className="submit-button">Submit</button>
           </div>
        </div>
    )

}