//Module 2 End of Module Quiz page
import type { JSX } from "react";
import type { TopicData } from "../Types";
import {endOfModule} from "./M2Questions"
/**
 * 
 * in local storage:
 *  endQuiz: {
         score: 18,
         totalQuestions: 20,
         percentage: 90,
         passed: true,
      },
 */
export function M2EndQuiz(): JSX.Element {
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
        textbox: topicMasteryScore(t1Data, t1Questions),
        checkbox: topicMasteryScore(t2Data, t2Questions),
        dropdown: topicMasteryScore(t3Data, t3Questions),
        differentiate: topicMasteryScore(t4Data, t4Questions)
    };

    /**
     * update "mastery "during quiz
     * function updateMastery(
   oldMastery: number,
   correct: boolean
) {
   if(correct) {
      return oldMastery + (1 - oldMastery) * 0.15;
   }

   return oldMastery * 0.85;
}
     */

/**
 * next question to be asked:
 * function chooseNextQuestion(
   questions: Question[],
   masteryMap: Record<string, number>,
   answered: string[]
) {

   const weakestTopic =
      Object.entries(masteryMap)
         .sort((a,b) => a[1] - b[1])[0][0];

   const mastery = masteryMap[weakestTopic];

   let targetDifficulty = 2;

   if(mastery < 0.4)
      targetDifficulty = 1;
   else if(mastery > 0.75)
      targetDifficulty = 3;

   const candidates = questions.filter(q =>
      q.topic === weakestTopic &&
      q.difficulty === targetDifficulty &&
      !answered.includes(q.id)
   );

   return candidates[
      Math.floor(Math.random() * candidates.length)
   ];
}
 */

//onclick handler helper
    //first update masteries
    //then choose next question
     
    return (
        <div className="m2-end-container">
            <h1>End of Module 2 Quiz</h1>
            <p>Congratulations on completing Module 2! Please take the quiz below to test your knowledge.</p>
            {masteries.textbox < 0.7 && <p>You may want to review the Textbox topic before taking the quiz.</p>}
        </div>
    );
}