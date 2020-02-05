import React from 'react';
import './App.css';
//import ReadPGN from './ReadPGN';
import Random from './Random';
import Pawn from './Moves/Pawn';
import King from './Moves/King';
import Rook from './Moves/Rook';
import Knight from './Moves/Knight';
import BishopDS from './Moves/BishopDS';
import BishopLS from './Moves/BishopLS';
import Queen from './Moves/Queen';

function BasicMoves() {

  return (

    <div className='ChessBoard'>

      <h1> Chess Random Moves Generator, by Ro </h1>

      <h2>King moves</h2>
      <King />
      <br />

      <h2>Rook moves</h2>
      <Rook />
      <br />

      <h2>Bishop moves in Dark Squares</h2>
      <BishopDS />
      <br />

      <h2>Bishop moves in Light Squares</h2>
      <BishopLS />
      <br />

      <h2>Knight moves</h2>
      <Knight />
      <br />

      <h2>Pawn promotion</h2>
      <Pawn />
      <br />

      <h2>Queen Moves</h2>
      <Queen />
      <br />

      <h2>Random Positions</h2>
      <Random />

    </div>

  );
}

export default BasicMoves;
