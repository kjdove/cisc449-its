//Module 2 End of Module Quiz page
import type { JSX } from "react";
import type { EndQuiz, TopicData } from "../Types";
import {endOfModule} from "./M2Questions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function M2EndQuiz(): JSX.Element {
   const navigate = useNavigate();
   const t1Data = JSON.parse(localStorage.getItem("module2topic1") || "{}");
   const t2Data = JSON.parse(localStorage.getItem("module2topic2") || "{}");
   const t3Data = JSON.parse(localStorage.getItem("module2topic3") || "{}");
   const t4Data = JSON.parse(localStorage.getItem("module2topic4") || "{}");
   const t1Questions = 14;
   const t2Questions = 14;
   const t3Questions = 11;
   const t4Questions = 21;

   const topicMasteryScore = (data: TopicData[], questionNum: number): number => {
        const totalCorrect =
        Object.values(data).filter((question: TopicData) => question.isCorrect).length;
        return totalCorrect / questionNum;
   }

   const masteries = {
      textboxes: topicMasteryScore(t1Data, t1Questions),
      checkboxes: topicMasteryScore(t2Data, t2Questions),
      dropdowns: topicMasteryScore(t3Data, t3Questions),
      differences: topicMasteryScore(t4Data, t4Questions)
   }

   const chooseNextQuestion = (questions: EndQuiz[], masteryMap: Record<string, number>, answered: string[]) => {
      const weakestTopic = Object.entries(masteryMap).sort((a,b) => a[1] - b[1])[0][0];

      const mastery = masteryMap[weakestTopic];

      let targetDifficulty = 2;

      if(mastery < 0.4)
         targetDifficulty = 1;
      else if(mastery > 0.75)
         targetDifficulty = 3;

      const candidates = questions.filter(q => q.topic === weakestTopic 
         && q.difficulty === targetDifficulty && !answered.includes(q.id));

      return candidates.length > 0 ? candidates[Math.floor(Math.random() * candidates.length)] : null;
   }

   const [currentQuestion, setCurrentQuestion] = useState<EndQuiz | null>(() => chooseNextQuestion(endOfModule, masteries,[]));   
   const [askedQuestions, setAskedQuestions] = useState<string[]>([]);

   const [studentAnswers, setStudentAnswers] = useState<Record<string, string>>({});

   const [correctCount, setCorrectCount] =  useState<number>(0);

   const [questionsAsked, setQuestionsAsked] = useState<number>(0);

   const [quizFinished, setQuizFinished] = useState<boolean>(false);

   const [masteryMap, setMasteryMap] = useState(masteries);

   const finishQuiz = (finalCorrect: number,finalQuestions: number) => {
      const percentage = Math.round((finalCorrect / finalQuestions) * 100);

      const passed = percentage >= 90;
   
      localStorage.setItem(
         "module2EndQuiz",
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
      const nextQuestion = chooseNextQuestion(endOfModule, updatedMasteries, newAnsweredQuestions);
   
      if(!nextQuestion) {
         finishQuiz(newCorrectCount, newQuestionsAsked);
         return;
      }

      setCurrentQuestion(nextQuestion);
   }//end handlesub

    return (
        <div className="endmod-content">
            <h1>End of Module 2 Quiz</h1>
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