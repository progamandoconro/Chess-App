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
    
  return (

    <div className="App">
      <header className="App-header">
       
       
        <div className="Ro-name"> 
     <p>
     This is the data: {todo}
     </p>

     </div>

      <div className="Input-Form" > 
      
      <input onChange={event=> this.setState({data: event.target.value})
      }     
             >
      </input>
      
      </div>
      </header>
     
   
    </div>
   
  );
}
 }
export default App;
