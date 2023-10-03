// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Jsondata from './Jsondata';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Jsondata />
// );

import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';

const EventRegistrationForm = () => {
    // Define state variables to store form input values
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [eventName, setEventName] = useState('');
    const [ticketType, setTicketType] = useState('Standard');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // You can perform actions with the form data here, such as sending it to a server or displaying it
        console.log('Form submitted with data:');
        console.log({
            firstName,
            lastName,
            email,
            eventName,
            ticketType,
        });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Event Registration</h2>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="Enter your first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Enter your last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="eventName">Event Name</Label>
                            <Input
                                type="text"
                                name="eventName"
                                id="eventName"
                                placeholder="Enter the event name"
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="ticketType">Ticket Type</Label>
                            <Input
                                type="select"
                                name="ticketType"
                                id="ticketType"
                                value={ticketType}
                                onChange={(e) => setTicketType(e.target.value)}
                            >
                                <option value="Standard">Standard</option>
                                <option value="VIP">VIP</option>
                                <option value="Student">Student</option>
                            </Input>
                        </FormGroup>
                        <Button color="primary">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default EventRegistrationForm;