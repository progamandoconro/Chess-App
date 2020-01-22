import React from 'react';
import './App.css'
//import ReadPGN from './ReadPGN'
import Random from './Random'
import Pawn from './Pawn'

function App() {

  return (

    <div className='ChessBoard'>

      <h1>Pawn promotion</h1>
      <Pawn />
      <br />
      <h1>Random Positions</h1>
      <Random />



    </div>

  );
}

export default App;
