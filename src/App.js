import "./App.css";
import gameover from "./gameover screen.gif";
import GameBoard from "./GameBoard";
import Player from "./Player";
import { useState } from "react";
function App() {
  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [hoveredCell, setHoveredCell] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [winner, setWinner] = useState("john doe");
  const [playerNames, setPlayerNames] = useState({
    playerX: "player X",
    playerO: "player O",
  });
  const appStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
  };
  const gameOverStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.74)",
    position: "absolute",
    zIndex: "10px",
    height: "100%",
    width: "100%",
    display: isCompleted ? "block" : "none",
  };
  function retry() {
    setCurrentPlayer("x");
    setBoard(initialBoard);
    setIsCompleted(false);
  }
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Player
        playerNames={playerNames}
        setPlayerNames={setPlayerNames}
        symbol="x"
        mHeight="5px"
        bgColor="rgba(190, 174, 188, 0.63)"
        bShadow="5px 5px 50px rgb(255, 0, 85)"
      />
      <div style={appStyle}>
        <h1
          style={{
            fontSize: "50px",
            margin: "0 0 20px 0",
            fontStyle: "italic",
            color: "silver",
          }}
        >
          ✽⤜⤚ Tic Tac Toe ⤙⤛✽
        </h1>
        <GameBoard
          setWinner={setWinner}
          playerNames={playerNames}
          setBoard={setBoard}
          board={board}
          setCurrentPlayer={setCurrentPlayer}
          currentPlayer={currentPlayer}
          setHoveredCell={setHoveredCell}
          hoveredCell={hoveredCell}
          setIsCompleted={setIsCompleted}
        />
      </div>
      <Player
        playerNames={playerNames}
        setPlayerNames={setPlayerNames}
        symbol="o"
        mHeight="280px"
        bgColor="rgba(189, 190, 174, 0.78)"
        bShadow="-5px -5px 50px rgb(255, 242, 0)"
      />
      <div style={gameOverStyle}>
        <img
          style={{ marginTop: "100px", width: "400px" }}
          src={gameover}
          alt="game over screen"
        ></img>
        <center>
          <button
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "30px",
              backgroundColor: "gold",
            }}
            onClick={() => {
              retry();
            }}
          >
            ↻
          </button>
          <br />
          <br />
          <h1
            style={{
              fontSize: "90px",
              color: "rgba(255, 196, 1, 0.89)",
              fontFamily: "Courier",
              fontStyle: "italic",
            }}
          >
            winner: {winner}
          </h1>
        </center>
      </div>
    </div>
  );
}

export default App;
