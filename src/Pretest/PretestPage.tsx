import {  useState, type JSX } from "react";
import "./PretestPage.css";
import {useNavigate} from 'react-router-dom';
// import { Form } from "react-bootstrap";
import { /*pretestQuestions,*/ topics, /*PretestState,*/} from "./PreQuestions";

export function Pretest(): JSX.Element {
    const navigate = useNavigate();

    const [currentTopicInd, setCurrentTopicInd] = useState(0);
    const ratings = [1,2,3,4,5,6,7,8,9,10];
    const [studentRating, setSR] = useState(0);
    // const questions = pretestQuestions.filter((q) => q.topicId === topics[currentTopicInd].id);
    //setSR helper function
    const hnadleSR = (r: number) => {
        setSR(r);
    }

    //helper function for saving student's answer
    // const handleAnswerChange = (questionId: string, answer: string) => {
    //     const updatedQuestions = pretestQuestions.map((q) =>
    //         q.id === questionId ? { ...q, studentAnswer: answer } : q
    //     );
    //     setPretestQuestions(updatedQuestions);  
    // }

    //on submit helper function
        //save user's answer and rating
        //go to next topic/set of questions from array
    const handleSubmit = () => {
       //alert user they can't go back after submitting
       
        if(currentTopicInd === 0){
            window.confirm( "Are you sure you want to submit? You cannot go back.");
        }
        setSR(0);

        if (currentTopicInd < topics.length - 1) {
            setCurrentTopicInd(currentTopicInd + 1);
        } else {
            navigate('/dashboard');
            console.log("pretest completed, navigate to dashboard");
        }
    }

    return (
        <div className="pretest-page">
            <h2>Pretest</h2>
            <div className="pretest-top">
                <p>On a scale from 1 to 10:</p>
                <p>{topics[currentTopicInd].topic}</p>
                <div className="rating-system">
                    <p><strong>Not well at all</strong></p>
                    {ratings.map((r) => (
                            <label key={r} style={{ cursor: 'pointer' }}>
                            <input
                                type="radio"
                                name="rating"
                                value={r}
                                checked={studentRating === r}
                                onChange={() => hnadleSR(r)}
                                style={{ marginRight: '5px' }}
                            />
                            {r}
                            </label>
                        ))}
                        <p><strong>Extremely well</strong></p>
                </div>

            </div>
            <br/>
            <div className="pretest-bottom">
                <div className="question-area"> 
                    <h4>questions</h4>
                </div>
               {/* { <div className="answer-area">
                    <h4>answer</h4>
                </div>} */}
                <div className="submit-button">
                    <button onClick={handleSubmit}>submit</button>
                </div>
                
            </div>
            
           
        </div>
    );
}