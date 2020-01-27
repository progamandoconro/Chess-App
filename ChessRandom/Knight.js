import React, { useState } from 'react';
import Chess from 'react-chess';

const Knight = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const [index, setIndex] = useState(Number(3));
    const [number, setNumber] = useState(Number(3));
    const [piece] = useState(['N@']);
    const [position, handlePosition] = useState([piece + letters[index] + numbers[number]]);

    const mov1 = () => {
        setNumber(number + 2);
        setIndex(index + 1);
        console.log(position, "Long up, short right");
    }
    const mov2 = () => {
        setNumber(number + 1);
        setIndex(index + 2);
        console.log(position, "short up, Long right");

    }
    const mov3 = () => {
        setNumber(number + 2);
        setIndex(index - 1);
        console.log(position, "Long up, short left");
    }
    const mov4 = () => {
        setNumber(number + 1);
        setIndex(index - 2);
        console.log(position, "short up, Long left");

    }
    const mov5 = () => {
        setNumber(number - 2);
        setIndex(index + 1);
        console.log(position, "Long down, short right");
    }
    const mov6 = () => {
        setNumber(number - 2);
        setIndex(index - 1);
        console.log(position, "Long down, short left");

    }
    const mov7 = () => {
        setNumber(number - 1);
        setIndex(index + 2);
        console.log(position, "short down, long right");

    }
    const mov8 = () => {
        setNumber(number - 1);
        setIndex(index - 2);
        console.log(position, "short down, long left");


    }

    const num = [];
    const ind = [];

    const makeKnightMove = () => {

        const arrayOfMoves = [mov1, mov2, mov3, mov4, mov5, mov6, mov7, mov8];
        const n = Math.floor(Math.random() * arrayOfMoves.length);


        if (number < 5 && number >= 2 && index < 5 && index >= 2) {
            arrayOfMoves[Number(n)]();
            num.push(number);
            ind.push(index);

        }

        else {
            setIndex(Number(3));
            setNumber(Number(3));
            console.log('handleBoard2', position, letters[index], number, index);

        }

        handlePosition([piece + letters[index] + numbers[number]]);
        console.log(num, ind);
    }

    return (
        <div >
            <button onClick={(e) => makeKnightMove(e.target.value)} > Move </button>
            <Chess pieces={position} allowMoves={false} />

        </div>
    )
}

export default Knight;

