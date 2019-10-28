import React from 'react';
import { Form } from 'react-bootstrap'

class Choices extends React.Component{
state={
  citySelect:"Philadelphia",
  Philadelphia:["Center City"],
    "New York":["Manhattan", "Brooklyn", "Harlem"],
    Atlanta:["Stone Mountain", "Downtown"]
}
handleChange= (event) => {
  this.setState({citySelect:event.target.value})
}
render(){
  return(
  <>
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>Select a City</Form.Label>
      <Form.Control as="select" onChange={ this.handleChange } value={this.state.citySelect}>
        <option>Philadelphia</option>
        <option>New York</option>
        <option>Atlanta</option>
      </Form.Control>
    </Form.Group>
  </>
)
}

}
export default Choices;