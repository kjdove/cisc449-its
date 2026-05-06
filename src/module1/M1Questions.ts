/**TOPIC 1: Forms and Form.Groups Questions*/
import type { MCQ, CodingQ} from "../Types";
//multiple choice questions for topic 1
export const topic1MCQ: MCQ[] = [
    {id: "1.1.1", question: "What is a form?"},
    {id: "1.1.2", question: "What is a Form.Group?"},
    {id: "1.1.3", question: "What are the common tags used in a Form.Group?"},
    {id: "1.1.4", question: "What are the common properties of a Form.Group?"}, 
    {id: "1.1.5", question: "What is the purpose of the controlId attribute in a Form.Group?"},
    {id: "1.1.6", question: "What is the purpose of a Form.Label?"},
    {id: "1.1.7", question: "What is the purpose of a Form.Control?"},
    {id: "1.1.8", question: "What is the purpose of a Form.Text?"},
    {id: "1.1.9", question: "What is the purpose of the className attribute in a Form.Group?"},
]

//code questions (parsons/fill in missing code/ordering lines of code) for topic 1
export const topic1Code: CodingQ[] = [
    {id: "1.1.10", question: "Fill in the blanks for the following code."},
    {id: "1.1.11", question: "Fill in the blanks for the following code."},
    {id: "1.1.12", question: "Fill in the blanks for the following code."},

    //parsons/ordering lines of code
    {id: "1.1.13", question: "Order the following lines of code to correctly create a Form.Group with a label, control, and text."},
]

/**TOPIC 2: Form Attributes and Controls*/
export const topic2MCQ: MCQ[] = [
    //attributes
    {id: "1.2.1", question: "What are used to control the behavior of form components?"},
    //Form.Control
    {id: "1.2.2", question: "Which tag are these attributes commonly used on?"},
    //valid syntaxes (all true)
    /**
     *  1) let canEdit = true;
        <Form.Control disabled={canEdit}>
        2) <Form.Control placeholder="Enter Email">
        3) <Form.Control type="email">
     */
    {id: "1.2.3", question: "Which of the following are valid syntaxes for using form control attributes?"},
    //readOnly
    {id: "1.2.4", question: "With this attribute, the user will only be able to view and copy data, and not be able to edit it."},
    //disabled
    {id: "1.2.5", question: "This attribute prevents user interaction."},
    //placeholder
    {id: "1.2.6", question: "The value of this attribute will appear in the form control when it is empty, and will disappear when the user starts typing."},
    //required
    {id: "1.2.7", question: "This attribute indicates that a field must be filled out before submitting the form."},
    //value
    {id: "1.2.8", question: "This attribute binds the value of the form control to a state variable, allowing for controlled components."},
    //defaultValue
    {id: "1.2.9", question: "This attribute sets the initial value of an uncontrolled form control without binding it to a state after."},
]

export const topic2Code: CodingQ[] = [
    //one attribute (readonly, disabled)- mcq with options for how the form control will behave with that attribute or textbox/free response
    {id: "1.2.10", question: "Given the following code, what will be the behavior of the form control?"},
    {id: "1.2.11", question: "Given the following code, what will be the behavior of the form control?"},
    //scenarios, what attribute(s) should be used to achieve this behavior
    {id: "1.2.12", question: "You want to create a form control that has an initial value of 'Hello World' but can be edited by the user. Add the missing attribute(s)."},
    {id: "1.2.13", question: "You want to create a form control that is visible but not editable by the user. Add the missing attribute(s)."},
]

/**TOPIC 3: How to Use the Value Attribute*/
export const topic3MCQ: MCQ[] = [
    //value
    {id: "1.3.1", question: "This attribute represents the current value of a Form component and can be looked up and used throughout code."},
    //useState
    {id: "1.3.2", question: "What is used to create controlled components, where the value of the form control is bound to a state variable?"},
    //where the state of the form data is stored
        //controlled - state variable
        //uncontrolled - DOM
    {id: "1.3.3", question: "What is the difference between controlled and uncontrolled components in React forms?"},
    //binding value to state variable syntax (value={name})
    /**
     *  const [name, setName] = useState<string>("");
        <Form.Control 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
        />
     */
    {id: "1.3.4", question: "Which of the following is the correct syntax for binding the value of a form control to a state variable called 'name'?"},
    //updating state variable on user input syntax (setName(e.target.value))
    {id: "1.3.5", question: "Which of the following is the correct syntax for updating a state variable called 'name' when the user types in a form control?"}
]

export const topic3Code: CodingQ[] = [
    //based off following code, what will happen (select from options)
    //correct syntax - state updates as user types, form control value updates to match state
    {id: "1.3.6", question: "Given the following code, will the state and form update as the user types?"},
    //incorrect onChange syntax - state does not update as user types and stays initial value
    {id: "1.3.7", question: "Given the following code, will the state and form update as the user types?"},
    //incorrect value syntax - form control does not update to match state
    {id: "1.3.8", question: "Given the following code, will the state and form update as the user types?"},

    //what's missing/wrong with code (free response)
    //missing definition of state variable
    {id: "1.3.9", question: "Fill in the blank for the following code to correctly create a controlled form control."},
    //missing onChange handler
    {id: "1.3.10", question: "Fill in the blank for the following code to correctly create a controlled form control."},
]
