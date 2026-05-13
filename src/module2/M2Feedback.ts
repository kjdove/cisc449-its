import type{  mcFeedback, codingFeedback } from "../Types"

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

export const topic1FeedbackCode: codingFeedback[] = [
    {id: "2.1.10", type: "fib", feedback: "Which part of the code describe the possible values stored in the State? Which part shows off the current State? Which part lets you change and update the current State?"},
    {id: "2.1.11", type: "fib", feedback: "Which HTML tag is the input component used to create a textbox?"},
    {id: "2.1.12", type: "mcq", feedback: "Look at the value attribute and the onChange handler. Do they correctly bind the input to the state variable and update it as the user types?"},
    {id: "2.1.13", type: "mcq", feedback: "Look at the value attribute and the onChange handler. Do they correctly bind the input to the state variable and update it as the user types?"},
    {id: "2.1.14", type: "ordering", feedback: "Remember the Model-View-Controller pattern. The state variable is the Model, the input field is the View, and the onChange handler is the Controller. Set up the state, look for the hook and handler function, then set up the form structure."},
]

export const topic2FeedbackMCQ: mcFeedback[] = [
    {id: "2.2.1", options: [
        {textId: "1", text: "Dropdwons are used to select one option from a long list of mutually exclusive choices."},
        {textId: "2", text: "Checkboxes are designed for binary choices (on/off, true/false, yes/no)."},
        {textId: "3", text: "Textboxes are used for user-inputted text, not binary choices"},
        {textId: "4", text: "Lists are typically used for selecting one or more items from a larger set, not a simple true/false state."}
    ]},
    {id: "2.2.2", options: [
        {textId: "1", text: "<Form.Control> component is used for standard text inputs, textareas, and file selects."},
        {textId: "2", text: "<Form.Check> component is the specialized component used to create checkboxes, radio buttons, and switches."},
        {textId: "3", text: "<Form.Select> component is used to create dropdown select menus."},
        {textId: "4", text: "<Form.Group> is a wrapper component used to hold multiple form elements together, typically providing spacing between labels, inputs, and feedback messages"}
    ]},
    {id: "2.2.3", options: [
        {textId: "1", text: "The value attribute defines the data sent to the server when the box is checked."},
        {textId: "2", text: "The checked attribute determines if a checkbox is pre-selected when the page loads."},
        {textId: "3", text: "The type attribute is used within an <Form.Check> tag to define the input control type, and checkbox is the specific value that creates a toggleable box."},
        {textId: "4", text: "While 'check' sounds similar, it is not the correct HTML specification required to create a checkbox"}
    ]},
    {id: "2.2.4", options: [
        {textId: "1", text: "The checked boolean attribute (or property) is used to specify whether a checkbox is checked or unchecked. Unlike the value attribute, which defines the data sent to the server, checked represents the current visual and functional state (true/false) of the checkbox."},
        {textId: "2", text: "The value attribute defines what data is sent to the server if the box is checked, but it does not represent whether the box is currently toggled on or off."},
        {textId: "3", text: "The type attribute simply defines the input as a checkbox, it does not indicate its state."},
        {textId: "4", text: " (Option 4): Incorrect. The placeholder attribute is not used for checkboxes; it is used for text-based input fields to show a hint."}
    ]},
    {id: "2.2.5", options: [
        {textId: "1", text: "classname is used for CSS styling and selecting groups of elements. It does not provide any semantic meaning or accessible name to screen readers."},
        {textId: "2", text: "These are data-handling attributes. name identifies the data when a form is submitted to a server, and value is the actual data entered or predefined. They do not function as the primary descriptive label for assistive technology."},
        {textId: "3", text: "When a screen reader encounters the input, it uses this link to read the label text aloud, providing necessary context to the user."},
        {textId: "4", text: "The name attribute is for server-side processing and does not establish the required accessibility link."}
    ]},
    {id: "2.2.6", options: [
        {textId: "1", text: "The id attribute is used to give a unique identifier to an HTML element (used to link the <label> to the <input>), not to provide the visible text for the user to read next to the checkbox."},
        {textId: "2", text: "The name attribute defines the name of the checkbox data submitted to the server; it is not visible to the user."},
        {textId: "3", text: " The value attribute defines the data value associated with the checkbox when it is submitted."},
        {textId: "4", text: "The <label> element is designed to define a caption for an <input> element. It is used to label the checkbox, providing both descriptive text for the user and improving accessibility for screen readers."}
    ]},
    {id: "2.2.7", options: [
        {textId: "1", text: "To link a text label to a checkbox (or any input), the input must have a unique id attribute."},
        {textId: "2", text: "The value attribute is used to define what data is sent to the server when the form is submitted."},
        {textId: "3", text: "The type attribute specifies the type of input control,."},
        {textId: "4", text: " The placeholder attribute provides a hint within text fields and is generally not used for checkbox inputs"}
    ]},
    {id: "2.2.8", options: [
        {textId: "1", text: "useState is the appropriate hook for managing state that changes over time and affects the UI, such as a checkbox's checked/unchecked status (boolean). It enables component re-rendering to update the UI when the checkbox is clicked"},
        {textId: "2", text: "useEffect is used for handling side effects (like API calls or subscriptions) after a render, not for storing component state."},
        {textId: "3", text: "While useRef persists data between renders, it does not trigger a re-render when its value changes, making it unsuitable for controlling interactive inputs like checkboxes."},
        {textId: "4", text: "useContext is used for consuming state from React Context for deeply nested components, not for managing local input state"}
    ]},
    {id: "2.2.9", options: [
        {textId: "1", text: "the checked property of a checkbox input element returns a boolean value (true or false) indicating its current checked state."},
        {textId: "2", text: "event.target.value returns the value attribute of the checkbox, not whether it is currently checked or unchecked."},
        {textId: "3", text: "event.target.type returns the string 'checkbox', which tells you what kind of input it is, not its current state."},
        {textId: "4", text: "event.target.name returns the value of the name attribute of the HTML element."}
    ]},
]

export const topic2FeedbackCode: codingFeedback[] = [
    {id: "2.2.10", type: "fib", feedback: "Which part of the code describe the possible values stored in the State? Which part shows off the current State? Which part lets you change and update the current State?"},
    {id: "2.2.11", type: "fib", feedback: "Which HTML tag is the input component used to create a checkbox? Which attribute represents the current state of the checkbox?"},
    {id: "2.2.12", type: "mcq", feedback: "Look at the checked attribute and the onChange handler. Do they correctly bind the checkbox to the state variable and update it as the user clicks?"},
    {id: "2.2.13", type: "mcq", feedback: "Look at the checked attribute and the onChange handler. Do they correctly bind the checkbox to the state variable and update it as the user clicks?"},
    {id: "2.2.14", type: "ordering", feedback: "Remember the Model-View-Controller pattern. The state variable is the Model, the checkbox input is the View, and the onChange handler is the Controller. Set up the state, look for the hook and handler function, then set up the form structure."},
]

export const topic3FeedbackMCQ: mcFeedback[] = [
    {id: "2.3.1", options: [
        {textId: "1", text: "A checkbox is generally used for binary (yes/no) choices or selecting multiple options simultaneously."},
        {textId: "2", text: "A dropdown (or select menu/combobox) is specifically designed to collapse a list of options into a single line, allowing the user to select one value from a predefined set of strings."},
        {textId: "3", text: "A textbox (or text input) is designed for users to type freeform text, rather than selecting from a predefined list of options."},
        {textId: "4", text: " Incorrect. A form is a container for multiple input elements (including dropdowns and textboxes), not a single interactive component used for selecting from a list."}
    ]},
    {id: "2.3.2", options: [
        {textId: "1", text: "While <Form.Control> can be configured to act as a select using the as='select' prop, it is not the dedicated component for a dropdown."},
        {textId: "2", text: "<Form.Check> is used for checkboxes and radio buttons, not dropdown menus."},
        {textId: "3", text: "In React Bootstrap, <Form.Select> is the dedicated component used to create a dropdown select menu, which renders as a <select> tag in the HTML."},
        {textId: "4", text: "<Form.Group> is a wrapper component used for structuring form fields and managing layout/spacing, not for creating input controls themselves."}
    ]},
    {id: "2.3.3", options: [
        {textId: "1", text: "The value prop tells the dropdown which option is currently active based on state, and the onChange handler updates that state whenever the user selects a new option."},
        {textId: "2", text: "Placeholder is typically for display before a selection is made and does not bind to the app's active state."},
        {textId: "3", text: "Type is generally not used for select components."},
        {textId: "4", text: "Select is the component name, not a binding attribute."}
    ]},
    {id: "2.3.4", options: [
        {textId: "1", text: "Value is an attribute, not an HTML tag."},
        {textId: "2", text: "Each <option> tag accepts a value attribute, which represents the data sent to the server."},
        {textId: "3", text: "The <select> tag is the container (or parent) tag, not the tag used to define individual items with their own values."},
        {textId: "4", text: " here is no standard <dropdown> tag in HTML."}
    ]},
    {id: "2.3.5", options: [
        {textId: "1", text: "useContext is used for sharing state globally across components, not typically for managing the internal state of a single dropdown."},
        {textId: "2", text: "useRef is used to persist values between renders without causing a re-render."},
        {textId: "3", text: "useState is designed to manage local state within a component, such as holding the currently selected value or controlling whether the dropdown is open or closed. Using useState ensures the component re-renders when the selection changes."},
        {textId: "4", text: "useEffect is used to perform side effects (like API calls) when the component mounts or updates, but not for storing the state data itself."}
    ]},
    {id: "2.3.6", options: [
        {textId: "1", text: "When an onChange event fires on a <select> element, event.target refers to the <select> element itself. The .value property of the select element automatically returns the value attribute of the currently selected <option>."},
        {textId: "2", text: "selected is a property of an <option> element (a boolean indicating if it is chosen), not the <select> element. event.target.selected on a select box will return undefined."},
        {textId: "3", text: "There is no select property on the event target that returns the value."},
        {textId: "4", text: " There is no option property on the event target that returns the value."}
    ]},
]

export const topic3FeedbackCode: codingFeedback[] = []

export const topic4FeedbackMCQ: mcFeedback[] = [
    {id: "2.4.1", options: [
        {textId: "1", text: "Checkboxes are used to select one or more predefined options from a set. They are binary (checked/unchecked) and do not allow for custom text input."},
        {textId: "2", text: "Dropdowns present a list of choices from which the user can select a single item. It is not used for entering new, custom text, unless it is a specialized combobox."},
        {textId: "3", text: "Textboxes the only component listed that allows for free-form user entry."},
    ]},
    {id: "2.4.2", options: [
        {textId: "1", text: "A checkbox is the standard UI element for binary choices (on/off, true/false, checked/unchecked). It is inherently designed to toggle a single state."},
        {textId: "2", text: "While a dropdown can be used to select between true and false, it is primarily designed to select one item from a list of three or more options."},
        {textId: "3", text: "A textbox is used for alphanumeric input and requires the user to type a value, which is inefficient for a binary choice."},
    ]},
    {id: "2.4.3", options: [
        {textId: "1", text: "Checkboxes are used for binary choices (yes/no) or to select multiple items from a list, not just one."},
        {textId: "2", text: "A dropdown menu (or select list) is designed to present a list of options from which the user can choose only one value by clicking or hovering. It is ideal for selecting a single item, especially when space is limited."},
        {textId: "3", text: "A text box (or input box) is used for entering free-form text, not for selecting from a pre-defined list."},
    ]},
    {id: "2.4.4", options: [
        {textId: "1", text: "Checkboxes are generally implemented using <Form.Check> or <Form.Check type='checkbox'> in React-Bootstrap, not <Form.Control>."},
        {textId: "2", text: "While <Form.Control as='select'> can be used for a native browser dropdown, standard React-Bootstrap dropdowns generally use <Form.Select> components"},
        {textId: "3", text: "In React-Bootstrap, <Form.Control> is used specifically for textual form controls. It provides consistent styling and functionality for text input."},
    ]},
    {id: "2.4.5", options: [
        {textId: "1", text: "The Form.Check component in React-Bootstrap is specifically designed to create and style checkbox and radio inputs."},
        {textId: "2", text: "A dropdown (or select menu) in React-Bootstrap is created using the Form.Select component, not Form.Check."},
        {textId: "3", text: " A textbox is rendered using Form.Control with type='text' or as='textarea', not Form.Check"},
    ]},
    {id: "2.4.6", options: [
        {textId: "1", text: "Checkboxes use <Form.Check type='checkbox'/>."},
        {textId: "2", text: "Form.Select in React-Bootstrap is used to create customized dropdown menus."},
        {textId: "3", text: "Textboxes use <Form.Control type='text'/> or <Form.Control as='textarea'/>."},
    ]},
    {id: "2.4.7", options: [
        {textId: "1", text: "a textbox control stores user input within a text or value property, which is handled as a string of characters (sequence of characters)."},
        {textId: "2", text: "A boolean only represents binary truth values (true/false)."},
        {textId: "3", text: " While specialized input components (like number pickers) may return a numeric type, a standard text box returns raw characters, not a number data type."},
    ]},
    {id: "2.4.8", options: [
        {textId: "1", text: "While a checkbox value can be represented as a string, it is not the standard or most efficient type. Using strings increases memory usage and requires extra conversion logic."},
        {textId: "2", text: "Checkboxes are designed to represent binary choices—on or off, yes or no. A Boolean data type perfectly maps to this."},
        {textId: "3", text: "Although sometimes a checkbox is represented as 1 or 0 (often in database storage), but there is a more semantically accurate and standard for UI state management"},
    ]},
    {id: "2.4.9", options: [
        {textId: "1", text: "The state of a dropdown generally holds the value attribute of the currently selected option, which is a string. Even if the value is numerical, it is often stored as a string or a string-like token in many frameworks."},
        {textId: "2", text: "A boolean only represents true/false (checked/unchecked) states, which is not suitable for a dropdown with multiple options."},
        {textId: "3", text: "While the selected index can be a number, it is not the most common approach."},
    ]},
    {id: "2.4.10", options: [
        {textId: "1", text: "Checkboxes are used for selection from a limited set of options."},
        {textId: "2", text: " Dropdowns are used to select one value from a predefined list and are not suitable for unique inputs like personal names."},
        {textId: "3", text: "A text box is the appropriate HTML component for user-entered text, such as a name, because it allows for an open-ended, unique response."},
    ]},
    {id: "2.4.11", options: [
        {textId: "1", text: "A standalone checkbox is the standard UI element for accepting Terms and Conditions."},
        {textId: "2", text: "A dropdown is used for selecting one item from a list (e.g., state or country selection). "},
        {textId: "3", text: "A textbox is for freeform text input, such as asking for a name or email."},
    ]},
    {id: "2.4.12", options: [
        {textId: "1", text: "Checkboxes are best used for allowing multiple selections or binary choices (yes/no), not for picking one item from a list."},
        {textId: "2", text: "A dropdown menu is the most efficient component for allowing a user to select one option from a predefined list, especially if there are many colors to choose from."},
        {textId: "3", text: "A textbox is used for free-form text input, not for selecting a pre-defined option from a list."},
    ]},
    {id: "2.4.13", options: [
        {textId: "1", text: "Checkboxes are designed for binary (yes/no) choices, not for entering free-form text like an email address."},
        {textId: "2", text: "A dropdown menu is used to select from a predefined list of options, not to type a unique email address."},
        {textId: "3", text: "A textbox (specifically <input type='email'> in HTML) is the standard UI component for user-entered, free-form text such as an email address. It allows users to type any valid email format and supports browser-level validation to check for the '@' symbol and domain."},
    ]},
    {id: "2.4.14", options: [
        {textId: "1", text: "A checkbox is the ideal component for a binary (yes/no) choice, such as 'Subscribe to newsletter.' It allows the user to quickly toggle their preference with a single click."},
        {textId: "2", text: "While a dropdown can display yes/no options, it requires extra clicks to open and is best reserved for selecting one option from a long list (e.g., country selection) rather than a simple, fast decision."},
        {textId: "3", text: "A textbox is used for users to type custom text input, which is inefficient and confusing for a simple yes/no preference decision"},
    ]},
    {id: "2.4.15", options: [
        {textId: "1", text: "Checkboxes are designed for multiple-choice selections (allowing users to pick all that apply). For a 'preferred' method, you only want one choice."},
        {textId: "2", text: "A dropdown is the best choice for selecting one option from a short list (email, phone, mail) while keeping the form compact and tidy. It restricts the user to a single selection, ensuring clean data collection."},
        {textId: "3", text: "A textbox allows free-form text, which can lead to typos and inconsistent data. A dropdown forces a standardized, predictable input."},
    ]},

]

export const topic4FeedbackCode: codingFeedback[] = []