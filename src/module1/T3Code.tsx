import type { JSX } from 'react';
import {useState} from 'react';
import {topic3CodeAnswers } from './M1Answers';

export function T3Code({questionId}: {questionId: string}): JSX.Element {
    const [codeAnswer, setCA] = useState<string[]>([]);

    const t3Q6 = topic3CodeAnswers.find((q) => q.id === "1.3.6");
    const t3Q7 = topic3CodeAnswers.find((q) => q.id === "1.3.7");
    const t3Q8 = topic3CodeAnswers.find((q) => q.id === "1.3.8");

    const updateCodeAnswer = (value: string, index: number) => {
        const newCodeAnswer = [...codeAnswer];
        newCodeAnswer[index] = value;
        setCA(newCodeAnswer);
    }

    const T3CodeBlock = () => {
        switch(questionId) {
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
                            {t3Q6?.type ==="mcq" && t3Q6?.options.map((option) => (
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
                            {t3Q7?.type ==="mcq" && t3Q7?.options.map((option) => (
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
                            {t3Q8?.type==="mcq"&& t3Q8?.options.map((option) => (
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
            {T3CodeBlock()}
        </div>
    )

}