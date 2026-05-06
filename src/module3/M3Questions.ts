/**TOPIC 1: Textbox Variations*/
import type { MCQ, CodingQ } from "../Types"
export const topic1MCQ: MCQ[] = [
    //number input box, horizontal layout, multiline textarea
    {id: "3.1.1", question: "Which of the following are valid variations of textboxes in React-Bootstrap?"},
    
    //number input box
        //def
    {id: "3.1.2", question: "This variation is an HTML element that enforces the user to enter a number."},
        //attribute - type = 'number' in Form.Control
    {id: "3.1.3", question: "Which attribute is used in the Form.Control tag to create a number input box?"},

    //horizontal layout
        //as={Row} attr to Form.Group, column and sm={2} attrs to Form.Label, surround Form.Control with Col tag
    {id: "3.1.4", question: "Which of the following are necessary to create a textbox with a horizontal layout?"},

    //multiline textarea
        //as='textarea' and rows={# of rows} attrs to Form.Control
    {id: "3.1.5", question: "Which attributes are used in the Form.Control tag to create a multiline textarea?"},

    //choose correct code
    /** number input box
     <Form.Group controlId="formMovieReleased">
        <Form.Label>Released:</Form.Label>
        <Form.Control
            type="number"
            value={released}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setReleased(event.target.value)}
        />
    </Form.Group>*/
    {id: "3.1.6", question: "Select the correct code to create a number input box."},

    /** horizontal layout
     <Form.Group controlId="formMovieName" as={Row} >
        <Form.Label column sm={2}>Name:</Form.Label>
        <Col>
        <Form.Control
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} 
        />
        </Col>
    </Form.Group>*/
    {id: "3.1.7", question: "Select the correct code to create a textbox with a horizontal layout."},

    /** multiline textarea
    <Form.Group controlId="formMovieName">
      <Form.Label>Name:</Form.Label>
      <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={updateDescription} 
        />
    </Form.Group>*/
    {id: "3.1.8", question: "Select the correct code to create a multiline textarea."},
]

export const topic1Code: CodingQ[] = [
    //fill in blanks
        //number input box
        //missing - in useState: <number>, "default number value", in form: Form.(Control), type="number"
    {id: "3.1.9", question: "Fill in the blanks to create a number input box."},
        //horizontal layout
        //missing - in form: Form.(Group), as={Row}, in label: column, sm={2}, in control: surround with <Col> tags
    {id: "3.1.10", question: "Fill in the blanks to create a textbox with a horizontal layout."},
        //multiline textarea
        //missing - in form: in control: as="textarea", rows={# of rows}
    {id: "3.1.11", question: "Fill in the blanks to create a multiline textarea that spans 5 rows."},

    //scenarios, given this scenario select the correct code/form to use
    {id: "3.1.12", question: "You want to create a form for users to enter their profile information. The form should include a field for users to enter their age, which should only accept numerical input. Which of the following code snippets correctly implements this requirement?"},
    {id: "3.1.13", question: "You are designing a feedback form for a website. You want to include a section where users can provide additional comments or suggestions. This section should allow users to enter multiple lines of text. Which of the following code snippets correctly implements this requirement?"},
    {id: "3.1.14", question: "You are creating a registration form for an event. You want to include a field for users to enter their full name, and you want the label to be displayed on the same line as the input field. Which of the following code snippets correctly implements this requirement?"},

    //parsons/ordering code
    {id: "3.1.15", question: "Order the following lines of code to correctly create a number input box."},
    {id: "3.1.16", question: "Order the following lines of code to correctly create a textbox with a horizontal layout."},
    {id: "3.1.17", question: "Order the following lines of code to correctly create a multiline textarea."},
]

/**TOPIC 2: Checkbox Variations*/
export const topic2MCQ: MCQ[]= [
    //switch, radio buttons, multi checkboxes
    {id: "3.2.1", question: "Which of the following are valid variations of checkboxes in React-Bootstrap?"},

    //switch
        //def
    {id: "3.2.2", question: "This variation is a visual modication of a checkbox that uses a toggle."},
        //type="switch" in Form.Check
    {id: "3.2.3", question: "Which attribute is used in the Form.Check tag to create a switch?"},

    //radio buttons
        //def
    {id: "3.2.4", question: "This variation represent a set of choices where only one option can be selected at a time."},
        //form.check
    {id: "3.2.5", question: "Radio buttons are created using multiple of the ? tags."},
        //type="radio" in Form.Check, same name attr for all options in the set
    {id: "3.2.6", question: "Radio buttons use type = '(1)' in the Form.Check tag, and all options in the set should have the same (2) attribute to be a single, cohesive set."},
        //checked attr
    {id: "3.2.7", question: "This attribute uses a calculated expression based on the state in order to turn the string into a boolean value and determine which radio button is selected."},
        //inline attr
    {id: "3.2.8", question: "This attribute can be added to Form.Check elements to display radio buttons in a horizontal row instead of a vertical stack."},

    //multi checkboxes
        //def
    {id: "3.2.9", question: "This variation is used when you want to allow users to select multiple options from a set of choices."},
]

export const topic2Code: CodingQ[] = [
    {id: "3.2.10", question: "Identify if there is anything incorrect or missing in the following code to create a switch component."},
    {id: "3.2.11", question: "Identify if there is anything incorrect or missing in the following code to create a radio button component."},
    {id: "3.2.12", question: "Identify if there is anything incorrect or missing in the following code to create a multi checkbox component."},
    
    //fill in blanks
        //switch
    {id: "3.2.13", question: "Fill in the blanks to create a switch checkbox."},
        //radio buttons
    {id: "3.2.14", question: "Fill in the blanks to create a set of radio buttons."},
        //multi checkboxes
    {id: "3.2.15", question: "Fill in the blanks to create a set of multi checkboxes."},

    //scenarios
    {id: "3.2.16", question: "You are creating a settings page for a web application. You want to include a toggle option option for users to enable or disable email notifications. Which of the following code snippets correctly implements this requirement?"},
    {id: "3.2.17", question: "You are creating a quiz form that asks users to select their preferred development environment. Users should only be able to select one option. Which of the following code snippets correctly implements this requirement?"},
    {id: "3.2.18", question: "You are designing a survey form that asks users about their favorite programming languages. You want to allow users to select multiple languages from a list of options. Which of the following code snippets correctly implements this requirement?"},

    //parsons/ordering
    {id: "3.2.19", question: "Order the following lines of code to correctly create a switch component."},
    {id: "3.2.20", question: "Order the following lines of code to correctly create a set of radio buttons."},
    {id: "3.2.21", question: "Order the following lines of code to correctly create a set of multi checkboxes."},
]

/**TOPIC 3: Dropdown Variations*/
export const topic3MCQ: MCQ[] = [
    //a list of options
    {id: "3.3.1", question: "A very frequent situation is to have a dropdown populated by ..."},
    //key
    {id: "3.3.2", question: "This unique attribute is required for each option in a dropdown to ensure that React can efficiently update and render the list when changes occur."},
    //.map()
    {id: "3.3.3", question: "What higher order array method is commonly used to generate all of the option tags?"},
    // key and value attr
    {id: "3.3.4", question: "When generating dropdown options from an array of data, these two attributes are commonly used to specify the unique identifier and display value for each option, respectively."},
    //value and onChange attr
    {id: "3.3.5", question: "These two attributes are used in the Form.Select tag to manage the selected option in a dropdown."},
]  

export const topic3Code: CodingQ[] = [
    //code
    {id: "3.3.6", question: "Select the correct code to create a dropdown populated by an array called COLORS of color options using .map()."},

    //fill in blanks
        //One that's : Form.(Select), (value)={...}, (onChange)={...}(.map(...)),  <(option)>, (key)={...}, (value)={...}
        //One that's : fill in value and onChange in form.select, fill in what should be inside .map func, fill in what should be key and value attrs in option tag
    {id: "3.3.7", question: "Fill in the blanks to create a dropdown populated by an array of options."},
    {id: "3.3.8", question: "Fill in the blanks to create a dropdown populated by an array of options."},

    //parsons/ordering
        //include possible lines of code that make a dropdown populated by an array of options and a regular dropdown
    {id: "3.3.9", question: "Order the following lines of code to correctly create a dropdown populated by an array of options."},
]