import axios from "axios";
import * as actionTypes from "../actions/types";

const POST_API_URL = "https://jsonplaceholder.typicode.com/posts";


export const getPosts = () => {
    return async (dispatch) => {
        dispatch({
            type: actionTypes.GET_POSTS_LOADING
        })
        try {
            const res = await axios.get(POST_API_URL)
            const data = await res.data
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

export const createPost = (formData) => {
    return async (dispatch) => {
        // console.log("create post")
        dispatch({
            type: actionTypes.ADD_POST_LOADING
        })
        try {
            const res = await axios.post(POST_API_URL, formData)
            const data = await res.data
            // console.log(data)
            dispatch({
                type: actionTypes.ADD_POST_SUCCESS,
                payload: data
            })
        } catch(err) {
            // console.log(err)
            dispatch({
                type: actionTypes.ADD_POST_ERROR,
                payload: err
            })
        }
    }
}