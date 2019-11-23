import React from 'react';
import './App.css';
import Datetime from 'react-datetime';

class App extends React.Component {
constructor (){
  super()
  this.state = {
    fecha:''
  }
};
render(){
  return (
<div className='App'>
	<header className='App-header'>
          <Datetime 
            onChange={fecha => this.setState({fecha: fecha})}
          />
          <button onClick={()=> {
          alert(this.state.fecha)}
          }
          > Enviar </button>
	</header>
</div>
  )
}
};
export default App;
