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
                )/*end to case 1.1h*/
            case "1.2h":
                return(
                    <div>
                        <pre>
                            {`<Form.Control `}
                            <br/>
                            <input
                                type="text"
                                value={answer[0]}
                                onChange={() => updateAnswers(answer[0], 0)}
                                placeholder="Enter missing attribute"
                                style={{
                                    width: "150px",
                                    margin: "0 5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    padding: "2px",
                                }}
                            />
                            {`="Enter email" `}
                            <br/>
                            <input
                                type="text"
                                value={answer[1]}
                                onChange={() => updateAnswers(answer[1], 1)}
                                placeholder="Enter missing attribute"
                                style={{
                                    width: "150px",
                                    margin: "0 5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    padding: "2px",
                                }}
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
                                    value={answer[0]}
                                    onChange={() => updateAnswers(answer[0], 0)}
                                    placeholder="Enter missing code"
                                    style={{
                                        width: "200px",
                                        margin: "0 5px",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                        padding: "2px",
                                    }}
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
                                    <br/>
                                    {`type="`}
                                    <input 
                                        type="text"
                                        value={answer[1]}
                                        onChange={() => updateAnswers(answer[1], 1)}
                                        placeholder="Enter missing input type"
                                        style={{
                                            width: "150px",
                                            margin: "0 5px",
                                            border: "1px solid #ccc",
                                            borderRadius: "4px",
                                            padding: "2px",
                                        }}
                                    />
                                    {`"`}
                                    <br/>
                                    {`placeholder="Enter email" `}
                                    <br/>
                                    {`value={`}
                                    <input
                                        type="text"
                                        value={answer[2]}
                                        onChange={() => updateAnswers(answer[2], 2)}
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
                                        value={answer[3]}
                                        onChange={() => updateAnswers(answer[3], 3)}
                                        placeholder="Enter missing code"
                                        style={{
                                            width: "200px",
                                            margin: "0 5px",
                                            border: "1px solid #ccc",
                                            borderRadius: "4px",
                                            padding: "2px",
                                        }}
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
                        <br/>
                        {`type="`}
                        <input 
                            type="text"
                            value={answer[1]}
                            onChange={() => updateAnswers(answer[1], 1)}
                            placeholder="Enter missing input type"
                            style={{
                                width: "150px",
                                margin: "0 5px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                padding: "2px",
                            }}
                        />
                        {`"`}
                        <br/>
                        {`label="Subscribe to newsletter" `}
                        <br/>
                        {`checked={`}
                        <input
                            type="text"
                            value={answer[1]}
                            onChange={() => updateAnswers(answer[1], 1)}
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
                            value={answer[2]}
                            onChange={() => updateAnswers(answer[2], 2)}
                            placeholder="Enter missing code"
                            style={{
                                width: "200px",
                                margin: "0 5px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                padding: "2px",
                            }}
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
                            
                            <br/>
                            {`value={`}
                            <input
                                type="text"
                                value={answer[1]}
                                onChange={() => updateAnswers(answer[1], 1)}
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
                                value={answer[2]}
                                onChange={() => updateAnswers(answer[2], 2)}
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
                            {`>France</`}
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
                            {`>`}
                            <br/>
                            {`<`}
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
                            {`>Peru</`}
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
                            <br/>
                            {`<`}
                            <input
                                type="text"
                                value={answer[7]}
                                onChange={() => updateAnswers(answer[7], 7)}
                                placeholder="Enter missing tag"
                                style={{
                                    width: "100px",
                                    margin: "0 5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    padding: "2px",
                                }}
                            />
                            {`>Japan</`}
                            <input
                                type="text"
                                value={answer[8]}
                                onChange={() => updateAnswers(answer[8], 8)}
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
                                value={answer[9]}
                                onChange={() => updateAnswers(answer[9], 9)}
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
                                    value={answer[0]}
                                    onChange={() => updateAnswers(answer[0], 0)}
                                    placeholder="Enter missing input type"
                                    style={{
                                        width: "150px",
                                        margin: "0 5px",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                        padding: "2px",
                                    }}
                                />
                                {`" placeholder="Enter name" />`}
                                <br/>
                                {`<Form.Check type="`}
                                <input
                                    type="text"
                                    value={answer[1]}
                                    onChange={() => updateAnswers(answer[1], 1)}
                                    placeholder="Enter missing input type"
                                    style={{
                                        width: "150px",
                                        margin: "0 5px",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                        padding: "2px",
                                    }}
                                />
                                {`" label="Subscribe to newsletter" />`}
                                <br/>
                                {`<Form.`}
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
                                {`>`}
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
                                        value={answer[0]}
                                        onChange={() => updateAnswers(answer[0], 0)}
                                        placeholder="Enter missing input type"
                                        style={{
                                            width: "150px",
                                            margin: "0 5px",
                                            border: "1px solid #ccc",
                                            borderRadius: "4px",
                                            padding: "2px",
                                        }}
                                    />
                                    {`" placeholder="Enter age" />`}
                                    <br/>
                                    {`<Form.Control as="`}
                                    <input
                                        type="text"
                                        value={answer[1]}
                                        onChange={() => updateAnswers(answer[1], 1)}
                                        placeholder="Enter missing input type"
                                        style={{
                                            width: "150px",
                                            margin: "0 5px",
                                            border: "1px solid #ccc",
                                            borderRadius: "4px",
                                            padding: "2px",
                                        }}
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
                                    value={answer[0]}
                                    onChange={() => updateAnswers(answer[0], 0)}
                                    placeholder="Enter missing checkbox type"
                                    style={{
                                        width: "150px",
                                        margin: "0 5px",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                        padding: "2px",
                                    }}
                                />
                                {`" label="Subscribe to newsletter?" />`}
                                <br/>

                                {`<Form.Check type="`}
                                <input
                                    type="text"
                                    value={answer[1]}
                                    onChange={() => updateAnswers(answer[1], 1)}
                                    placeholder="Enter missing checkbox type"
                                    style={{
                                        width: "150px",
                                        margin: "0 5px",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                        padding: "2px",
                                    }}
                                />
                                {`" label="Text Message" />`}
                                <br/>
                                {`<Form.Check type="`}
                                <input
                                    type="text"
                                    value={answer[2]}
                                    onChange={() => updateAnswers(answer[2], 2)}
                                    placeholder="Enter missing checkbox type"
                                    style={{
                                        width: "150px",
                                        margin: "0 5px",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                        padding: "2px",
                                    }}
                                />
                                {`" label="Email" />`}
                                <br/>
                                {`<Form.Check type="`}
                                <input
                                    type="text"
                                    value={answer[3]}
                                    onChange={() => updateAnswers(answer[3], 3)}
                                    placeholder="Enter missing checkbox type"
                                    style={{
                                        width: "150px",
                                        margin: "0 5px",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                        padding: "2px",
                                    }}
                                />
                                {`" label="Delivery" />`}
                            </pre>
                        </div>
                    )/*end to case 3.2h*/
                case "3.3h":
                    return (
                        <div>
                            <pre>
                                {`const countries = ['United States', 'Canada', 'Mexico'];`}
                                <br/>
                                {`<Form.Select value={country} onChange={(e) => setCountry(e.target.value)}> `}
                                <br/>
                                {`  {countries.`}
                                <input 
                                    type="text"
                                    value={answer[0]}
                                    onChange={() => updateAnswers(answer[0], 0)}
                                    placeholder="Enter missing array method"
                                    style={{
                                        width: "150px",
                                        margin: "0 5px",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                        padding: "2px",
                                    }}
                                />
                                {`((country) => ( `}
                                <br/>
                                {`    <option `}
                                <input
                                    type="text"
                                    value={answer[1]}
                                    onChange={() => updateAnswers(answer[1], 1)}
                                    placeholder="Enter missing attribute"
                                    style={{
                                        width: "150px",
                                        margin: "0 5px",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                        padding: "2px",
                                    }}
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

        }/**end to switch case*/

    }

    return (
        <>
        {code()}
        </>
    )
}