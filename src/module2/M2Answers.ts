export const topic1MCQAnswers = [
    {id: "2.1.1", options: [
        {textId: "1", text: "value =  {text}"},
        {textId: "2", text: "onChange={(e) => setState(e.target.value)}"},
        {textId: "3", text: "type = 'text'"},
        {textId: "4", text: "placeholder = 'Enter text'"},
    ],
    correctId: "3"},
    {id: "2.1.2", options: [
        {textId: "1", text: "<Form.Group>"},
        {textId: "2", text: "<Form.Label>"},
        {textId: "3", text: "<Form.Control>"},
        {textId: "4", text: "<Form.Text>"},
    ],
    correctId: "3"},
    {id: "2.1.3", options: [
        {textId: "1", text: "value and onClick"},
        {textId: "2", text: "onChange and placeholder"},
        {textId: "3", text: "type and placeholder"},
        {textId: "4", text: "value and onChange"},
    ],
    correctId: "4"},
    {id: "2.1.4", options: [
        {textId: "1", text: "value"},
        {textId: "2", text: "readOnly"},
        {textId: "3", text: "disabled"},
        {textId: "4", text: "type"},
    ],
    correctId: "1"},
    {id: "2.1.5", options: [
        {textId: "1", text: "onClick"},
        {textId: "2", text: "onFocus"},
        {textId: "3", text: "onChange"},
        {textId: "4", text: "onLoad"},
    ],
    correctId: "3"},
    {id: "2.1.6", options: [
        {textId: "1", text: "onChange"},
        {textId: "2", text: "placeholder"},
        {textId: "3", text: "readOnly"},
        {textId: "4", text: "disabled"},
    ],
    correctId: "1"},
    {id: "2.1.7", options: [
        {textId: "1", text: "useEffect"},
        {textId: "2", text: "useState"},
        {textId: "3", text: "useRef"},
        {textId: "4", text: "useContext"},
    ],
    correctId: "2"},
    {id: "2.1.8", options: [
        {textId: "1", text: "value"},
        {textId: "2", text: "defaultValue"},
        {textId: "3", text: "event.target.value"},
        {textId: "4", text: "event.target.defaultValue"},
    ],
    correctId: "3"},
    {id: "2.1.9", options: [
        {textId: "1", text: "use the input name attribute to identify which field to update in the state"},
        {textId: "2", text: "use a separate onChange handler for each form control that updates the corresponding state variable"},
        {textId: "3", text: "use the className attribute to bind each form control to its corresponding state variable"},
        {textId: "4", text: "use the controlId attribute to bind each form control to its corresponding state variable"},
    ],
    correctId: "1"},
]

export const topic1CodeAnswers = [
    {id: "2.1.10", correctAnswers: ["Model", "Controller", "View"]},
    {id: "2.1.11", correctAnswers: ["Control", "text", "name", "updateName"]},
    {id: "2.1.12", options: [
        {textId: "1", text: "Since the code has the corrext syntax, the textbox value will update and display My Neighbor Totoro."},
        {textId: "2", text: "Since the code has the correct syntax, the textbox value will update and display Howl's Moving Castle."},
        {textId: "3", text: "Since the code has the incorrect syntax for the value attribute, the textbox value will not update and will stay as the initial value of My Neighbor Totoro."},
        {textId: "4", text: "Since the code has the incorrect syntax for the onChange attribute, the textbox value will not update and will stay as the initial value of My Neighbor Totoro."},
    ],
    correctId: "2"},
    {id: "2.1.13", options: [
        {textId: "1", text: "Since the coode incorrectly updates the name state variable, the textbox value will not update and will stay as the initial value of Princess Monoke."},
        {textId: "2", text: "Since the code correctly updates the name state variable, the textbox value will update and display whatever Isle of Dogs."},
        {textId: "3", text: "Since the code incorrectly binds the name state variable to the value attribute, the textbox value will not update and will stay as the initial value of Princess Monoke."},
        {textId: "4", text: "Since the code correctly binds the name state variable to the value attribute, the textbox value will update and display Isle of Dogs."},
    ],
    correctId: "1"},
   {id: "2.1.14", correctOrder: "6,7,1,5,4,10,8,3,9", options: [
    `setEmotion(event.target.value);`,
    `<Form.Control type='text' placeholder='enter emotion' value={emotion} onChange={updateEmotion}/>`,
    `</Form.Group>`,
    `return <div>`,
    `}`,
    `const [emotion, setEmotion] = useState<string>('Happy');`,
    `function updateEmotion(event: React.ChangeEvent<HTMLInputElement>) {`,
    `<Form.Label>How are you?</Form.Label>`,
    `</div>`,
    `<Form.Group controlId = 'formEmotion'>`
   ]}
]

export const topic2MCQAnswers = [
    {id: "2.2.1", options: [
        {textId: "1", text: "dropdown"},
        {textId: "2", text: "checkbox"},
        {textId: "3", text: "textbox"},
        {textId: "4", text: "list"},
    ], correctId: "2"},
    {id: "2.2.2", options: [
        {textId: "1", text: "<Form.Control>"},
        {textId: "2", text: "<Form.Check>"},
        {textId: "3", text: "<Form.Select>"},
        {textId: "4", text: "<Form.Group>"},
    ], correctId: "2"},
    {id: "2.2.3", options: [
        {textId: "1", text: "value={checkbox}"},
        {textId: "2", text: "checked={true}"},
        {textId: "3", text: `type="checkbox"`},
        {textId: "4", text: `type = "check"`},
    ], correctId: "3"},
    {id: "2.2.4", options: [
        {textId: "1", text: "checked"},
        {textId: "2", text: "value"},
        {textId: "3", text: "type"},
        {textId: "4", text: "placeholder"},
    ], correctId: "1"},
    {id: "2.2.5", options: [
        {textId: "1", text: "id and classname"},
        {textId: "2", text: "name and value"},
        {textId: "3", text: "label and id"},
        {textId: "4", text: "label and name"},
    ], correctId: "3"},
    {id: "2.2.6", options: [
        {textId: "1", text: "id"},
        {textId: "2", text: "name"},
        {textId: "3", text: "value"},
        {textId: "4", text: "label"},
    ], correctId: "4"},
    {id: "2.2.7", options: [
        {textId: "1", text: "id"},
        {textId: "2", text: "value"},
        {textId: "3", text: "type"},
        {textId: "4", text: "placeholder"},
    ], correctId: "1"},
    {id: "2.2.8", options: [
        {textId: "1", text: "useState"},
        {textId: "2", text: "useEffect"},
        {textId: "3", text: "useRef"},
        {textId: "4", text: "useContext"},
    ], correctId: "1"},
    {id: "2.2.9", options: [
        {textId: "1", text: "event.target.checked"},
        {textId: "2", text: "event.target.value"},
        {textId: "3", text: "event.target.type"},
        {textId: "4", text: "event.target.name"},
    ], correctId: "1"},
]

export const topic2CodeAnswers = [
    {id: "2.2.10", correctAnswers: ["Model", "Controller", "View"]},
    {id: "2.2.11", correctAnswers: ["checked", "Check", "checkbox", "checked"]},
    {id: "2.2.12", options: [
        {textId: "1", text: "Since the code has the correct syntax, the checkbox value will update and display as checked since the initial value was true."},
        {textId: "2", text: "Since the code has the correct syntax, the checkbox value will update and display as checked sine the initial value was false."},
        {textId: "3", text: "Since the code has the incorrect syntax for the checked attribute, the checkbox value will not update and will stay as the initial value of checked."},
        {textId: "4", text: "Since the code has the incorrect syntax for the onChange attribute, the checkbox value will not update and will stay as the initial value of checked."},
    ], correctId: "2"},
    {id: "2.2.13", options: [
        {textId: "1", text: "Since the code incorrectly updates the checked state variable, the checkbox value will not update and will stay as the initial value of unchecked."},
        {textId: "2", text: "Since the code correctly updates the checked state variable, the checkbox value will update and display as checked."},
        {textId: "3", text: "Since the code incorrectly binds the checked state variable to the checked attribute, the checkbox value will not update and will stay as the initial value of unchecked."},
        {textId: "4", text: "Since the code correctly binds the checked state variable to the checked attribute, the checkbox value will update and display as checked."},
    ], correctId: "1"},
    {id: "2.2.14", correctOrder: "4,2,7,6,3,1,5", options: [
        `<Form.Check
          type="checkbox"
          id="has-watched-check"
          label="Have you watched Ponyo?"
          checked={watched}
          onChange={updateWatched}
      />`,
      `function updateWatched(event: React.ChangeEvent<HTMLInputElement>) {`,
      `return <div>`,
      `const [watched, setWatched] = useState<boolean>(true);`,
      `</div>`,
      `}`,
      `setWatched(event.target.checked);`
    ]}
]

export const topic3MCQAnswers = [
    {id: "2.3.1", options: [
        {textId: "1", text: "checkbox"},
        {textId: "2", text: "dropdown"},
        {textId: "3", text: "textbox"},
        {textId: "4", text: "form"},
    ], correctId: "2"},
    {id: "2.3.2", options: [
        {textId: "1", text: "<Form.Control>"},
        {textId: "2", text: "<Form.Check>"},
        {textId: "3", text: "<Form.Select>"},
        {textId: "4", text: "<Form.Group>"},
    ], correctId: "3"},
    {id: "2.3.3", options: [
        {textId: "1", text: "value and onChange"},
        {textId: "2", text: "value and placeholder"},
        {textId: "3", text: "type and onChange"},
        {textId: "4", text: "select and onChange"},
    ], correctId: "1"},
    {id: "2.3.4", options: [
        {textId: "1", text: "<value>"},
        {textId: "2", text: "<option>"},
        {textId: "3", text: "<select>"},
        {textId: "4", text: "<dropdown>"},
    ], correctId: "2"},
    {id: "2.3.5", options: [
        {textId: "1", text: "useContext"},
        {textId: "2", text: "useRef"},
        {textId: "3", text: "useState"},
        {textId: "4", text: "useEffect"},
    ], correctId: "3"},
    {id: "2.3.6", options: [
        {textId: "1", text: "event.target.value"},
        {textId: "2", text: "event.target.selected"},
        {textId: "3", text: "event.target.select"},
        {textId: "4", text: "event.target.option"},
    ], correctId: "1"},
]

export const topic3CodeAnswers = [
    {id: "2.3.7", correctAnswers: ["Model", "Controller", "View"]},
    {id: "2.3.8", correctAnswers: ["Select", "option", "option", "option", "option", "Select"]},
    {id: "2.3.9", options: [
        {textId: "1", text: "Since the code has the correct syntax, the dropdown value will update and display 'Sad'."},
        {textId: "2", text: "Since the code has the correct syntax, the dropdown value will update and display 'Happy'."},
        {textId: "3", text: "Since the code has the incorrect syntax for the value attribute, the dropdown value will not update and will stay as the initial value of 'Happy'."},
        {textId: "4", text: "Since the code has the incorrect syntax for the onChange attribute, the dropdown value will not update and will stay as the initial value of 'Happy'."},
    ], correctId: "1"},
    {id: "2.3.10", options: [
        {textId: "1", text: "Since the code has the correct syntax, the dropdown value will update and display 'Sad'."},
        {textId: "2", text: "Since the code has the correct syntax, the dropdown value will update and display 'Happy'."},
        {textId: "3", text: "Since the code has the incorrect syntax for the value attribute, the dropdown value will not update and will stay as the initial value of 'Happy'."},
        {textId: "4", text: "Since the code has the incorrect syntax for the onChange attribute, the dropdown value will not update and will stay as the initial value of 'Happy'."},
    ], correctId: "4"},
    {id: "2.3.11", correctOrder: ["3,7,2,4,9,8,1,6,5", "3,7,2,4,9,1,8,6,5"], options: [
        `<option value="sad">Sad</option>`,
        `setEmotion(event.target.value);}`,
        `const [emotion, setEmotion] = useState<string>("happy");`,
        `return <div>`,
        `</div>`,
        `</Form.Select>`,
        `function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {`,
        `<option value="happy">Happy</option>`,
        `<Form.Select value={emotion} onChange={updateEmotion}>`
    ]}
]

export const topic4MCQAnswers = [
    {id: "2.4.1", options: [
        {textId: "1", text: "checkbox"},
        {textId: "2", text: "dropdown"},
        {textId: "3", text: "textbox"},
    ], correctId: "3"},
    {id: "2.4.2", options: [
        {textId: "1", text: "checkbox"},
        {textId: "2", text: "dropdown"},
        {textId: "3", text: "textbox"},
    ], correctId: "1"},
    {id: "2.4.3", options: [
        {textId: "1", text: "checkbox"},
        {textId: "2", text: "dropdown"},
        {textId: "3", text: "textbox"},
    ], correctId: "2"},

    {id: "2.4.4", options: [
        {textId: "1", text: "checkbox"},
        {textId: "2", text: "dropdown"},
        {textId: "3", text: "textbox"},
    ], correctId: "3"},
    {id: "2.4.5", options: [
        {textId: "1", text: "checkbox"},
        {textId: "2", text: "dropdown"},
        {textId: "3", text: "textbox"},
    ], correctId: "1"},
    {id: "2.4.6", options: [
        {textId: "1", text: "checkbox"},
        {textId: "2", text: "dropdown"},
        {textId: "3", text: "textbox"},
    ], correctId: "2"},
    {id: "2.4.7", options: [
        {textId: "1", text: "string"},
        {textId: "2", text: "boolean"},
        {textId: "3", text: "number"},
    ], correctId: "1"},
    {id: "2.4.8", options: [
        {textId: "1", text: "string"},
        {textId: "2", text: "boolean"},
        {textId: "3", text: "number"},
    ], correctId: "2"},
    {id: "2.4.9", options: [
        {textId: "1", text: "string"},
        {textId: "2", text: "boolean"},
        {textId: "3", text: "number"},
    ], correctId: "1"},
    {id: "2.4.10", options: [
        {textId: "1", text: "checkbox"},
        {textId: "2", text: "dropdown"},
        {textId: "3", text: "textbox"},
    ], correctId: "3"},
    {id: "2.4.11", options: [
        {textId: "1", text: "checkbox"},
        {textId: "2", text: "dropdown"},
        {textId: "3", text: "textbox"},
    ], correctId: "1"},
    {id: "2.4.12", options: [
        {textId: "1", text: "checkbox"},
        {textId: "2", text: "dropdown"},
        {textId: "3", text: "textbox"},
    ], correctId: "2"},
    {id: "2.4.13", options: [
        {textId: "1", text: "checkbox"},
        {textId: "2", text: "dropdown"},
        {textId: "3", text: "textbox"},
    ], correctId: "3"},
    {id: "2.4.14", options: [
        {textId: "1", text: "checkbox"},
        {textId: "2", text: "dropdown"},
        {textId: "3", text: "textbox"},
    ], correctId: "1"},
    {id: "2.4.15", options: [
        {textId: "1", text: "checkbox"},
        {textId: "2", text: "dropdown"},
        {textId: "3", text: "textbox"},
    ], correctId: "2"},
]

export const topic4CodeAnswers = []