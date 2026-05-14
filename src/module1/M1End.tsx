//Module 1 End of Module Quiz page

import type { JSX } from "react";
import type { EndQuiz, TopicData } from "../Types";
import {endOfModule} from "./M1Questions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './EndMod.css';


export function M1EndQuiz(): JSX.Element {
    const navigate = useNavigate();

    const t1Data = JSON.parse(localStorage.getItem("module1topic1") || "{}");
    const t2Data = JSON.parse(localStorage.getItem("module1topic2") || "{}");
    const t3Data = JSON.parse(localStorage.getItem("module1topic3") || "{}");

    const t1Questions = 13;    
    const t2Questions = 12;
    const t3Questions = 10;

    const topicMasteryScore = (data: TopicData[], questionNum: number): number => {
        const totalCorrect =
        Object.values(data).filter((question: TopicData) => question.isCorrect).length;
        return totalCorrect / questionNum;
    }

    const masteries = {
        forms: topicMasteryScore(t1Data, t1Questions),
        attributes: topicMasteryScore(t2Data, t2Questions),
        valueAttribute: topicMasteryScore(t3Data, t3Questions),
    }

    const chooseNextQuestion = (questions: EndQuiz[], masteryMap: Record<string, number>, answered: string[], askedByTopic: Record<string, number>) => {
        const topicMin = 2;
     
        const leastAskedTopics = Object.entries(askedByTopic).filter(([, count]) => count < topicMin).map(([topic]) => topic);
     
        let targetTopic: string;
     
        if (leastAskedTopics.length > 0) {
           targetTopic = leastAskedTopics[0];
        } else {
           const weakestTopic = Object.entries(masteryMap).sort((a, b) => a[1] - b[1])[0][0];
           targetTopic = weakestTopic;
        }
     
        const mastery = masteryMap[targetTopic];
     
        let targetDifficulty = 2;
     
        if (mastery < 0.4) targetDifficulty = 1;
        else if (mastery > 0.75) targetDifficulty = 3;
     
        const candidates = questions.filter(q =>
           q.topic === targetTopic &&
           q.difficulty === targetDifficulty &&
           !answered.includes(q.id)
        );
     
        if (candidates.length > 0) {
           return candidates[Math.floor(Math.random() * candidates.length)];
        }
     
        //if no questions match difficulty, same topic but any difficulty
        const fallback = questions.filter(q => q.topic === targetTopic && !answered.includes(q.id));

        if (fallback.length > 0) {
           return fallback[Math.floor(Math.random() * fallback.length)];
        }
     
        return null;
    }
  
    const [askedByTopic, setAskedByTopic] = useState<Record<string, number>>({
        forms: 0,
        attributes: 0,
        valueAttribute: 0,
     });
    const [askedQuestions, setAskedQuestions] = useState<string[]>([]);

    const [studentAnswers, setStudentAnswers] = useState<Record<string, string>>({});

    const [correctCount, setCorrectCount] =  useState<number>(0);

    const [questionsAsked, setQuestionsAsked] = useState<number>(0);

    const [quizFinished, setQuizFinished] = useState<boolean>(false);

    const [masteryMap, setMasteryMap] = useState(masteries);
    const [currentQuestion, setCurrentQuestion] = useState<EndQuiz | null>(() => chooseNextQuestion(
        endOfModule,
        masteryMap,
        [],
        askedByTopic
     )); 

    const finishQuiz = (finalCorrect: number,finalQuestions: number) => {
        const percentage = Math.round((finalCorrect / finalQuestions) * 100);
  
        const passed = percentage >= 90;
     
        localStorage.setItem(
           "module1EndQuiz",
           JSON.stringify({
              score: finalCorrect,
              totalQuestions: finalQuestions,
              percentage,
              passed
           })
        );
     
        setQuizFinished(true);
     }//end finishquiz

     const handleSubmit = () => {

        if(!currentQuestion) return;
     
        const studentAnswer = studentAnswers[currentQuestion.id];
     
        const correct = studentAnswer === currentQuestion.correctAnswer;
     
        //update score
        let newCorrectCount = correctCount;
     
        if(correct) {
           newCorrectCount++;
           setCorrectCount(newCorrectCount);
        }
     
        //update question count
        const newQuestionsAsked = questionsAsked + 1;
     
        setQuestionsAsked(newQuestionsAsked);
     
        //update list of answered questions
        const newAnsweredQuestions = [
           ...askedQuestions,
           currentQuestion.id
        ];
     
        setAskedQuestions(newAnsweredQuestions);
     
        // update mastery
        const oldMastery = masteryMap[currentQuestion.topic];
     
        const newMastery = correct ? oldMastery + (1 - oldMastery) * 0.15 : oldMastery * 0.85;
     
        const updatedMasteries = {
           ...masteryMap,
           [currentQuestion.topic]: newMastery
        };
     
        setMasteryMap(updatedMasteries);

        //update asked topics
        const topic = currentQuestion.topic;

        setAskedByTopic(prev => ({
            ...prev,
            [topic]: (prev[topic] || 0) + 1
        }));
     
        //conditions to end quiz
        if(newQuestionsAsked >= 12) {
           const percentage = newCorrectCount / newQuestionsAsked;
     
           if(percentage >= 0.9) {
              finishQuiz(newCorrectCount, newQuestionsAsked);
              return;
           }
        }
     
        if(newQuestionsAsked >= 15) {
           finishQuiz(newCorrectCount, newQuestionsAsked);
           return;
        }
        
        //next question
        const nextQuestion =chooseNextQuestion(
            endOfModule,
            updatedMasteries,
            newAnsweredQuestions,
            askedByTopic
        );
     
        if(!nextQuestion) {
           finishQuiz(newCorrectCount, newQuestionsAsked);
           return;
        }
  
        setCurrentQuestion(nextQuestion);
    }//end handlesub


    return (
        <div className="endmod-content">
            <h1>End of Module 1 Quiz</h1>
            {!quizFinished && currentQuestion && (
               <div>
                  <p className="question">{currentQuestion?.question}</p>

                  {currentQuestion?.code && (
                     <pre>
                        {currentQuestion.code}
                     </pre>
                  )}

                  <div className="answer">
                  {currentQuestion?.options.map(option => (
                     <div key={option} className="answer-option">
                        <input
                           type="radio"
                           name={currentQuestion?.id}
                           value={option}
                           checked={
                              studentAnswers[currentQuestion.id]
                              === option
                           }
                           onChange={(e) =>
                              setStudentAnswers(prev => ({
                                 ...prev,
                                 [currentQuestion.id]:
                                    e.target.value
                              }))
                           }
                        />
                        {option}
                     </div>
                  ))}
                  </div>
                  <button className="submit-button" onClick={handleSubmit}>
                     Submit
                  </button>
               </div>
            )}
            {quizFinished && (
               <div>
                <h2>Quiz Complete</h2>
                <p>Score: {correctCount}/{questionsAsked}</p>
                <p>Percentage: {Math.round(correctCount/questionsAsked * 100)}%</p>
                <p className='return' onClick={() => navigate("/dashboard")}>Return to Dashboard</p>
               </div>
            )}
        </div>
    );
}