import React from 'react';
import { Form, Col, Button } from 'react-bootstrap'


export const SignUpForm = () => (
  <Form>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control placeholder="John Smith" />
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

    <Form.Group controlId="formGridCarType">
      <Form.Label>Car Year, Make and Model</Form.Label>
      <Form.Control placeholder="2006 Nissan Maxima" />
    </Form.Group>

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

    <Button href="/Choices" variant="light" type="submit">
      Submit
  </Button>
  </Form>
)

export default SignUpForm;
