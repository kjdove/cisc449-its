import type { JSX } from 'react';
import {useState} from 'react';
import { topic1CodeAnswers, topic2CodeAnswers, topic3CodeAnswers } from './M3Answers';


export function M3Code({questionId}: {questionId: string}): JSX.Element {
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

    const t2Q10 = topic2CodeAnswers.find((q) => q.id === "3.2.10");
    const t2Q11 = topic2CodeAnswers.find((q) => q.id === "3.2.11");
    const t2Q12 = topic2CodeAnswers.find((q) => q.id === "3.2.12");
    const t2Q16 = topic2CodeAnswers.find((q) => q.id === "3.2.16");
    const t2Q17 = topic2CodeAnswers.find((q) => q.id === "3.2.17");
    const t2Q18 = topic2CodeAnswers.find((q) => q.id === "3.2.18");
    const t2Q19 = topic2CodeAnswers.find((q) => q.id === "3.2.19");
    const t2Q20 = topic2CodeAnswers.find((q) => q.id === "3.2.20");
    const t2Q21 = topic2CodeAnswers.find((q) => q.id === "3.2.21");

    const t3Q6 = topic3CodeAnswers.find((q) => q.id === "3.3.6");
    const t3Q9 = topic3CodeAnswers.find((q) => q.id === "3.3.9");
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
                                {t1Q12.type==="mcq" && t1Q12.options.map((option) => (
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
                                {t1Q13.type==="mcq"&& t1Q13.options.map((option) => (
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
                                {t1Q14.type==="mcq" && t1Q14.options.map((option) => (
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
                        {t1Q15.type==="ordering"&&t1Q15.options.map((option, index) => (
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
                        {t1Q16.type==="ordering" && t1Q16.options.map((option, index) => (
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
                        {t1Q17.type==="ordering" && t1Q17.options.map((option, index) => (
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
            case "3.2.10":
                return(
                    <>
                    <div className='code-container'>
                        <pre>
                            {`const [isHappy, setIsHappy] = useState<boolean>(true);`}
                            <br/>
                            {`function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setIsHappy(event.target.value));`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`<Form.Check`}
                            <br/>
                            {`  type="switch"`}
                            <br/>
                            {`  id="is-happy-check"`}
                            <br/>
                            {`  label="Happy?"`}
                            <br/>
                            {`  value={isHappy}`}
                            <br/>
                            {`  onChange={updateHappiness}/>`}
                            <br/>
                            {`)`}
                        </pre>
                    </div>
                    <div className='code-options-container'>
                            {t2Q10.type==="mcq" && t2Q10.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                <label htmlFor={option.textId}>{option.text}</label>
                            </div>
                            ))}
                    </div>
                    </>
                )
            case "3.2.11":
                return (
                    <>
                    <div className='code-container'>
                        {`const [emotion, setEmotion] = useState<string>("happy");`}
                            <br/>
                            {`function updateEmotion(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setEmotion(event.target.value));`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`<Form.Check`}
                            <br/>
                            {`  type="radio"`}
                            <br/>
                            {`  name="emotions"`}
                            <br/>
                            {`  id="happy-check"`}
                            <br/>
                            {`  label="Happy"`}
                            <br/>
                            {`  value="happy"`}
                            <br/>
                            {`  checked={emotion === "happy"}`}
                            <br/>
                            {`  onChange={updateEmotion}/>`}
                            <br/>
                            {`<Form.Check`}
                            <br/>
                            {`  type="radio"`}
                            <br/>
                            {`  name="emotions"`}
                            <br/>
                            {`  id="sad-check"`}
                            <br/>
                            {`  label="Sad"`}
                            <br/>
                            {`  value="sad"`}
                            <br/>
                            {`  checked={emotion === "sad"}`}
                            <br/>
                            {`  onChange={updateEmotion}/>`}
                            <br/>
                            {`)`}
                    </div>
                    <div className='code-options-container'>
                            {t2Q11.type==="mcq"&& t2Q11.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                <label htmlFor={option.textId}>{option.text}</label>
                            </div>
                            ))}
                    </div>
                    </>
                )
            case "3.2.12":
                return (
                    <>
                    <div className='code-container'>
                        <pre>
                            {`const [emotions, setEmotions] = useState<string>("happy");`}
                            <br/>
                            {`function updateEmotions(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setEmotions(event.target.value));`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`<Form.Check`}
                            <br/>
                            {`  type="checkbox"`}
                            <br/>
                            {`  name="emotions"`}
                            <br/>
                            {`  id="happy-check"`}
                            <br/>
                            {`  label="Happy"`}
                            <br/>
                            {`  value="happy"`}
                            <br/>
                            {`  checked={emotions === "happy"}`}
                            <br/>
                            {`  onChange={updateEmotions}/>`}
                            <br/>
                            {`<Form.Check`}
                            <br/>
                            {`  type="checkbox"`}
                            <br/>
                            {`  name="emotions"`}
                            <br/>
                            {`  id="sad-check"`}
                            <br/>
                            {`  label="Sad"`}
                            <br/>
                            {`  value="sad"`}
                            <br/>
                            {`  checked={emotions === "sad"}`}
                            <br/>
                            {`  onChange={updateEmotions}/>`}
                            <br/>
                            {`)`}
                        </pre>
                    </div>
                    <div className='code-options-container'>
                            {t2Q12.type==="mcq" && t2Q12.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                <label htmlFor={option.textId}>{option.text}</label>
                            </div>
                            ))}
                    </div>
                    </>
                )
            case "3.2.13":
                return (
                    <div className='code-container'>
                        <pre>
                            {`const [isBlue, setIsBlue] = useState<`}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>(true);`}
                            <br/>
                            {`function updateIsBlue(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setIsBlue(event.target.value));`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`<Form.`}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank" 
                            />
                            <br/>
                            {`type ="`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`"`}
                            <br/>
                            {`id="is-blue-check"`}
                            <br/>
                            {`label="Blue?"`}
                            <br/>
                            {`value={isBlue}`}
                            <br/>
                            {`onChange={updateIsBlue}/>`}
                            <br/>
                            {`)`}
                            
                        </pre>
                    </div>
                )
            case "3.2.14":
                return(
                    <div className='code-container'>
                        <pre>
                            {`const [color, setColor] = useState<`}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>('green');`}
                            <br/>
                            {`function updateColor(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setColor(event.target.value));`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`<Form.`}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            <br/>
                            {`type="`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`"`}
                            <br/>
                            {`name="color"`}   
                            <br/>
                            {`id="color-check"`}
                            <br/>
                            {`label="Green"`}
                            <br/>
                            {`value="green"`}
                            <br/>
                            {`checked={`}
                            <input
                                type="text"
                                value={codeAnswer[3]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 3)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` === "`}
                            <input
                                type="text"
                                value={codeAnswer[4]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 4)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`"}`}
                            <br/>
                            {`onChange={updateColor}/>`}
                            <br/>
                            {`<Form.`}
                            <input
                                type="text"
                                value={codeAnswer[5]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 5)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            <br/>
                            {`type="`}
                            <input
                                type="text"
                                value={codeAnswer[6]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 6)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`"`}
                            <br/>
                            {`name="color"`}   
                            <br/>
                            {`id="color-check"`}
                            <br/>
                            {`label="Blue"`}
                            <br/>
                            {`value="blue"`}
                            <br/>
                            {`checked={`}
                            <input
                                type="text"
                                value={codeAnswer[7]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 7)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` === "`}
                            <input
                                type="text"
                                value={codeAnswer[8]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 8)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`"}`}
                            <br/>
                            {`onChange={updateColor}/>`}
                            <br/>
                            {`)`}

                        </pre>
                    </div>
                )
            case "3.2.15":
                return (
                    <div className="code-container">
                        <pre>
                            {`const [response, setResponse] = useState<`}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>(["blue", "green"]);`}
                            <br/>
                            {`function updateResponse(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setResponse(event.target.value));`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`<Form.`}
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
                            {`"`}
                            <br/>
                            {`name="colors"`}
                            <br/>
                            {`id="blue-check"`}
                            <br/>
                            {`label="Blue"`}
                            <br/>
                            {`value="blue"`}
                            <br/>
                            <input
                                type="text"
                                value={codeAnswer[3]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 3)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`={response.includes("blue")}`}
                            <br/>
                            {`onChange={updateResponse}/>`}
                            <br/>
                            {`<Form.`}
                            <input
                                type="text"
                                value={codeAnswer[4]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 4)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` type="`}
                            <input
                                type="text"
                                value={codeAnswer[5]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 5)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`"`}
                            <br/>
                            {`name="colors"`}
                            <br/>
                            {`id="green-check"`}
                            <br/>
                            {`label="Green"`}
                            <br/>
                            {`value="green"`}
                            <br/>
                            <input
                                type="text"
                                value={codeAnswer[6]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 6)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`={response.includes("green")}`}
                            <br/>
                            {`onChange={updateResponse}/>`}
                            <br/>
                            {`)`}
                        </pre>
                    </div>
                )
            case "3.2.16":
                return (
                    <div className='code-container'>
                    <div className='code-options-container'>
                            {t2Q16.type==="mcq" && t2Q16.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                <label htmlFor={option.textId}>{option.text}</label>
                            </div>
                            ))}
                    </div>
                    </div>
                )
            case "3.2.17":
                return (
                    <div className='code-container'>
                    <div className='code-options-container'>
                            {t2Q17.type==="mcq" && t2Q17.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                <label htmlFor={option.textId}>{option.text}</label>
                            </div>
                            ))}
                    </div>
                    </div>
                )
            case "3.2.18":
                return (
                    <div className='code-container'>
                    <div className='code-options-container'>
                            {t2Q18.type==="mcq" && t2Q18.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                <label htmlFor={option.textId}>{option.text}</label>
                            </div>
                            ))}
                    </div>
                    </div>
                )
            case "3.2.19":
                return (
                    <>
                    <div className='code-bank'>
                        {t2Q19.type==="ordering" && t2Q19.options.map((option, index) => (
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
            case "3.2.20":
                return (
                    <>
                    <div className='code-bank'>
                        {t2Q20.type==="ordering" && t2Q20.options.map((option, index) => (
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
            case "3.2.21":
                return (
                    <>
                    <div className='code-bank'>
                        {t2Q21.type==="ordering" && t2Q21.options.map((option, index) => (
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
            case "3.3.6": 
                return (
                    <div className='code-container'>
                    <div className='code-options-container'>
                            {t3Q6.type==="mcq" && t3Q6.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                <label htmlFor={option.textId}>{option.text}</label>
                            </div>
                            ))}
                    </div>
                    </div>
                )
            case "3.3.7":
                return (
                    <div className="code-container">
                        <pre>
                            {`const COLORS = ["red", "blue", "green", "orange", "purple", "yellow"];`}
                            <br/>
                            {`const [favorite, setFavorite] = useState<string>(COLORS[0]);`}
                            <br/>
                            {`function updateFavorite(event: React.ChangeEvent<HTMLSelectElement>) {`}
                            <br/>
                            {` setFavorite(event.target.value);`}
                            <br/>
                            { `}`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`<Form.`} 
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`controlId="favoriteColors">`}
                            <br/>
                            { `<Form.Label>What is your favorite color?</Form.Label>`}
                            <br/>
                            { `<Form.`}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`value = {`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`} onChange={`}
                            <input
                                type="text"
                                value={codeAnswer[3]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 3)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`}>`}
                            <br/>
                            {`{`}
                            <input
                                type="text"
                                value={codeAnswer[4]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 4)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`.map((color: string) => (`}
                            <br/>
                            {`<`}
                            <input
                                type="text"
                                value={codeAnswer[5]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 5)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` key={color} value={color}>{color}</`}
                            <input
                                type="text"
                                value={codeAnswer[6]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 6)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>))}`}
                            <br/>
                            {`</Form.`}
                            <input
                                type="text"
                                value={codeAnswer[7]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 7)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`</Form.`}
                            <input
                                type="text"
                                value={codeAnswer[8]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 8)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`)`}
                        </pre>
                    </div>
                )
            case "3.3.8":
                return (
                    <div className='code-container'>
                        <pre>
                            {`const COLORS = ["red", "blue", "green", "orange", "purple", "yellow"];`}
                            <br/>
                            {`const [favorite, setFavorite] = useState<string>(COLORS[0]);`}
                            <br/>
                            {`function updateFavorite(event: React.ChangeEvent<HTMLSelectElement>) {`}
                            <br/>
                            {` setFavorite(event.target.value);`}
                            <br/>
                            { `}`}
                            <br/>
                            {`return (`}
                            <br/>
                            {`<Form.Group controlId="favoriteColors">`}
                            <br/>
                            { `<Form.Label>What is your favorite color?</Form.Label>`}
                            <br/>
                            {` <Form.Select `}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` = {favorite}`}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` ={updateFavorite}>`}
                            <br/>
                            {`{COLORS.`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`((color: string) => (`}
                            <br/>
                            {`<option `}
                            <input
                                type="text"
                                value={codeAnswer[3]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 3)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` ={color} value={color}>{color}</option>))}`}
                            <br/>
                            {`</Form.Select>`}
                            <br/>
                            {`</Form.Group>`}
                            <br/>
                            {`)`}
                        </pre>
                    </div>
                )
            case "3.3.9":
                return (
                    <>
                    <div className='code-bank'>
                        {t3Q9.type==="ordering" && t3Q9.options.map((option, index) => (
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
    }//end to m1 code block
    return(
        <div>
            {M1CodeBlock()}
        </div>
    )
}