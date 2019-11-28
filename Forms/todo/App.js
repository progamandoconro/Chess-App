import React from 'react';
import './App.css';

class  App extends React.Component {
  constructor (){
    super()
    this.state = {
      data: [],
    }
    this.handleKeyDown.bind();
    this.handleChange.bind();
  }
  
  handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); 
      event.stopPropagation();
    }
  }
  
  handleChange (data) {
    this.setState ({data: data.target.value}) ;
    console.log(data.target.value);
    
  }
  
  render(){
    
    const todo = this.state.data;
  
    const handleClick = () => {
      this.setState({data: todo});
      console.log(todo);
      alert(todo);
    }
    
    return (
      
      <div className="App">
      <header className="App-header">
      <div className="Input-box"> 
      
      <div className="Item">
      <p>
      {todo}
      </p>
      </div>  
      </div>
      
      <hr></hr>
      <div className="Input-Form" > 
      <form >
      <input 
      onChange = {e=> this.handleChange(e)}
      value = {todo}
      onKeyDown={this.handleKeyDown}
      
      >
      </input>
      <hr></hr>
      
      </form>
      </div>
      
      <div> 
      
      <button 
      className = 'Send-Button'
      onClick = {handleClick}
      
      > 
      Send 
      </button>
      <text> </text>
      
      <button 
      className = 'Save-Button'
      onClick = ''
      > 
      Save
      </button>
      
      <text> </text>
      
      <button 
      className = 'Delete-Button'
      onClick = {e=>this.handleChange(e)}
      > 
      Delete
      </button>
      
      </div>
      </header>
      
      </div>
      
      );
    }
  }
  export default App;
  
