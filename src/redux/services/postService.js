import * as actionTypes from "../actions/types";

const POST_API_URL = "https://jsonplaceholder.typicode.com/posts";


export const getPosts = () => {
    return async (dispatch) => {
        dispatch({
            type: actionTypes.GET_POSTS_LOADING
        })
        try {
            const res = await fetch(POST_API_URL)
            const data = await res.json()
            dispatch({
                type: actionTypes.GET_POSTS_SUCCESS,
                payload: data
            })
        } catch(err) {
            dispatch({
                type: actionTypes.GET_POSTS_ERROR,
                payload: err
            })
        }
    }
}