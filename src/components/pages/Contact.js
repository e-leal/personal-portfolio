import React from 'react';
import {Card, Button, Form, Container, InputGroup, FormControl} from 'react-bootstrap';

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
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text>Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
            aria-label="email" 
            aria-describedby="inputGroup-sizing-default"
             />
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text>Message</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            as="textarea"
            aria-label="message"
            aria-describedby="inputGroup-sizing-default"
            />
        </InputGroup>
        
        <Button type="submit">Submit</Button>
    </Container>
);

export default Contact;