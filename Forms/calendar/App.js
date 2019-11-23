import React from 'react';
import logo from './logo.svg';
import './App.css';
import Datetime from 'react-datetime';


class App extends React.Component {
render(){
  return (
<div className='App'>
        <header className='App-header'>
          <Datetime />
        </header>
</div>
  );

}
}
export default App;

