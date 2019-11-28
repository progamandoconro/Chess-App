import React from 'react';
import './App.css';

class  App extends React.Component {
  constructor (){
    super()
    this.state = {
      data: '',
      list: [],
      id: 1
      
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
    
    const id = this.state.id;
    
    const handleClick = (item) => {
      let myList = this.state.list ;
      myList.push(item);
      this.setState ({
        list: myList,
        data: '',
        id: id + 1
      });
      console.log(this.state.id)
    }
    const removeItem= ()=> {
      
      let newList= this.state.list 
      
      this.setState ({
        list: newList.slice(id-1),
        id: id-1
      })
      
      console.log(this.state.id)
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
      {this.state.list.map(val=> <li> {val}   </li>)}
      </ul>
      <button 
      style={{color:'red'}}
      onClick={removeItem}
      
      > 
      <span role="img"> ✔️ </span>  
      
      </button> 
      </header>      
      </div>
      
      );
    }
  }
  
  export default App;
  
