import type { JSX } from 'react';
import {useState} from 'react';
import { topic1CodeAnswers} from './M3Answers';


export function T1Code({questionId}: {questionId: string}): JSX.Element {
    const [codeAnswer, setCA] = useState<string[]>([]);

    const updateCodeAnswer = (value: string, index: number) => {
        const newCodeAnswer = [...codeAnswer];
        newCodeAnswer[index] = value;
        setCA(newCodeAnswer);
    }

    const t1Q12 = topic1CodeAnswers.find((q) => q.id === "3.1.12");
    const t1Q13 = topic1CodeAnswers.find((q) => q.id === "3.1.13");
    const t1Q14 = topic1CodeAnswers.find((q) => q.id === "3.1.14");
    const t1Q15 = topic1CodeAnswers.find((q) => q.id === "3.1.15");
    const t1Q16 = topic1CodeAnswers.find((q) => q.id === "3.1.16");
    const t1Q17 = topic1CodeAnswers.find((q) => q.id === "3.1.17");

    const T1CodeBlock = () => {
        switch(questionId) {
            case "3.1.9":
                return (
                    <div className='code-container'>
                        <pre>
                            {`const [points, setPoints] = useState<`}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
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
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` type="`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
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
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`}>`}
                            <br/>
                            {`  <Form.Label `}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` sm={2}>Movie Name:</Form.Label>`}
                            <br/>
                            {`<`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
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
                                onChange={(e) => updateCodeAnswer(e.target.value, 3)}
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
                                onChange={(e) => updateCodeAnswer(e.target.value, 4)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`}>`}
                            <br/>
                            {` <Form.Label `}
                            <input
                                type="text"
                                value={codeAnswer[5]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 5)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` sm={2}>Released Year:</Form.Label>`}
                            <br/>
                            {`<`}
                            <input
                                type="text"
                                value={codeAnswer[6]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 6)}
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
                                onChange={(e) => updateCodeAnswer(e.target.value, 7)}
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
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`" rows={`}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
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
                                {t1Q12?.type==="mcq" && t1Q12?.options.map((option) => (
                                   <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                   <label htmlFor={option.textId}>{option.text}</label>
                               </div>
                                ))}
                        </div>
                    </div>
                )
            case "3.1.13":
                return (
                    <div className='code-container'>
                        <div className='code-options-container'>
                                {t1Q13?.type==="mcq"&& t1Q13?.options.map((option) => (
                                   <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                   <label htmlFor={option.textId}>{option.text}</label>
                               </div>
                                ))}
                        </div>
                    </div>
                )
             case "3.1.14":
                return (
                    <div className='code-container'>
                        <div className='code-options-container'>
                                {t1Q14?.type==="mcq" && t1Q14?.options.map((option) => (
                                   <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                   <label htmlFor={option.textId}>{option.text}</label>
                               </div>
                                ))}
                        </div>
                    </div>
                )
            case "3.1.15":
                return (
                    <>
                    <div className='code-bank'>
                        {t1Q15?.type==="ordering"&&t1Q15?.options.map((option, index) => (
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
            case "3.1.16":
                return (
                    <>
                    <div className='code-bank'>
                        {t1Q16?.type==="ordering" && t1Q16?.options.map((option, index) => (
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
             case "3.1.17":
                return (
                    <>
                    <div className='code-bank'>
                        {t1Q17?.type==="ordering" && t1Q17?.options.map((option, index) => (
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
    }//edn to t1codeblock

    return (
        <div>
            {T1CodeBlock()}
        </div>
    )
}