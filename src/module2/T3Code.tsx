import type { JSX } from "react";
import {useState} from "react";
import {topic3CodeAnswers} from "./M2Answers";

export function T3Code({questionId}: {questionId: string}): JSX.Element {
    const [codeAnswer, setCA] = useState<string[]>([]);

    const t3Q9 = topic3CodeAnswers.find((q) => q.id === "2.3.9");
    const t3Q10 = topic3CodeAnswers.find((q) => q.id === "2.3.10");
    const t3Q11 = topic3CodeAnswers.find((q) => q.id === "2.3.11");

    const updateCodeAnswer = (value: string, index: number) => {
        const newCodeAnswer = [...codeAnswer];
        newCodeAnswer[index] = value;
        setCA(newCodeAnswer);
    }

    const T3CodeBlock = () => {
        switch(questionId) {
            case "2.3.7":
                return(
                    <div className = "code-container">
                        <pre>
                            {`//This is the `}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            <br/>
                            {`const [emotion, setEmotion] = useState<string>("happy");`}
                            <br/>
                            {`//This is the `}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            <br/>
                            {`function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {`}
                            <br/>
                            {`  setEmotion(event.target.value);`}
                            <br/>
                            {`}`}
                            <br/>
                            {`//This is the `}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
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
                )
            case "2.3.8":
                return (
                    <div className="code-container">
                        <pre>
                            {`const [emotion, setEmotion] = useState<string>("happy");`}
                            <br/>
                            {`function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {`}
                            <br/>
                            {`  setEmotion(event.target.value);`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.`} 
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`value={emotion} onChange={updateEmotion}>`}
                            <br/>
                            {`   <`} 
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`value="happy">Happy</`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`   <`} 
                            <input
                                type="text"
                                value={codeAnswer[3]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 3)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`value="sad">Sad</`}
                            <input
                                type="text"
                                value={codeAnswer[4]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 4)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`  </Form.`}
                            <input
                                type="text"
                                value={codeAnswer[5]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 5)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {` </div>`}

                        </pre>
                    </div>
                )
            case "2.3.9":
                return (
                    <>
                    <div className="code-container">
                        <pre>
                            <br/>
                            {`const [emotion, setEmotion] = useState<string>("Happy");`}
                            <br/>
                            {`function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {`}
                            <br/>
                            {`  setEmotion(event.target.value);`}
                            <br/>
                            {`}`}
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
                            {t3Q9?.type==="mcq" && t3Q9?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </>
                )
            case "2.3.10":
                return (
                    <>
                    <div className="code-container">
                        <pre>
                            <br/>
                            {`const [emotion, setEmotion] = useState<string>("Happy");`}
                            <br/>
                            {`function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {`}
                            <br/>
                            {`  setEmotion(event.target.value);`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.Select value={emotion} onChange={updateEmotion()}>`}
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
                            {t3Q10?.type==="mcq" && t3Q10?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </>
                )
            case "2.3.11":
                return (
                    <>
                    <div className="code-bank">
                        {t3Q11?.type==="ordering" && t3Q11?.options.map((option, index) => (
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
        }//end to switch
    }//end to t3codeblock

    return (
        <div>
            {T3CodeBlock()}
        </div>
    )
}