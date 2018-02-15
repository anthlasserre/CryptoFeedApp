import axios from 'axios';
import {
  LOADING_COIN_DATA,
  LOADING_COIN_DATA_FAILED,
  LOADING_COIN_DATA_SUCCESS
} from "../../utils/constants";

// Chargement des données
const fetchCoinData = () => {
  return async (dispatch) => {
    dispatch({
      type: LOADING_COIN_DATA,
    });
    try {
      // Récupération des données OK
      const { data } = await axios.get('https://api.coinmarketcap.com/v1/ticker/', {
        params: {
          limit:10
        },
      });
      dispatch({
        type: LOADING_COIN_DATA_SUCCESS,
        data
      });
      // Récupération des données KO
    } catch (error) {
      dispatch({
        type: LOADING_COIN_DATA_FAILED,
        error,
      });
      // Afficher l'erreur
      console.log(error.stack);
    }
  };
};

export { fetchCoinData }