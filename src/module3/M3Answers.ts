export const topic1MCQAnswers = [
    {id: "3.1.1", options: [
        {textId: "1", text: "number input box, checkbox, dropdown menu"},
        {textId: "2", text: "number input box, horizontal layout, multiline textarea"},
        {textId: "3", text: "checkbox, horizontal layout, dropdown menu"},
        {textId: "4", text: "number input box, checkbox, horizontal layout"},
    ],
    correctId: "2"},
    {id: "3.1.2", options: [
        {textId: "1", text: "textbox"},
        {textId: "2", text: "textarea"},
        {textId: "3", text: "dropdown menu"},
        {textId: "4", text: "number input box"},
    ],
    correctId: "4"},
    {id: "3.1.3", options: [
        {textId: "1", text: "type = 'number'"},
        {textId: "2", text: "type = 'text'"},
        {textId: "3", text: "type = 'textarea'"},
        {textId: "4", text: "type = 'dropdown'"},
    ],
    correctId: "1"},
    {id: "3.1.4", options: [
        {textId: "1", text: "as={Row} attribute to the <Form.Group> tag"},
        {textId: "2", text: "column and sm={2} attributes to <Form.Label> tag"},
        {textId: "3", text: "surround the <Form.Control> tag with a <Col> tag"},
        {textId: "4", text: "all of the above"},
    ],
    correctId: "4"},
    {id: "3.1.5", options: [
        {textId: "1", text: "as = 'textarea' and rows={# of rows} attributes to the <Form.Control> tag"},
        {textId: "2", text: "as = 'multiline' and rows={# of rows} attributes to the <Form.Group> tag"},
        {textId: "3", text: "type = 'textarea' and rows={# of rows} attributes to the <Form.Group> tag"},
        {textId: "4", text: "type = 'multiline' and rows={# of rows} attributes to the <Form.Control> tag"},
    ],
    correctId: "1"},
    {id: "3.1.6", options: [
        {textId: "1", text: `<Form.Group controlId="formMovieReleased">
        <Form.Label>Released:</Form.Label>
        <Form.Control
            type="number"
            value={released}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setReleased(event.target.value)}
        />
    </Form.Group>`},
        {textId: "2", text: `<Form.Group controlId="formMovieReleased">
        <Form.Label>Released:</Form.Label>
        <Form.Control
            type="text"
            value={released}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setReleased(event.target.value)}
        />
    </Form.Group>`},
        {textId: "3", text: `<Form.Group controlId="formMovieReleased">
        <Form.Label>Released:</Form.Label>
        <Form.Control
            type="textarea"
            value={released}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setReleased(event.target.value)}
        />
    </Form.Group>`},
        {textId: "4", text: `<Form.Group controlId="formMovieReleased">
        <Form.Label>Released:</Form.Label>
        <Form.Control
            type="dropdown"
            value={released}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setReleased(event.target.value)}
        />  
    </Form.Group>`},
    ], 
    correctId: "1"},
    {id: "3.1.7", options: [
        {textId: "1", text: `<Form.Group controlId="formMovieGenre" as={Row} >
            <Form.Label column sm={2}>Genre:</Form.Label>
            <Form.Control
            type="text"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} 
        />
        </Form.Group>`},
        {textId: "2", text: `<Form.Group controlId="formMovieName" as={Row} >
        <Form.Label column sm={2}>Name:</Form.Label>
        <Col>
        <Form.Control
            type="text"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} 
        />
        </Col>
    </Form.Group>`},
        {textId: "3", text: `<Form.Group controlId="formMovieName">
        <Form.Label column sm={2}>Name:</Form.Label>
        <Form.Control
            type="text"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} 
        />
    </Form.Group>`},
        {textId: "4", text: `<Form.Group controlId="formMovieName" as={Row} >
        <Form.Label column sm={2}>Name:</Form.Label>
        <Form.Control
            type="text"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} 
        />          
    </Form.Group>`},
    ],
    correctId: "2"},
    {id: "3.1.8", options: [
        {textId: "1", text: `<Form.Group controlId="formMovieName">
      <Form.Label>Name:</Form.Label>
      <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={updateDescription} 
        />
    </Form.Group>`},
        {textId: "2", text: `<Form.Group controlId="formMovieName">
      <Form.Label>Name:</Form.Label>
      <Form.Control
            as="multiline"
            rows={3}
            value={description}
            onChange={updateDescription} 
        />
    </Form.Group>`},
        {textId: "3", text: `<Form.Group controlId="formMovieName">
      <Form.Label>Name:</Form.Label>
      <Form.Control
            type="textarea"
            rows={3}
            value={description}
            onChange={updateDescription} 
        />
    </Form.Group>`},
        {textId: "4", text: `<Form.Group controlId="formMovieName">
      <Form.Label>Name:</Form.Label>
      <Form.Control
            type="multiline"
            rows={3}
            value={description}
            onChange={updateDescription} 
        />
    </Form.Group>`},
    ],
    correctId: "1"},
]

export const topic1CodeAnswers = [
    {id: "3.1.9", correctAnswers: ["number", "Control", "number"]},
    {id: "3.1.10", correctAnswers: ["Row", "column", "Col", "Col", "Row", "column", "Col", "Col"]},
    {id: "3.1.11", correctAnswers: ["textarea", "5"]},
    {id: "3.1.12", options: [
        {textId: "1", text: `<Form.Group controlId="formAge">
            <Form.Label>Age:</Form.Label>
            <Form.Control
                type="number"
                value={age}
                onChange={updateAge}
                />
                </Form.Group>`},
        {textId: "2", text: `<Form.Group controlId="formAge">
            <Form.Label>Age:</Form.Label>
            <Form.Control
                type="text"
                value={age}
                onChange={updateAge}
                />
                </Form.Group>`},
        {textId: "3", text: `<Form.Group controlId="formAge">
            <Form.Label>Age:</Form.Label>
            <Form.Control
                type="textarea"
                value={age}
                onChange={updateAge}
                />
                </Form.Group>`},
        {textId: "4", text: `<Form.Group controlId="formAge">
            <Form.Label>Age:</Form.Label>
            <Form.Control
                type="dropdown"
                value={age}
                onChange={updateAge}
                />
                </Form.Group>`},
    ],
    correctId: "1"},
    {id: "3.1.13", options: [
        {textId: "1", text: `<Form.Group controlId="formComments">
        <Form.Label>Comments:</Form.Label>
        <Col>
        <Form.Control as="textarea" rows={5} value={comments} onChange={updateComments}/>
        </Col>
    </Form.Group>`},
        {textId: "2", text: `<Form.Group controlId="formComments">
        <Form.Label>Comments:</Form.Label>
        <Form.Control as="textarea" rows={5} value={comments} onChange={updateComments}/>  
    </Form.Group>`},
        {textId: "3", text: `<Form.Group controlId="formComments">
        <Form.Label>Comments:</Form.Label>
        <Form.Control as="multiline" rows={5} value={comments} onChange={updateComments} />  
    </Form.Group>`},
        {textId: "4", text: `<Form.Group controlId="formComments">
        <Form.Label>Comments:</Form.Label>
        <Form.Control type="textarea" rows={5} value={comments} onChange={updateComments}/>
    </Form.Group>`},
     ],
        correctId: "1"
    },
    {id: "3.1.14", options: [
        {textId: "1", text: `<Form.Group controlId="formFullName" as={Row}>
            <Form.Label column sm={2}>Full Name:</Form.Label>
            <Col>
            <Form.Control type= "text" value={fullName} onChange={updateFullName} />
            </Col>
            </Form.Group>`},
        {textId: "2", text: `<Form.Group controlId="formFullName" as={Row}>
            <Form.Label column sm={2}>Full Name:</Form.Label>
            <Form.Control type= "text" value={fullName} onChange={updateFullName} />
            </Form.Group>`},
        {textId: "3", text: `<Form.Group controlId="formFullName">
            <Form.Label column sm={2}>Full Name:</Form.Label>
            <Form.Control type= "text" value={fullName} onChange={updateFullName} />
            </Form.Group>`},
        {textId: "4", text: `<Form.Group controlId="formFullName">
            <Form.Label column sm={2}>Full Name:</Form.Label>
            <Col>
            <Form.Control type= "text" value={fullName} onChange={updateFullName} />
            </Col>
            </Form.Group>`},
    ],
    correctId: "1"},
    {id: "3.1.15", correctOrder: ["6,3,1,8,5,4,7,9,2,10"], options: [
        `setReleased(event.target.value)`,
        `</div>`,
        `function updateReleased(event: React.ChangeEvent<HTMLInputElement>) {`, 
        `<Form.Label>Released:</Form.Label>`,
        `<Form.Group controlId="formMovieReleased">`,
        `const [released, setReleased] = useState<number>(2026);`, 
        `<Form.Control type="number" value={released} onChange={updateReleased} />`,
        `return <div>`,
        `</Form.Group>`,
        `}`,
        ]
    },
    {id: "3.1.16", correctOrder: ["5,10,8,1,6,4,9,2,11,12,7,3"], options: [
        `}`,
        `<Col>`,
        `</div>`,
        `<Form.Group controlId="formName" as={Row} >`,
        `const [name, setName] = useState<string>("Ponyo");`,
        `return <div>`,
        `</Form.Group>`,
        `setName(event.target.value)`,
        `<Form.Label column sm={2}>Name:</Form.Label>`,
        `function updateName(event: React.ChangeEvent<HTMLInputElement>) {`,
        `<Form.Control type="text" value={name} onChange={updateName} />`,
        `</Col>`,
    ]},
    {id: "3.1.17", correctOrder: ["3,7,10,2,9,1,6,8,4,5"], options: [
        `<Form.Group controlId="formDescription">`,
        `}`,
        `const [description, setDescription] = useState<string>("My Movie Description");`,
        `</Form.Group`,
        `</div>`,
        `<Form.Label>Movie Description:</Form.Label>`,
        `function updateDescription(event: React.ChangeEvent<HTMLInputElement>) {`,
        `<Form.Control as="textarea" rows={5} value={description} onChange={updateDescription} />`,
        `return <div>`,
        `setDescription(event.target.value)`,
    ]}
]

export const topic2MCQAnswers = [
    {id: "3.2.1", options: [
        {textId: "1", text: "switch"},
        {textId: "2", text: "radio buttons"},
        {textId: "3", text: "multi checkboxes"},
        {textId: "4", text: "all of the above"},
    ], correctId: "4"},
    {id: "3.2.2", options: [
        {textId: "1", text: "switch"},
        {textId: "2", text: "radio buttons"},
        {textId: "3", text: "multi checkboxes"},
        {textId: "4", text: "dropdown menu"},
    ], correctId: "1"},
    {id: "3.2.3", options: [
        {textId: "1", text: "type = 'switch' attribute to the <Form.Control> tag"},
        {textId: "2", text: "type = 'checkbox' attribute to the <Form.Control> tag"},
        {textId: "3", text: "type = 'radio' attribute to the <Form.Check> tag"},
        {textId: "4", text: "type = 'switch' attribute to the <Form.Check> tag"},
    ], correctId: "4"},
    {id: "3.2.4", options: [
        {textId: "1", text: "radio buttons"},
        {textId: "2", text: "switches"},
        {textId: "3", text: "multi checkboxes"},
        {textId: "4", text: "textboxes"},
    ], correctId: "1"},
    {id: "3.2.5", options: [
        {textId: "1", text: "<Form.Control>"},
        {textId: "2", text: "<Form.Check>"},
        {textId: "3", text: "<Form.Switch>"},
        {textId: "4", text: "<Form.Radio>"},
    ], correctId: "2"},
    {id: "3.2.6", options: [
        {textId: "1", text: "radio, name"},
        {textId: "2", text: "switch, id"},
        {textId: "3", text: "checkbox, name"},
        {textId: "4", text: "checkbox, id"},
    ], correctId: "1"},
    {id: "3.2.7", options: [
        {textId: "1", text: "disabled"},
        {textId: "2", text: "checked"},
        {textId: "3", text: "value"},
        {textId: "4", text: "inline"},
    ], correctId: "2"},
    {id: "3.2.8", options: [
        {textId: "1", text: "disabled"},
        {textId: "2", text: "checked"},
        {textId: "3", text: "value"},
        {textId: "4", text: "inline"},
    ], correctId: "4"},
    {id: "3.2.9", options: [
        {textId: "1", text: "dropdowns"},
        {textId: "2", text: "switches"},
        {textId: "3", text: "radio buttons"},
        {textId: "4", text: "multi checkboxes"},
    ], correctId: "4"},
]

export const topic2CodeAnswers = [
    {id: "3.2.10", options: [
        {textId: "1", text: "There is nothing wrong with this code, it is the correct syntax for a switch component"},
        {textId: "2", text: `The type attribute should be set to "checkbox" instead of "switch"`},
        {textId: "3", text: `The <Form.Check> tag should be changed to <Form.Switch>`},
        {textId: "4", text: `The value attribute should be the checked attribute instead`},
    ], correctId: "4"},
    {id: "3.2.11", options: [
        {textId: "1", text: "There is nothing wrong with this code, it is the correct syntax for a group of radio buttons"},
        {textId: "2", text: `The type attribute should be set to "checkbox" instead of "radio"`},
        {textId: "3", text: `The <Form.Check> tag should be changed to <Form.Radio>`},
        {textId: "4", text: `The name attribute should be removed`},
        ], correctId: "1"},
    {id: "3.2.12", options: [
        {textId: "1", text: "There is nothing wrong with this code, it is the correct syntax for a group of multi checkboxes"},
        {textId: "2", text: `The <Form.Check> tag should be changed to <Form.Multi>`},
        {textId: "3", text: `The type of the state value should be string[] instead of string`},
        {textId: "4", text: `The name attribute should be removed`},
    ], correctId: "3"},
    {id: "3.2.13", correctAnswers: ["boolean", "Check", "switch"]},
    {id: "3.2.14", correctAnswers: ["string", "Check", "radio", "color", "green", "Check", "radio", "color", "blue"]},
    {id: "3.2.15", correctAnswers: ["string[]", "Check", "checkbox", "checked", "Check", "checkbox", "checked"]},
    {id: "3.2.16", options: [
        {textId: "1", text: 
        `<Form.Check 
        type='switch' 
        label='Enable Notifications' 
        checked = {enableNotifications}
        onChange={updateEnableNotifications}
        />`},
        {textId: "2", text: 
        `<Form.Check 
        type='checkbox'
        label='Enable Notifications'
        checked = {enableNotifications}
        onChange={updateEnableNotifications}
        />`},
        {textId: "3", text: 
        `<Form.Switch
        label='Enable Notifications'
        checked = {enableNotifications}
        onChange={updateEnableNotifications}
        />`},
        {textId: "4", text: 
        `<Form.Check 
        type='switch'
        label='Enable Notifications'
        value = {enableNotifications}
        onChange={updateEnableNotifications}
        />`},
    ], correctId: "1"},
    {id: "3.2.17", options: [
        {textId: "1", text: 
        `<Form.Check 
        type='radio' 
        label='Option 1' 
        name='options' 
        checked={selectedOption === 'option1'} 
        onChange={() => setSelectedOption('option1')} 
        />
        <Form.Check 
        type='radio' 
        label='Option 2' 
        name='options' 
        checked={selectedOption === 'option2'} 
        onChange={() => setSelectedOption('option2')} 
        />`},
        {textId: "2", text: 
        `<Form.Check 
        type='checkbox' 
        label='Option 1' 
        name='options' 
        checked={selectedOption === 'option1'} 
        onChange={() => setSelectedOption('option1')} 
        />
        <Form.Check 
        type='checkbox' 
        label='Option 2' 
        name='options' 
        checked={selectedOption === 'option2'} 
        onChange={() => setSelectedOption('option2')} 
        />`},
        {textId: "3", text:
        `<Form.Radio
        type='radio'
        label='Option 1'
        name='options'
        checked={selectedOption === 'option1'}
        onChange={() => setSelectedOption('option1')}
        />
        <Form.Radio
        type='radio'
        label='Option 2'
        name='options'
        checked={selectedOption === 'option2'}
        onChange={() => setSelectedOption('option2')}
        />`},
        {textId: "4", text:
        `<Form.Check
        type='radio'
        label='Option 1'
        name='options'
        value='option1'
        onChange={() => setSelectedOption('option1')}
        />
        <Form.Check
        type='radio'
        label='Option 2'
        name='options'
        value='option2'
        onChange={() => setSelectedOption('option2')}
        />`
        }
    ], correctId: "1"},
    {id: "3.2.18", options: [
        {textId: "1", text: 
        `<Form.Check 
        type='checkbox' 
        label='Option A' 
        name='options' 
        checked={selectedOptions.includes('optionA')} 
        onChange={() => toggleOption('optionA')} 
        />
        <Form.Check 
        type='checkbox' 
        label='Option B' 
        name='options' 
        checked={selectedOptions.includes('optionB')} 
        onChange={() => toggleOption('optionB')} 
        />`},
        {textId: "2", text: 
        `<Form.Check 
        type='radio' 
        label='Option A' 
        name='options' 
        checked={selectedOptions.includes('optionA')} 
        onChange={() => toggleOption('optionA')} 
        />
        <Form.Check 
        type='radio' 
        label='Option B' 
        name='options' 
        checked={selectedOptions.includes('optionB')} 
        onChange={() => toggleOption('optionB')} 
        />`},
        {textId: "3", text:
        `<Form.Check
        type='checkbox'
        label='Option A'
        name='options'
        value='optionA'
        onChange={() => toggleOption('optionA')}
        />
        <Form.Check
        type='checkbox'
        label='Option B'
        name='options'
        value='optionB'
        onChange={() => toggleOption('optionB')}
        />`},
        {textId: "4", text:
        `<Form.Multi
        type='checkbox'
        label='Option A'
        name='options'
        value='optionA'
        onChange={() => toggleOption('optionA')}
        />
        <Form.Multi
        type='checkbox'
        label='Option B'
        name='options'
        value='optionB'
        onChange={() => toggleOption('optionB')}
        />`}
    ], correctId: "1"},
    {id: "3.2.19", correctOrder: ["5,1,7,3,6,4,2", ""], options: [`function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {`,
        `</div>`, `}`, `<Form.Check type="swtich" id="happy-check" label="Happy?" checked={isHappy} onChange={updateHappiness} />`, 
        `const [isHappy, setIsHappy] = useState<boolean>(true);`, `return <div>`, `setIsHappy(event.target.checked)`, ]
    },
    {id: "3.2.20", correctOrder: ["8,7,1,6,2,3,4,5", "8,7,1,6,2,4,3,5"], options: [
        `setEmotion(event.target.value);`,
        `return <div>`,
        `<Form.Check
                type="radio"
                name="emotions"
                onChange={updateEmotion}
                id="emotion-check-happy"
                label="Happy"
                value="happy"
                checked={emotion === "happy"}
        />`,
        `<Form.Check
                type="radio"
                name="emotions"
                onChange={updateEmotion}
                id="emotion-check-sad"
                label="Sad"
                value="sad"
                checked={emotion === "sad"}
        />`, 
        `</div>`,
        `}`,
        `function updateEmotion(event: React.ChangeEvent<HTMLInputElement>) {`,
        `const [emotion, setEmotion] = useState<string>("happy");`
    ]},
    {id: "3.2.21", correctOrder:["4,1,2,5,3", "4,1,5,2,3"], options: [
        `return <div>`,
        `<Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => setResponse(e.target.value)}
                id="response-good"
                label="good"
                value="good"
                checked={response === "good"}
        />`,
        `</div>`,
        `const [response, setResponse] = useState<string>("good");`,
        `<Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => setResponse(e.target.value)}
                id="response-bad"
                label="bad"
                value="bad"
                checked={response === "bad"}
        />`
    ]}

]

export const topic3MCQAnswers = []

export const topic3CodeAnswers = []