import type { JSX } from 'react';
import {useState} from 'react';
import {topic3CodeAnswers } from './M3Answers';


export function T3Code({questionId}: {questionId: string}): JSX.Element {
    const [codeAnswer, setCA] = useState<string[]>([]);

    const updateCodeAnswer = (value: string, index: number) => {
        const newCodeAnswer = [...codeAnswer];
        newCodeAnswer[index] = value;
        setCA(newCodeAnswer);
    }

    const t3Q6 = topic3CodeAnswers.find((q) => q.id === "3.3.6");
    const t3Q9 = topic3CodeAnswers.find((q) => q.id === "3.3.9");

    const T3CodeBlock = () => {
        switch(questionId) {
            case "3.3.6": 
                return (
                    <div className='code-container'>
                    <div className='code-options-container'>
                            {t3Q6?.type==="mcq" && t3Q6?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                <label htmlFor={option.textId}>{option.text}</label>
                            </div>
                            ))}
                    </div>
                    </div>
                )
            case "3.3.7":
                return (
                    <div className="code-container">
                        <pre>
                            {`const COLORS = ["red", "blue", "green", "orange", "purple", "yellow"];`}
                            <br/>
                            {`const [favorite, setFavorite] = useState<string>(COLORS[0]);`}
                            <br/>
                            {`function updateFavorite(event: React.ChangeEvent<HTMLSelectElement>) {`}
                            <br/>
                            {` setFavorite(event.target.value);`}
                            <br/>
                            { `}`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`<Form.`} 
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`controlId="favoriteColors">`}
                            <br/>
                            { `<Form.Label>What is your favorite color?</Form.Label>`}
                            <br/>
                            { `<Form.`}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`value = {`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`} onChange={`}
                            <input
                                type="text"
                                value={codeAnswer[3]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 3)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`}>`}
                            <br/>
                            {`{`}
                            <input
                                type="text"
                                value={codeAnswer[4]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 4)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`.map((color: string) => (`}
                            <br/>
                            {`<`}
                            <input
                                type="text"
                                value={codeAnswer[5]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 5)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` key={color} value={color}>{color}</`}
                            <input
                                type="text"
                                value={codeAnswer[6]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 6)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>))}`}
                            <br/>
                            {`</Form.`}
                            <input
                                type="text"
                                value={codeAnswer[7]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 7)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`</Form.`}
                            <input
                                type="text"
                                value={codeAnswer[8]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 8)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`)`}
                        </pre>
                    </div>
                )
            case "3.3.8":
                return (
                    <div className='code-container'>
                        <pre>
                            {`const COLORS = ["red", "blue", "green", "orange", "purple", "yellow"];`}
                            <br/>
                            {`const [favorite, setFavorite] = useState<string>(COLORS[0]);`}
                            <br/>
                            {`function updateFavorite(event: React.ChangeEvent<HTMLSelectElement>) {`}
                            <br/>
                            {` setFavorite(event.target.value);`}
                            <br/>
                            { `}`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`<Form.Group controlId="favoriteColors">`}
                            <br/>
                            { `<Form.Label>What is your favorite color?</Form.Label>`}
                            <br/>
                            {` <Form.Select `}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` = {favorite}`}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` ={updateFavorite}>`}
                            <br/>
                            {`{COLORS.`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`((color: string) => (`}
                            <br/>
                            {`<option `}
                            <input
                                type="text"
                                value={codeAnswer[3]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 3)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` ={color} value={color}>{color}</option>))}`}
                            <br/>
                            {`</Form.Select>`}
                            <br/>
                            {`</Form.Group>`}
                            <br/>
                            {`)`}
                        </pre>
                    </div>
                )
            case "3.3.9":
                return (
                    <>
                    <div className='code-bank'>
                        {t3Q9?.type==="ordering" && t3Q9?.options.map((option, index) => (
                            <div key={index} className="code-option">
                                <strong>{index+1}.</strong> {option}
                            </div>
                        ))}
                    </div>
                    <div className="student-ordering">
                        <input
                            type="text"
                            value={codeAnswer[0]}
                            onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                            placeholder="Enter your answer in the format: 1,2,3,..."
                            className="ordering"
                        />
                    </div>
                    </>
                )
            default:
                return <div>Question not found</div>
        }//end to switch
    }//end to m1 code block
    return(
        <div>
            {T3CodeBlock()}
        </div>
    )
}