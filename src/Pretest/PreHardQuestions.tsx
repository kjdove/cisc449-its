import './PreHardQuestions.css';
import type { JSX } from 'react';
import {useState} from 'react';

export function PreHardQuestions({questionId}: {questionId: string}): JSX.Element {
    const [answer, setAnswer] = useState<string[]>([]);
    const updateAnswers = (value: string, index: number) => {
        const newAnswers = [...answer];
        newAnswers[index] = value;
        setAnswer(newAnswers);
    };

    const code = () => {
        switch (questionId) {
            case "1.1h":
                return(
                    <div>
                        <pre>
                            {`<Form.`}
                            <input 
                                type="text"
                                value={answer[0]}
                                onChange={() => updateAnswers(answer[0], 0)}
                                placeholder="Enter missing tag"
                                style={{
                                    width: "100px",
                                    margin: "0 5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    padding: "2px",
                                }}
                            />
                            {` controlId="formBasicEmail">`}
                            <br/>
                            {`  <Form.`}
                            <input 
                                type="text"
                                value={answer[1]}
                                onChange={() => updateAnswers(answer[1], 1)}
                                placeholder="Enter missing tag"
                                style={{
                                    width: "100px",
                                    margin: "0 5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    padding: "2px",
                                }}
                            /> 
                            {`>Email address</Form.`}
                            <input 
                                type="text"
                                value={answer[2]}
                                onChange={() => updateAnswers(answer[2], 2)}
                                placeholder="Enter missing tag"
                                style={{
                                    width: "100px",
                                    margin: "0 5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    padding: "2px",
                                }}
                            />
                            {`>`}
                            <br/>
                            {`  <Form.`} 
                            <input 
                                type="text"
                                value={answer[3]}
                                onChange={() => updateAnswers(answer[3], 3)}
                                placeholder="Enter missing tag"
                                style={{
                                    width: "100px",
                                    margin: "0 5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    padding: "2px",
                                }}
                            />
                            {`type="email" placeholder="Enter email" />`}
                            <br/>
                            {`  <Form.`} 
                            <input
                                type="text"
                                value={answer[4]}
                                onChange={() => updateAnswers(answer[4], 4)}
                                placeholder="Enter missing tag"
                                style={{
                                    width: "100px",
                                    margin: "0 5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    padding: "2px",
                                }}
                            />
                            {`className="text-muted">`}
                            <br/>
                            {`    We'll never share your email with anyone else.`}
                            <br/>
                            {`  </Form.`}
                            <input
                                type="text"
                                value={answer[5]}
                                onChange={() => updateAnswers(answer[5], 5)}
                                placeholder="Enter missing tag"
                                style={{
                                    width: "100px",
                                    margin: "0 5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    padding: "2px",
                                }}
                                />  
                            {`>`}
                            <br/>
                            {`</Form.`}
                            <input
                                type="text"
                                value={answer[6]}
                                onChange={() => updateAnswers(answer[6], 6)}
                                placeholder="Enter missing tag"
                                style={{
                                    width: "100px",
                                    margin: "0 5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    padding: "2px",
                                }}
                            />
                            {`>`}

                        </pre>
                    </div>
                )
        }
    }

    return (
        <>
        {code()}
        </>
    )
}