import React, {Component} from 'react'; 

// have to manually add props, does not have a render. USe functionas as much as possible but cannot use STATES
const User = (props) => {
            return (
                <div>
                     {props.children} is {props.age} years old

                    <button onClick={props.delEvent}>  Delete This User</button>
                    <input onChange={props.changeName} value={props.children}/>  
                </div>
            )
}

export default User; 