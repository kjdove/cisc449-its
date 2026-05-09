import { type mcFeedback } from "../Types"

export const topic1FeedbackMCQ: mcFeedback[] = [
    {id: "3.1.1", options: [
        {textId: "1", text: "Checkboxes are not 'textboxes' or textual inputs; they are used for selection.A dropdown is a <Form.Select>, not a textual input box."},
        {textId: "2", text: "Number Input Box: Created using <Form.Control type='number' />.Multiline Textarea: Created using <Form.Control as='textarea' />.Horizontal Layout: Achieved using <Form.Group as={Row}> and <Form.Label column> to align labels and inputs horizontally"},
        {textId: "3", text: "Checkboxes are not 'textboxes' or textual inputs; they are used for selection. A dropdown is a <Form.Select>, not a textual input box."},
        {textId: "4", text: "Checkboxes are not 'textboxes' or textual inputs; they are used for selection."},
    ]},
    {id: "3.1.2", options: [
        {textId: "1", text: "A standard text box allows users to enter any character, including letters and symbols, and does not enforce numeric input."},
        {textId: "2", text: "A textarea is designed for multi-line text input, such as comments or feedback, not a single numeric value."},
        {textId: "3", text: "A dropdown menu allows users to select a predefined option, but it does not technically enforce the entry of a raw number by the user in the same way an input field does."},
        {textId: "4", text: "The <input type='number'> element is specifically designed to accept numerical values."},
    ]},
    {id: "3.1.3", options: [
        {textId: "1", text: "This ensures only numerical data is accepted and typically provides spinner arrows to increment/decrement the value."},
        {textId: "2", text: "This creates a standard, single-line text input field, allowing any character to be typed."},
        {textId: "3", text: "This is used for multi-line text input, not a single numerical input field. "},
        {textId: "4", text: "This is not a standard type attribute for a Form.Control."},
    ]},
    {id: "3.1.4", options: [
        {textId: "1", text: "This is necessary to turn the form group into a flexbox row, allowing the label and input to align horizontally rather than stacking."},
        {textId: "2", text: "The column prop is required to enable grid column styling on the label. The sm={2} (or sm={...}) defines how many columns the label occupies."},
        {textId: "3", text: "Wrapping the input in a <Col> tag allows you to specify its width (e.g., <Col sm={10}>), ensuring the control fills the remaining horizontal space in the row."},
        {textId: "4", text: "All three components are combined to create the horizontal layout."},
    ]},
    {id: "3.1.5", options: [
        {textId: "1", text: "The <Form.Control> component defaults to an <input> type. To turn it into a <textarea> element, you must explicitly set the as attribute to 'textarea' and use rows to define its height."},
        {textId: "2", text: "The as attribute is not used in the <Form.Group> tag, and multiline is not the correct value for a textarea."},
        {textId: "3", text: "The type attribute is not used in the <Form.Group> tag."},
        {textId: "4", text: "Multiline is not the correct type to create a textarea."},
    ]},
    {id: "3.1.6", options: [
        {textId: "1", text: 'To create a number input box, the HTML type attribute must be set to "number". This ensures the input only accepts numerical values and typically provides up/down arrows in the browser.'},
        {textId: "2", text: 'type="text" creates a standard text input field, not a number-specific input.'},
        {textId: "3", text: 'type="textarea" is not a valid type for a <Form.Control>. To create a text area, you would use as="textarea".'},
        {textId: "4", text: 'type="dropdown" is not a valid input type.'},
    ]},
    {id: "3.1.7", options: [
        {textId: "1", text: "While it uses as={Row} and column, it misses a wrapper around <Form.Control>. Without the wrapper, the textbox will not properly align or take up the remaining space, causing it to likely stretch incorrectly or sit immediately next to the label without proper spacing."},
        {textId: "2", text: "This option properly implements the horizontal structure. It uses as={Row} on Form.Group, the column prop on Form.Label for alignment, and <Col> to explicitly wrap the Form.Control, ensuring correct grid spacing."},
        {textId: "3", text: "This creates a standard vertical layout where the label is on top of the control, rather than a horizontal one."},
        {textId: "4", text: "This option is missing the wrapper around the <Form.Control> which is necessary for correct horizontal alignment in the grid system."},
    ]},
    {id: "3.1.8", options: [
        {textId: "1", text: 'Form.Control renders an <input> by default. To render a <textarea>, you must use the as="textarea" prop. The rows prop correctly sets the initial height.'},
        {textId: "2", text: 'as expects HTML elements like "textarea", "select", or "input", not the string "multiline".'},
        {textId: "3", text: 'type is used for input types like "text", "email", or "password". A <textarea> is not a valid type attribute for an <input> field.'},
        {textId: "4", text: "This is not a valid type for Form.Control."},
    ]},
]

export const topic1FeedbackCode = []

export const topic2FeedbackMCQ: mcFeedback[] = []

export const topic2FeedbackCode = []

export const topic3FeedbackMCQ: mcFeedback[] = []

export const topic3FeedbackCode = []