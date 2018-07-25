import React, { Component } from 'react';
import './App.css';
//import User from './User'
import data from './data.json'; 

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
        alert(
         data[i].name
        );
        console.log(data[i].name)
      }
      else {
        swal("user id entered incorrectly");
      }
    
   
    event.preventDefault();
  }

  render() {
    return (
    <div className="App">

      <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value}onChange={this.handleChange} />
          <input type="submit" value="Submit" />
      </form>
     
     
      
      
    </div>
    ); 
  }

}

export default App; 