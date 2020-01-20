import React from 'react';
import Chess from 'react-chess';
import './App.css'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//Chess set
const chessPieces = ['R', 'Q', 'B', 'N', 'r', 'q', 'b', 'n', 'R', 'B', 'N', 'r', 'b', 'n'];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

//Set Board and Coordenates
const randomNumbers = () => getRandomInt(numbers.length);
const randomLetters = () => getRandomInt(letters.length);
const setBoard = [];
const randomCoordenates = () => {
  const s = [];
  for (let i = 0; i < 20; i++) {
    s.push(letters[randomLetters()] + numbers[randomNumbers()])

  }
  const coo = [...new Set(s)];

  for (let i = 0; i < chessPieces.length; i++) {
    setBoard.push(chessPieces[i] + '@' + coo[i])

  }

  const handleKings = () => {
    const lW = letters[randomLetters()];
    const nW = numbers[randomNumbers()];
    const lB = letters[randomLetters()];
    const nB = numbers[randomNumbers()];

    //Avoid overlapping 
    while (coo.includes(lW + nW) == true || coo.includes(lB + nB) == true) {
      const lW = letters[randomLetters()];
      const nW = numbers[randomNumbers()];
      const lB = letters[randomLetters()];
      const nB = numbers[randomNumbers()];

      if (coo.includes(lW + nW) == true || coo.includes(lB + nB) == true) break;

      const randomKings = ['K' + '@' + lW + nW, 'k' + '@' + lB + nB];
      setBoard.push(randomKings[0], randomKings[1]);

    }
    const randomKings = ['K' + '@' + lW + nW, 'k' + '@' + lB + nB];
    setBoard.push(randomKings[0], randomKings[1])
  }
  handleKings()

  const handlePawns = () => {
    const pawns = [];

    for (let i = 0; i < setBoard.length; i++) {
      const t = setBoard[i]
      pawns.push(t.slice(2))

    }
    console.log(pawns)
    const lWp = letters[randomLetters()];
    const nWp = numbers[randomNumbers()];
    const lBp = letters[randomLetters()];
    const nBp = numbers[randomNumbers()];

    while (coo.includes(lWp + nWp) == true || coo.includes(lBp + nBp) == true) {
      const lWp = letters[randomLetters()];
      const nWp = numbers[randomNumbers()];
      const lBp = letters[randomLetters()];
      const nBp = numbers[randomNumbers()];

      if (coo.includes(lWp + nWp) == true || coo.includes(lBp + nBp) == true) break;

      const randomPawns = ['P' + '@' + lWp + nWp, 'p' + '@' + lBp + nBp];
      setBoard.push(randomPawns[0], randomPawns[1]);

    }
    const randomPawns = ['P' + '@' + lWp + nWp, 'p' + '@' + lBp + nBp];

    setBoard.push(randomPawns[0], randomPawns[1])
  }

  // handlePawns()

  return setBoard;
}


function App() {

  randomCoordenates()

  return (
    <div className='ChessBoard'>
      <Chess pieces={setBoard} />
    </div>

  );
}

export default App;
