import type { JSX } from "react";
import {useState} from "react";
import { topic1CodeAnswers, topic2CodeAnswers, topic3CodeAnswers, topic4CodeAnswers } from "./M2Answers";

interface M2CodeProps {
    questionId: string;
}
 
export function M2Code({questionId}: M2CodeProps): JSX.Element {
    const [codeAnswer, setCA] = useState<string[]>([]);

    const t1Q12 = topic1CodeAnswers.find((q) => q.id === "2.1.12");
    if(questionId==="2.1.12" && !t1Q12) {return null};
    const t1Q13 = topic1CodeAnswers.find((q) => q.id === "2.1.13");
    if(questionId==="2.1.13" && !t1Q13) {return null};
    const t1Q14 = topic1CodeAnswers.find((q) => q.id === "2.1.14");
    if(questionId==="2.1.14" && !t1Q14) {return null};

    const t2Q12 = topic2CodeAnswers.find((q) => q.id === "2.2.12");
    if(questionId==="2.2.12" && !t2Q12) {return null};
    const t2Q13 = topic2CodeAnswers.find((q) => q.id === "2.2.13");
    if(questionId==="2.2.13" && !t2Q13) {return null};
    const t2Q14 = topic2CodeAnswers.find((q) => q.id === "2.2.14");
    if(questionId==="2.2.14" && !t2Q14) {return null};

    const t3Q9 = topic3CodeAnswers.find((q) => q.id === "2.3.9");
    if(questionId==="2.3.9" && !t3Q9) {return null};
    const t3Q10 = topic3CodeAnswers.find((q) => q.id === "2.3.10");
    if(questionId==="2.3.10" && !t3Q10) {return null};
    const t3Q11 = topic3CodeAnswers.find((q) => q.id === "2.3.11");
    if(questionId==="2.3.11" && !t3Q11) {return null};

    const t4Q16 = topic4CodeAnswers.find((q) => q.id === "2.4.16");
    if(questionId==="2.4.16" && !t4Q16) {return null};
    const t4Q17 = topic4CodeAnswers.find((q) => q.id === "2.4.17");
    if(questionId==="2.4.17" && !t4Q17) {return null};
    const t4Q18 = topic4CodeAnswers.find((q) => q.id === "2.4.18");
    if(questionId==="2.4.18" && !t4Q18) {return null};
    const t4Q19 = topic4CodeAnswers.find((q) => q.id === "2.4.19");
    if(questionId==="2.4.19" && !t4Q19) {return null};
    const t4Q20 = topic4CodeAnswers.find((q) => q.id === "2.4.20");
    if(questionId==="2.4.20" && !t4Q20) {return null};
    const t4Q21 = topic4CodeAnswers.find((q) => q.id === "2.4.21");
    if(questionId==="2.4.21" && !t4Q21) {return null};

    const updateCodeAnswer = (value: string, index: number) => {
        const newCodeAnswer = [...codeAnswer];
        newCodeAnswer[index] = value;
        setCA(newCodeAnswer);
    }
    
    const M2CodeBlock = () => {
        switch(questionId) {
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
                            { t1Q12.type ==="mcq" && t1Q12.options.map((option) => (
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
                            { t1Q13.type==="mcq" && t1Q13.options.map((option) => (
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
                        {t1Q14.type==="ordering" && t1Q14.options.map((option, index) => (
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
            case "2.2.10":
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
                            {`const [isHappy, setIsHappy] = useState<boolean>(true);`}
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
                            {`function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setIsHappy(event.target.checked);`}
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
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.Check`}
                            <br/>
                            {`   type="checkbox"`}
                            <br/>
                            {`   id="is-happy-check"`}
                            <br/>
                            {`  label="Happy?"`}
                            <br/>
                            {`  checked={isHappy}`}
                            <br/>
                            {`  onChange={updateIsHappy} `}
                            <br/>
                            {` />`}
                            <br/>
                            {` </div>`}
                        </pre>
                    </div>
                )
            case "2.2.11":
                return (
                    <div className="code-container">
                        <pre>
                            {`const [isHappy, setIsHappy] = useState<boolean>(true);`}
                            <br/>
                            {`function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setIsHappy(event.target.`}
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`);`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.`}
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            <br/>
                            {`type = "`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`"`}
                            <br/>
                            {`id = "is-happy-check"`}
                            <br/>
                            {`label = "Happy?"`}
                            <br/>
                            <input
                                type="text"
                                value={codeAnswer[3]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 3)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {` = {isHappy}`}
                            <br/>
                            {`onChange = {updateHappiness} `}
                            <br/>
                            {` />`}
                            {` </div>`}
                        </pre>
                    </div>
                )
            case "2.2.12":
                return (
                    <div className="code-container">
                        <pre>
                            {`const [isHappy, setIsHappy] = useState<boolean>(false);`}
                            <br/>
                            {`function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setIsHappy(event.target.checked);`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.Check`}
                            <br/>
                            {`   type="checkbox"`}
                            <br/>
                            {`   id="is-happy-check"`}
                            <br/>
                            {`  label="Happy?"`}
                            <br/>
                            {`  checked={isHappy}`}
                            <br/>
                            {`  onChange={updateHappiness} `}
                            <br/>
                            {` />`}
                            <br/>
                            {` </div>`}
                        </pre>
                        <div className="code-options-container">
                            { t2Q12.type==="mcq" && t2Q12.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </div>
                )
            case "2.2.13":
                return (
                    <>
                    <div className="code-container">
                    <pre>
                            {`const [isHappy, setIsHappy] = useState<boolean>(false);`}
                            <br/>
                            {`function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setIsHappy(event.target.value);`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.Check`}
                            <br/>
                            {`   type="checkbox"`}
                            <br/>
                            {`   id="is-happy-check"`}
                            <br/>
                            {`  label="Happy?"`}
                            <br/>
                            {`  checked={isHappy}`}
                            <br/>
                            {`  onChange={updateHappiness} `}
                            <br/>
                            {` />`}
                            <br/>
                            {` </div>`}
                        </pre>
                    </div>
                    <div className="code-options-container">
                            { t2Q13.type==="mcq"&&t2Q13.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </>
                )
            case  "2.2.14":
                return (
                    <>
                    <div className="code-bank">
                        {t2Q14.type==="ordering" && t2Q14.options.map((option, index) => (
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
            case "2.3.7":
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
                            {`const [emotion, setEmotion] = useState<string>("happy");`}
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
                            {`function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {`}
                            <br/>
                            {`  setEmotion(event.target.value);`}
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
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.Select value={emotion} onChange={updateEmotion}>`}
                            <br/>
                            {`   <option value="happy">Happy</option>`}
                            <br/>
                            {`   <option value="sad">Sad</option>`}
                            <br/>
                            {`  <option value="angry">Angry</option>`}
                            <br/>
                            {`  </Form.Select>`}
                            <br/>
                            {` </div>`}
                        </pre>
                    </div>
                )
            case "2.3.8":
                return (
                    <div className="code-container">
                        <pre>
                            {`const [emotion, setEmotion] = useState<string>("happy");`}
                            <br/>
                            {`function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {`}
                            <br/>
                            {`  setEmotion(event.target.value);`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.`} 
                            <input
                                type="text"
                                value={codeAnswer[0]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`value={emotion} onChange={updateEmotion}>`}
                            <br/>
                            {`   <`} 
                            <input
                                type="text"
                                value={codeAnswer[1]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`value="happy">Happy</`}
                            <input
                                type="text"
                                value={codeAnswer[2]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`   <`} 
                            <input
                                type="text"
                                value={codeAnswer[3]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 3)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`value="sad">Sad</`}
                            <input
                                type="text"
                                value={codeAnswer[4]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 4)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`  </Form.`}
                            <input
                                type="text"
                                value={codeAnswer[5]}
                                onChange={(e) => updateCodeAnswer(e.target.value, 5)}
                                placeholder="Enter answer"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {` </div>`}

                        </pre>
                    </div>
                )
            case "2.3.9":
                return (
                    <>
                    <div className="code-container">
                        <pre>
                            <br/>
                            {`const [emotion, setEmotion] = useState<string>("Happy");`}
                            <br/>
                            {`function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {`}
                            <br/>
                            {`  setEmotion(event.target.value);`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.Select value={emotion} onChange={updateEmotion}>`}
                            <br/>
                            {`   <option value="happy">Happy</option>`}
                            <br/>
                            {`   <option value="sad">Sad</option>`}
                            <br/>
                            {`  <option value="angry">Angry</option>`}
                            <br/>
                            {`  </Form.Select>`}
                            <br/>
                            {` </div>`}
                        </pre>
                    </div>
                    <div className="code-options-container">
                            {t3Q9.type==="mcq" && t3Q9.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </>
                )
            case "2.3.10":
                return (
                    <>
                    <div className="code-container">
                        <pre>
                            <br/>
                            {`const [emotion, setEmotion] = useState<string>("Happy");`}
                            <br/>
                            {`function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {`}
                            <br/>
                            {`  setEmotion(event.target.value);`}
                            <br/>
                            {`}`}
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.Select value={emotion} onChange={updateEmotion()}>`}
                            <br/>
                            {`   <option value="happy">Happy</option>`}
                            <br/>
                            {`   <option value="sad">Sad</option>`}
                            <br/>
                            {`  <option value="angry">Angry</option>`}
                            <br/>
                            {`  </Form.Select>`}
                            <br/>
                            {` </div>`}
                        </pre>
                    </div>
                    <div className="code-options-container">
                            {t3Q10.type==="mcq" && t3Q10.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </>
                )
            case "2.3.11":
                return (
                    <>
                    <div className="code-bank">
                        {t3Q11.type==="ordering" && t3Q11.options.map((option, index) => (
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
            case "2.4.16":
                return (
                    <>
                    <div className="code-container">
                        <pre>
                        {`const [name, setName] = useState<string>('My Neighbor Totoro');`}
                        <br/>
                        <br/>
                        {`function updateName(event: React.ChangeEvent<HTMLInputElement>) {`}
                        <br/>
                        {`  setName(event.target.value);}`}
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
                    </div>
                    <div className="code-options-container">
                            { t4Q16.type==="mcq"&& t4Q16.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </>
                )
            case "2.4.17":
                return (
                    <>
                    <div className="code-container">
                        <pre>
                            {`const [isHappy, setIsHappy] = useState<boolean>(false);`}
                            <br/>
                            {`function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {`}
                            <br/>
                            {`  setIsHappy(event.target.checked);}`}
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.Check`}
                            <br/>
                            {`   type="checkbox"`}
                            <br/>
                            {`   id="is-happy-check"`}
                            <br/>
                            {`  label="Happy?"`}
                            <br/>
                            {`  checked={isHappy}`}
                            <br/>
                            {`  onChange={updateHappiness} `}
                            <br/>
                            {` />`}
                            <br/>
                            {` </div>`}
                        </pre>
                    </div>
                    <div className="code-options-container">
                            { t4Q17.type==="mcq" && t4Q17.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </>
                )
            case "2.4.18":
                return (
                    <>
                    <div className="code-container">
                        <pre>
                            <br/>
                            {`const [emotion, setEmotion] = useState<string>("Happy");`}
                            <br/>
                            {`function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {`}
                            <br/>
                            {`  setEmotion(event.target.value);}`}
                            <br/>
                            {`return <div>`}
                            <br/>
                            {` <Form.Select value={emotion} onChange={updateEmotion}>`}
                            <br/>
                            {`   <option value="happy">Happy</option>`}
                            <br/>
                            {`   <option value="sad">Sad</option>`}
                            <br/>
                            {`  <option value="angry">Angry</option>`}
                            <br/>
                            {`  </Form.Select>`}
                            <br/>
                            {` </div>`}
                        </pre>
                    </div>
                    <div className="code-options-container">
                            { t4Q18.type==="mcq" && t4Q18.options.map((option) => (
                                <div key={option.textId} className="code-answer-option">
                                    <input type="radio" id={option.textId} name="answer" value={option.textId} />
                                    <label htmlFor={option.textId}>{option.text}</label>
                                </div>
                            )) }
                        </div>
                    </>
                )
            case "2.4.19":
                return (
                    <>
                    <div className="code-bank">
                        {t4Q19.type==="ordering" && t4Q19.options.map((option, index) => (
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
                case "2.4.20":
                    return (
                        <>
                        <div className="code-bank">
                            {t4Q20.type==="ordering" && t4Q20.options.map((option, index) => (
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
                    case "2.4.21":
                        return (
                            <>
                            <div className="code-bank">
                                {t4Q21.type==="ordering" && t4Q21.options.map((option, index) => (
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
    }//end to M2CodeBlock

    return (
       <div>
            {M2CodeBlock()}
       </div>
    )
}