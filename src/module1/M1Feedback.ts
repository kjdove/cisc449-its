import { type mcFeedback } from "../Types"
export const topic1FeedbackMCQ: mcFeedback[] = [
    {id: "1.1.1", options: [
        {textId: "1", text: "A form is a structured container that groups together various interactive UI elements, including textboxes, checkboxes, and dropdowns, to allow users to input and submit data."},
        {textId: "2", text: "A communication protocol (like HTTP or TCP) is a set of rules governing how data is exchanged between devices on a network."},
        {textId: "3", text: "A database is a structured system used to store and manage data."},
        {textId: "4", text: "A programming language (like Python or JavaScript) is a formal language used to write software code. "}
    ]},
    {id: "1.1.2", options: [
        {textId: "1", text: "The <Form.Group> component is designed to wrap form items o provide structure and proper spacing."},
        {textId: "2", text: "Form.Group is a wrapper component used for layout, not a form control (like an input or checkbox) itself. Form.Control is used for the input elements."},
        {textId: "3", text: "While Form.Group often adds layout styling, it is a component that renders markup (like a <div>) containing elements, not simply a styling class."},
        {textId: "4", text: " While Form.Group supports displaying validation states and feedback (like valid-feedback), it is not a 'method' to validate data."}
    ]},
    {id: "1.1.3", options: [
        {textId: "1", text: "These are layout components, not commonly used inside a Form.Group. Form.Group itself is a container for a single label/control pair."},
        {textId: "2", text: "The common tags used in a Form.Group include <Form.Label> for labeling the input, <Form.Control> for the input element itself, and <Form.Text> for additional help text or instructions."},
        {textId: "3", text: "React Bootstrap uses Form.Control for inputs, not Form.Input."},
        {textId: "4", text: "These are not standard React Bootstrap Form components."}
    ]},
    {id: "1.1.4", options: [
        {textId: "1", text: "These are properties typically used on the <Form.Control> (the input component) to manage its state and unique identification, not on the wrapper Form.Group."},
        {textId: "2", text: "controlId  is a key property of Form.Group used to accessibly connect the Form.Label with the Form.Control (input) automatically. It generates a unique id for the input field. className  allows you to pass a custom CSS class to the <Form.Group> container."},
        {textId: "3", text: "These are attributes of the input element (<Form.Control>) that define the type of input and its state, not the group itself."},
        {textId: "4", text: "While Form.Group contains these elements, these are not properties of the Form.Group component itself, but rather sub-components placed inside it."}
    ]},
    {id: "1.1.5", options: [
        {textId: "1", text: "controlId does not directly set the id on the label itself. It sets the htmlFor attribute on the Form.Label."},
        {textId: "2", text: "This is the primary function. It automatically generates a unique ID, applies it to the Form.Control (id='controlId'), and links the Form.Label via htmlFor='controlId'"},
        {textId: "3", text: "The controlId is a unique identifier (id), not a class name for styling the group container."},
        {textId: "4", text: " The type attribute is defined directly on the Form.Control component, not via controlId"}
    ]},
    {id: "1.1.6", options: [
        {textId: "1", text: "This is the purpose of Form.Control or input element, not Form.Label."},
        {textId: "2", text: "Form.Label provides a textual description of what data is expected in a form field."},
        {textId: "3", text: "This is the purpose of Form.Group element, which acts as a container"},
        {textId: "4", text: "While a label provides context, the option to provide detailed instructions is usually handled by a Form.Text component"}
    ]},
    {id: "1.1.7", options: [
        {textId: "1", text: "This describes the role of a Form.Group element, which wraps labels, controls, and help text."},
        {textId: "2", text: "Form.Control enders HTML input, textarea, or select elements that accept user data, and adds custom styles for appearance, focus states, and sizing"},
        {textId: "3", text: " This describes a Form.Label or Form.Text element, which provides context or help text."},
        {textId: "4", text: "This describes a CSS class like mb-3 or custom styling applied to a Form.Group."}
    ]},  
    {id: "1.1.8", options: [
        {textId: "1", text: "It is not a container for grouping related form controls. A Form.Group is used for grouping."},
        {textId: "2", text: "Form.Text specifically designed for small text that provides context, instructions, or helper information about the form control."},
        {textId: "3", text: "It is not an interactive input element. A Form.Control or input is used for data entry."},
        {textId: "4", text: "While it adds styling, it is a separate component, not a CSS class applied directly to the container group."}
    ]},
    {id: "1.1.9", options: [
        {textId: "1", text: "This describes the controlId attribute, not className. The controlId sets the id and htmlFor attributes."},
        {textId: "2", text: "className acts just like the class attribute in HTML, allowing you to pass CSS classes for styling."},
        {textId: "3", text: "Form.Label elements are for human-readable labels."},
        {textId: "4", text: "While Form.Group itself does this, the purpose of the className attribute is not specifically the structural grouping."}
    ]}
]

export const topic1FeedbackCode = []

export const topic2FeedbackMCQ: mcFeedback[] = [
    {id: "1.2.1", options: [
        {textId: "1", text: "These are the elements themselves (e.g., <input>, <button>, <select>), not the mechanism controlling their behavior."},
        {textId: "2", text: "Attributes like type, value, name, disabled, readOnly, and required define how an input behave and what data it accepts."},
        {textId: "3", text: "vent handlers (e.g., onChange, onSubmit) respond to actions after they happen, rather than controlling the intrinsic behavior or configuration of the component."},
        {textId: "4", text: "State variables (especially in React) are used to manage the value of a controlled component."}
    ]},
    {id: "1.2.2", options: [
        {textId: "1", text: "This acts as a wrapper for the entire form element (label + input + help text). Its primary role is managing layout and connecting labels to inputs via controlId."},
        {textId: "2", text: "This component represents the <label> tag for a form control."},
        {textId: "3", text: "This component renders the actual HTML input fields (like <input> or <textarea>). Attributes such as type, placeholder, size, isValid, and isInvalid are specifically used to control the appearance and behavior of this input component."},
        {textId: "4", text: "This component is used to display block-level or inline help text, providing context for the input field"}
    ]},
    {id: "1.2.3", options: [
        {textId: "1", text: "Is this the only valid syntax?"},
        {textId: "2", text: "Is this the only valid syntax?"},
        {textId: "3", text: "Is this the only valid syntax?"},
        {textId: "4", text: "Correct. All three snippets are standard, valid, and functional ways to apply attributes to Form.Control components in React-Bootstrap"}
    ]},
    {id: "1.2.4", options: [
        {textId: "1", text: "The readonly attribute prevents users from changing the value of an input field, but still allows them to click, focus, highlight, and copy the text."},
        {textId: "2", text: "While a disabled input cannot be edited, it also cannot be clicked, focused, or copied by the user."},
        {textId: "3", text: "The placeholder attribute only provides a short hint (a temporary hint) that describes the expected value of an input field before the user enters a value. It does not restrict editing."},
        {textId: "4", text: " Incorrect. The required attribute specifies that an input field must be filled out before submitting the form. It does not prevent editing; rather, it forces it."},
    ]},
    {id: "1.2.5", options: [
        {textId: "1", text: "A readOnly field cannot be modified, but the user can still click, select, and copy text from it, and the value is still submitted."},
        {textId: "2", text: "This attribute renders the input field unusable, un-clickable, and excludes it from form submission."},
        {textId: "3", text: "The placeholder is a short hint displayed inside the field before the user enters a value; it does not prevent interaction."},
        {textId: "4", text: " Incorrect. The required attribute specifies that the user must fill in a value before submitting; it does not prevent interaction."}
    ]},
    {id: "1.2.6", options: [
        {textId: "1", text: "The readonly attribute makes a field non-editable, but the value remains visible and is submitted with the form. It does not disappear when typing."},
        {textId: "2", text: "The disabled attribute makes a field un-clickable, grayed out, and prevents its value from being submitted with the form."},
        {textId: "3", text: "The placeholder is a short hint displayed inside the field before the user enters a value; it does not prevent interaction."},
        {textId: "4", text: "The required attribute ensures a field is filled out before form submission, but it does not control placeholder text."}
    ]},
    {id: "1.2.7", options: [
        {textId: "1", text: "A readOnly field cannot be modified, but the user can still click, select, and copy text from it, and the value is still submitted."},
        {textId: "2", text: "disabled makes a field unusable and prevents its value from being sent with the form."},
        {textId: "3", text: "placeholder only provides a short hint or example inside the field before the user types in it."},
        {textId: "4", text: "The required boolean attribute forces the user to fill out a field before submitting the form."}
    ]},
    {id: "1.2.8", options: [
        {textId: "1", text: "readOnly makes an input non-editable. It restricts user input but does not bind the input to a dynamic state variable for bi-directional data flow."},
        {textId: "2", text: "defaultValue is used for uncontrolled components. It sets the initial value but does not bind the input's current value to a state variable"},
        {textId: "3", text: "placeholder provides a hint or example text inside the input field when it is empty. It is for visual guidance, not state binding"},
        {textId: "4", text: "value explicitly sets the current value of the input to the state variable."}
    ]},
    {id: "1.2.9", options: [
        {textId: "1", text: "readOnly makes an input non-editable. It restricts user input but does not bind the input to a dynamic state variable for bi-directional data flow."},
        {textId: "2", text: "disabled makes a field unusable and prevents its value from being sent with the form."},
        {textId: "3", text: "Setting value makes the input a controlled component, where React controls the value."},
        {textId: "4", text: "Sets the initial value in the DOM. Subsequent user input updates the DOM directly without triggering re-renders."}
    ]},
]

export const topic2CodeFeedback = []

export const topic3FeedbackMCQ: mcFeedback[] = []

export const topic3CodeFeedback = []