import React, { useState } from 'react'
import Chess from 'react-chess'
import myRandomPositions from './RandomPositions'

const Board = () => {

    const [position, handlePosition] = useState(myRandomPositions());

    const makeRandomPosition = () => {


        handlePosition(myRandomPositions())
    }

    return (
        <div >
            <button onClick={() => makeRandomPosition()} >
                Random
            </button>
            <hr />

            <Chess
                pieces={position}

                allowMoves={false} />
        </div>
    )
}

export default Board;