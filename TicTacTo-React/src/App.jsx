import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
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

function App() {
    // const [activePlayer, setActivePlayer] = useState("X");
    const [player, setPlayer]= useState({
        X : 'Player1',
        O : 'Player2',
    });
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    // let gameBoard = initialGameBoard;
    let gameBoard = [...initialGameBoard.map((row) => [...row])];


    for(const turn of gameTurns){
        const {square,player} = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    let winner = null;
    for(const combination of WINNING_COMBINATIONS){
        const firstSquare = gameBoard[combination[0].row][combination[0].col];
        const secondSquare = gameBoard[combination[1].row][combination[1].col];
        const thirdSquare = gameBoard[combination[2].row][combination[2].col];

        if(firstSquare && firstSquare===secondSquare && firstSquare===thirdSquare){
            console.log("WINNER");
            winner = firstSquare;
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
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
        setPlayer((prevPlayer)=>{
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
                        initialName="Player1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                    ></Player>
                    <Player
                        initialName="Player2"
                        symbol="O"
                        isActive={activePlayer === "O"}
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
