import React, { Component } from 'react';
import './App.css';
//import User from './User'
import data from './data.json'; 

import 'bootstrap/dist/css/bootstrap.css';
// import { FormGroup, Button, FormControl, Form, ControlLabel, InputGroup } from 'react-bootstrap';
import {  Button, FormControl, Form, ControlLabel } from 'react-bootstrap';

import swal from 'sweetalert'; 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length == 3) return 'success';
  //   else return 'warning';
  // }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var length = Object.keys(data).length;
    var found = false; 
    var i; 
    for (i = 0; i < length; i++) {
      if (data[i].id == this.state.value) { 
        found = true; 
        break;        
      }
    }
   
      if (found == true) {
        swal( {
          title: "About " + data[i].name + "'s Device", 
          text:  "Operating System: " + data[i].OSV +
                  "\nAlias: " + data[i].alias +
                  "\nCompany: "  + data[i].company,
          icon: "success" 
                  
        }); 
     
      }
      else {
        swal({
          title: "User " + this.state.value + " does not exist",
          text: "I'm sorry, but the user you searched for does not seem to be in our database!",
          icon: "error",
          button: true,
          dangerMode: true,
        })
      }
    
   
    event.preventDefault();
  }

  render() {
    return (
    <div className="App">
      <div className="App-header">
      <div className="App-title"> Serial Number Lookup </div>
      </div>
      <br/>
      
      {/* <form onSubmit={this.handleSubmit}>   
      <Form  inline className= "App">
        <FormGroup  validationState={this.getValidationState()}>
          <ControlLabel>Serial Number: </ControlLabel>
          <FormControl value={this.state.value}onChange={this.handleChange} type="text" />
          <FormControl.Feedback />
          <Button type="submit"> Submit</Button>
        </FormGroup>
      </Form> 
      </form> */}

       <form onSubmit={this.handleSubmit}>   
        Serial Number:
          <input value={this.state.value}onChange={this.handleChange} type="text" />
          
          <input type="submit"/>
      </form>

    </div>
    ); 
  }

}

export default App; 