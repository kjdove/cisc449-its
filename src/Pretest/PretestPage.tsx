import {  useState, type JSX } from "react";
import "./PretestPage.css";
import {useNavigate} from 'react-router-dom';
// import { Form } from "react-bootstrap";
import { pretestQuestions, topics, } from "./PreQuestions";
import { PreHardQuestions } from "./PreHardQuestions";

export function Pretest(): JSX.Element {
    const navigate = useNavigate();

    const [currentTopicInd, setCurrentTopicInd] = useState(0);
    const ratings = [1,2,3,4,5,6,7,8,9,10];
    const [studentRating, setSR] = useState<number>(0);
    const [studentAnswers, setSA] = useState<Record<string, string | string[]>>({});

    const hnadleSR = (r: number) => {
        setSR(r);
    }

    const handleAnswerChange = (questionId: string, answer: string | string[]) => {
        setSA((prev) => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const easyQuestions = pretestQuestions.filter((q) => q.difficulty === "easy" && q.topicId === topics[currentTopicInd].id);
    const mediumQuestions = pretestQuestions.filter((q) => q.difficulty === "medium" && q.topicId === topics[currentTopicInd].id);
    const hardQuestions = pretestQuestions.filter((q) => q.difficulty === "hard" && q.topicId === topics[currentTopicInd].id);

    const progValue = ((currentTopicInd) / topics.length);

    const handleSubmit = () => {
        if (currentTopicInd === 0) {
            const confirmed = window.confirm(
                "Are you sure you want to submit? You cannot go back."
            );
    
            if (!confirmed) return;
        }
    
        const currentTopic = topics[currentTopicInd];
    
        let currentQuestion;
    
        if (1 <= studentRating && studentRating <= 3) {
            currentQuestion = easyQuestions[0];
        } else if (4 <= studentRating && studentRating <= 7) {
            currentQuestion = mediumQuestions[0];
        } else {
            currentQuestion = hardQuestions[0];
        }
    
        if (!currentQuestion) return;
    
        const studentAnswer = studentAnswers[currentQuestion.id] || "";
    
        const correct = JSON.stringify(studentAnswer.toString()) === JSON.stringify(currentQuestion.correctAnswer?.toString());

    
        console.log("studentAnswer: ",  studentAnswer);
        console.log("correctAnswer: ", currentQuestion.correctAnswer);
        const savedData = JSON.parse(
            localStorage.getItem("pretestResults") || "{}"
        );
    
        savedData[currentTopic.id] = {
            rating: studentRating,
            questionId: currentQuestion.id,
            studentAnswer,
            isCorrect: correct
        };
    
        localStorage.setItem(
            "pretestResults",
            JSON.stringify(savedData)
        );
    
        setSR(0);
    
        if (currentTopicInd < topics.length - 1) {
            setCurrentTopicInd(currentTopicInd + 1);
        } else {
            localStorage.setItem("pretestCompleted", "true");
            navigate("/dashboard");
            
            // console.log("pretest completed");
        }
    };//end to handleSubmit

    return (
        <div className="pretest-page">
            <h2>Pretest</h2>
            <progress value={progValue}/>
            <div className="pretest-top">
                <p>On a scale from 1 to 10:</p>
                <p>{topics[currentTopicInd].topic}</p>
                <div className="rating-system">
                    <p><strong>Not at all confident.</strong></p>
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
                        <p><strong>Extremely confident.</strong></p>
                </div>
            </div>
            <br/>
            <div className="pretest-bottom">
                <div className="question-area"> 
                    {1 <= studentRating && studentRating <= 3 && easyQuestions.map((q) => (
                        <div key={q.id} className="question">
                            <p>{q.question}</p>
                        </div>
                    ))}
                    {4 <= studentRating && studentRating <= 7 && mediumQuestions.map((q) => (
                        <div key={q.id} className="question">
                            <p>{q.question}</p>
                        </div>
                    ))}
                    {8 <= studentRating && studentRating <= 10 && hardQuestions.map((q) => (
                        <div key={q.id} className="question">
                            <p>{q.question}</p>
                        </div>
                    ))}
                </div>
               <div className="answer-area">
                    {1 <= studentRating && studentRating <= 3 && easyQuestions.map((a) => (
                        <div key={a.id} className="answer">
                           {a.options? a.options.map((option) => (
                                <div key={option} className="answer-option">
                                    <input
                                        type="radio"
                                        id={option}
                                        name={a.id}
                                        value={option}
                                        checked={studentAnswers[a.id] === option}
                                        onChange={(e) => handleAnswerChange(a.id, e.target.value)}
                                    />
                                    <label htmlFor={option}>{option}</label>
                                </div>
                            )): <p>No answer options, please answer in the text box.</p>}
                        </div>
                    ))}
                    {4 <= studentRating && studentRating <= 7 && mediumQuestions.map((a) => (
                         <div key={a.id} className="answer">
                            {a.options? a.options.map((option) => (
                                  <div key={option} className="answer-option">
                                        <input
                                            type="radio"
                                            id={option}
                                            name={a.id}
                                            value={option}
                                            checked={studentAnswers[a.id] === option}
                                            onChange={(e) => handleAnswerChange(a.id, e.target.value)}
                                        />
                                        <label htmlFor={option}>{option}</label>
                                  </div>
                             )): <p>No answer options, please answer in the text box.</p>}
                        </div>
                    ))}
                    {8 <= studentRating && studentRating <= 10 && 
                        <PreHardQuestions questionId={hardQuestions[0]?.id || ""} studentAnswer={studentAnswers[hardQuestions[0]?.id || ""] as string[] || []} setStudentAnswer={handleAnswerChange} />
                    }
                </div>
               {studentRating > 0 && 
                <div className="submit-button">
                    <button onClick={handleSubmit}>submit</button>
                </div>
                } 
            </div>
        </div>
    );
}