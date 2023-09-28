import axios from "axios";
import {
    ALL_RESTAURANTS_REQUEST,
    ALL_RESTAURANTS_SUCCESS,
    ALL_RESTAURANTS_FAIL,
    CLEAR_ERRORS,
    SORT_BY_RATINGS,
    SORT_BY_REVIEWS,
    TOGGLE_VEG_ONLY
} from "../Constants/restaurantsConstant";

export const getRestaurants = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_RESTAURANTS_REQUEST });
        let link = "http://localhost:4000/api/v1/eats/stores";
        const { data } = await axios.get(link);
        // const { data } = await axios.get(link).catch(error => {
        //     console.error('Error making Axios request:', error);
        //     throw error; // Rethrow the error to be caught in the catch block below
        //   });
        //   console.log(data)


        const { restaurants, count } = data;

        dispatch({
            type: ALL_RESTAURANTS_SUCCESS,
            payload: { restaurants, count },
        })
    } catch (error) {
        dispatch({
            type: ALL_RESTAURANTS_FAIL,
            payload: error.response.data.message,
        })
    }
};


export const sortByRatings = () => async (dispatch) => {
    dispatch({
        type: SORT_BY_RATINGS,
    });
};

export const sortByReviews = () => async (dispatch) => {
    dispatch({
        type: SORT_BY_REVIEWS,
    });
};


export const toggleVegOnly = () => async (dispatch) => {
    dispatch({
        type: TOGGLE_VEG_ONLY,
    });
};


export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};