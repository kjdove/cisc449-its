//compare topic rating to each question's correct answer and student answer to determine which modules should be 'unlocked'
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
    {id: "1.1", topic: "How well could you describe a form and a form.group in React-Bootstrap?"}, 
    {id: "1.2", topic: "How well could you identify and define the common tags used in a form.group?"},
    {id: "1.3", topic: "How well could you identify and define the common properties of a form.group? "},
    {id: "1.4", topic: "How well could you explain when to use and how to create a readOnly form?"},
    {id: "1.5", topic: "How well could you explain how to use an input value from a form.Group throughout the code?"},
    {id: "2.1", topic: "How well could you differentiate between a textbox, checkbox, and dropdown?"},
    {id: "2.2", topic: "How well could you demonstrate how to create a textbox using a form.group and useState to update its value?"},
    {id: "2.3", topic: "How well could you demonstrate how to create a checkbox using a form.group and useState to update its value?"},
    {id: "2.4", topic: "How well could you demonstrate how to create a dropdown using a form.group and useState to update its value?"},
    {id: "3.1", topic: "How well could you identify and implement the variations of a textbox?"},
    {id: "3.2", topic: "How well could you identify and implement the variations of a checkbox?"},
    {id: "3.3", topic: "How well could you implement a dropdown using .map to render its list of options?"}
]; //end to topics

export const pretestQuestions: PretestQuestion[] = [
    {id: "1.1.1", question: "A form is ...", topicId: "1.1", correctAnswer: "A collection of specialized user interface elements", options: ["A collection of specialized user interface elements", "A way to style a webpage", "A method for handling user input"]},
    {id: "1.1.2", question: "How does a form relate to the Model-View-Controller pattern?", topicId: "1.1", correctAnswer: "A form is part of the View layer, responsible for displaying the user interface and handling user interactions. It exposes the Model/State in the View and provides control to the user to modify the State", hint: "How does it affect the Model/State in relation to the other two layers?"},

];//end to pretestQuestions
