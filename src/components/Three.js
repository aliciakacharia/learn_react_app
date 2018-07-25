import React, { Component } from 'react';
import { Link} from 'react-router-dom';


class Three extends Component {
  render() {
    return (
       <div>
           <p>
               THE USER INFO PAGE!!!
            </p>
           <Link to='/'>
                <button> return to lookup </button>
           </Link>
      </div>
    ); 
  }

}
export default Three; 