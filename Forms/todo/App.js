import React from 'react';
import './App.css';

class  App extends React.Component {
  constructor (){
    super()
    this.state = {
      data: []
    }
  }
  render(){
    const todo =  this.state.data
    
    const handleChange = (data) => {
      this.setState({data: data.target.value})
      console.log(todo)
    }
    
    const handleClick = () => {
      this.setState({data: todo})
      console.log(todo)
      alert(todo)
    }
    
    const item = Object.assign (todo)
    
    return (
      
      <div className="App">
      <header className="App-header">
      
      
      <div className="Ro-name"> 
      
      <p>
      {todo}
      </p>
      
      <p>
      {item}
      </p>
      
      </div>
      
      <div className="Input-Form" > 
      <form onSubmit={handleChange}>
      <input 
      onChange = { handleChange }
      value = {this.state.value}
      
      >
      </input>
      </form>
      </div>
      
      <div> 
      <button 
      className = 'Send-Button'
      onClick = {handleClick}
      
      > 
      Send 
      </button>
      
      <button 
      className = 'Send-Button'
      onClick = {handleChange}
      style={{color:'red'}}
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
  
