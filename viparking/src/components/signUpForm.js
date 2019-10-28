import React from 'react';
import { Form, Col, Button } from 'react-bootstrap'


export const SignUpForm = () => (
  <Form>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control placeholder="John" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Smith" />
    </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>


    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridRePassword">
        <Form.Label>Re-Enter Password</Form.Label>
        <Form.Control type="password" placeholder="Re-Enter Password" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridPlate">
        <Form.Label>Car Year</Form.Label>
        <Form.Control placeholder="Example: 2006" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridMake">
        <Form.Label>Car Make</Form.Label>
        <Form.Control placeholder="Example: Nissan" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridModel">
        <Form.Label>Car Model</Form.Label>
        <Form.Control placeholder="Example: Maxima" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridPlate">
        <Form.Label>License Plate Number</Form.Label>
        <Form.Control placeholder="Lcense Plate #" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridHandicap">
        <Form.Label>HandiCap Number</Form.Label>
        <Form.Control placeholder="HandiCap #" />
      </Form.Group>
    </Form.Row>

    <Button href="/Choices" variant="light" type="signUpSubmit">
      Submit
  </Button>
  </Form>
)

export default SignUpForm;
