import * as types from './ActionTypes';
import api from '@/Api/api';

// Fetch User's Watchlist
export const getUserWatchlist = () => async (dispatch, getState) => {
  dispatch({ type: types.GET_USER_WATCHLIST_REQUEST });

  try {
    const token = getState().auth.token; // Get token from Redux store

    const response = await api.get('/api/watchlist/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: types.GET_USER_WATCHLIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_USER_WATCHLIST_FAILURE,
      error: error.response?.data?.message || error.message,
    });
  }
};

// Add Coin to Watchlist
export const addItemToWatchlist = (coinId) => async (dispatch, getState) => {
  dispatch({ type: types.ADD_COIN_TO_WATCHLIST_REQUEST });

  try {
    const token = getState().auth.token; // Get token from Redux store

    const response = await api.patch(
      `/api/watchlist/add/coin/${coinId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: types.ADD_COIN_TO_WATCHLIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log("Error adding to watchlist:", error.response?.data || error);
    dispatch({
      type: types.ADD_COIN_TO_WATCHLIST_FAILURE,
      error: error.response?.data?.message || error.message,
    });
  }
};
