import React from 'react';
import './App.css';

class  App extends React.Component {
  constructor (){
    super()
    this.state = {
      data: [],
    }
  }
  render(){
    const todo =  this.state.data
    
    const handleChange = (data) => {
      this.setState ({data: data.target.value}) 
      console.log(todo)        
      }
      
      const handleClick = () => {
        this.setState({data: todo})
        console.log(todo)
        alert(todo)
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
        <form onSubmit={handleChange}>
        <input 
        onChange = {e=> handleChange(e) }
        value = {this.state.data}       
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
        onClick = {handleChange}
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
    
