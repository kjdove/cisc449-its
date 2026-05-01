export interface Topic {
    id: string;
    topic: string;
    rating?: number;
}

// export interface PretestQuestion {
//     difficulty: string;
//     id: string;
//     question: string;
//     topicId: string;
//     correctAnswer: string;
//     options?: string[];
//     studentAnswer?: string;
//     hint?: string;
// }

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

export const pretestQuestions = [
 //1.1
    {difficulty: "easy", id: "1.1e", question: "What is a Form.Group?", topicId: "1.1", correctAnswer: "A way to group form elements together.", options: ["A styling class only.", "A method for submitting forms.", "A way to group form elements together.", "A hook for managing state."]},
    {difficulty: "medium", id: "1.1m", question: "What are the common tags used in a Form.Group?", topicId: "1.1", correctAnswer: "Form.Label, Form.Control, Form.Text", options: ["Form.Label, Form.Control, Form.Text", "Form.Label, Form.Control, Form.Check", "Form.Label, Form.Text, Form.Check", "Form.Control, Form.Text, Form.Check"]},
    {difficulty: "hard", id: "1.1h", question: "Fill in the blanks for the following code to create a Form.Group with a label, control, and text.", topicId: "1.1", correctAnswer: "<Form.Group controlId='email'><Form.Label>Email address</Form.Label><Form.Control type='email' placeholder='Enter email' /><Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text></Form.Group>", options: ["<Form.Group controlId='email'><Form.Label>Email address</Form.Label><Form.Control type='email' placeholder='Enter email' /><Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text></Form.Group>", "<Form.Group><Form.Label>Email address</Form.Label><Form.Control type='email' placeholder='Enter email' /><Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text></Form.Group>", "<Form.Group controlId='email'><Form.Label>Email address</Form.Label><Form.Control placeholder='Enter email' /><Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text></Form.Group>", "<Form.Group controlId='email'><Form.Label>Email address</Form.Label><Form.Control type='email' placeholder='Enter email' /></Form.Group>"]},
 //1.2

 //1.3

 //2.1

 //2.2

 //2.3

 //2.4

 //3.1
 
 //3.2

 //3.3
];//end to pretestQuestions
