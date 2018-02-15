import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import coinDataReducer from './reducers/CoinDataReducer';

const store = createStore(
  combineReducers({coinDataReducer}),
  applyMiddleware(thunk),
);

export default store;