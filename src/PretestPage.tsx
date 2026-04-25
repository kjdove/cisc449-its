import type { JSX } from "react";
import "./PretestPage.css";
// import {useNavigate} from 'react-router-dom';

export function Pretest(): JSX.Element {
    // const navigate = useNavigate();

    //navigate to a sub page for pretest for each question, submit go to next page
    //also on submit, save user's answer and rating

    //on submit helper function

    //CHANGE CLASS NAMES
    return (
        <div className="pretest-page">
            <div className="pretest-top">
                <h3>how well u know</h3>
                <p>rating scale</p>
            </div>
            <br/>
            <div className="pretest-bottom">
                <p>Question</p>
                <p>answer section</p>
                {/**next question button, when third question submit button */}
            </div>
            
           
        </div>
    );
}