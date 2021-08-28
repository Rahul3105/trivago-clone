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
    .get("http://localhost:8000/recentlyVisited")
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
    .get("http://localhost:8000/recentlyViewed")
    .then((res) => {
      const successAction = getDataSuccess(res.data);
      dispatch(successAction);
    })
    .catch((err) => {
      const failureAction = getDataFailure();
      dispatch(failureAction);
    });
};

/////////////Hotel Data//////////////////

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
// export const getDetails = (dispatch) => {
//   const requestAction = getDataRequest();
//   dispatch(requestAction);
//   axios
//     .get("http://localhost:8000/recentlyVisited")
//     .then((res) => {
//       const successAction = getDataSuccess(res.data);
//       dispatch(successAction);
//     })
//     .catch((err) => {
//       const failureAction = getDataFailure();
//       dispatch(failureAction);
//     });
// };
export const getAllHotel = (dispatch) => {
  const requestAction = hotelRequest();
  dispatch(requestAction);
  axios
    .get("http://localhost:8000/MainData")
    .then((res) => {
      const successAction = hotelSuccess(res.data);
      dispatch(successAction);
    })
    .catch((err) => {
      const failureAction = hotelFailure(err);
      dispatch(failureAction);
    });
};
