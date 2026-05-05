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

export const topic2MCQAnswers = []

export const topic2CodeAnswers = []

export const topic3MCQAnswers = []

export const topic3CodeAnswers = []

export const topic4MCQAnswers = []

export const topic4CodeAnswers = []