import {  useState, type JSX } from "react";
import "./PretestPage.css";
import {useNavigate} from 'react-router-dom';
// import { Form } from "react-bootstrap";
import { topics } from "./PreQuestions";

export function Pretest(): JSX.Element {
    const navigate = useNavigate();

    //useStates
    //each topic needs a rating from the student
    const [currentTopicInd, setCurrentTopicInd] = useState(0);

    //question array of all pretest questions (three per page/topic, submit button)


    //on submit helper function
        //save user's answer and rating
        //go to next topic/set of questions from array
    const handleSubmit = () => {
        //save user's answer and rating
        //go to next topic/set of questions from array
        alert("are you sure you want to submit? once you submit, you cannot go back to change your answer or rating for this topic");
        if (currentTopicInd < topics.length - 1) {
            setCurrentTopicInd(currentTopicInd + 1);
        } else {
            navigate('/dashboard');
            console.log("pretest completed, navigate to dashboard");
        }
    }

    //CHANGE CLASS NAMES
    return (
        <div className="pretest-page">
            <h2>Pretest</h2>
            <div className="pretest-top">
                <p>On a scale from 1 to 10:</p>
                <p>{topics[currentTopicInd].topic}</p>

                {/* <Form.Group className="mb-3">
                    <Form.Label>How well do you know <strong>TOPIC</strong></Form.Label>
                    <div className="d-flex flex-wrap">
                        {[...Array(10)].map((_, i) => (
                        <Form.Check
                            inline
                            key={i + 1}
                            label={i + 1}
                            name="rating-group"
                            type="radio"
                            id={`rating-${i + 1}`}
                            value={i + 1}
                            onChange={(e) => console.log(e.target.value)}
                        />
                        ))}
                    </div>
                </Form.Group> */}

            </div>
            <br/>
            <div className="pretest-bottom">
                <div className="question-area"> 
                    <h4>questions</h4>
                </div>
                <div className="answer-area">
                    <h4>answer</h4>
                </div>
                <div className="submit-button">
                    <button onClick={handleSubmit}>submit</button>
                </div>
                
            </div>
            
           
        </div>
    );
}