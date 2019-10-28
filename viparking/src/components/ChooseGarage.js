import React from 'react';
import { Form, Button, ButtonToolbar } from 'react-bootstrap'

class ChooseGarage extends React.Component{
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
        <Form.Label>Select a Garage</Form.Label>
        <Form.Control as="select" onChange={ this.handleChange } value={this.state.citySelect}>
          <option>Main Street Garage</option>
          <option>Washington Street Garage</option>
          <option>Second Street Grarge</option>
          <option>Park Street Garage</option>
          <option>Pine Street Garage</option>
          <option>Broad Street Grarge</option>
        </Form.Control>
        <br></br>
        <ButtonToolbar>
          <Button href="/ChooseSpot" variant="light" type="submitGarage">
        Submit
    </Button>
  </ButtonToolbar>
      </Form.Group>
    </>
  )
  }
  
  }
  export default ChooseGarage;