import axios from "axios";
import * as actionTypes from "../actions/types";

const POST_API_URL = "https://odd-gray-dragonfly-fez.cyclic.app/posts";


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

export const getPostById = (postId) => {
    return async (dispatch) => {
        dispatch({
            type: actionTypes.GET_POST_BY_ID_LOADING
        })
        try {
            const res = await axios.get(POST_API_URL+"/"+postId)
            const data = await res.data
            dispatch({
                type: actionTypes.GET_POST_BY_ID_SUCCESS,
                payload: data
            })
        } catch(err) {
            dispatch({
                type: actionTypes.GET_POST_BY_ID_ERROR,
                payload: err
            })
        }
    }
}

export const editPost = (postId, postData) => {
    return async (dispatch) => {
        dispatch({
            type: actionTypes.EDIT_POST_LOADING
        })
        try {
            const res = await axios.put(POST_API_URL+"/"+postId, postData)
            const data = await res.data
            dispatch({
                type: actionTypes.EDIT_POST_SUCCESS,
                payload: data
            })
        } catch(err) {
            dispatch({
                type: actionTypes.EDIT_POST_ERROR,
                payload: err
            })
        }
    }
}

export const deletePost = (postId) => {
    return async (dispatch) => {
        dispatch({
            type: actionTypes.DELETE_POST_LOADING
        })
        try {
            const res = await axios.delete(POST_API_URL+"/"+postId)
            const data = await res.data
            dispatch({
                type: actionTypes.DELETE_POST_SUCCESS,
                payload: data
            })
        } catch(err) {
            dispatch({
                type: actionTypes.DELETE_POST_SUCCESS,
                payload: err
            })
        }
    }
}