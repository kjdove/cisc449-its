/**TOPIC 1: Textboxes (24)*/ 
export const topic1MCQ = [
    //type = "text"
    {id: "2.1.1", question: "What attribute is used to specify the type of a textbox?"},
    //Form.Control
    {id: "2.1.2", question: "Which form tag includes the type attribute to create a textbox?"},
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
        //useState variable - model
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

    //what's missing/wrong with code (free response)
        //missing/incorrect useState definition
    {id: "2.1.20", question: "What is missing or wrong with the following code for a controlled textbox component?"},
        //missing/incorrect onChange handler
    {id: "2.1.21", question: "What is missing or wrong with the following code for a controlled textbox component?"},
        //missing /incorrectvalue attribute/binding value to state
    {id: "2.1.22", question: "What is missing or wrong with the following code for a controlled textbox component?"},

    //parsons/ordering code
    {id: "2.1.23", question: "Order the following code snippets to correctly create a textbox component."},
    {id: "2.1.24", question: "Order the following code snippets to correctly create a textbox component."},
]

/**TOPIC 2: Checkboxes (20)*/
export const topic2MCQ = [
    //def
    {id: "2.2.1", question: "[] corresponds to some boolean state."},
    //Form.Check
    {id: "2.2.2", question: "What form tag is used to create a checkbox?"},
    //type = "checkbox"
    {id: "2.2.3", question: "What attribute is used to specify the type of a checkbox?"},
    //checked
    {id: "2.2.4", question: "The [] attribute is used instead of value to represent the current state of a checkbox."},
    //label and id
    {id: "2.2.5", question: "What two attributes are used to help with screen readers?"},
    //label
    {id: "2.2.6", question: "Which attribute is used to specify the text shown next to a checkbox that the user sees?"},
    //id
    {id: "2.2.7", question: "Which attribute is used to link the checkbox input to the text shown next to it that a user does not see?"},
    //useState
    {id: "2.2.8", question: "Which React hook is commonly used to manage the state of a checkbox?"},
    //event.target.checked 
    {id: "2.2.9", question: "How do you correctly access whether a checkbox is checked or not in an onChange handler?"},
]

export const topic2Code = [
    //identifying 
        //(1) useState deifnition (2) onChange handler function (3) value attribute binding value to state 
    {id: "2.2.10", question: "Identify the Model"}, 
    {id: "2.2.11", question: "Identify the Controller"},
    {id: "2.2.12", question: "Identify the View"},

    //fill in blanks
        //1)Form.(Check), 2)type="(checkbox)", 3)(value) = {name}, 4)onChange={(/name of handler func/)} /in handler func/ 6) setName(e.target.value)
        //include pic of code with missing blanks and corresponding nums in each blank, include useState definition and onChange handler func
    {id: "2.2.13", question: "Fill in the blanks for the following code to create a controlled checkbox component."},

    //based off following code, what will happen (select from options)
    //correct syntax - state updates as user clicks, checkbox checked state updates to match state
    {id: "2.2.14", question: "Given the following code, what will happen when the user clicks the checkbox? Is the checkbox checked or unchecked after the user clicks it?"},
    //incorrect onChange syntax - state does not update as user clicks and stays initial value
        //checkbox checked state stays initial value because onChange handler does not correctly update state
    {id: "2.2.15", question: "Given the following code, what will happen when the user clicks the checkbox? Is the checkbox checked or unchecked after the user clicks it?"},

    //what's missing/wrong with code (free response)
        //missing/incorrect useState definition
    {id: "2.2.16", question: "What is missing or wrong with the following code for a controlled checkbox component?"},
        //missin/incorrect onChange handler
    {id: "2.2.17", question: "What is missing or wrong with the following code for a controlled checkbox component?"},
        //missing/incorrect checked attribute/binding checked to state
    {id: "2.2.18", question: "What is missing or wrong with the following code for a controlled checkbox component?"},

    //parson/ordering code
    {id: "2.2.19", question: "Order the following code snippets to correctly create a checkbox component."},
    {id: "2.2.20", question: "Order the following code snippets to correctly create a checkbox component."},
]

/**TOPIC 3: Dropdowns (19)*/
export const topic3MCQ = [
    //def
    {id: "2.3.1", question: "[], also known as select menus or comboboxes, correspond to some string state, or a subset of strings, that can take on multiple values."},
    //form.select
    {id: "2.3.2", question: "What form tag is used to create a dropdown?"},
    //value/onchange
    {id: "2.3.3", question: "What two attributes tie the Form.Select component to the app's State?"},
    //option tags
    {id: "2.3.4", question: "Dropdowns are created using a combination of the Form.Select tag and [] tags that have their own value attribute."},
    //useState
    {id: "2.3.5", question: "Which React hook is commonly used to manage the state of a dropdown?"},
    //event.target.value
    {id: "2.3.6", question: "How do you correctly access the option selected in a dropdown in an onChange handler?"},

    //model/view/controller in regards to dropdown component 
        //useState variable - model
    {id: "2.3.7", question: "Which part of the dropdown component represents the Model?"},
        //callback function - controller
    {id: "2.3.8", question: "Which part of the dropdown component represents the Controller?"},
        //form.group - view
    {id: "2.3.9", question: "Which part of the dropdown component represents the View?"},
]

export const topic3Code = [
    //identifying 
        //(1) useState deifnition (2) onChange handler function (3) value attribute binding value to state 
    {id: "2.3.10", question: "Identify the Model"}, 
    {id: "2.3.11", question: "Identify the Controller"},
    {id: "2.3.12", question: "Identify the View"},

    //fill in blanks
        //1)Form.(Select), 2)(value) = {name}, 3)onChange={(/name of handler func/)} /in handler func/ 6) setName(e.target.value)
        //include pic of code with missing blanks and corresponding nums in each blank, include useState definition and onChange handler func
    {id: "2.3.13", question: "Fill in the blanks for the following code to create a controlled dropdown component."},
    
    //based off following code, what will happen (select from options)
    //correct syntax - state updates as user selects option, dropdown selected option updates to match state
    {id: "2.3.14", question: "Given the following code, what will happen when the user selects an option from the dropdown? What is the selected option in the dropdown after the user makes a selection?"},
    {id: "2.3.15", question: "Given the following code, what will happen when the user selects an option from the dropdown? What is the selected option in the dropdown after the user makes a selection?"},

    //incorrect onChange syntax - state does not update as user selects and stays initial value
        //dropdown selected option stays initial value because onChange handler does not correctly update state
    {id: "2.3.16", question: "Given the following code, what will happen when the user selects an option from the dropdown? What is the selected option in the dropdown after the user makes a selection?"},

    //what's missing/wrong with code (free response)
        //missing/incorrect useState definition
    {id: "2.3.17", question: "What is missing or wrong with the following code for a controlled dropdown component?"},
        //missing/incorrect onChange
    {id: "2.3.18", question: "What is missing or wrong with the following code for a controlled dropdown component?"},
        //missing/incorrect value attribute/binding value to state
    {id: "2.3.19", question: "What is missing or wrong with the following code for a controlled dropdown component?"},
]

/**TOPIC 4: Differences (24)*/
export const topic4MCQ = [
    //definitional
    {id: "2.4.1", question: "Which component allows the user to enter text into an input field?"},
    {id: "2.4.2", question: "Which component represents a boolean value for the user to select?"},
    {id: "2.4.3", question: "Which component allows the user to select one option from a list of options?"},
    //tags
        //textbox
    {id: "2.4.4", question: "Which component uses Form.Control?"},
        //checkbox
    {id: "2.4.5", question: "Which component uses Form.Check?"},
        //dropdown
    {id: "2.4.6", question: "Which component uses Form.Select?"},

    //state type
        //textbox - string
    {id: "2.4.7", question: "The state of a textbox component is typically represented as which data type?"},
        //checkbox - boolean
    {id: "2.4.8", question: "The state of a checkbox component is typically represented as which data type?"},
        //dropdown - string
    {id: "2.4.9", question: "The state of a dropdown component is typically represented as which data type?"},
]

export const topic4Scenarios = [
    //scenarios, which component would you use (textbox/free response answer)
    {id: "2.4.10", question: "You want to create a form where the user can enter their name. Which component would you use?"},
    {id: "2.4.11", question: "You want to create a form where the user can select whether they agree to the terms and conditions. Which component would you use?"},
    {id: "2.4.12", question: "You want to create a form where the user can select their favorite color from a list of options. Which component would you use?"},
    {id: "2.4.13", question: "You want to create a form where the user can enter their email address. Which component would you use?"},
    {id: "2.4.14", question: "You want to create a form where the user can select whether they want to receive a newsletter subscription. Which component would you use?"},
    {id: "2.4.15", question: "You want to create a form where the user can select their preferred contact method (email, phone, or mail). Which component would you use?"},
]

export const topic4Code = [
    //following code represents which component
    {id: "2.4.16", question: "The following code represents which component?"},
    {id: "2.4.17", question: "The following code represents which component?"},
    {id: "2.4.18", question: "The following code represents which component?"},

    //what's missing/wrong with code (free response)
        //textbox (INCLUDE FORM.CONTROL) missing type="text"
    {id: "2.4.19", question: "What is missing or wrong with the following code for this component?"},
        //checkbox (INCLUDE TYPE="CHECKBOX") missing/incorrect Form.Check tag
    {id: "2.4.20", question: "What is missing or wrong with the following code for this component?"},
        //dropdown (INCLUDE OPTIONS) missing/incorrect Form.Select tag
    {id: "2.4.21", question: "What is missing or wrong with the following code for this component?"},

    //parsons/ordering
        //order code snippets to create a textbox, checkbox, dropdown component
    {id: "2.4.22", question: "Order the following code snippets to correctly create a textbox component."},
    {id: "2.4.23", question: "Order the following code snippets to correctly create a checkbox component."},
    {id: "2.4.24", question: "Order the following code snippets to correctly create a dropdown component."},
]