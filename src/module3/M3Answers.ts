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

export const topic1CodeAnswers = []