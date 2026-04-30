export interface Topic {
    id: string;
    topic: string;
    rating?: number;
}

export interface PretestQuestion {
    id: string;
    question: string;
    topicId: string;
    correctAnswer: string;
    options?: string[];
    studentAnswer?: string;
    hint?: string;
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

export const pretestQuestions: PretestQuestion[] = [
 
];//end to pretestQuestions
