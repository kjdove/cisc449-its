import type { JSX } from "react";
import {useState} from "react";
import {topic4CodeAnswers} from "./M2Answers";

export function T4Code({questionId}: {questionId: string}): JSX.Element {
    const [codeAnswer, setCA] = useState<string[]>([]);

    const t4Q16 = topic4CodeAnswers.find((q) => q.id === "2.4.16");
    const t4Q17 = topic4CodeAnswers.find((q) => q.id === "2.4.17");
    const t4Q18 = topic4CodeAnswers.find((q) => q.id === "2.4.18");
    const t4Q19 = topic4CodeAnswers.find((q) => q.id === "2.4.19");
    const t4Q20 = topic4CodeAnswers.find((q) => q.id === "2.4.20");
    const t4Q21 = topic4CodeAnswers.find((q) => q.id === "2.4.21");

    const updateCodeAnswer = (value: string, index: number) => {
        const newCodeAnswer = [...codeAnswer];
        newCodeAnswer[index] = value;
        setCA(newCodeAnswer);
    }

    const T4CodeBlock = () => {
        switch(questionId) {
            case "2.4.16":
                return (
                    <>
                    <div className="code-container">
                        <pre>
                        {`const [name, setName] = useState<string>('My Neighbor Totoro');`}
                        <br/>
                        <br/>
                        {`function updateName(event: React.ChangeEvent<HTMLInputElement>) {`}
                        <br/>
                        {`  setName(event.target.value);}`}
                        <br/>
                        <br/>
                        {`return <div>`}
                        <br/>
                        {` <Form.Group controlId="formMovieName">`}
                        <br/>
                        {`   <Form.Label>Movie Name</Form.Label>`}
                        <br/>
                        {`  <Form.Control type="text" placeholder="Enter movie name" value={name} onChange={updateName} />`}
                        <br/>
                        {` </Form.Group>`}
                        <br/>
                        {`</div>`}
                        </pre>
                    </div>
                    <div className="code-options-container">
                            { t4Q16?.type==="mcq"&& t4Q16?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </>
                )
            case "2.4.17":
                return (
                    <>
                    <div className="code-container">
                        <pre>
                            {`const [isHappy, setIsHappy] = useState<boolean>(false);`}
                            <br/>
                            {`function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setIsHappy(event.target.checked);}`}
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.Check`}
                            <br/>
                            {`   type="checkbox"`}
                            <br/>
                            {`   id="is-happy-check"`}
                            <br/>
                            {`  label="Happy?"`}
                            <br/>
                            {`  checked={isHappy}`}
                            <br/>
                            {`  onChange={updateHappiness} `}
                            <br/>
                            {` />`}
                            <br/>
                            {` </div>`}
                        </pre>
                    </div>
                    <div className="code-options-container">
                            { t4Q17?.type==="mcq" && t4Q17?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </>
                )
            case "2.4.18":
                return (
                    <>
                    <div className="code-container">
                        <pre>
                            <br/>
                            {`const [emotion, setEmotion] = useState<string>("Happy");`}
                            <br/>
                            {`function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {`}
                            <br/>
                            {`  setEmotion(event.target.value);}`}
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.Select value={emotion} onChange={updateEmotion}>`}
                            <br/>
                            {`   <option value="happy">Happy</option>`}
                            <br/>
                            {`   <option value="sad">Sad</option>`}
                            <br/>
                            {`  <option value="angry">Angry</option>`}
                            <br/>
                            {`  </Form.Select>`}
                            <br/>
                            {` </div>`}
                        </pre>
                    </div>
                    <div className="code-options-container">
                            { t4Q18?.type==="mcq" && t4Q18?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </>
                )
            case "2.4.19":
                return (
                    <>
                    <div className="code-bank">
                        {t4Q19?.type==="ordering" && t4Q19?.options.map((option, index) => (
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
                case "2.4.20":
                    return (
                        <>
                        <div className="code-bank">
                            {t4Q20?.type==="ordering" && t4Q20?.options.map((option, index) => (
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
                    case "2.4.21":
                        return (
                            <>
                            <div className="code-bank">
                                {t4Q21?.type==="ordering" && t4Q21?.options.map((option, index) => (
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
    }

    return (
        <div>
            {T4CodeBlock()}
        </div>
    )
}