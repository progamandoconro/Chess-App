import React, { useState } from 'react';
import Chess from 'react-chess';

const Queen = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const [letter, setLetter] = useState(1);
    const [number, setNumber] = useState(1);
    const [piece] = useState(['Q@']);
    const [position, handlePosition] = useState(['Q@a1']);

    const randomNumber = (array) => { return Math.floor(Math.random() * array.length); }


    const makeQueenMove = () => {






        handlePosition([piece + letters[randomNumber(letters)] + numbers[randomNumber(numbers)]]);

    }

    return (
        <div >
            <button onClick={(e) => makeQueenMove(e.target.value)} > Move </button>
            <hr />
            <Chess pieces={position} allowMoves={false} />

        </div>
    )
}

export default Queen;