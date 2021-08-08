import { actions } from "./actions";

const gameReducer = (prevState, { type, payload }) => {
  switch (type) {
    case actions.UPDATE_PLAYER_DETAILS:
      return {
        ...prevState,
        player1: {
          ...prevState.player1,
          ...payload.player1,
        },
        player2: {
          ...prevState.player2,
          ...payload.player2,
        },
      };
    case actions.START_NEW_GAME: {
      const winner = payload.result;
      return {
        ...prevState,
        [winner]: {
          ...prevState[winner],
          score: prevState[winner].score + 1,
        },
      };
    }
    default:
      return prevState;
  }
};

export default gameReducer;
