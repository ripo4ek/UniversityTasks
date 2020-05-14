import React, { Component } from 'react';

class Inputs extends Component {
    state = { 
        inputValue:''
     }
    render() { 
        return (
            <React.Fragment>
                <h4 id="author" style={{display: 'none'}} title="Ripo4ek">Andrey Lyapustin</h4>
                <input onChange={this.changeHandler} type="text" value={this.state.inputValue}/>
                <input onChange={this.changeHandler} type="text" value={this.state.inputValue}/> 
            </React.Fragment> 
         );
    }
    changeHandler = e =>{
        this.setState({inputValue:e.target.value})
    }
}
 
export default Inputs;