import React, {Component} from 'react'; 

const User = (props) => {
            return (
                <div>
                    Name: {props.name} 
                    OS Version: {props.age} 
                    Contact Info: alias: {props.alias} | company {props.company}

                    <button onClick={props.delEvent}>delete User</button>
                    <input onChange={props.changeName} value={props.children}/>  
                </div>
            )
}

export default User; 