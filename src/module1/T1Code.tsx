import type { JSX } from 'react';
// import {useState} from 'react';
import {topic1CodeAnswers} from './M1Answers';

interface T1CodeProps {
    questionId: string;
    studentAnswer: string[];
    setStudentAnswer: ( questionId: string, answer: string[]) => void;
}

export function T1Code({questionId, studentAnswer, setStudentAnswer}: T1CodeProps): JSX.Element {
    // const [codeAnswer, setCA] = useState<string[]>([]);
    
    const t1Q12 = topic1CodeAnswers.find((q) => q.id === "1.1.12");

    const updateCodeAnswer = (value: string, index: number) => {
        const updatedAnswers = [...studentAnswer];
        updatedAnswers[index] = value;
        setStudentAnswer(questionId, updatedAnswers);
    };
    // console.log("studentAnswer in T1Code: ", studentAnswer);

    const T1CodeBlock = () => {
            switch(questionId) {
                case "1.1.10":
                    return (
                        <div className = "code-container">
                            <pre>
                                {`<Form.`}
                                <input
                                    type="text"
                                    value={studentAnswer[0] || ""}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                    placeholder="Enter answer"
                                    className="fill-in-blank"
                                />
                                {` controlId="formBasicEmail" className="mb-3">`}
                                <br/>
                                {`  <Form.`}
                                <input
                                    type="text"
                                    value={studentAnswer[1] || ""}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 1)}
                                    placeholder="Enter answer"
                                    className="fill-in-blank"
                                />
                                {`/> Email address</Form.Label`}
                                <br/>
                                {`  <Form.`}
                                <input
                                    type="text"
                                    value={studentAnswer[2] || ""}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 2)}
                                    placeholder="Enter answer"
                                    className="fill-in-blank"
                                />
                                {` type="email" placeholder="Enter email" />`}
                                <br/>
                                {`  <Form.`}
                                <input
                                    type="text"
                                    value={studentAnswer[3] || ""}
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
                                    value={studentAnswer[0] || ""}
                                    onChange={(e) => updateCodeAnswer(e.target.value, 0)}
                                    placeholder="Enter answer"
                                    className="fill-in-blank"
                                />
                                {`= "formBasicEmail" `}
                                <input
                                    type="text"
                                    value={studentAnswer[1] || ""}
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
                        <>
                        <div className="code-bank">
                            {t1Q12!.type==="ordering" && t1Q12!.options!.map((option, index) => (
                                <div key={index} className="code-option">
                                    <strong>{index+1}.</strong> {option}
                                </div>
                            ))}
                        </div>
                        <div className="student-ordering">
                            <input
                                type="text"
                                value={studentAnswer[0]|| ""}
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
    }

    return (
        <div>
            {T1CodeBlock()}
        </div>
    )

}