/**TOPIC 1: Forms and Form.Groups Questions*/
//multiple choice questions for topic 1
export const topic1MCQ = [
    {id: "1.1.1", question: "What is a form? "},
    {id: "1.1.2", question: "What is a Form.Group?"},
    {id: "1.1.3", question: "What are the common tags used in a Form.Group?"},
    {id: "1.1.4", question: "What are the common properties of a Form.Group?"}, 
    {id: "1.1.5", question: "What is the controlId attribute used for in a Form.Group?"},
    {id: "1.1.6", question: "What is the purpose of a Form.Label?"},
    {id: "1.1.7", question: "What is the purpose of a Form.Control?"},
    {id: "1.1.8", question: "What is the purpose of a Form.Text?"},
    {id: "1.1.9", question: "What is the className attribute used for in a Form.Group?"},
    {id: "1.1.10", question: "Select the correct code to create a Form.Group with a label, control, and text."},

]

//select all that apply questions for topic 1 - multi checkboxes for answer options
export const topic1SelectAll = [
    {id: "1.1.11", question: "Select all the correct statements about forms."},
    {id: "1.1.12", question: "Select all the correct statements about Form.Groups."},
    {id: "1.1.13", question: "Select all the correct statements about Form.Labels."},
    {id: "1.1.14", question: "Select all the correct statements about Form.Controls."},
    {id: "1.1.15", question: "Select all the correct statements about Form.Texts."},
]

//code questions (parsons/fill in missing code/ordering lines of code) for topic 1
export const topic1Code = [
    //fill in blank - missing tags, attributes
    {id: "1.1.16", question: ""},
    //fill in blank - missing tags, attributes
    {id: "1.1.17", question: ""},
    //scenario - given this code how will the form render? (mcq - select from images of forms rendered with different errors)
    {id: "1.1.18", question: ""},
    //parsons/ordering lines of code
    {id: "1.1.19", question: ""},
    //parsons/ordering lines of code
    {id: "1.1.20", question: ""}
]

/**TOPIC 2: Form Attributes and Controls*/
export const topic2MCQ = [
    //attributes
    {id: "1.2.1", question: "[] are used to control the behavior of form components"},
    //Form.Control
    {id: "1.2.2", question: "Which tag are these attributes commonly used on?"},
    //valid syntaxes (all true)
    /**
     *  1) let canEdit = true;
        <Form.Control disabled={canEdit}>
        2) <Form.Control placeholder="Enter Email">
        3) <Form.Control type="email">
     */
    {id: "1.2.3", question: "Which of the following are valid syntaxes for using form control attributes?"}
]

//match each attribute to its definition
export const topic2Matching = [
    //readOnly
    {id: "1.2.4", defintion: "with this attribute, the user will only be able to view and copy data, and not be able to edit it."},
    //disabled
    {id: "1.2.5", definition: "this attribute prevents user interaction."},
    //placeholder
    {id: "1.2.6", definition: "the value of this attribute will appear in the form control when it is empty, and will disappear when the user starts typing."},
    //required
    {id: "1.2.7", definition: "this attribute indicates that a field must be filled out before submitting the form."},
    //value
    {id: "1.2.8", definition: "this attribute binds the value of the form control to a state variable, allowing for controlled components."},
    //defaultValue
    {id: "1.2.9", definition: "this attribute sets the initial value of an uncontrolled form control without binding it to a state after."},
]  


export const topic2Code = [
    //one attribute (readonly, disabled)- mcq with options for how the form control will behave with that attribute or textbox/free response
    {id: "1.2.10", question: "Given the following code, what will be the behavior of the form control?"},
    {id: "1.2.11", question: "Given the following code, what will be the behavior of the form control?"},
    //scenarios, what attribute(s) should be used to achieve this behavior
    {id: "1.2.12", question: "You want to create a form control that has an initial value of 'Hello World' but can be edited by the user. What attribute(s) would you use?"},
    {id: "1.2.13", question: "You want to create a form control that is pre-filled with the value of a state variable called 'email', and updates the 'email' state variable whenever the user types in the form control. What attribute(s) would you use?"},
    {id: "1.2.14", question: "You want to create a form control that is visible but not editable by the user. What attribute(s) would you use?"},
    {id: "1.2.15", question: "You want to create a form control that is completely non-interactive and appears grayed out. What attribute(s) would you use?"}
]

/**TOPIC 3: How to Use the Value Attribute*/
export const topic3MCQ = [

]

export const topic3SelectAll = [

]

export const topic3Code = [

]
