export interface Topic {
    id: string;
    topic: string;
    rating?: number;
} 

export const topics: Topic[] = [
    {id: "1.1", topic: "How confident are you in your ability to create a form using Form and Form.Group components in React-Bootstrap?"}, 
    {id: "1.2", topic: "How confident are you in your ability to choose and pply the correct attributes, such as type, placeholder, and controlId, to form controls?"},
    {id: "1.3", topic: "How confident are you in your ability to use the value attribute to control form inputs and manage their state?"},
    {id: "2.1", topic: "How confident are you in your ability to implement and handle user input in textboxes?"},
    {id: "2.2", topic: "How confident are you in your ability to implement and manage checkbox inputs?"},
    {id: "2.3", topic: "How confident are you in your ability to implement and handle dropdown/select inputs?"},
    {id: "2.4", topic: "How confident are you in your ability to choose the appropriate input type (textbox, checkbox, or dropdown) for a given situation?"},
    {id: "3.1", topic: "How confident are you in your ability to use different textbox variations such as input number boxes, textareas, and horizontal textboxes?"},
    {id: "3.2", topic: "How confident are you in your ability to use different checkbox variations such as swith, radio buttons, and multi checkboxes?"},
    {id: "3.3", topic: "How confident are you in your ability to implement a dropdown as a list of options using the .map() function?"},
]; //end to topics


//easy - basic MCQ
//medium - harder mcq
//hard - fill in blank coding
export const pretestQuestions = [
 //1.1
   {difficulty: "easy", id: "1.1e", question: "What is a Form.Group?", topicId: "1.1", correctAnswer: "A way to group form elements together.", options: ["A styling class only.", "A method for submitting forms.", "A way to group form elements together.", "A hook for managing state."]},
   {difficulty: "medium", id: "1.1m", question: "What are the common tags used in a Form.Group?", topicId: "1.1", correctAnswer: "Form.Label, Form.Control, Form.Text", options: ["Form.Label, Form.Control, Form.Text", "Form.Label, Form.Control, Form.Check", "Form.Label, Form.Text, Form.Check", "Form.Control, Form.Text, Form.Check"]},
   {difficulty: "hard", id: "1.1h", question: "Fill in the blanks to create a basic form.", topicId: "1.1"},
   
 //1.2
   {difficulty: "easy", id: "1.2e", question: "Attributes are used to...", topicId: "1.2", correctAnswer: "control the behavior of form components.", options: ["add styling to form components.", "control the behavior of form components.", "submit forms.", "manage state."]},
   {difficulty: "medium", id: "1.2m", question: "Which of the following is NOT a valid syntax for using form control attributes.", topicId: "1.2", correctAnswer: "<Form.Control disabled><Form.Control placeholder='Enter Email'><Form.Control type='email'>", options: ["<Form.Control disabled><Form.Control placeholder='Enter Email'><Form.Control type='email'>", "<Form.Control disabled={true}><Form.Control placeholder='Enter Email'><Form.Control type='email'>", "<Form.Control disabled={canEdit}><Form.Control placeholder='Enter Email'><Form.Control type='email'>", "<Form.Control disabled={canEdit}><Form.Control placeholder='Enter Email'><Form.Control type='email' />"]},
   {difficulty: "hard", id: "1.2h", question: "Fill in the blanks to create a form control with a placeholder and disabled state.", topicId: "1.2"},

 //1.3
   {difficulty: "easy", id: "1.3e", question: "What is the purpose of the value attribute in form controls?", topicId: "1.3", correctAnswer: "To control form inputs and manage their state.", options: ["To add styling to form controls.", "To control form inputs and manage their state.", "To submit forms.", "To group form elements together."]},
   {difficulty: "medium", id: "1.3m", question: "Which following line of code updates the state variable 'email' with the value of the form control?", topicId: "1.3", correctAnswer: "onChange={(e) => setEmail(e.target.value)}", options: ["onChange={(e) => setEmail(e.target.value)}", "onChange={(e) => setEmail(e.value)}", "onChange={(e) => setEmail(e.target)}", "onChange={(e) => setEmail(e)}"]},
   {difficulty: "hard", id: "1.3h", question: "Fill in the blanks to create a controlled form input that updates the state variable 'username' on change.", topicId: "1.3"},

 //2.1
   {difficulty: "easy", id: "2.1e", question: "Textboxes are created using which form tag?", topicId: "2.1", correctAnswer: "Form.Control", options: ["Form.Label", "Form.Control", "Form.Text", "Form.Group"]},
   {difficulty: "medium", id: "2.1m", question: "How is the state of a textbox typically managed in React?", topicId: "2.1", correctAnswer: "Using the value attribute and onChange event handler.", options: ["Using the disabled attribute.", "Using the placeholder attribute.", "Using the value attribute and onChange event handler.", "Using the checked attribute and onChange event handler."]},
   {difficulty: "hard", id: "2.1h", question: "Fill in the blanks to create a controlled textbox that updates the state variable 'email' on change.", topicId: "2.1"},

 //2.2
   {difficulty: "easy", id: "2.2e", question: "Checkboxes are created using which form tag?", topicId: "2.2", correctAnswer: "Form.Check", options: ["Form.Label", "Form.Control", "Form.Text", "Form.Check"]},
   {difficulty: "medium", id: "2.2m", question: "How is the state of a checkbox typically managed in React?", topicId: "2.2", correctAnswer: "Using the checked attribute and onChange event handler.", options: ["Using the checked attribute and onChange event handler.", "Using the value attribute and onChange event handler.", "Using the disabled attribute.", "Using the controlId attribute."]},
   {difficulty: "hard", id: "2.2h", question: "Fill in the blanks to create a controlled checkbox that updates the state variable 'subscribe' on change.", topicId: "2.2"},

 //2.3
   {difficulty: "easy", id: "2.3e", question: "Dropdowns are created using which form tag?", topicId: "2.3", correctAnswer: "Form.Select", options: ["Form.Select", "Form.Control", "Form.Text", "Form.Check"]},
   {difficulty: "medium", id: "2.3m", question: "How is the option selected in a dropdown correctly accessed?", topicId: "2.3", correctAnswer: "Using e.target.value in the onChange event handler.", options: ["Using e.target.value in the onChange event handler.", "Using e.target.value in the onClick event handler.", "Using e.target in the onChange event handler.", "Using e in the onClick event handler."]},
   {difficulty: "hard", id: "2.3h", question: "Fill in the blanks to create a controlled dropdown that updates the state variable 'country' on change.", topicId: "2.3"},

 //2.4
   {difficulty: "easy", id: "2.4e", question: "Which component is represented by a boolean state?", topicId: "2.4", correctAnswer: "Checkbox", options: ["Textbox", "Dropdown", "Checkbox", "All form components"]},
   {difficulty: "medium", id: "2.4m", question: "You want to create a form where users can select whether they want to receive a newsletter. Which form component would be the most appropriate to use?", topicId: "2.4", correctAnswer: "Checkbox", options: ["Textbox", "Dropdown", "Checkbox", "Form.Group"]},
   {difficulty: "hard", id: "2.4h", question: "Fill in the blanks to create a form that includes a textbox for name input, a checkbox for newsletter subscription, and a dropdown for country selection.", topicId: "2.4"},

 //3.1
   {difficulty: "easy", id: "3.1e", question: "Which of the following is NOT a variation of a textbox?", topicId: "3.1", correctAnswer: "Radio Button", options: ["Input number box", "Textarea", "Horizontal textbox", "Radio Button"]},
   {difficulty: "medium", id: "3.1m", question: "Which type is used to create a multiline textbox?", topicId: "3.1", correctAnswer: "textarea", options: ["text", "number", "email", "textarea"]},
   {difficulty: "hard", id: "3.1h", question: "Fill in the blanks to create a form with an input number box for age and a textarea for comments.", topicId: "3.1"},

 //3.2
   {difficulty: "easy", id: "3.2e", question: "Which of the following is NOT a variation of a checkbox?", topicId: "3.2", correctAnswer: "Input number box", options: ["Switch", "Radio Button", "Multi Checkbox", "Input number box"]},
   {difficulty: "medium", id: "3.2m", question: "You want to create a form where users can select their preferred contact method (email, phone, or mail). Which form component would be the most appropriate to use?", topicId: "3.2", correctAnswer: "Radio Button", options: ["Switch", "Radio Button", "Multi Checkbox", "Form.Select"]},
   {difficulty: "hard", id: "3.2h", question: "Fill in the blanks to create a form with a switch for newsletter subscription and radio buttons for contact method selection.", topicId: "3.2"},

//3.3
   {difficulty: "easy", id: "3.3e", question: "Option tags within a Form.Select are typically generated using which method?", topicId: "3.3", correctAnswer: "The .map() function.", options: ["The .filter() function.", "The .reduce() function.", "The .map() function.", "The .forEach() function."]},
   {difficulty: "medium", id: "3.3m", question: "Which attributes are used to specify the unique identifier and display text for options in a dropdown?", topicId: "3.3", correctAnswer: "value and key attributes.", options: ["id and name attributes.", "value and key attributes.", "controlId and label attributes.", "type and placeholder attributes."]},
   {difficulty: "hard", id: "3.3h", question: "Fill in the blanks to create a dropdown that generates options from an array of country names using the .map() function.", topicId: "3.3"},
];//end to pretestQuestions
