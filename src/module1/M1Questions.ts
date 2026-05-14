/**TOPIC 1: Forms and Form.Groups Questions*/
import type { MCQ, CodingQ, EndQuiz} from "../Types";
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

    //parsons/ordering lines of code
    {id: "1.1.12", question: "Order the following lines of code to correctly create a Form.Group with a label, control, and text."},
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
    {id: "1.2.10", question: "Given the following code, what will be the behavior of the form control?"},
    {id: "1.2.11", question: "You want to create a form control that has an initial value of 'Hello World' but can be edited by the user. Add the missing attribute(s)."},
    {id: "1.2.12", question: "You want to create a form control that is visible but not editable by the user. Add the missing attribute(s)."},
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

export const endOfModule: EndQuiz[] = [
    //forms
    {id: "E1", question: "Which component is commonly used to group related form elements together?", options: ["Form.Group", "Form.Control", "Form.Label", "Form.Text"], 
    correctAnswer: "Form.Group", topic: "forms", skill: "form-structure", difficulty: 1},

    {id: "E2", question: "Which tag displays a human friendly identifier for an input component?", options: ["Form.Group", "Form.Control", "Form.Label", "Form.Text"], 
    correctAnswer: "Form.Label", topic: "forms", skill: "form-structure", difficulty: 1},

    {id: "E3", question: "You want to group a label, textbox, and helper text together for a username input. Which component should wrap all of them?",
    options: ["Form.Group", "Form.Control", "Form.Label", "Form.Text"], correctAnswer: "Form.Group", topic: "forms", skill: "form-structure", difficulty: 2},

    {id: "E4", question:"A developer wants to connect a label to an input for accessibility. Which Form.Group property should be used?", 
    options: ["controlId", "className", "id", "name"], correctAnswer: "controlId", topic: "forms", skill: "form-structure", difficulty: 2},
    
    {id: "E5", question: "Will the following code correctly associate the label with the textbox? Why or why not?", code: `
    <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
    </Form.Group>
            `,
    options: [
        "No, because Form.Group is missing controlId",
        "Yes, because Form.Label automatically connects",
        "No, because Form.Control requires Form.Text",
        "Yes, because type='text' handles accessibility"
    ], correctAnswer: "No, because Form.Group is missing controlId", topic: "forms", skill: "debugging", difficulty: 3},

    {id: "E6", question: "Will the following code correctly associate the label with the textbox? Why or why not?", code: `
        <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" />
        </Form.Group>
            `,
        options: [
            "Yes, because controlId connects the label and textbox",
            "No, because Form.Control is missing an id",
            "No, because Form.Label is missing a for attribute",
            "Yes, because Form.Group automatically handles accessibility"   
        ], correctAnswer: "Yes, because controlId connects the label and textbox", topic: "forms", skill: "debugging", difficulty: 3},

    //attributes
    {id: "E7", question: "What is the purpose of form control attributes?", options: [
        "To control the behavior and appearance of form components",
        "To group related form elements together",
        "To display a human friendly identifier for an input component",
        "To provide helper text for form controls"
    ], correctAnswer: "To control the behavior and appearance of form components", topic: "attributes", skill: "conceptual", difficulty: 1},
   
    {id: "E8", question: "Which component commonly uses attributes such as placeholder, required, and disabled?",
    options: ["Form.Group", "Form.Control", "Form.Label", "Form.Text"], correctAnswer: "Form.Control", topic: "attributes", skill: "conceptual", difficulty: 1},
    
    {id: "E9", question: "You want users to see example text inside an empty textbox before typing. Which attribute should be used?",
    options: ["placeholder", "value", "defaultValue", "readOnly"], correctAnswer: "placeholder", topic: "attributes", skill: "application", difficulty: 2},
    
    {id: "E10", question: "A developer wants a textbox to display data that users can copy but not edit. Which attribute should be added?",
    options: ["readOnly", "disabled", "value", "defaultValue"], correctAnswer: "readOnly", topic: "attributes", skill: "application", difficulty: 2},
    
    {id: "E11", question: "What text initially appears inside the textbox?", code: `
    <Form.Control
        type="text"
        placeholder="Enter Email"
    />
    `, options: ["Enter Email", "Email", "Nothing", "Placeholder"], correctAnswer: "Enter Email", topic: "attributes", skill: "prediction", difficulty: 3},
    
    {id: "E12", question: "What is incorrect about the following code?", code: `
    <Form.Control
        type="text"
        defaultValue={username}
        onChange={(e) => setUsername(e.target.value)}
    />`,
    options: [
        "defaultValue does not create a controlled component",
        "onChange cannot be used with Form.Control",
        "type='text' is invalid",
        "defaultValue makes the textbox disabled"
    ], correctAnswer: "defaultValue does not create a controlled component", topic: "attributes",skill: "debugging",difficulty: 3},

    //value attribute
    {id: "E13", question: "Which attribute represents the current value of a form control?",
    options: ["value", "defaultValue", "placeholder", "readOnly"], correctAnswer: "value", topic: "valueAttribute", skill: "conceptual", difficulty: 1},
    
    {id: "E14", question:  "Which syntax correctly binds a textbox to a state variable called 'email'?",
        options: [
            'value={email}',
            'value="email"',
            'defaultValue={email}',
            'placeholder={email}'
         ],
    correctAnswer: 'value={email}', topic: "valueAttribute", skill: "application", difficulty: 1},
    
    {id: "E15", question: "Which line correctly updates the state variable 'username' from user input?",
    options: [
        'onChange={(e) => setUsername(e.target.value)}',
        'onChange={(e) => setUsername}',
        'onChange={(e) => setUsername(e)}',
        'onChange={(e) => setUsername(e.target)}'
    ], correctAnswer: 'onChange={(e) => setUsername(e.target.value)}', topic: "valueAttribute", skill: "application", difficulty: 2},
    
    {id: "E16", question: "Given the following code, will the form control update as the user types? Why or why not?", code: `
        const [movie, setMovie] = useState("");
        <Form.Control
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
        />
    `, options: [
        "Yes, both state and textbox update",
        "No, the textbox stays empty",
        "No, React prevents typing",
        "The textbox updates but state does not"
    ], correctAnswer: "Yes, both state and textbox update", topic: "valueAttribute", skill: "prediction", difficulty: 2},

    {id: "E17", question: "What is incorrect about the following code?", code: `
        const [email, setEmail] = useState("");
        <Form.Control
            type="text"
            value="email"
            onChange={(e) => setEmail(e.target.value)}
        />`, options: [
            'value should be {email}, not "email"',
         "onChange is invalid",
         "type='text' is invalid",
         "useState cannot store strings"
        ], correctAnswer: 'value should be {email}, not "email"', topic: "valueAttribute", skill: "debugging", difficulty: 3},
    
    {id: "E18", question: "What is incorrect about the following code?", code: `
        const [username, setUsername] = useState("");
        <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(username)}
        />`, options: [
            'onChange should use e.target.value, not username',
            "value should be defaultValue",
            "type='text'is invalid",
            "useState cannot store strings"], 
    correctAnswer: 'onChange should use e.target.value, not username', topic: "valueAttribute", skill: "debugging", difficulty: 3},
]