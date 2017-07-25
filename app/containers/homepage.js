import React, {Component} from 'react';
import {add} from '../actions/testAction';
import {connect} from 'react-redux'
class Homepage extends Component {
    render()
    {
        const {children,add,text} = this.props;
        return (
            <div>
                <h1>
                    ff
                </h1>
                <input type="text" ref = 'testInput'/>
                <button onClick={(text)=>add(this.refs.testInput.value)}>ok</button>
                <ul>
                    {
                        text.map((item,index)=>{
                            return <li key={index}>{item.text}</li>
                        })
                    }
                </ul>
                
                <div>
                    <input type="text" ref="username"/>
                    <input type="text" ref="password"/>
                    <input type="text" ref="email"/>
                    
                    <button onClick={(username,password,email)=>this.register(this.refs.username.value,this.refs.password.value,this.refs.email.value)}>ok</button>
                
                </div>
            </div>
        )
    }
    register(username,password,email){
        let myHeaders = new Headers({
                                        'Access-Control-Allow-Origin': '*',
                                        'Content-Type': 'text/plain'
                                    });
        fetch('http://localhost:3001/users/register', {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            body: `username=${username}&password=${password}&email=${email}`,
        
        }) .then((res) => {
            console.log(res)
    
        })
        
    }
    
}
export default connect(state =>({
    text:state.addTodo
}),{
                           add
                       })(Homepage)
                       
                       