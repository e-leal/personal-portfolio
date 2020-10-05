import React from 'react';

const Contact = () => (
    <div>
        <h2>Contact</h2>
        <label for="name">Name: </label>
        <input type="text" id="name" name="name"></input>
        <label for="email">Email: </label>
        <input type="email" id="email" name="email"></input>
        <label for="message">Message: </label>
        <input type="textarea" id="message" name="message"></input>
        <button type="submit">Submit</button>
    </div>
);

export default Contact;