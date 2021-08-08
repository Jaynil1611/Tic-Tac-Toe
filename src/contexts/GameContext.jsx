import React from "react";
import { createContext, useContext, useReducer } from "react";
import { gameReducer } from "../reducers";
import { initialState } from "./initialState";

const GameContext = createContext();

export const useGame = () => {
  return useContext(GameContext);
};

const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
