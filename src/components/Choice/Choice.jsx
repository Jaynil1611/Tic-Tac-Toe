import React from "react";
import { useNavigate, Navigate } from "react-router";
import { useGame } from "../../contexts";
import Cross from "../../assets/cross.png";
import Zero from "../../assets/zero.png";
import "./Choice.css";
import { actions } from "../../reducers";

function Choice() {
  const {
    state: { player1 },
    dispatch,
  } = useGame();
  const navigate = useNavigate();
  if (!player1.name) return <Navigate to="/" />;
  const { choice } = player1;

  const getChoice = (currentChoice) => {
    return currentChoice === "X" ? "O" : "X";
  };

  const updatePlayerChoice = (e) => {
    const currentChoice = e.target.value;
    dispatch({
      type: actions.UPDATE_PLAYER_DETAILS,
      payload: {
        player1: { choice: currentChoice },
        player2: { choice: getChoice(currentChoice) },
      },
    });
  };

  return (
    <div className="choice__container">
      <h2>
        <em>{player1.name}</em>, select your choice
      </h2>
      <div className="choice">
        <div className="input__radio">
          <img width="100%" src={Cross} alt="X" />
          <input
            className="input__radio--checkmark"
            checked={choice && choice === "X"}
            onChange={updatePlayerChoice}
            type="radio"
            value="X"
            required
          />
        </div>
        <div className="input__radio">
          <img width="100%" src={Zero} alt="O" />
          <input
            className="input__radio--checkmark"
            checked={choice && choice === "O"}
            onChange={updatePlayerChoice}
            type="radio"
            value="O"
            required
          />
        </div>
      </div>
      <button onClick={() => navigate("/game")} className="button--primary">
        Continue
      </button>
    </div>
  );
}

export default Choice;
