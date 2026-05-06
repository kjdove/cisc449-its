import type { JSX } from 'react';
import {useState} from 'react';
import {topic1CodeAnswers} from './M1Answers';

export function T1Code({questionId}: {questionId: string}): JSX.Element {
    const [codeAnswer, setCA] = useState<string[]>([]);
    
    const t1Q13 = topic1CodeAnswers.find((q) => q.id === "1.1.13");

    const updateCodeAnswer = (value: string, index: number) => {
        const newCodeAnswer = [...codeAnswer];
        newCodeAnswer[index] = value;
        setCA(newCodeAnswer);
    }

    const T1CodeBlock = () => {
            switch(questionId) {
                case "1.1.10":
                    return (
                        <div className = "code-container">
                            <pre>
                                {`<Form.`}
                                <input
                                    type="text"
                                    value={codeAnswer[0]}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                    placeholder="Enter answer"
                                    className="fill-in-blank"
                                />
                                {` controlId="formBasicEmail" className="mb-3">`}
                                <br/>
                                {`  <Form.`}
                                <input
                                    type="text"
                                    value={codeAnswer[1]}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                    placeholder="Enter answer"
                                    className="fill-in-blank"
                                />
                                {`/> Email address</Form.Label`}
                                <br/>
                                {`  <Form.`}
                                <input
                                    type="text"
                                    value={codeAnswer[2]}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                    placeholder="Enter answer"
                                    className="fill-in-blank"
                                />
                                {` type="email" placeholder="Enter email" />`}
                                <br/>
                                {`  <Form.`}
                                <input
                                    type="text"
                                    value={codeAnswer[3]}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 3)}
                                    placeholder="Enter answer"
                                    className="fill-in-blank"
                                />
                                {`className="text-muted">`}
                                <br/>
                                {`    We'll never share your email with anyone else.`}
                                <br/>
                                {`</Form.Text>`}
                                <br/>
                                {`</Form.Group>`}   
                            </pre>
                        </div>
                    )
                case "1.1.11":
                    return (
                        <div className = "code-container">
                            <pre>
                                {`<Form.Group `}
                                <input
                                    type="text"
                                    value={codeAnswer[0]}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                    placeholder="Enter answer"
                                    className="fill-in-blank"
                                />
                                {`= "formBasicEmail" `}
                                <input
                                    type="text"
                                    value={codeAnswer[1]}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                    placeholder="Enter answer"
                                    className="fill-in-blank"
                                />
                                {` = "mb-3">`}
                                <br/>
                                {`  <Form.Label>Email address</Form.Label>`}
                                <br/>
                                {` <Form.Control type= "email" placeholder= "Enter email" />`}
                                <br/>
                                {`  <Form.Text className="text-muted">`}
                                <br/>
                                {`    We'll never share your email with anyone else.`}
                                <br/>
                                {`</Form.Text>`}
                                <br/>
                                {`</Form.Group>`}
                            </pre>
                        </div>
                    )
                case "1.1.12":
                    return (
                        <div className = "code-container">
                            <pre>
                            {`<Form.Group controlId = "formBasicEmail" className = "mb-3">`}
                                <br/>
                                {`  <Form.Label>Email address</Form.Label>`}
                                <br/>
                                {` <`}
                                <input
                                    type="text"
                                    value={codeAnswer[0]}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                    placeholder="Enter answer"
                                    className="fill-in-blank"
                                />
                                <input
                                    type="text"
                                    value={codeAnswer[1]}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                    placeholder="Enter answer"
                                    className="fill-in-blank"
                                />
                                {`= "email" `}
                                <input
                                    type="text"
                                    value={codeAnswer[2]}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                    placeholder="Enter answer"
                                    className="fill-in-blank"
                                />
                                {`= "Enter email" />`}
                                <br/>
                                {`  <Form.Text className="text-muted">`}
                                <br/>
                                {`    We'll never share your email with anyone else.`}
                                <br/>
                                {`</Form.Text>`}
                                <br/>
                                {`</Form.Group>`}
                            </pre>
                        </div>
                    )
                case "1.1.13":
                    return (
                        <>
                        <div className="code-bank">
                            {t1Q13!.type==="ordering" && t1Q13!.options!.map((option, index) => (
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
    }

    return (
        <div>
            {T1CodeBlock()}
        </div>
    )

}