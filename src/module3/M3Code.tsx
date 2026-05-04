import type { JSX } from 'react';
import {useState} from 'react';
import { topic1CodeAnswers } from './M3Answers';


export function M3Code({questionId}: {questionId: string}): JSX.Element {
    const [codeAnswer, setCA] = useState<string[]>([]);

    const updateCodeAnswer = (value: string, index: number) => {
        const newCodeAnswer = [...codeAnswer];
        newCodeAnswer[index] = value;
        setCA(newCodeAnswer);
    }
    const question12 = topic1CodeAnswers.find((q) => q.id === "3.1.12");
    const question13 = topic1CodeAnswers.find((q) => q.id === "3.1.13");
    const question14 = topic1CodeAnswers.find((q) => q.id === "3.1.14");
    const question15 = topic1CodeAnswers.find((q) => q.id === "3.1.15");
    const question16 = topic1CodeAnswers.find((q) => q.id === "3.1.16");
    const question17 = topic1CodeAnswers.find((q) => q.id === "3.1.17");

    const M1CodeBlock = () => {
        switch(questionId){
            case "3.1.9":
                return (
                    <div className='code-container'>
                        <pre>
                            {`const [points, setPoints] = useState<`}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={() => updateCodeAnswer(codeAnswer[0], 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>(0);`}
                            <br/>
                            {`function updatePoints(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setPoints(event.target.value));`}
                            <br/>
                            {`}`}
                            <br/>
                            {`<Form.Group controlId="formPoints">`}
                            <br/>
                            {`  <Form.Label>Points:</Form.Label>`}
                            <br/>
                            {`  <Form. `}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={() => updateCodeAnswer(codeAnswer[1], 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` type="`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={() => updateCodeAnswer(codeAnswer[2], 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`" value={points} onChange={updatePoints} />`}
                            <br/>
                            {`</Form.Group>`}
                        </pre>
                    </div>
                )
            case "3.1.10":
                return (
                    <div className='code-container'>
                        <pre>
                            {`const [name, setName] = useState<string>('New Movie');`}
                            <br/>
                            {`const [released, setReleased] = useState<number>(2026);`}
                            <br/>
                            {`<Form.Group controlId ="formMovieName as ={`}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={() => updateCodeAnswer(codeAnswer[0], 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`}>`}
                            <br/>
                            {`  <Form.Label `}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={() => updateCodeAnswer(codeAnswer[1], 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` sm={2}>Movie Name:</Form.Label>`}
                            <br/>
                            {`<`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={() => updateCodeAnswer(codeAnswer[2], 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`  <Form.Control type="text" value={name} `}
                            <br/>
                            {`onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} />`}
                            <br/>
                            {`</`}
                            <input
                                type="text"
                                value={codeAnswer[3]}
                                onChange={() => updateCodeAnswer(codeAnswer[3], 3)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>`}   
                            <br/>
                            {`</Form.Group>`}
                            <br/>
                            {`<Form.Group controlId="formMovieReleased" as = {`}
                            <input
                                type="text"
                                value={codeAnswer[4]}
                                onChange={() => updateCodeAnswer(codeAnswer[4], 4)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`}>`}
                            <br/>
                            {` <Form.Label `}
                            <input
                                type="text"
                                value={codeAnswer[5]}
                                onChange={() => updateCodeAnswer(codeAnswer[5], 5)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` sm={2}>Released Year:</Form.Label>`}
                            <br/>
                            {`<`}
                            <input
                                type="text"
                                value={codeAnswer[6]}
                                onChange={() => updateCodeAnswer(codeAnswer[6], 6)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`  <Form.Control type="number" value={released}`}
                            <br/> 
                            {`onChange={(event: React.ChangeEvent<HTMLInputElement>) => setReleased(event.target.value)} />`}
                            <br/>
                            {`</`}
                            <input
                                type="text"
                                value={codeAnswer[7]}
                                onChange={() => updateCodeAnswer(codeAnswer[7], 7)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`</Form.Group>`}

                        </pre>
                    </div>
                )
            case "3.1.11":
                return (
                    <div className='code-container'>
                        <pre>
                            {`const [description, setDescription] = useState<string>('What can you tell me?');`}
                            <br/>
                            {`function updateDescription(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setDescription(event.target.value));`}
                            <br/>
                            {`}`}
                            <br/>
                            {`<Form.Group controlId="formMovieDescription">`}
                            <br/>
                            {`  <Form.Label>Description:</Form.Label>`}
                            <br/>
                            {`  <Form.Control as="`}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={() => updateCodeAnswer(codeAnswer[0], 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`" rows={`}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={() => updateCodeAnswer(codeAnswer[1], 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`} value={description} onChange={updateDescription} />`}
                            <br/>
                            {`</Form.Group>`}
                        </pre>
                    </div>
                )
            case "3.1.12":
                return (
                    <div className='code-container'>
                        <div className='code-options-container'>
                            <pre>
                                {question12?.options.map((option) => (
                                   <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                   <label htmlFor={option.textId}>{option.text}</label>
                               </div>
                                ))}
                            </pre>
                        </div>
                    </div>
                )
            case "3.1.13":
                return (
                    <div className='code-container'>
                        <div className='code-options-container'>
                            <pre>
                                {question13?.options.map((option) => (
                                   <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                   <label htmlFor={option.textId}>{option.text}</label>
                               </div>
                                ))}
                            </pre>
                        </div>
                    </div>
                )
             case "3.1.14":
                return (
                    <div className='code-container'>
                        <div className='code-options-container'>
                            <pre>
                                {question14?.options.map((option) => (
                                   <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                   <label htmlFor={option.textId}>{option.text}</label>
                               </div>
                                ))}
                            </pre>
                        </div>
                    </div>
                )
            case "3.1.15":
                return (
                    <>
                    <div className='code-bank'>
                        {question15?.options.map((option, index) => (
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
            case "3.1.16":
                return (
                    <>
                    <div className='code-bank'>
                        {question16?.options.map((option, index) => (
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
             case "3.1.17":
                return (
                    <>
                    <div className='code-bank'>
                        {question17?.options.map((option, index) => (
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
    }//end to m1 code block

    return(
        <div>
            {M1CodeBlock()}
        </div>
    )
}