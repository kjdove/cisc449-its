import type { JSX } from 'react';
import {useState} from 'react';
import {topic2CodeAnswers} from './M1Answers';

export function T2Code({questionId}: {questionId: string}): JSX.Element {
    const [codeAnswer, setCA] = useState<string[]>([]);

    const t2Q10 = topic2CodeAnswers.find((q) => q.id === "1.2.10");
    const t2Q11 = topic2CodeAnswers.find((q) => q.id === "1.2.11");

    const updateCodeAnswer = (value: string, index: number) => {
        const newCodeAnswer = [...codeAnswer];
        newCodeAnswer[index] = value;
        setCA(newCodeAnswer);
    }

    const T2CodeBlock = () => {
        switch(questionId) {
            case "1.2.10":
                return (
                    <>
                    <div>
                        <pre>
                            {`<Form.Group className="mb-3" controlId="formBasicEmail">`}
                            <br/>
                            {`<Form.Label>Email address</Form.Label>`}
                            <br/>
                            {`<Form.Control type="email" placeholder="Enter email" disabled />`}
                            <br/>
                            {`<Form.Text className="text-muted">`}
                            <br/>
                            {`We'll never share your email with anyone else.`}
                            <br/>
                            {`</Form.Text>`}
                            <br/>
                            {`</Form.Group>`}
                        </pre>
                    </div>
                    <div className='code-options-container'>
                            {t2Q10?.type === "mcq" && t2Q10?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                <label htmlFor={option.textId}>{option.text}</label>
                            </div>
                            ))}
                    </div>
                    </>
                )
            case "1.2.11":
                return (
                    <>
                    <div>
                        <pre>
                            {`<Form.Group className="mb-3" controlId="formBasicEmail">`}
                            <br/>
                            {`<Form.Label>Email address</Form.Label>`}
                            <br/>
                            {`<Form.Control type="email" placeholder="Enter email" readOnly />`}
                            <br/>
                            {`<Form.Text className="text-muted">`}
                            <br/>
                            {`We'll never share your email with anyone else.`}
                            <br/>
                            {`</Form.Text>`}
                            <br/>
                            {`</Form.Group>`}
                        </pre>
                    </div>
                    <div className='code-options-container'>
                            {t2Q11?.type === "mcq" && t2Q11?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                <label htmlFor={option.textId}>{option.text}</label>
                            </div>
                            ))}
                    </div>
                    </>
                )
            case "1.2.12":
                return (
                    <div className = "code-container">
                        <pre>
                            {`<Form.Group className="mb-3" controlId="formMessage">`}
                            <br/>
                            {`  <Form.Label>Message:</Form.Label>`}
                            <br/>
                            {` <Form.Control placeholder= "Enter message"`}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`="Hello World" />`}
                            <br/>
                            {`</Form.Group>`}
                        </pre>

                    </div>
                )
            case "1.2.13":
                return (
                    <div className = "code-container">
                        <pre>
                            {`<Form.Group className="mb-3" controlId="formMessage">`}
                            <br/>
                            {`  <Form.Label>Message:</Form.Label>`}
                            <br/>
                            {` <Form.Control placeholder= "Enter message" value="Hello World"`}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`/>`}
                            <br/>
                            {`</Form.Group>`}
                        </pre>

                    </div>
                )
            default:
                return <div>Question not found</div>
        }//end to switch
    }//end to T2CodeBlock
    return (
        <div>
           {T2CodeBlock()}
        </div>
    )
}