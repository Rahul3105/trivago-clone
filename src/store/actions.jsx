import {
  GET_RECENTLY_DATA,
  GET_RECENTLY_REQUEST,
  GET_RECENTLY_FAILURE,
  HOTEL_REQUEST,
  HOTEL_SUCCESS,
  HOTEL_FAILURE,
  PRICE_FILTER
} from "./actionTypes";
import axios from "axios";
import { useSelector, shallowEqual } from "react-redux";


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
const hotelSuccess = (payload, currPage, query) => {
  return {
    type: HOTEL_SUCCESS,
    payload: payload,
    currPage,
    query
  };
};
const hotelFailure = (err, currPage, query) => {
  return {
    type: HOTEL_FAILURE,
    payload: err,
    currPage,
    query
  };
};

export const getAllHotel = (query = null, currPage = 1) => dispatch => {
  const requestAction = hotelRequest();
  dispatch(requestAction);
  if (!query) {
    const failureAction = hotelFailure("no results");
    dispatch(failureAction);
  }
  return axios.get(`/MainData?q=${query}&_page=${currPage}`)
    .then((res) => {
      dispatch(hotelSuccess(res.data, currPage, query));
    })
    .catch((err) => {
      const failureAction = hotelFailure(err, currPage, query);
      dispatch(failureAction);
    });
};

export const priceFilter = (payload, query, filterType = 'price') => dispatch => {
  dispatch(hotelRequest());
  if (query === null) {
    axios.get(`/MainData`).then((res) => {
    let { data } = res;
    let filtered;
    if (filterType === 'price') {
      filtered = data.filter(item => item.deals[0] <= payload);
    } else if (filterType === 'rating') {
      filtered = data.filter(item => item.star >= payload);
    } else if (filterType === 'star') {
      filtered = data.filter(item => item.star === payload);
    }
    dispatch(hotelSuccess(filtered, 1, query));
    }).catch(err => {
      dispatch(hotelFailure(err, 1, query));
    })  
  } else {
    axios.get(`/MainData?q=${query}`).then((res) => {
    let { data } = res;
    let filtered;
    if (filterType === 'price') {
      filtered = data.filter(item => item.deals[0] <= payload);
    } else if (filterType === 'rating') {
      filtered = data.filter(item => item.star >= payload);
    } else if (filterType === 'star') {
      filtered = data.filter(item => item.star === payload);
    }
    dispatch(hotelSuccess(filtered, 1, query));
    }).catch(err => {
      dispatch(hotelFailure(err, 1, query));
    })  
  }
  
}




export const sortHotelData = (query, sortType= 'price') => dispatch => {
  dispatch(hotelRequest());

  if (query === null) {
    axios.get(`/MainData`).then((res) => {
      let { data } = res;
      let sorted;
      if (sortType === 'price') {
        sorted = [...data].sort((a,b) => a.deals[0] - b.deals[0])
      } else if(sortType === 'rating') {
        sorted = [...data].sort((a, b) => b.star - a.star);
      } else {
        sorted = data;
      }
      dispatch(hotelSuccess(sorted, 1, query));
    }).catch(err => {
      dispatch(hotelFailure(err, 1, query));
    })   
  } else {
     axios.get(`/MainData?q=${query}`).then((res) => {
      let { data } = res;
      let sorted;
      if (sortType === 'price') {
        sorted = [...data].sort((a,b) => a.deals[0] - b.deals[0])
      } else if(sortType === 'rating') {
        sorted = [...data].sort((a, b) => b.star - a.star);
      } else {
        sorted = data;
      }
      dispatch(hotelSuccess(sorted, 1, query));
    }).catch(err => {
      dispatch(hotelFailure(err, 1, query));
    })
  }

 
}