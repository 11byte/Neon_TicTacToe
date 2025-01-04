import React from "react";
import x from "./xSymbol.png";
import o from "./oSymbol.png";
import { WINNING_COMBINATIONS } from "./winningCombo";

const GameBoard = ({
  setWinner,
  playerNames,
  setIsCompleted,
  setCurrentPlayer,
  currentPlayer,
  setHoveredCell,
  hoveredCell,
  setBoard,
  board,
}) => {
  const handleCellClick = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] === null) {
      const newBoard = [...board];
      newBoard[rowIndex][colIndex] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "x" ? "o" : "x");

      for (let combo of WINNING_COMBINATIONS) {
        const firstCell = board[combo[0].row][combo[0].column];
        const secondCell = board[combo[1].row][combo[1].column];
        const thirdCell = board[combo[2].row][combo[2].column];
        // console.log(combo[0]);
        if (firstCell && firstCell === secondCell && firstCell === thirdCell) {
          const winningPlayer =
            currentPlayer === "x" ? playerNames.playerX : playerNames.playerO;
          setWinner(winningPlayer);
          console.log("winn");
          setIsCompleted(true);
        }
      }

      // console.log(board);
    }
  };

  const getBoardStyle = (currentSymbol) => {
    return {
      transition: "all 0.489s ease",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(3, 1fr)",
      gap: "5px",
      height: "650px",
      width: "650px",
      borderRadius: "30px",
      backgroundColor: "rgba(255, 219, 251, 0.2)",
      boxShadow:
        currentPlayer === "x"
          ? "-15px -15px 40px rgb(255, 0, 85)"
          : "15px 15px 40px gold",
      padding: "10px",
      marginBottom: "10px",
    };
  };

  const handleMouseEnter = (rowIndex, colIndex) => {
    setHoveredCell(`${rowIndex}-${colIndex}`);
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
  };

  const getCellStyle = (rowIndex, colIndex) => {
    const isHovered = hoveredCell === `${rowIndex}-${colIndex}`;
    return {
      height: "100%",
      width: "100%",
      color: "white",
      fontSize: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0)",
      borderRadius: "20px",
      cursor: "pointer",
      boxShadow: isHovered ? "0px 0px 50px rgb(185, 253, 255)" : "none",
    };
  };

  return (
    <div style={getBoardStyle(currentPlayer)}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={getCellStyle(rowIndex, colIndex)}
            onClick={() => handleCellClick(rowIndex, colIndex)}
            onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
            onMouseLeave={handleMouseLeave}
          >
            {cell && (
              <img
                style={{ width: "150px" }}
                src={cell === "x" ? x : o}
                alt={cell}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default GameBoard;
