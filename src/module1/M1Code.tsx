import type { JSX } from 'react';
import {useState} from 'react';
import { topic1CodeAnswers, topic2CodeAnswers, topic3CodeAnswers } from './M1Answers';

export function M1Code({questionId}: {questionId: string}): JSX.Element {
    const [codeAnswer, setCA] = useState<string[]>([]);

    const t1Q13 = topic1CodeAnswers.find((q) => q.id === "1.1.13");

    const t2Q10 = topic2CodeAnswers.find((q) => q.id === "1.2.10");
    const t2Q11 = topic2CodeAnswers.find((q) => q.id === "1.2.11");
    
    const t3Q6 = topic3CodeAnswers.find((q) => q.id === "1.3.6");
    const t3Q7 = topic3CodeAnswers.find((q) => q.id === "1.3.7");
    const t3Q8 = topic3CodeAnswers.find((q) => q.id === "1.3.8");

    const updateCodeAnswer = (value: string, index: number) => {
        const newCodeAnswer = [...codeAnswer];
        newCodeAnswer[index] = value;
        setCA(newCodeAnswer);
    }


    const M1CodeBlock = () => {
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
                        {t1Q13?.options.map((option, index) => (
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
                            {t2Q10.type === "mcq" && t2Q10.options.map((option) => (
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
                            {t2Q11.type === "mcq" && t2Q11.options.map((option) => (
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
            case "1.3.6":
                return (
                    <>
                    <div className='code-container'>
                        <pre>
                            {`const [favorite, setFavorite] = useState<string>("");`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`  <Form.Group controlId="formFavoriteColor">`}
                            <br/>
                            {`    <Form.Label>Favorite Color</Form.Label>`}
                            <br/>
                            {`    <Form.Control type="text" value={favorite} onChange={(e) => setFavorite(e.target.value)}/>`}
                            <br/>
                            {` </Form.Group>`}
                            <br/>
                            {`)`}
                        </pre>
                    </div>
                    <div className='code-options-container'>
                            {t3Q6.type ==="mcq" && t3Q6.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                <label htmlFor={option.textId}>{option.text}</label>
                            </div>
                            ))}
                    </div>
                    </>
                )
            case "1.3.7":
                return (
                    <>
                    <div className='code-container'>
                        <pre>
                            {`const [favorite, setFavorite] = useState<string>("");`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`  <Form.Group controlId="formFavoriteColor">`}
                            <br/>
                            {`    <Form.Label>Favorite Color</Form.Label>`}
                            <br/>
                            {`    <Form.Control type="text" value={favorite} onChange={(e) => setFavorite(e)}/>`}
                            <br/>
                            {` </Form.Group>`}
                            <br/>
                            {`)`}
                        </pre>
                    </div>
                    <div className='code-options-container'>
                            {t3Q7.type ==="mcq" && t3Q7.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                <label htmlFor={option.textId}>{option.text}</label>
                            </div>
                            ))}
                    </div>
                    </>
                )
            case "1.3.8":
                return (
                    <>
                    <div className='code-container'>
                        <pre>
                            {`const [favorite, setFavorite] = useState<string>("");`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`  <Form.Group controlId="formFavoriteColor">`}
                            <br/>
                            {`    <Form.Label>Favorite Color</Form.Label>`}
                            <br/>
                            {`    <Form.Control type="text" value="favorite" onChange={(e) => setFavorite(e.target.value)}/>`}
                            <br/>
                            {` </Form.Group>`}
                            <br/>
                            {`)`}
                        </pre>
                    </div>
                    <div className='code-options-container'>
                            {t3Q8.type==="mcq"&& t3Q8.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                <label htmlFor={option.textId}>{option.text}</label>
                            </div>
                            ))}
                    </div>
                    </>
                )
            case "1.3.9":
                return (
                    <div className='code-container'>
                        <pre>
                            {`const [favorite, setFavorite] = `}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`<string>("");`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`  <Form.Group controlId="formFavoriteColor">`}
                            <br/>
                            {`    <Form.Label>Favorite Color</Form.Label>`}
                            <br/>
                            {`    <Form.Control type="text"`} 
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`={favorite}`} 
                            <input 
                                type="text"
                                value={codeAnswer[2]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />  
                            {`={(e) => setFavorite(e.target.value)}/>`}
                            <br/>
                            {` </Form.Group>`}
                            <br/>
                            {`)`}
                        </pre>
                    </div>
                )
            case "1.3.10":
                return (
                    <div className='code-container'>
                        <pre>
                            {`const [favorite, setFavorite] = useState<string>("");`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`  <Form.Group controlId="formFavoriteColor">`}
                            <br/>
                            {`    <Form.Label>Favorite Color</Form.Label>`}
                            <br/>
                            {`    <Form.Control type="text" value=`}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` onChange={(e) => `}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`}/>`}
                            <br/>
                            {` </Form.Group>`}
                            <br/>
                            {`)`}
                        </pre>
                    </div>
                )
            default:
                return <div>Question not found</div>
        }//end to switch
    }//end to M1CodeBlock

    return(
        <div>
            {M1CodeBlock()}
        </div>
    )

}