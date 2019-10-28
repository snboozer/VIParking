import React from 'react';
import '../index.css';
import { Form, Button } from 'react-bootstrap'

export const SignIn = () =>(
  <div>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="SignUpEmail" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="SugnUpPassword" placeholder="Password" />
  </Form.Group>
  <Button href="/Choices" variant="light" type="Submit">
    Submit
  </Button>
  <br></br>
  <br></br>
  <Button href="/signUpForm" variant="light" type="SignUp">
    Sign Up
  </Button>
</div>
)


export default SignIn;