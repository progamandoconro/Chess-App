import React from 'react';
import './App.css';
//import ReadPGN from './ReadPGN';
import Random from './Random';
import Pawn from './Pawn';
import King from './King';
import Rook from './Rook';
import Knight from './Knight';

function App() {

  return (

    <div className='ChessBoard'>

      <h1>King moves</h1>
      <King />
      <br />

      <h1>Rook moves</h1>
      <Rook />
      <br />

      <h1>Knight moves</h1>
      <Knight />
      <br />

      <h1>Pawn promotion</h1>
      <Pawn />
      <br />

      <h1>Random Positions</h1>
      <Random />

    </div>

  );
}

export default App;
