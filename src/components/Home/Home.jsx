import React from "react";
import Cross from "../../assets/cross.png";
import Zero from "../../assets/zero.png";
import "./Home.css";
import { useGame } from "../../contexts";
import { actions } from "../../reducers";
import { useNavigate } from "react-router";

function Home() {
  const { dispatch } = useGame();
  const navigate = useNavigate();

  const updatePlayerNames = (e) => {
    e.preventDefault();
    dispatch({
      type: actions.UPDATE_PLAYER_DETAILS,
      payload: {
        player1: { name: e.target[0].value },
        player2: { name: e.target[1].value },
      },
    });
    navigate("/choice");
  };

  return (
    <>
      <div className="container">
        <div className="image__showcase">
          <img width="100%" src={Cross} alt="X" />
          <img width="100%" src={Zero} alt="O" />
        </div>
        <div>
          <h3>Choose your play mode</h3>
          <form className="input__container" onSubmit={updatePlayerNames}>
            <div className="input">
              <label>Player 1 : </label>
              <input
                className="input--text"
                type="text"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="input">
              <label>Player 2 : </label>
              <input
                className="input--text"
                type="text"
                placeholder="Enter name"
                required
              />
            </div>
            <button type="submit" className="button--primary">
              Play
            </button>
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Home;
