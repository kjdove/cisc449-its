export const topic1MCQAnswers = [
    {id: "1.1.1", options: [
        {textId: "1", text: "a collection of specialized user interface elements"}, 
        {textId: "2", text: "a communication protocol"},
        {textId: "3", text: "a type of database"},
        {textId: "4", text: "a programming language"}], 
    correctId: "1"},
    {id: "1.1.2", options: [
        {textId: "1", text: "a component used to group related form controls together"}, 
        {textId: "2", text: "a type of form control"},
        {textId: "3", text: "a styling class for forms"},
        {textId: "4", text: "a validation method for forms"}],
    correctId: "1"},
    {id: "1.1.3", options: [
        {textId: "1", text: "Form.Group, Form.Row, Form.Column"}, 
        {textId: "2", text: "Form.Label, Form.Control, Form.Text"},
        {textId: "3", text: "Form.Input, Form.Select, Form.Textarea"},
        {textId: "4", text: "Form.Header, Form.Body, Form.Footer"}],
    correctId: "2"},
    {id: "1.1.4", options: [
        {textId: "1", text: "id, name, value"}, 
        {textId: "2", text: "controlId, className"},
        {textId: "3", text: "type, placeholder, disabled"},
        {textId: "4", text: "label, control, text"}],
    correctId: "2"},
    {id: "1.1.5", options: [
        {textId: "1", text: "Sets the id attribute for the Form.Label tag."},
        {textId: "2", text: "Sets the id attribute for the inner Form.Control tag and the htmlFor attribute for the Form.Label tag."},
        {textId: "3", text: "Sets the className attribute for the Form.Group tag."},
        {textId: "4", text: "Sets the type attribute for the Form.Control tag."}],
    correctId: "2"},
    {id: "1.1.6", options: [
        {textId: "1", text: "It creates a new input field for the user to enter data"},
        {textId: "2", text: "It is a human-friendly identifier visible to the user"}, 
        {textId: "3", text: "It groups related form controls together visually and semantically"},
        {textId: "4", text: "It provides additional information or instructions about the form control"}],
    correctId: "2"},
    {id: "1.1.7", options: [
        {textId: "1", text: "It is a container for grouping related form controls together"},
        {textId: "2", text: "It is an interactive element that allows users to input data"}, 
        {textId: "3", text: "It is a text element that provides additional information or instructions about the form control"},
        {textId: "4", text: "It is a styling class that can be applied to the Form.Group component to add margin-bottom spacing"}],   
    correctId: "2"},
    {id: "1.1.8", options: [
        {textId: "1", text: "It is a container for grouping related form controls together"},
        {textId: "2", text: "It is small text that provides additional information or instructions about the form control"}, 
        {textId: "3", text: "It is an interactive element that allows users to input data"},
        {textId: "4", text: "It is a styling class that can be applied to the Form.Group component to add margin-bottom spacing"}],
    correctId: "2"},
    {id: "1.1.9", options: [
        {textId: "1", text: "It sets the id attribute for the inner Form.Control tag and the htmlFor attribute for the Form.Label tag."},
        {textId: "2", text: "It allows the user to apply custom CSS styles to the Form.Group component"}, 
        {textId: "3", text: "It is a human-friendly identifier visible to the user"},
        {textId: "4", text: "It groups related form controls together visually and semantically"}],
    correctId: "2"},
]

export const topic1CodeAnswers = [
    {id: "1.1.10", correctAnswers: ["Group", "Label", "Control", "Text"]},
    {id: "1.1.11", correctAnswers: ["controlId", "className"]},
    {id: "1.1.12", correctAnswers: ["Form.Control", "type", "placeholder"]},
    {id: "1.1.13", 
        correctOrder: "7,3,6,1,4,5,2", 
        options: [`<Form.Text className="text-muted">`, ` </Form.Group>`, `<Form.Label>Email address</Form.Label>`, `We'll never share your email with anyone else.`, `</Form.Text>`, `<Form.Control type="email" placeholder="Enter email" />`, `<Form.Group className="mb-3" controlId="formBasicEmail">` ]}
]   

export const topic2MCQAnswers = [
    {id: "1.2.1", options: [
        {textId: "1", text: "Form components"},
        {textId: "2", text: "attributes"},
        {textId: "3", text: "event handlers"},
        {textId: "4", text: "state variables"},
    ], correctId: "2"},
    {id: "1.2.2", options: [
        {textId: "1", text: "Form.Group"},
        {textId: "2", text: "Form.Label"},
        {textId: "3", text: "Form.Control"},
        {textId: "4", text: "Form.Text"},
    ], correctId: "3"},
    {id: "1.2.3", options: [
        {textId: "1", text: `<Form.Control disabled={canEdit}>`},
        {textId: "2", text: `<Form.Control placeholder="Enter Email">`},
        {textId: "3", text: `<Form.Control type="email">`},
        {textId: "4", text: `All of the above`},
    ], correctId: "4"},
    {id: "1.2.4", options: [
        {textId: "1", text: "readOnly"},
        {textId: "2", text: "disabled"},
        {textId: "3", text: "placeholder"},
        {textId: "4", text: "required"},
    ], correctId: "1"},
    {id: "1.2.5", options: [
        {textId: "1", text: "readOnly"},
        {textId: "2", text: "disabled"},
        {textId: "3", text: "placeholder"},
        {textId: "4", text: "required"},
    ], correctId: "2"},
    {id: "1.2.6", options: [
        {textId: "1", text: "readOnly"},
        {textId: "2", text: "disabled"},
        {textId: "3", text: "placeholder"},
        {textId: "4", text: "required"},
    ], correctId: "3"},
    {id: "1.2.7", options: [
        {textId: "1", text: "readOnly"},
        {textId: "2", text: "disabled"},
        {textId: "3", text: "placeholder"},
        {textId: "4", text: "required"},
    ], correctId: "4"},
    {id: "1.2.8", options: [
        {textId: "1", text: "readOnly"},
        {textId: "2", text: "defaultValue"},
        {textId: "3", text: "placeholder"},
        {textId: "4", text: "value"},
    ], correctId: "4"},
    {id: "1.2.9", options: [
        {textId: "1", text: "readOnly"},
        {textId: "2", text: "disabled"},
        {textId: "3", text: "value"},
        {textId: "4", text: "defaultValue"},
    ], correctId: "4"},
]

export const topic2CodeAnswers = [
    {id: "1.2.10", options: [
        {textId: "1", text: "The form control will be disabled and the user will not be able to interact with it."},
        {textId: "2", text: "The form control will have placeholder text that says 'Enter email'."},
        {textId: "3", text: "The form control will only accept email input and will show a validation error if the input is not in email format."},
        {textId: "4", text: "All of the above."},
    ], correctId: "1"},
    {id: "1.2.11", options: [
        {textId: "1", text: "The form control will be disabled and the user will not be able to interact with it."},
        {textId: "2", text: "The form control will have placeholder text that says 'Enter email'."},
        {textId: "3", text: "The form control will only accept email input and will show a validation error if the input is not in email format."},
        {textId: "4", text: "All of the above."},
    ], correctId: "2"},
    {id: "1.2.12", correctAnswer: "defaultValue"},
    {id: "1.2.13", correctAnswer: "readOnly"},
]

export const topic3Answers = [

]