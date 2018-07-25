import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import User from './User'; 

class Two extends Component {
  state = {
    users : [
      {id: 1, name: 'Joseph', age: '19'}, 
      {id: 2, name:'Milena', age:'12'}
    ], 
  }

  delUser = (index, e) => {
    // takes a stae and creates a duplicate array
    const dupArray = Object.assign([], this.state.users); 
    dupArray.splice(index, 1); 
    this.setState({users:dupArray}); 
  }

  // WHAT IS THIS DOING
 ChangeUsername = (id, e) => {
   const index = this.state.users.findIndex((y) =>{
     return y.id === id
   })

   const user = Object.assign({}, this.state.users[index])
   user.name = e.target.value; 
   const users = Object.assign([], this.state.users); 
   users[index] = user; 

   this.setState({users:users}); 
 }

  render() {
    return (
      <div>
        <br/>
      {
        // each user mapped has an x and a y 
        this.state.users.map((x, y) => {
         return (
              <User 
                  age={x.age}
                  key = {x.id}
                  delEvent = {this.delUser.bind(this, y)}
                  changeName = {this.ChangeUsername.bind(this, x.id)}>
                  {x.name}</User>
                )
        })
      }
      <br/>
      <hr/>
       <Link to="./three">
                <input type="submit" value="proceed to page 3" onClick={this.handleTry}/>
            </Link>
      </div>
      
    )
  }

}

export default Two; 