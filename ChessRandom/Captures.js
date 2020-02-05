import React, { useState } from 'react';
import Chess from 'react-chess';

const Captures = () => {

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];


    const board = [];

    for (let index = 1; index < letters.length + 1; index++) {
        for (let i = 1; i < numbers.length + 1; i++) {
            board.push(letters[index - 1] + numbers[i - 1])
        }
    }

    const chessPieces = ['R', 'Q', 'B', 'N', 'r', 'q', 'b', 'n', 'R', 'B', 'N', 'r', 'b', 'n', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'];

    const nRandom = (array) => Math.floor(Math.random() * array.length);
    const [position, handlePosition] = useState([]);
    const [kingPosition, handleKingPosition] = useState(['K@e1', 'k@e8'])

    const randomPosition = [];
    const numberPieces = Math.floor(Math.random() * chessPieces.length);
    const setPosition = () => {
        for (let index = 2; index < numberPieces; index++) {
            const nb = nRandom(board);
            const np = nRandom(chessPieces)

            const position = chessPieces[np] + '@' + board[nb];
            randomPosition.push(position);

            board.splice(nb, 1);
            chessPieces.splice(np, 1);

        }
        console.log(randomPosition)
        handlePosition(randomPosition)

    }

    return (
        <div>
            <button onClick={() => setPosition()}>Move</button>
            <Chess pieces={position} allowMoves={false} />
        </div>
    )
}

export default Captures;

