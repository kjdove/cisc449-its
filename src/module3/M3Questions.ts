/**TOPIC 1: Textbox Variations () */
export const topic1MCQ = [
    //number input box, horizontal layout, multiline textarea
    {id: "3.1.1", question: "Which of the following are valid variations of textboxes in React-Bootstrap?"},
    
    //number input box
        //def
    {id: "3.1.2", question: "A [] is an HTML element that enforces the user to enter a number."},
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

export const topic1Code = [
    //fill in blanks
        //number input box
        //missing - in useState: <string>, "default number value", in form: Form.(Control), type="number"
    {id: "3.1.9", question: "Fill in the blanks to create a number input box."},
        //horizontal layout
        //missing - in form: Form.(Group), as={Row}, in label: column, sm={2}, in control: surround with <Col> tags
    {id: "3.1.10", question: "Fill in the blanks to create a textbox with a horizontal layout."},
        //multiline textarea
        //missing - in form: in control: as="textarea", rows={# of rows}
    {id: "3.1.11", question: "Fill in the blanks to create a multiline textarea."},

    //scenarios, given this scenario select the correct code/form to use
    {id: "3.1.12", question: "You want to create a form for users to enter their profile information. The form should include a field for users to enter their age, which should only accept numerical input. Which of the following code snippets correctly implements this requirement?"},
    {id: "3.1.13", question: "You are designing a feedback form for a website. You want to include a section where users can provide additional comments or suggestions. This section should allow users to enter multiple lines of text. Which of the following code snippets correctly implements this requirement?"},
    {id: "3.1.14", question: "You are creating a registration form for an event. You want to include a field for users to enter their full name, and you want the label to be displayed on the same line as the input field. Which of the following code snippets correctly implements this requirement?"},

    //parsons/ordering code
    {id: "3.1.15", question: "Order the following lines of code to correctly create a number input box."},
    {id: "3.1.16", question: "Order the following lines of code to correctly create a textbox with a horizontal layout."},
    {id: "3.1.17", question: "Order the following lines of code to correctly create a multiline textarea."},
]

/**TOPIC 2: Checkbox Variations () */
export const topic2MCQ = [

]

export const topic2Code = [

]

/**TOPIC 3: Dropdown Variations () */
export const topic3MCQ = [

]

export const topic3Code = [

]