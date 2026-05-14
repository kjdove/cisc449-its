# CISC449 ITS - Textboxes, Checkboxes, Dropdowns
This ITS focuses on React Bootstrap's textboxes, checkboxes, and dropdowns. It is broken up into three modules: Forms; Textboxes, Checkboxes, Dropdowns; and Variations. Within each module are subtopics where students can complete quizzes/answer questions to improve their knowledge mastery of each topic and the module overall. Additionally, each module has an 'End of Module' quiz they can complete to further test their knowledge and skills. This quiz is adaptive to the student's performance and the system presents a question that the student should be able to successfully answer based on their current knowledge of the question's topic. This application uses HashRouters from react-router-dom to navigate across the dashboard, modules, and each topic page, as well as localstorage to store the student's results for each topic page, end of module quizzes, and the pretest. 

# Walkthrough
1. Start Page
2. Pretest
3. Dashboard
4. Module 1: Forms
5. Module 2: Textboxes, Checkboxes, Dropdowns
6. Module 3: Variations

# Future Implementations
1. Adaptive Topic Quizzes

Currently, the topic quizzes start the student with a question whose difficulty corresponds to the difficulty of the pretest question they were asked for that topic, if it was answered correctly. Then, they can linearly progress and complete any following questions; however, if a student wants advanced mastery of a topic, they will need to complete any prior questions as well. In the future, these quizzes should follow a similar format to the end of module quizzes and present the next question based on the student's previous responses and knowledge that has been tracked. 

2. Coding Questions and Personalized Feedback

There are two types of coding questions implemented at the moment: fill in the blank and ordering. In the future, there will be questions that ask the student to write full code that will be graded by the ITS and receive any necessary feedback. Moreover, feedback for coding questions should be tailored to the student's incorrect answer. The system would be able to detect if a student got the question wrong due to a typo, a misconception, or if they just didn't understand the question correctly. There could be other metrics the system would look for to detect for possible wrong answers, but with these three, the system would then give feedback based on which metric it detected. For typos, it would instruct the student to look over their response again, or point out a possible typo the student could have made. For misconceptions, the system would be able to identify if the student answered the question incorrectly due to a misunderstanding about a previous topic they already mastered or a concept they should have previously known before starting this tool. In that case, within the feedback, the system would explain why their answer was wrong as well as suggest to the student to either review that previous topic or chapter from the textbook. Additionally, if the system were adaptive, it could then ask a question related to the misconception. 
