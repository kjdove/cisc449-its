/**TOPIC 1: Textboxes (24)*/ 
export const topic1MCQ = [
    //Form.Control
    {id: "2.1.1", question: "What form tag is used to create a textbox?"},
    //type = "text"
    {id: "2.1.2", question: "What attribute is used to specify the type of a textbox?"},
    //value and onChange
    {id: "2.1.3", question: "What two critical fields tie the Form.Control to the app's State?"},
    //value
    {id: "2.1.4", question: "[] is the field that is shown in the textbox when the component is rendered."},
    //onChange for 5 and 6
    {id: "2.1.5", question: "[] is the callback function that will call a State setter to update the current state."},
    {id: "2.1.6", question: "Which event attribute is used to update the state in a textbox when the user types?"},
    //useState
    {id: "2.1.7", question: "Which React hook is commonly used to manage the state of a textbox?"},
    //event.target.value 
    {id: "2.1.8", question: "How do you correctly access the text typed into an input?"},
    //use the input name attribute to identify which field to update in the state
    {id: "2.1.9", question: "Which of the following is true about updating multiple textboxes with a single onChange handler?"},

    //model/view/controller in regards to textbox component 
    {id: "2.1.10", question: "Which part of the textbox component represents the Model?"},
        //callback function - controller
    {id: "2.1.11", question: "Which part of the textbox component represents the Controller?"},
        //form.group - view
    {id: "2.1.12", question: "Which part of the textbox component represents the View?"},
]

export const topic1Code = [
    //identifying 
        //(1) useState deifnition (2) onChange handler function (3) value attribute binding value to state 
    {id: "2.1.13", question: "Identify the Model"}, 
    {id: "2.1.14", question: "Identify the Controller"},
    {id: "2.1.15", question: "Identify the View"},

    //fill in blanks
    //1)Form.(Control), 2)type="(text)", 3)(value) = {name}, 4)onChange={(/name of handler func/)} /in handler func/ 6) setName(e.target.value)
        //include pic of code with missing blanks and corresponding nums in each blank, include useState definition and onChange handler func
    {id: "2.1.16", question: "Fill in the blanks for the following code to create a controlled textbox component."},
    
    //based off following code, what will happen (select from options)
    //correct syntax - state updates as user types, textbox value updates to match state
        //replace SOMETHING with different words - both scenarios will update to whatever user types
    {id: "2.1.17", question: "Given the following code, what will happen when the user types in the textbox? What is the value of the textbox after the user types 'SOMETHING'?"},
    {id: "2.1.18", question: "Given the following code, what will happen when the user types in the textbox? What is the value of the textbox after the user types 'SOMETHING'?"},
    //incorrect onChange syntax - state does not update as user types and stays initial value
        //value stays initial value because onChange handler does not correctly update state
    {id: "2.1.19", question: "Given the following code, what will happen when the user types in the textbox? What is the value of the textbox after the user types 'SOMETHING'?"},

    //parsons/ordering code
    {id: "2.1.20", question: "Order the following code snippets to correctly create a textbox component."},
    {id: "2.1.21", question: "Order the following code snippets to correctly create a textbox component."},

    //what's missing/wrong with code (free response)
        //missing useState definition
    {id: "2.1.22", question: "What is missing or wrong with the following code for a controlled textbox component?"},
        //missing onChange handler
    {id: "2.1.23", question: "What is missing or wrong with the following code for a controlled textbox component?"},
        //missing value attribute/binding value to state
    {id: "2.1.24", question: "What is missing or wrong with the following code for a controlled textbox component?"},
]

/**TOPIC 2: Checkboxes*/

/**TOPIC 3: Dropdowns*/

/**TOPIC 4: Differences*/