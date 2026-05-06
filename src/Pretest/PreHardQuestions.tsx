import './PreHardQuestions.css';
import type { JSX } from 'react';
import {useState} from 'react';

export function PreHardQuestions({questionId}: {questionId: string}): JSX.Element {
    const [studentAnswer, setAnswer] = useState<string[]>([]);
    const updateAnswers = (value: string, index: number) => {
        const newAnswers = [...studentAnswer];
        newAnswers[index] = value;
        setAnswer(newAnswers);
    };

    const codeBlock = () => {
        switch (questionId) {
            case "1.1h":
                return(
                    <div>
                        <pre>
                            {`<Form.`}
                            <input 
                                className="fill-in-blank"
                                type="text"
                                value={studentAnswer[0]}
                                onChange={() => updateAnswers(studentAnswer[0], 0)}
                                placeholder="Enter missing tag"
                            />
                            {` controlId="formBasicEmail">`}
                            <br/>
                            {`  <Form.`}
                            <input 
                                type="text"
                                value={studentAnswer[1]}
                                onChange={() => updateAnswers(studentAnswer[1], 1)}
                                placeholder="Enter missing tag"
                                className="fill-in-blank"
                            /> 
                            {`>Email address</Form.`}
                            <input 
                                type="text"
                                value={studentAnswer[2]}
                                onChange={() => updateAnswers(studentAnswer[2], 2)}
                                placeholder="Enter missing tag"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`  <Form.`} 
                            <input 
                                type="text"
                                value={studentAnswer[3]}
                                onChange={() => updateAnswers(studentAnswer[3], 3)}
                                placeholder="Enter missing tag"
                                className="fill-in-blank"
                            />
                            {`type="email" placeholder="Enter email" />`}
                            <br/>
                            {`  <Form.`} 
                            <input
                                type="text"
                                value={studentAnswer[4]}
                                onChange={() => updateAnswers(studentAnswer[4], 4)}
                                placeholder="Enter missing tag"
                                className="fill-in-blank"
                            />
                            {`className="text-muted">`}
                            <br/>
                            {`    We'll never share your email with anyone else.`}
                            <br/>
                            {`  </Form.`}
                            <input
                                type="text"
                                value={studentAnswer[5]}
                                onChange={() => updateAnswers(studentAnswer[5], 5)}
                                placeholder="Enter missing tag"
                                className="fill-in-blank"
                                />  
                            {`>`}
                            <br/>
                            {`</Form.`}
                            <input
                                type="text"
                                value={studentAnswer[6]}
                                onChange={() => updateAnswers(studentAnswer[6], 6)}
                                placeholder="Enter missing tag"
                                className="fill-in-blank"
                            />
                            {`>`}

                        </pre>
                    </div>
                )/*end to case 1.1h*/
            case "1.2h":
                return(
                    <div>
                        <pre>
                            {`<Form.Control `}
                            <br/>
                            <input
                                type="text"
                                value={studentAnswer[0]}
                                onChange={() => updateAnswers(studentAnswer[0], 0)}
                                placeholder="Enter missing attribute"
                                className="fill-in-blank"
                            />
                            {`="Enter email" `}
                            <br/>
                            <input
                                type="text"
                                value={studentAnswer[1]}
                                onChange={() => updateAnswers(studentAnswer[1], 1)}
                                placeholder="Enter missing attribute"
                                className="fill-in-blank"
                            />
                            {`={true} />`}
                        </pre>
                    </div>
                )/*end to case 1.2h*/
                case "1.3h":
                    return(
                        <div>
                            <pre>
                                {`<Form.Control type="text" placeholder="Enter username" `}
                                <br/>
                                {`value={username} `}
                                <br/>
                                {`onChange={(e) => `}
                                <input
                                    type="text"
                                    value={studentAnswer[0]}
                                    onChange={() => updateAnswers(studentAnswer[0], 0)}
                                    placeholder="Enter missing code"
                                    className="fill-in-blank"
                                />
                                {`} />`}
                            </pre>
                        </div>
                    )/*end to case 1.3h*/
                    case "2.1h":
                        return(
                            <div>
                                <pre>
                                    {`<Form.`}
                                    <input
                                        type="text"
                                        value={studentAnswer[0]}
                                        onChange={() => updateAnswers(studentAnswer[0], 0)}
                                        placeholder="Enter missing tag"
                                        className="fill-in-blank"
                                    />
                                    <br/>
                                    {`type="`}
                                    <input 
                                        type="text"
                                        value={studentAnswer[1]}
                                        onChange={() => updateAnswers(studentAnswer[1], 1)}
                                        placeholder="Enter missing input type"
                                        className="fill-in-blank"
                                    />
                                    {`"`}
                                    <br/>
                                    {`placeholder="Enter email" `}
                                    <br/>
                                    {`value={`}
                                    <input
                                        type="text"
                                        value={studentAnswer[2]}
                                        onChange={() => updateAnswers(studentAnswer[2], 2)}
                                        placeholder="Enter state variable"
                                        className="fill-in-blank"
                                    />
                                    {`} `}
                                    <br/>
                                    {`onChange={(e) => `}
                                    <input
                                        type="text"
                                        value={studentAnswer[3]}
                                        onChange={() => updateAnswers(studentAnswer[3], 3)}
                                        placeholder="Enter missing code"
                                        className="fill-in-blank"
                                    />
                                    {`} />`}
                                </pre>
                            </div>
                    )/*end to case 2.1h*/
                    case "2.2h":
            return(
                <div>
                    <pre>
                        {`<Form.`}
                        <input
                            type="text"
                            value={studentAnswer[0]}
                            onChange={() => updateAnswers(studentAnswer[0], 0)}
                            placeholder="Enter missing tag"
                            className="fill-in-blank"
                        />
                        <br/>
                        {`type="`}
                        <input 
                            type="text"
                            value={studentAnswer[1]}
                            onChange={() => updateAnswers(studentAnswer[1], 1)}
                            placeholder="Enter missing input type"
                            className="fill-in-blank"
                        />
                        {`"`}
                        <br/>
                        {`label="Subscribe to newsletter" `}
                        <br/>
                        {`checked={`}
                        <input
                            type="text"
                            value={studentAnswer[1]}
                            onChange={() => updateAnswers(studentAnswer[1], 1)}
                            placeholder="Enter state variable"
                            className="fill-in-blank"
                        />
                        {`} `}
                        <br/>
                        {`onChange={(e) => `}
                        <input
                            type="text"
                            value={studentAnswer[2]}
                            onChange={() => updateAnswers(studentAnswer[2], 2)}
                            placeholder="Enter missing code"
                            className="fill-in-blank"
                        />
                        {`} />`}
                    </pre>
                </div>
            )/*end to case 2.2h*/
            case "2.3h":
                return (
                    <div>
                        <pre>
                            {`<Form.`}
                            <input
                                type="text"
                                value={studentAnswer[0]}
                                onChange={() => updateAnswers(studentAnswer[0], 0)}
                                placeholder="Enter missing tag"
                                className="fill-in-blank"
                            />
                            
                            <br/>
                            {`value={`}
                            <input
                                type="text"
                                value={studentAnswer[1]}
                                onChange={() => updateAnswers(studentAnswer[1], 1)}
                                placeholder="Enter state variable"
                                style={{
                                    width: "150px",
                                    margin: "0 5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    padding: "2px",
                                }}
                            />
                            {`} `}
                            <br/>
                            {`onChange={(e) => `}
                            <input
                                type="text"
                                value={studentAnswer[2]}
                                onChange={() => updateAnswers(studentAnswer[2], 2)}
                                placeholder="Enter missing code"
                                style={{
                                    width: "200px",
                                    margin: "0 5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    padding: "2px",
                                }}
                            />
                            {`} >`}
                            <br/>
                            {`<`}
                            <input
                                type="text"
                                value={studentAnswer[3]}
                                onChange={() => updateAnswers(studentAnswer[3], 3)}
                                placeholder="Enter missing tag"
                                className="fill-in-blank"
                            />
                            {`>France</`}
                            <input
                                type="text"
                                value={studentAnswer[4]}
                                onChange={() => updateAnswers(studentAnswer[4], 4)}
                                placeholder="Enter missing tag"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`<`}
                            <input
                                type="text"
                                value={studentAnswer[5]}
                                onChange={() => updateAnswers(studentAnswer[5], 5)}
                                placeholder="Enter missing tag"
                                className="fill-in-blank"
                            />
                            {`>Peru</`}
                            <input
                                type="text"
                                value={studentAnswer[6]}
                                onChange={() => updateAnswers(studentAnswer[6], 6)}
                                placeholder="Enter missing tag"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`<`}
                            <input
                                type="text"
                                value={studentAnswer[7]}
                                onChange={() => updateAnswers(studentAnswer[7], 7)}
                                placeholder="Enter missing tag"
                                className="fill-in-blank"
                            />
                            {`>Japan</`}
                            <input
                                type="text"
                                value={studentAnswer[8]}
                                onChange={() => updateAnswers(studentAnswer[8], 8)}
                                placeholder="Enter missing tag"
                                className="fill-in-blank"
                            />
                            {`>`}
                            <br/>
                            {`</Form.`}
                            <input
                                type="text"
                                value={studentAnswer[9]}
                                onChange={() => updateAnswers(studentAnswer[9], 9)}
                                placeholder="Enter missing tag"
                                className="fill-in-blank"
                            />
                            {`>`}
                        </pre>
                    </div>
                )/*end to case 2.3h*/
                case "2.4h":
                    return (
                        <div>
                            <pre>
                                {`<Form.Group controlId="formBasic">`}
                                <br/>
                                {`<Form.Label>Name</Form.Label>`}
                                <br/>
                                {`<Form.Control type="`}
                                <input 
                                    type="text"
                                    value={studentAnswer[0]}
                                    onChange={() => updateAnswers(studentAnswer[0], 0)}
                                    placeholder="Enter missing input type"
                                    className="fill-in-blank"
                                />
                                {`" placeholder="Enter name" />`}
                                <br/>
                                {`<Form.`}
                                <input
                                    type="text"
                                    value={studentAnswer[1]}
                                    onChange={() => updateAnswers(studentAnswer[1], 1)}
                                    placeholder="Enter missing tag"
                                    className="fill-in-blank"
                                />
                                {`> `}
                                <br/>
                                {`  <option>United States</option> `}
                                <br/>
                                {`  <option>Canada</option> `}
                                <br/>
                                {`  <option>Mexico</option> `}
                                <br/>
                                {`</Form.`}
                                <input
                                    type="text"
                                    value={studentAnswer[2]}
                                    onChange={() => updateAnswers(studentAnswer[2], 2)}
                                    placeholder="Enter missing tag"
                                    className="fill-in-blank"
                                />
                                {`>`}
                                <br/>
                                {`<Form.Check type="`}
                                <input
                                    type="text"
                                    value={studentAnswer[3]}
                                    onChange={() => updateAnswers(studentAnswer[3], 3)}
                                    placeholder="Enter missing input type"
                                    className="fill-in-blank"
                                />
                                {`" label="Subscribe to newsletter" />`}
                                <br/>
                                {`</Form.Group>`}
                            </pre>
                        </div>
                    )/*end to case 2.4h*/
                case "3.1h":
                        return (
                            <div>
                                <pre>
                                    {`<Form.Control type="`}
                                    <input 
                                        type="text"
                                        value={studentAnswer[0]}
                                        onChange={() => updateAnswers(studentAnswer[0], 0)}
                                        placeholder="Enter missing input type"
                                        className="fill-in-blank"
                                    />
                                    {`" placeholder="Enter age" />`}
                                    <br/>
                                    {`<Form.Control as="`}
                                    <input
                                        type="text"
                                        value={studentAnswer[1]}
                                        onChange={() => updateAnswers(studentAnswer[1], 1)}
                                        placeholder="Enter missing input type"
                                        className="fill-in-blank"
                                    />
                                    {`" placeholder="Enter comments" />`}
                                </pre>
                            </div>
                    )/*end to case 3.1h*/
                case "3.2h":
                    return (
                        <div>
                            <pre>
                                {`<Form.Check type="`}   
                                <input
                                    type="text"
                                    value={studentAnswer[0]}
                                    onChange={() => updateAnswers(studentAnswer[0], 0)}
                                    placeholder="Enter missing checkbox type"
                                    className="fill-in-blank"
                                />
                                {`" label="Subscribe to newsletter?" />`}
                                <br/>

                                {`<Form.Check type="`}
                                <input
                                    type="text"
                                    value={studentAnswer[1]}
                                    onChange={() => updateAnswers(studentAnswer[1], 1)}
                                    placeholder="Enter missing checkbox type"
                                    className="fill-in-blank"
                                />
                                {`" label="Text Message" />`}
                                <br/>
                                {`<Form.Check type="`}
                                <input
                                    type="text"
                                    value={studentAnswer[2]}
                                    onChange={() => updateAnswers(studentAnswer[2], 2)}
                                    placeholder="Enter missing checkbox type"
                                    className="fill-in-blank"
                                />
                                {`" label="Email" />`}
                                <br/>
                                {`<Form.Check type="`}
                                <input
                                    type="text"
                                    value={studentAnswer[3]}
                                    onChange={() => updateAnswers(studentAnswer[3], 3)}
                                    placeholder="Enter missing checkbox type"
                                    className="fill-in-blank"
                                />
                                {`" label="Delivery" />`}
                            </pre>
                        </div>
                    )/*end to case 3.2h*/
                case "3.3h":
                    return (
                        <div>
                            <pre>
                                {`const countries = ['France', 'Japan', 'Peru'];`}
                                <br/>
                                {`<Form.Select value={country} onChange={(e) => setCountry(e.target.value)}> `}
                                <br/>
                                {`  {countries.`}
                                <input 
                                    type="text"
                                    value={studentAnswer[0]}
                                    onChange={() => updateAnswers(studentAnswer[0], 0)}
                                    placeholder="Enter missing array method"
                                    className="fill-in-blank"
                                />
                                {`((country) => ( `}
                                <br/>
                                {`    <option `}
                                <input
                                    type="text"
                                    value={studentAnswer[1]}
                                    onChange={() => updateAnswers(studentAnswer[1], 1)}
                                    placeholder="Enter missing attribute"
                                    className="fill-in-blank"
                                />
                                {`={country} value={country}> `}
                                <br/>
                                {`      {country} `}
                                <br/>
                                {`    </option>))} `}
                                <br/>
                                {`</Form.Select>`}
                            </pre>
                        </div>
                    )/*end to case 3.3h*/
                default:
                    return <div><p>No question found for this ID.</p></div>
        }/**end to switch case*/
    }
    return (
        <>
        {codeBlock()}
        </>
    )
}