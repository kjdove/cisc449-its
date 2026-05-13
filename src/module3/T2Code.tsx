import type { JSX } from 'react';
// import {useState} from 'react';
import { topic2CodeAnswers} from './M3Answers';

interface T2CodeProps {
    questionId: string;
    studentAnswer: string[];
    setStudentAnswer: ( questionId: string, answer: string[]) => void;
}

export function T2Code({questionId, studentAnswer, setStudentAnswer}: T2CodeProps): JSX.Element {
    // const [codeAnswer, setCA] = useState<string[]>([]);

    const updateCodeAnswer = (value: string, index: number) => {
        const updatedAnswers = [...studentAnswer];
        updatedAnswers[index] = value;
        setStudentAnswer(questionId, updatedAnswers);
    };

    const t2Q10 = topic2CodeAnswers.find((q) => q.id === "3.2.10");
    const t2Q11 = topic2CodeAnswers.find((q) => q.id === "3.2.11");
    const t2Q12 = topic2CodeAnswers.find((q) => q.id === "3.2.12");
    const t2Q16 = topic2CodeAnswers.find((q) => q.id === "3.2.16");
    const t2Q17 = topic2CodeAnswers.find((q) => q.id === "3.2.17");
    const t2Q18 = topic2CodeAnswers.find((q) => q.id === "3.2.18");
    const t2Q19 = topic2CodeAnswers.find((q) => q.id === "3.2.19");
    const t2Q20 = topic2CodeAnswers.find((q) => q.id === "3.2.20");
    const t2Q21 = topic2CodeAnswers.find((q) => q.id === "3.2.21");

    const T2CodeBlock = () => {
        switch(questionId){
            
            case "3.2.10":
                return(
                    <>
                    <div className='code-container'>
                        <pre>
                            {`const [isHappy, setIsHappy] = useState<boolean>(true);`}
                            <br/>
                            {`function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setIsHappy(event.target.checked));`}
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
                            {t2Q10?.type==="mcq" && t2Q10?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input
                                    type="radio"
                                    id={option.textId}
                                    name={t2Q10.id}
                                    value={option.textId}
                                    checked={studentAnswer[0] === option.textId}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                />
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
                            {t2Q11?.type==="mcq"&& t2Q11?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input
                                    type="radio"
                                    id={option.textId}
                                    name={t2Q11.id}
                                    value={option.textId}
                                    checked={studentAnswer[0] === option.textId}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                />
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
                            {`const [emotions, setEmotions] = useState<string>(["happy", "sad"]);`}
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
                            {t2Q12?.type==="mcq" && t2Q12?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input
                                    type="radio"
                                    id={option.textId}
                                    name={t2Q12.id}
                                    value={option.textId}
                                    checked={studentAnswer[0] === option.textId}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                />
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
                                value={studentAnswer[0]}
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
                                value={studentAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank" 
                            />
                            <br/>
                            {`type ="`}
                            <input
                                type="text"
                                value={studentAnswer[2]}
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
                                value={studentAnswer[0]}
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
                                value={studentAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            <br/>
                            {`type="`}
                            <input
                                type="text"
                                value={studentAnswer[2]}
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
                                value={studentAnswer[3]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 3)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` === "`}
                            <input
                                type="text"
                                value={studentAnswer[4]}
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
                                value={studentAnswer[5]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 5)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            <br/>
                            {`type="`}
                            <input
                                type="text"
                                value={studentAnswer[6]}
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
                                value={studentAnswer[7]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 7)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` === "`}
                            <input
                                type="text"
                                value={studentAnswer[8]}
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
                                value={studentAnswer[0]}
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
                                value={studentAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` type="`}
                            <input
                                type="text"
                                value={studentAnswer[2]}
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
                                value={studentAnswer[3]}
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
                                value={studentAnswer[4]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 4)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` type="`}
                            <input
                                type="text"
                                value={studentAnswer[5]}
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
                                value={studentAnswer[6]}
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
                            {t2Q16?.type==="mcq" && t2Q16.options?.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input
                                    type="radio"
                                    id={option.textId}
                                    name={t2Q16.id}
                                    value={option.textId}
                                    checked={studentAnswer[0] === option.textId}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                />
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
                            {t2Q17?.type==="mcq" && t2Q17?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input
                                    type="radio"
                                    id={option.textId}
                                    name={t2Q17.id}
                                    value={option.textId}
                                    checked={studentAnswer[0] === option.textId}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                />
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
                            {t2Q18?.type==="mcq" && t2Q18?.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                <input
                                    type="radio"
                                    id={option.textId}
                                    name={t2Q18.id}
                                    value={option.textId}
                                    checked={studentAnswer[0] === option.textId}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                />
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
                        {t2Q19?.type==="ordering" && t2Q19?.options.map((option, index) => (
                            <div key={index} className="code-option">
                                <strong>{index+1}.</strong> {option}
                            </div>
                        ))}
                    </div>
                    <div className="student-ordering">
                        <input
                            type="text"
                            value={studentAnswer[0]}
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
                        {t2Q20?.type==="ordering" && t2Q20?.options.map((option, index) => (
                            <div key={index} className="code-option">
                                <strong>{index+1}.</strong> {option}
                            </div>
                        ))}
                    </div>
                    <div className="student-ordering">
                        <input
                            type="text"
                            value={studentAnswer[0]}
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
                        {t2Q21?.type==="ordering" && t2Q21?.options.map((option, index) => (
                            <div key={index} className="code-option">
                                <strong>{index+1}.</strong> {option}
                            </div>
                        ))}
                    </div>
                    <div className="student-ordering">
                        <input
                            type="text"
                            value={studentAnswer[0]}
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
    }//end to t2codeblock
    return (
        <div>
            {T2CodeBlock()}
        </div>
    )
}