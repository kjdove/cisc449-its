import { type mcFeedback } from "../Types"

export const topic1FeedbackMCQ: mcFeedback[] = [
    {id: "2.1.1", options: [
        {textId: "1", text: "The value attribute defines the content currently inside the textbox, not its type."},
        {textId: "2", text: "This is a React event handler, used to update the component's state when the user types, not to define the input type."},
        {textId: "3", text: "The type attribute is used in HTML to define the specific type of <input> element to display."},
        {textId: "4", text: "The placeholder attribute provides a short hint or tip inside the box."}
    ]},
    {id: "2.1.2", options: [
        {textId: "1", text: "This is a wrapper component used for layout and spacing, typically wrapping the label and control together."},
        {textId: "2", text: "This component renders the <label> tag for the input, used to describe the input field, not to create the input itself."},
        {textId: "3", text: "This component directly renders the HTML <input> or <textarea> and accepts the type attribute (e.g., <Form.Control type='text' />) to define the input type."},
        {textId: "4", text: "This component is used to display block-level help text below an input, such as usage notes or validation hints"}
    ]},
    {id: "2.1.3", options: [
        {textId: "1", text: "onClick is used for clicks, not for capturing text input changes."},
        {textId: "2", text: "placeholder is only a visual hint; it does not set the actual value or link it to state."},
        {textId: "3", text: "type and placeholder are HTML attributes, not state-binding mechanisms"},
        {textId: "4", text: "value forces the input to display the current value stored in the React state. onChange captures user input and updates the React state, which triggers a re-render to update the display.Without both, the component is not properly synchronized with the state."}
    ]},
    {id: "2.1.4", options: [
        {textId: "1", text: "value dictates the initial string or current data displayed inside the text input box when it is rendered on the screen."},
        {textId: "2", text: "readOnly makes the textbox uneditable, but it does not determine what text is displayed when the component first renders; it only controls editability."},
        {textId: "3", text: "disabled makes the textbox inactive, greyed out, and uneditable."},
        {textId: "4", text: "type determines the kind of input, such as text, password, or email, not the content shown."}
    ]},
    {id: "2.1.5", options: [
        {textId: "1", text: "onClick fires when an element is clicked, not when an input value changes."},
        {textId: "2", text: "onFocus fires when an element receives focus (is clicked into or tabbed into), not when the value inside the input changes."},
        {textId: "3", text: "onChange is used to detect changes in form elements (like <input>, <textarea>, or <select>)."},
        {textId: "4", text: "onLoad : Incorrect. This fires when a resource (like an image or iframe) has finished loading, not based on user interaction with a form field."}
    ]},
    {id: "2.1.6", options: [
        {textId: "1", text: "onChange event handler is the standard way to detect changes to a <input> or <textarea> element. It fires immediately every time the input value changes—such as when a user types, pastes text, or deletes characters."},
        {textId: "2", text: "The placeholder attribute is used to display a short hint in an input field when it is empty. It provides a guide to the user, not a mechanism for reacting to changes."},
        {textId: "3", text: "The readOnly attribute is a boolean attribute that, when present, prevents the user from editing the content of the input field."},
        {textId: "4", text: "The disabled attribute prevents the input field from receiving focus, being edited, or even being submitted with a form."}
    ]},
    {id: "2.1.7", options: [
        {textId: "1", text: "useEffect is designed for handling side effects, such as data fetching, subscriptions, or manually manipulating the DOM after a component renders."},
        {textId: "2", text: "The useState hook is designed to add local state to functional components, making it the standard way to store and update the value of a text input."},
        {textId: "3", text: "While useRef can store data, updating a ref does not trigger a re-render. Therefore, if you use a ref to store a textbox value, the text will not update in the UI when the user types."},
        {textId: "4", text: "useContext is used for subscribing to React Context to share data across the component tree without prop drilling."}
    ]},
    {id: "2.1.8", options: [
        {textId: "1", text: "value is usually a prop variable in React used to set the state of the component."},
        {textId: "2", text: "defaultValue sets the initial, unmanaged value of an uncontrolled input when it first loads, similar to value in standard HTML. It does not update when a user types."},
        {textId: "3", text: "In React, when handling input changes (onChange), the event object is passed to the handler function. event.target refers to the DOM element that triggered the event (the <input>), and .value retrieves the current text typed into that field."},
        {textId: "4", text: " This retrieves the initial default value assigned to the input, not the current value being updated by the user."}
    ]},
    {id: "2.1.9", options: [
        {textId: "1", text: "When using a single onChange handler, you need a way to distinguish which input triggered the event. By assigning a name attribute to each input that matches the corresponding key in your state object, you can dynamically update the state using [event.target.name]: event.target.value."},
        {textId: "2", text: "While this works, it is not the correct approach for a single onChange handler. It leads to code repetition and is less efficient than using one shared handler."},
        {textId: "3", text: "The className attribute is used for applying CSS styles, not for identifying input fields for state management in JavaScript logic."},
        {textId: "4", text: "controlId is often used in libraries like react-bootstrap for linking labels to inputs for accessibility, but it is not the standard property used in React's event.target to identify fields in a generic change handler."}
    ]},
]

export const topic1FeedbackCode = []

export const topic2FeedbackMCQ: mcFeedback[] = [
]

export const topic2FeedbackCode = []

export const topic3FeedbackMCQ: mcFeedback[] = [
]

export const topic3FeedbackCode = []

export const topic4FeedbackMCQ: mcFeedback[] = [
]

export const topic4FeedbackCode = []