import {
  GET_RECENTLY_DATA,
  GET_RECENTLY_REQUEST,
  GET_RECENTLY_FAILURE,
  HOTEL_REQUEST,
  HOTEL_SUCCESS,
  HOTEL_FAILURE,
} from "./actionTypes";
import axios from "axios";

const getDataRequest = () => {
  return {
    type: GET_RECENTLY_REQUEST,
  };
};
const getDataSuccess = (payload) => {
  return {
    type: GET_RECENTLY_DATA,
    payload: payload,
  };
};
const getDataFailure = (err) => {
  return {
    type: GET_RECENTLY_FAILURE,
    payload: err,
  };
};
export const getDetails = (dispatch) => {
  const requestAction = getDataRequest();
  dispatch(requestAction);
  axios
    .get("/recentlyVisited")
    .then((res) => {
      const successAction = getDataSuccess(res.data);
      dispatch(successAction);
    })
    .catch((err) => {
      const failureAction = getDataFailure();
      dispatch(failureAction);
    });
};
export const getAllDetails = (dispatch) => {
  const requestAction = getDataRequest();
  dispatch(requestAction);
  axios
    .get("/recentlyViewed")
    .then((res) => {
      const successAction = getDataSuccess(res.data);
      dispatch(successAction);
    })
    .catch((err) => {
      const failureAction = getDataFailure();
      dispatch(failureAction);
    });
};

const hotelRequest = () => {
  return {
    type: HOTEL_REQUEST,
  };
};
const hotelSuccess = (payload) => {
  return {
    type: HOTEL_SUCCESS,
    payload: payload,
  };
};
const hotelFailure = (err) => {
  return {
    type: HOTEL_FAILURE,
    payload: err,
  };
};

export const getAllHotel = (query = null, currPage) => dispatch => {
  const requestAction = hotelRequest();
  dispatch(requestAction);
  if (!query) {
    const failureAction = hotelFailure("no results");
    dispatch(failureAction);
  }
  return axios.get(`/MainData?q=${query}&_page=${currPage}`)
    .then((res) => {
      console.log(res);
      const successAction = hotelSuccess(res.data);
      dispatch(successAction);
    })
    .catch((err) => {
      const failureAction = hotelFailure(err);
      dispatch(failureAction);
    });
};


