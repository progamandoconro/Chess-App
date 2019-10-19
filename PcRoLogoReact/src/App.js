import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className ="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Programming with Ro   <code> ロによるプログラミング</code>  Programando con Ro. 
        </p>
        <a
          className="App-link"
          href="https://programandoconro.wordpress.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Site
        </a>
      </header>
    </div>
  );
}

export default App;
