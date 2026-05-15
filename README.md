# CISC449 ITS - Textboxes, Checkboxes, Dropdowns
This ITS focuses on React Bootstrap's textboxes, checkboxes, and dropdowns. It is broken up into three modules: Forms; Textboxes, Checkboxes, Dropdowns; and Variations. Within each module are subtopics where students can complete quizzes/answer questions to improve their knowledge mastery of each topic and the module overall. Additionally, each module has an 'End of Module' quiz they can complete to further test their knowledge and skills. This quiz is adaptive to the student's performance and the system presents a question that the student should be able to successfully answer based on their current knowledge of the question's topic. This application uses HashRouters from react-router-dom to navigate across the dashboard, modules, and each topic page, as well as localstorage to store the student's results for each topic page, end of module quizzes, and the pretest. 

# Walkthrough
## 1. Start Page
<figure>
  <img width="1440" height="900" alt="startpage" src="https://github.com/user-attachments/assets/7a3b42e2-6939-4b8d-8fdb-d9f8749a7185" />
  <figcaption>CISC449 ITS Start Page</figcaption>
</figure>
<br>
</br>
The first page the student ecounters is the start page where they are prompted to click the button to start the pretest. Once the pretest has been completed, the start page isn't accesible anymore. 

## 2. Pretest
<figure>
  <img width="1440" height="900" alt="pretest" src="https://github.com/user-attachments/assets/258f6f93-5615-491c-8b75-bcadac671177" />
  <figcaption>Example of Pretest Question</figcaption>
</figure>
<br>
</br>
The purpose of the pretest is to assess if the student has any prior knowledge of the content. For each topic, the student is asked to rate their confidence in their ability to complete a task related to that topic. Based on their rating, they will be presented a question to answer that will then test if their self rating matches what they know. A rating of 1-3 will receive an easy difficulty question, 4-7 will receive a medium difficulty, and 8-10 will receive a hard difficulty. If they answer the question correctly, it is tracked in localstorage and later used to determine which question they should be shown first for that topic's quiz. If they get it wrong, they will start at the beginning of the topic. 
<br>
</br>
<figure>
  <img width="1440" height="900" alt="pretestalert" src="https://github.com/user-attachments/assets/3ccb379d-d04c-461f-86a8-7c02e38fabee" />
  <figcaption>Alert after First Pretest Question</figcaption>
</figure>
<br>
</br>

This alert message appears after students click the submit button for the first question. It is just to notify them that once they submit their rating and answer, they cannot go back and change either. 
<br>
</br>

## 3. Dashboard
<figure>
  <img width="1440" height="900" alt="dashboard" src="https://github.com/user-attachments/assets/b7cea112-93fa-42d2-90ac-ee09c6b00200" />
  <figcaption>CISC449 ITS Dashboard</figcaption>
</figure>
<br>
</br>
The dashboard is laid out so that students can easily access the three modules. Each module title is clickable and when clicked, will take the student to its module page that displays its topics. Additionally, there is a link on the left that will allow students to retake the pretest if they want to update their ratings for each topic. 
<br>
</br>
<figure>
  <img width="1440" height="900" alt="lockedmodalert" src="https://github.com/user-attachments/assets/a9d0391b-71bc-4e17-b545-0e55b52ed889" />
  <figcaption>Alert after Clicking a Locked Module</figcaption>
</figure>
<br>
</br>
Students have to either have an advanced mastery level or passed (receive >= 90%) the end of module quiz to be able to continue to the next module. If they try to access a locked module, the alert will appear, informing the student to compelte the previous module before moving forward.

## 4. Module 1: Forms
<figure>
  <img width="1440" height="900" alt="mod1page" src="https://github.com/user-attachments/assets/a17b4a39-8f9b-4c2d-83ed-0874262a246e" />
<figcaption>Module 1: Forms Page</figcaption>
</figure>
<br>
</br>
Module 1 is broken down into three topics: Forms and Form.Groups; Form Attribtues and Controls; and How to Use the Value Attribute. The main focus of the ITS is textboxes, checkboxes, and dropdowns; however, it is important for a student to understand well these three concepts before learning about those components. Each topic title is clickable and will take the student to its quiz page. There are two main types of questions: multiple choice and coding. Some multiple choice questions are definitional, but there are some that ask the student to choose the code snippet that correctly implements a given scenario. For coding questions, there are fill in the blanks and parsons problems/ordering lines of code.   
<br>
</br>
<figure>
  <img width="1440" height="900" alt="incorrectmcq" src="https://github.com/user-attachments/assets/74389638-f8e6-4e45-b5a6-99635933d1a1" />
<figcaption>Feedback for Incorrect MCQ Selection</figcaption>
</figure>
<br>
</br>
When a student selects an incorrect option, they will see that it's incorrect as well as feedback explaining why their selection was wrong. The submit button turns into a try again button for the student to make another attempt at the question.
<br>
</br>
<figure>
  <img width="1440" height="900" alt="correctmcq" src="https://github.com/user-attachments/assets/644f381f-0f67-44eb-b7ba-d8e3acfe4862" />
<figcaption>
  Feedback for Correct MCQ Selection
</figcaption>
</figure>
<br>
</br>
When a student selects the correct option, they will see its feedback, explaining why that choice was correct as well as explainations for why the other options were all incorrect. The submit button turns into a next question button for the student to proceed forward through the quiz.
<br>
</br>
<figure>
  <img width="1440" height="900" alt="incorrectcodefib" src="https://github.com/user-attachments/assets/a9d0689d-ff89-45cf-bf8e-1f446d108cdc" />
  <figcaption>Feedback for Incorrect Fill in the Blank Coding Question</figcaption>
</figure>
<br>
</br>
When a student submits an incorrect response to a fill in the blank question, they will see feedback that gives them a hint on how to answer the question. Similarly to multiple choice questions, when the student is incorrect, they will see a try again button, and when they're correct, they will see a next question button for coding questions, too. 
<br>
</br>
<figure>
  <img width="1440" height="900" alt="parsonscodex" src="https://github.com/user-attachments/assets/0a42313c-5b26-4d54-9eed-4fdf8e31b1ed" />
  <figcaption>Parsons/Ordering Code Question</figcaption>
</figure>
Above is an example of the parsons/ordering question. Students are prompted to correctly order the lines of code to create a functional component. They are to enter their answer in the textbox underneath the code which informs them of the proper format to enter for their answer to be graded correctly 
<br>
</br>
<figure>
  <img width="1440" height="900" alt="endmodex" src="https://github.com/user-attachments/assets/03933803-e2e3-484a-9b8e-1f8d9eb997d3" />
  <figcaption>End of Module Quiz</figcaption>
</figure>
<br>
</br>
A student can attempt the end of module quiz whenever; they do not need to have a certain mastery of the module's topics in order to take it. The quiz is adaptive to the student's performance and current masteries of each topic in the module. It keeps record of those masteries to determine which question to ask the student next. Furthermore, the system must ask at least two questions from each topic. Once the target topic for the next question has been selected, the system looks back to that topic's mastery level and then decides which question difficulty should be asked. Next, a pool of potential questions is created, a random one is selected, and then presented to the student. Similar to the pretest, a student cannot go back and change their answers during the end of module quiz. There are two ways the quiz can be finished. First, the student has been asked at least 12 questions and they currently have 90% or higher. Second, they've been asked at least 15 questions. When either is met, the quiz will end and the student will be shown their results.
<br>
</br>
<figure>
  <img width="1440" height="900" alt="endmodresults" src="https://github.com/user-attachments/assets/0332ad2a-a433-4dc1-bc44-64ae4e1f3a71" />
<figcaption>End of Module Quiz Results</figcaption>
</figure>
<br>
</br>
The results page tells the student their score and its percentage, both of which are kept tracked in localstorage. They need a 90 or higher in order to unlock Module 2. This quiz can be retaken any number of times to acheive this score. 
<br>
</br>

<figure>
  <img width="1436" height="900" alt="excompletedmod" src="https://github.com/user-attachments/assets/3958cc40-8135-45f0-8bb8-c01d8bfc873b" />
<figcaption>How a Module Appears when Successfully Completed</figcaption>
</figure>
<br>
</br>
Once a student correctly answers all questions within a topic, a checkmark appears next to its title so that they are aware it is completed. Additionally, after they've passed the quiz, they are told so on the module page in addition to the end of module quiz results page. 

## 5. Module 2: Textboxes, Checkboxes, Dropdowns
<figure>
  <img width="1440" height="900" alt="mod2page" src="https://github.com/user-attachments/assets/3b09763d-def5-4735-86f2-54afee01795b" />
<figcaption>Module 2: Textboxes, Checkboxes, Dropdowns Page</figcaption>
</figure>
<br>
</br>
Module 2 is broken down into four topics: textboxes; checkboxes; dropdowns; and the differences between the three. Similar to Module 1, there is a mix of multiple choice and coding questions. In the fourth topic, there are MCQ's where students are given a scenario and have to decide the best component to use. This module also includes an end of module quiz like Module 1's, that the student can complete at any time. Similarly, they need a 90 or higher in order to unlock Module 3 if they want to do so before obtaining an overall advanced mastery level for Module 2.

## 6. Module 3: Variations
<figure>
  <img width="1440" height="900" alt="mod3page" src="https://github.com/user-attachments/assets/95eb8d99-fb88-4a7d-83ff-c08ef1b3c0d0" />
<figcaption>Module 3: Variations Page</figcaption>
</figure>
<br>
</br>
Module 3 is broken down into three topics: textbox variations; checkbox variations; and dropdown variations. The first topic introduces the student to number input boxes, textboxes with horizontal layouts, and multiline textareas. The second topic introduces the student to toggle switch, radio buttons, and multi checkboxes. The third topic demonstrates how the student can use the previously learned .map() array method to render all the dropdown's options. This module also includes an end of module quiz like Module 1's, that the student can complete at any time. 


# Future Implementations
## 1. Adaptive Topic Quizzes

Currently, the topic quizzes start the student with a question whose difficulty corresponds to the difficulty of the pretest question they were asked for that topic, if it was answered correctly. Then, they can linearly progress and complete any following questions; however, if a student wants advanced mastery of a topic, they will need to complete any prior questions as well. In the future, these quizzes should follow a similar format to the end of module quizzes and present the next question based on the student's previous responses and knowledge that has been tracked. 

## 2. Coding Questions and Personalized Feedback

There are two types of coding questions implemented at the moment: fill in the blank and ordering. In the future, there will be questions that ask the student to write full code that will be graded by the ITS and receive any necessary feedback. Moreover, feedback for coding questions should be tailored to the student's incorrect answer. The system would be able to detect if a student got the question wrong due to a typo, a misconception, or if they just didn't understand the question correctly. The system would then give feedback based on which metric it detected. For typos, it would instruct the student to look over their response again, or point out a possible typo the student could have made. For misconceptions, the system would be able to identify if the student answered the question incorrectly due to a misunderstanding about a previous topic they already mastered or a concept they should have previously known before starting this tool. In that case, within the feedback, the system would explain why their answer was wrong as well as suggest to the student to either review that previous topic or chapter from the textbook. Additionally, if the system were adaptive, it could then ask a question related to the misconception. 
