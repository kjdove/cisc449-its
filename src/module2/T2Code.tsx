import type { JSX } from "react";
import {useState} from "react";
import {topic2CodeAnswers} from "./M2Answers";

export function T2Code({questionId}: {questionId: string}): JSX.Element {
    const [codeAnswer, setCA] = useState<string[]>([]);

    const t2Q12 = topic2CodeAnswers.find((q) => q.id === "2.2.12");
    const t2Q13 = topic2CodeAnswers.find((q) => q.id === "2.2.13");
    const t2Q14 = topic2CodeAnswers.find((q) => q.id === "2.2.14");

    const updateCodeAnswer = (value: string, index: number) => {
        const newCodeAnswer = [...codeAnswer];
        newCodeAnswer[index] = value;
        setCA(newCodeAnswer);
    }

    const T2CodeBlock = () => {
        switch(questionId) {
            case "2.2.10":
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
                            {`const [isHappy, setIsHappy] = useState<boolean>(true);`}
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
                            {`function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setIsHappy(event.target.checked);`}
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
                            {`  onChange={updateIsHappy} `}
                            <br/>
                            {` />`}
                            <br/>
                            {` </div>`}
                        </pre>
                    </div>
                )
            case "2.2.11":
                return (
                    <div className="code-container">
                        <pre>
                            {`const [isHappy, setIsHappy] = useState<boolean>(true);`}
                            <br/>
                            {`function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setIsHappy(event.target.`}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`);`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.`}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            <br/>
                            {`type = "`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`"`}
                            <br/>
                            {`id = "is-happy-check"`}
                            <br/>
                            {`label = "Happy?"`}
                            <br/>
                            <input
                                type="text"
                                value={codeAnswer[3]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 3)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` = {isHappy}`}
                            <br/>
                            {`onChange = {updateHappiness} `}
                            <br/>
                            {` />`}
                            {` </div>`}
                        </pre>
                    </div>
                )
            case "2.2.12":
                return (
                    <div className="code-container">
                        <pre>
                            {`const [isHappy, setIsHappy] = useState<boolean>(false);`}
                            <br/>
                            {`function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setIsHappy(event.target.checked);`}
                            <br/>
                            {`}`}
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
                        <div className="code-options-container">
                            { t2Q12?.type==="mcq" && t2Q12?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </div>
                )
            case "2.2.13":
                return (
                    <>
                    <div className="code-container">
                    <pre>
                            {`const [isHappy, setIsHappy] = useState<boolean>(false);`}
                            <br/>
                            {`function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setIsHappy(event.target.value);`}
                            <br/>
                            {`}`}
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
                            { t2Q13?.type==="mcq"&&t2Q13?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </>
                )
            case  "2.2.14":
                return (
                    <>
                    <div className="code-bank">
                        {t2Q14?.type==="ordering" && t2Q14?.options.map((option, index) => (
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
    }//end to t2codeblock

    return (
        <div>
            {T2CodeBlock()}
        </div>
    )
}