import {
  LOADING_COIN_DATA,
  LOADING_COIN_DATA_FAILED,
  LOADING_COIN_DATA_SUCCESS,
} from "../../utils/constants";

const initialState = {
  data: [],
};

const coinDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_COIN_DATA:
      return {
        ...state,
      };
    case LOADING_COIN_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case LOADING_COIN_DATA_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default coinDataReducer;