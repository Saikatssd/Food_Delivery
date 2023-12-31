import axios from "axios";
import {
    GET_MENU_REQUEST,
    GET_MENU_SUCCESS,
    GET_MENU_FAIL
} from "../Constants/menuConstant";

export const getMenus = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_MENU_REQUEST });
        console.log(id)
        const response = await axios.get(`http://localhost:4000/api/v1/eats/stores/${id}/menus`)
        dispatch({
            type: GET_MENU_SUCCESS,
            payload: response.data.data[0].menu,
        });
    }
    catch (error) {
        dispatch({
            type: GET_MENU_FAIL,
            payload: error.message,
        });
    }
}