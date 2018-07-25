import React, { Component } from 'react';
import './App.css'; 
import { Switch, Route, BrowserRouter }  from 'react-router-dom';
import Two from './components/Two'; 
import One from './components/One'; 
import Three from './components/Three'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
        <div className="App-title"> CSS Portal </div>
      </div>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={One}/>
            <Route exact path="/two" component={Two}/>
            <Route exact path="/three" component={Three}/>
          </Switch>
      </BrowserRouter>
    </div>
    ); 
  }

}

export default App; 