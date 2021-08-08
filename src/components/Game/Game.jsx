import React, { useState } from "react";
import { useGame } from "../../contexts";
import Cross from "../../assets/cross.png";
import Zero from "../../assets/zero.png";
import "./Game.css";
import { actions } from "../../reducers";
import { computeWinner } from "../../utils";
import { Navigate } from "react-router";

const initialBoard = new Array(9).fill("");

function Game() {
  const {
    state: { player1, player2 },
    dispatch,
  } = useGame();

  const getInitialPlayerChoice = () => player1.choice === "X";

  const [board, setBoard] = useState(initialBoard);
  const [isCross, setIsCross] = useState(getInitialPlayerChoice);
  if (!player1.name) return <Navigate to="/" />;

  const winner = computeWinner(board);

  const updateBoard = (board, index) => {
    if (winner || board[index]) return board;
    return board.map((value, i) =>
      i === index ? (isCross ? "X" : "O") : value
    );
  };

  const updatePlayerSelection = (index) => {
    setBoard((prevBoard) => updateBoard(prevBoard, index));
    setIsCross((prev) => !prev);
  };

  const getWinner = () => {
    return player1.choice === winner ? player1.name : player2.name;
  };

  const startNewGame = () => {
    if (winner) {
      const result = player1.choice === winner ? "player1" : "player2";
      dispatch({
        type: actions.START_NEW_GAME,
        payload: { result },
      });
    }
    setBoard(initialBoard);
    setIsCross(getInitialPlayerChoice);
  };

  const getImage = (value) => {
    return value === "X" ? Cross : Zero;
  };

  return (
    <>
      {winner && (
        <WinnerDisplay
          text={`Winner is ${getWinner()}`}
          startNewGame={startNewGame}
        />
      )}
      {board.every((value) => !value === false) && !winner && (
        <WinnerDisplay text={`Game Drawn`} startNewGame={startNewGame} />
      )}
      <div className="game__container">
        <p className="text--center player__name">{player1.name}</p>
        <div className="score__card">
          <span> {player1.score}</span>
          <span> - </span>
          <span> {player2.score}</span>
        </div>
        <p className="text--center player__name">{player2.name}</p>
      </div>
      <div className="game__board">
        {board.map((value, index) => {
          return (
            <div
              key={index}
              onClick={() => updatePlayerSelection(index)}
              className="text--center spacing"
            >
              {value && (
                <img width="100%" height="100%" src={getImage(value)} alt="X" />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

const WinnerDisplay = ({ text, startNewGame }) => (
  <div className="winner__display">
    <h2 className="player__name">{text}</h2>
    <button onClick={startNewGame} className="button--primary">
      Restart
    </button>
  </div>
);

export default Game;
