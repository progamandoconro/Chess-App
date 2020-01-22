import React, { useState } from 'react'
import Chess from 'react-chess'

const Pawn = () => {

    const [letter, setLetter] = useState(['e']);
    const [number, setNumber] = useState([2])
    const [piece, setPiece] = useState(['P@'])

    const [position, handlePosition] = useState([]);

    const makeRandomMove = (e) => {

        if (Number(number) === 2) {
            setNumber(Number(number) + 2);
        }

        else setNumber(Number(number) + 1);

        if (Number(number) >= 7) {
            setPiece('Q@');

            if (Number(number) >= 8) {
                setPiece('P@');
                setNumber(2)
            }

        }

        handlePosition([piece + letter + number])

    }

    return (
        <div >
            <button onClick={(e) => makeRandomMove(e.target.value)} > Move </button>
            <Chess pieces={position} allowMoves={false} />

        </div>
    )
}

export default Pawn;