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

export const topic2FeedbackMCQ: mcFeedback[] = [
    {id: "3.2.1", options: [
        {textId: "1", text: "While switches are a valid variation, they are not the only one. Switches are created using <Form.Check type='switch'/>."},
        {textId: "2", text: 'Radio buttons are a valid variation using <Form.Check type="radio" />.'},
        {textId: "3", text: "Creating a list of multiple checkboxes is a standard use case for <Form.Check>."},
        {textId: "4", text: "The <Form.Check> component is a versatile wrapper used for multiple input types, including checkboxes, radio buttons, and switches."},
    ]},
    {id: "3.2.2", options: [
        {textId: "1", text: "A switch (or toggle switch) is functionally a checkbox—it represents a binary on/off or true/false state. However, visually, it is modified to resemble a physical sliding switch rather than a small, square box."},
        {textId: "2", text: "These are used for selecting one option from a list of two or more mutually exclusive choices."},
        {textId: "3", text: "While these are functionally similar to a single checkbox, they are designed to allow users to select multiple options from a group. The question asks about a single visual variation of a checkbox."},
        {textId: "4", text: " A dropdown is used to select an option from a list, typically when space is limited, and does not represent a visual modification of a checkbox or a direct binary on/off toggle."},
    ]},
    {id: "3.2.3", options: [
        {textId: "1", text: "There is a different component for switches, so the type attribute is not used to create a switch variation."},
        {textId: "2", text: "While a switch is a styled checkbox, setting the type specifically to 'checkbox' will render a standard square checkbox, not a toggle switch."},
        {textId: "3", text: "This will render a radio button, used for selecting one option from a list, not a binary on/off switch."},
        {textId: "4", text: "In React Bootstrap, a toggle switch is created by passing type='switch' to the <Form.Check> component."},
    ]},
    {id: "3.2.4", options: [
        {textId: "1", text: "Radio buttons are designed specifically for mutually exclusive options, meaning selecting one automatically deselects any previously selected option in the group."},
        {textId: "2", text: "While switches are for binary choices (on/off), they are typically used to immediately activate or deactivate a setting, rather than selecting one option from a list."},
        {textId: "3", text: "Checkboxes are designed to allow users to select any number of options (zero, one, or several), making them unsuitable for single-choice scenarios."},
        {textId: "4", text: "Textboxes are designed for user-inputted text, not for selecting from a predefined list of choices."},
    ]},
    {id: "3.2.5", options: [
        {textId: "1", text: "This component is typically used for text inputs, textareas, or dropdowns (<select>), not radio buttons."},
        {textId: "2", text: '<Form.Check> is the unified component used to create both checkboxes and radio buttons. By setting the type="radio" prop, you create a radio button. '},
        {textId: "3", text: "This is can be used to create a toggle switch (a type of checkbox) to turn an option on or off, not for selecting one option from a group."},
        {textId: "4", text: " While intuitive, React-Bootstrap does not use a <Form.Radio> component."},
    ]},
    {id: "3.2.6", options: [
        {textId: "1", text: 'In React Bootstrap, to create a group of radio buttons where only one can be selected at a time, you must set the type prop to "radio". To ensure they function as a single, cohesive set (group), all Form.Check components must share the same name attribute'},
        {textId: "2", text: 'Using type="switch" creates a toggle, not a radio button. The id attribute is used to uniquely identify a single element (e.g., for labels), not to group them.'},
        {textId: "3", text: 'Using type="checkbox" allows multiple selections, which is not the intended behavior of a single-choice radio group.'},
        {textId: "4", text: " This is incorrect for both the input type and the grouping mechanism."},
    ]},
    {id: "3.2.7", options: [
        {textId: "1", text: "This attribute controls whether the user can interact with the element, not whether it is currently selected."},
        {textId: "2", text: "The checked attribute for radio buttons is a boolean attribute. It calculates whether the current state matches the radio button's value. If the expression evaluates to true, the radio button is selected; if false, it is unselected."},
        {textId: "3", text: "The value attribute defines the text value submitted with the form, but it does not determine the selection state of the radio button."},
        {textId: "4", text: " This is not a standard attribute used to determine the selection state of a radio button."},
    ]},
    {id: "3.2.8", options: [
        {textId: "1", text: "This attribute makes the radio button unclickable but does not change its layout position"},
        {textId: "2", text: "This attribute determines if a radio button is selected by default, not its alignment."},
        {textId: "3", text: " This attribute sets the data value submitted with the form, not the display format"},
        {textId: "4", text: "Adding the inline attribute to a <Form.Check> component removes the default vertical stacking and displays checkboxes or radio buttons on the same horizontal row"},
    ]},
    {id: "3.2.9", options: [
        {textId: "1", text: "These are generally used for selecting a single option from a long list to save space, though some dropdowns can be configured for multiple selection, they are not the standard choice for this description."},
        {textId: "2", text: "These are used to immediately turn a single setting on or off, similar to a physical toggle switch, rather than selecting items from a list."},
        {textId: "3", text: " These are used for mutually exclusive choices, meaning the user can select only one option from the set. Selecting a new radio button deselects the previous one."},
        {textId: "4", text: "Checkboxes are designed for selecting one, several, or zero options from a list because each box is independent. They allow for multi-select functionality."},
    ]},
]

export const topic2FeedbackCode = []

export const topic3FeedbackMCQ: mcFeedback[] = [
    {id: "3.3.1", options: [
        {textId: "1", text: "These are separate form elements designed for different user experiences and are not used to populate the internal list of a dropdown menu."},
        {textId: "2", text: "These are separate form elements designed for different user experiences and are not used to populate the internal list of a dropdown menu."},
        {textId: "3", text: "dropdowns are created using the <select> tag, which is populated by a series of <option> tags, creating a distinct list of choices. This is the standard mechanism, often dynamically loaded via databases or arrays."},
        {textId: "4", text: "Checkboxes and radio buttons are separate form elements designed for different user experiences and are not used to populate the internal list of a dropdown menu."},
    ]},
    {id: "3.3.2", options: [
        {textId: "1", text: "The value prop is used to set the current data value of the option, but it does not tell React how to uniquely identify that option in the DOM structure during re-rendering."},
        {textId: "2", text: "onChange is an event handler used to capture user selection changes, not a property for identifying list items."},
        {textId: "3", text: "The type attribute defines the type of input (e.g., text, checkbox), but is not specific to list rendering efficiency in React."},
        {textId: "4", text: "In React, when mapping over a list of data to render components (like <option> in a dropdown), each item requires a unique key prop. This prop gives elements a stable identity, allowing React to efficiently update, add, or remove only the items that change rather than re-rendering the entire list."},
    ]},
    {id: "3.3.3", options: [
        {textId: "1", text: ".map() is ideal for transforming an array of data into an array of JSX/HTML elements (like <option>) because it returns a new array."},
        {textId: "2", text: "While .forEach() iterates, it returns undefined, making it inefficient for creating new markup structures."},
        {textId: "3", text: ".filter() is used to reduce the size of an array based on a condition, not to transform every element into a new format."},
        {textId: "4", text: ".find() returns only the first single element that matches a condition, not a list of elements."},
    ]},
    {id: "3.3.4", options: [
        {textId: "1", text: "While key is crucial for React list rendering, 'name' is often an HTML attribute for form submission rather than the mapping value, making it less specific than key-value pairing."},
        {textId: "2", text: "data arrays are mapped to dropdown options, where each unique identifier (key or id) is mapped to an internal value"},
        {textId: "3", text: "onChange is an event handler for handling changes in selection, not an attribute defining the option's value."},
        {textId: "4", text: "'name' is often an HTML attribute for form submission rather than the mapping value, making it less specific than key-value pairing."},
    ]},
    {id: "3.3.5", options: [
        {textId: "1", text: "While onChange handles changes, key is used for React list rendering, not managing the selected option."},
        {textId: "2", text: "value sets the selected item, but without an event handler, the dropdown becomes read-only and cannot be updated."},
        {textId: "3", text: "value binds the selected item, and onChange updates that value in state when the user makes a selection."},
        {textId: "4", text: "name is for form submission identification, and value sets the initial value, but this does not handle updates."},
    ]},
]

export const topic3FeedbackCode = []