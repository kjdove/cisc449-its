import type { JSX } from "react";
import {useState} from "react";
import { topic1CodeAnswers, topic2CodeAnswers, topic3CodeAnswers, topic4CodeAnswers } from "./M2Answers";

interface M2CodeProps {
    questionId: string;
    currentAInd: number;
}
 
export function M2Code({questionId, currentAInd}: M2CodeProps): JSX.Element {
    const [codeAnswer, setCA] = useState<string[]>([]);

    const t1Q14 = topic1CodeAnswers.find((q) => q.id === "2.1.14");

    const t2Q12 = topic2CodeAnswers.find((q) => q.id === "2.2.12");
    const t2Q13 = topic2CodeAnswers.find((q) => q.id === "2.2.13");
    const t2Q14 = topic2CodeAnswers.find((q) => q.id === "2.2.14");

    const updateCodeAnswer = (value: string, index: number) => {
        const newCodeAnswer = [...codeAnswer];
        newCodeAnswer[index] = value;
        setCA(newCodeAnswer);
    }
    
    const M2CodeBlock = () => {
        switch(questionId) {
            case "2.1.10":
                return(
                    <div className = "code-container">
                        <pre>
                            {`//This is the `}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={() => updateCodeAnswer(codeAnswer[0], 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            <br/>
                            {`const [name, setName] = useState<string>('Dazed and Confused');`}
                            <br/>
                            {`//This is the `}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={() => updateCodeAnswer(codeAnswer[1], 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            <br/>
                            {`function updateName(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setName(event.target.value);`}
                            <br/>
                            {`}`}
                            <br/>
                            {`//This is the `}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={() => updateCodeAnswer(codeAnswer[2], 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`return <div>`}
                            <br/>
                            {` <Form.Group controlId="formMovieName">`}
                            <br/>
                            {`   <Form.Label>Movie Name</Form.Label>`}
                            <br/>
                            {`   <Form.Control type="text" placeholder="Enter movie name" value={name} onChange={updateName} />`}
                            <br/>
                            {` </Form.Group>`}
                            <br/>
                            {`</div>`}
                        </pre>
                    </div>
                )
            case "2.1.11":
                return (
                    <div className = "code-container">
                        <pre>
                            {`const [name, setName] = useState<string>('Ponyo');`}
                            <br/>
                            <br/>
                            {`function updateName(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setName(event.target.`}
                            <br/>
                            {`}`}
                            <br/>
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.Group controlId="formMovieName">`}
                            <br/>
                            {`   <Form.Label>Movie Name</Form.Label>`}
                            <br/>
                            {`  <Form.`}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={() => updateCodeAnswer(codeAnswer[0], 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            <br/>
                            {`type = "`}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={() => updateCodeAnswer(codeAnswer[1], 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`"`} 
                            <br/>
                            {`placeholder = "Enter movie name"`}
                            <br/>
                            {`value = {`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={() => updateCodeAnswer(codeAnswer[2], 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`}`}
                            <br/>
                            {`onChange = {`}
                            <input
                                type="text"
                                value={codeAnswer[3]}
                                onChange={() => updateCodeAnswer(codeAnswer[3], 3)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`}`}
                            <br/>
                            {`  />`}
                            <br/>
                            {` </Form.Group>`}
                        </pre>
                    </div>
                )
            case "2.1.12":
                return (
                    <div className = "code-container">
                        <pre>
                            {`const [name, setName] = useState<string>('My Neighbor Totoro');`}
                            <br/>
                            <br/>
                            {`function updateName(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setName(event.target.value);`}
                            <br/>
                            {`}`}
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
                        <div className="code-options-container">
                            { topic1CodeAnswers[currentAInd-9].options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </div>
                )
            case "2.1.13":
                return (
                    <div className = "code-container">
                        <pre>
                            {`const [name, setName] = useState<string>('Princess Monoke);`}
                            <br/>
                            <br/>
                            {`function updateName(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  name = event.target.value;`}
                            <br/>
                            {`}`}
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
                        <div className="code-options-container">
                            { topic1CodeAnswers[currentAInd-9].options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </div>
                )
            case "2.1.14":
                return(
                    <>
                    <div className="code-bank">
                        {t1Q14?.options.map((option, index) => (
                            <div key={index} className="code-option">
                                <strong>{index+1}.</strong> {option}
                            </div>
                        ))}
                    </div>
                    <div className="student-ordering">
                        <input
                            type="text"
                            value={codeAnswer[0]}
                            onChange={() => updateCodeAnswer(codeAnswer[0], 0)}
                            placeholder="Enter your answer in the format: 1,2,3,..."
                            className="ordering"
                        />
                    </div>
                    </>
                )
            case "2.2.10":
                return(
                    <div className = "code-container">
                        <pre>
                            {`//This is the `}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={() => updateCodeAnswer(codeAnswer[0], 0)}
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
                                onChange={() => updateCodeAnswer(codeAnswer[1], 1)}
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
                                onChange={() => updateCodeAnswer(codeAnswer[2], 2)}
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
                                onChange={() => updateCodeAnswer(codeAnswer[0], 0)}
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
                                onChange={() => updateCodeAnswer(codeAnswer[1], 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            <br/>
                            {`type = "`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={() => updateCodeAnswer(codeAnswer[2], 2)}
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
                                onChange={() => updateCodeAnswer(codeAnswer[3], 3)}
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
                            { t2Q12.options.map((option) => (
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
                            { t2Q13.options.map((option) => (
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
                        {t2Q14?.options.map((option, index) => (
                            <div key={index} className="code-option">
                                <strong>{index+1}.</strong> {option}
                            </div>
                        ))}
                    </div>
                    <div className="student-ordering">
                        <input
                            type="text"
                            value={codeAnswer[0]}
                            onChange={() => updateCodeAnswer(codeAnswer[0], 0)}
                            placeholder="Enter your answer in the format: 1,2,3,..."
                            className="ordering"
                        />
                    </div>
                    </>
                )
            default: 
                return <div>Question not found</div>
        }//end to switch
    }//end to M2CodeBlock

    return (
       <div>
            {M2CodeBlock()}
       </div>
    )
}