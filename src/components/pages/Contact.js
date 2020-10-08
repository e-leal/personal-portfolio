import React from 'react';
import {Card, Container, InputGroup, FormControl} from 'react-bootstrap';

const Contact = () => (
    <Container>
        <h2>Contact</h2>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            aria-label="name"
            aria-describedby="inputGroup-sizing-default"
            />
        </InputGroup>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name"></input>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email"></input>
        <label htmlFor="message">Message: </label>
        <input type="textarea" id="message" name="message"></input>
        <button type="submit">Submit</button>
    </Container>
);

export default Contact;