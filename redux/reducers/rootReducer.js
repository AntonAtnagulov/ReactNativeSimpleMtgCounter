import { combineReducers } from 'redux';
import player1Reducer from './player1Reducer';
import player2Reducer from './player2Reducer';


const rootReducer = combineReducers({
  playerOne: player1Reducer,
  playerTwo: player2Reducer,
});

export default rootReducer;