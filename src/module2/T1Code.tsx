import type { JSX } from 'react';
import {useState} from 'react';
import {topic1CodeAnswers} from './M2Answers';

export function T1Code({questionId}: {questionId: string}): JSX.Element {
    const [codeAnswer, setCA] = useState<string[]>([]);

    const t1Q12 = topic1CodeAnswers.find((q) => q.id === "2.1.12");
    const t1Q13 = topic1CodeAnswers.find((q) => q.id === "2.1.13");
    const t1Q14 = topic1CodeAnswers.find((q) => q.id === "2.1.14");

    const updateCodeAnswer = (value: string, index: number) => {
        const newCodeAnswer = [...codeAnswer];
        newCodeAnswer[index] = value;
        setCA(newCodeAnswer);
    }

    const T1CodeBlock = () => {
        switch(questionId){
            case "2.1.10":
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
                            {`const [name, setName] = useState<string>('Dazed and Confused');`}
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
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
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
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            <br/>
                            {`type = "`}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
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
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`}`}
                            <br/>
                            {`onChange = {`}
                            <input
                                type="text"
                                value={codeAnswer[3]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 3)}
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
                            { t1Q12?.type ==="mcq" && t1Q12?.options.map((option) => (
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
                            { t1Q13?.type==="mcq" && t1Q13?.options.map((option) => (
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
                        {t1Q14?.type==="ordering" && t1Q14?.options.map((option, index) => (
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
                return <div>Invalid question ID</div>
        }//end to switch
    }//end to T1CodeBlock
    return (
        <div>
            {T1CodeBlock()}
        </div>
    )
}