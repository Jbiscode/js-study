import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import LOG from "./components/LOG";

function App() {
    const [activePlayer, setActivePlayer] = useState("X");
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectSquare(rowIndex, colIndex) {
        setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
        setGameTurns((prevTurns) => {
            let currentPlayer = "X";

            if (prevTurns.length > 0 && prevTurns[0].player === "X") {
                currentPlayer = "O";
            }
            const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, 
                ...prevTurns, ];

            return updatedTurns;
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player1" symbol="X" isActive={activePlayer === "X"}></Player>
                    <Player initialName="Player2" symbol="O" isActive={activePlayer === "O"}></Player>
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
            </div>
            <LOG turns={gameTurns}/>
        </main>
    );
}

export default App;
