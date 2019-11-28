import React from 'react';
import './App.css';

class  App extends React.Component {
  constructor (){
    super()
    this.state = {
      data: '',
      list: []
    }
    this.handleChange.bind();
    this.handleKeyDown.bind();
    
  }
  
  handleChange (data) {
    this.setState ({data: data.target.value}) ;
    console.log(data.target.value);
    
  }
  
  handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); 
      event.stopPropagation();
    }
  }
  
  render(){
    
    const todo = this.state.data;
    
    const handleClick = (item) => {
      let myList = this.state.list ;
      myList.push(item);
      
      this.setState ({
        list: myList,
        data: ''
        
      });
      
      console.log(myList);
    }
    
    return (
      
      <div className="App">
      <header className="App-header">
      <div > 
      <p>
      {todo}
      </p>
      </div>  
      
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
      <text> </text>
      <button 
      className = 'Save-Button'
      onClick = {()=>handleClick(this.state.data)}
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
      
      <ul className="Input-box" >
      {this.state.list.map(val=> <li> {val} </li>)}
      </ul>
      </header>      
      </div>
      
      );
    }
  }
  
  export default App;
  
