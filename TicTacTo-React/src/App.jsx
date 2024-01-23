import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS={
    X:'Player1',
    O:'Player2',
}
const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";

    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
}
function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map((row) => [...row])];


    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }
    return gameBoard;
}

function deriveWinner(gameBoard, players) {
    let winner = null;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquare = gameBoard[combination[0].row][combination[0].col];
        const secondSquare = gameBoard[combination[1].row][combination[1].col];
        const thirdSquare = gameBoard[combination[2].row][combination[2].col];

        if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
            console.log("WINNER");
            winner = players[firstSquare];
        }
    }
    return winner;
}

function App() {
    const [players, setPlayers]= useState(PLAYERS);
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = deriveGameBoard(gameTurns);
    let winner = deriveWinner(gameBoard, players);

    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            const updatedTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];

            return updatedTurns;
        });
    }
    function handleReset(){
        setGameTurns([]);
    }

    function handlePlayerNameChange(newName,symbol){
        setPlayers((prevPlayer)=>{
            return {
                ...prevPlayer,
                [symbol]:newName,
            };
        });
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName={PLAYERS.X}
                        symbol="X"
                        isActive={activePlayer === "X"}
                        onChangeName={handlePlayerNameChange}
                    ></Player>
                    <Player
                        initialName={PLAYERS.O}
                        symbol="O"
                        isActive={activePlayer === "O"}
                        onChangeName={handlePlayerNameChange}
                    ></Player>
                </ol>
                {(winner || hasDraw)&& <GameOver winner={winner} onReset={handleReset}/>}
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    board={gameBoard}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;
