import React from "react";
import x from "./xSymbol.png";
import o from "./oSymbol.png";

const Player = ({
  mHeight,
  bgColor,
  bShadow,
  symbol,
  playerNames,
  setPlayerNames,
}) => {
  // Use separate state for player names

  // Handle name change dynamically based on symbol
  const handleNameChange = (e, player) => {
    setPlayerNames({
      ...playerNames,
      [player]: e.target.value,
    });
  };

  const playerStyle = {
    backgroundColor: bgColor,
    width: "300px",
    height: "400px",
    display: "inline-block",
    marginTop: mHeight,
    borderRadius: "20px",
    boxShadow: bShadow,
    padding: "5px",
  };

  return (
    <div style={playerStyle}>
      <input
        style={{
          height: "40px",
          width: "85%",
          margin: "10px",
          borderRadius: "20px",
          fontSize: "25px",
          paddingLeft: "10px",
          backgroundColor: "transparent",
          color: "rgb(200, 200, 200)",
          border: "solid 2px",
          borderColor: bgColor,
        }}
        value={symbol === "x" ? playerNames.playerX : playerNames.playerO}
        onChange={(e) =>
          handleNameChange(e, symbol === "x" ? "playerX" : "playerO")
        }
      />
      <img
        src={symbol === "x" ? x : o}
        style={{
          width: symbol === "x" ? "250px" : "200px",
          filter: "grayscale(100%)",
          marginTop: "60px",
        }}
        alt="symbol"
      />
    </div>
  );
};

export default Player;
