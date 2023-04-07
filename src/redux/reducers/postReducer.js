import * as actionTypes from "../actions/types";

const initialState = {
    postList: [],
    post: {},
    isLoading: false,
    isError: false
}

const postReducer = (state = initialState, action) => {
    const { type, payload } = action;
    // console.log(type, payload)

    switch (type) {
        case actionTypes.GET_POSTS_LOADING:
        case actionTypes.ADD_POST_LOADING:
        case actionTypes.GET_POST_BY_ID_LOADING:
        case actionTypes.EDIT_POST_LOADING:
        case actionTypes.DELETE_POST_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case actionTypes.GET_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                postList: payload
            }

        case actionTypes.ADD_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                postList: [...state.postList, payload]
            }

        case actionTypes.GET_POST_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                post: payload
            }

        case actionTypes.EDIT_POST_SUCCESS:
            const index = state.postList.findIndex(post => post._id === payload._id)
            const newPostList = state.postList
            newPostList.splice(index, 1, payload)
            return {
                ...state,
                isLoading: false,
                isError: false,
                post: payload,
                postList: newPostList
            }

        case actionTypes.DELETE_POST_SUCCESS: {
            const index = state.postList.findIndex(post => post.id == payload.id)
            const newPostList = state.postList
            newPostList.splice(index, 1)
            return {
                ...state,
                isLoading: false,
                isError: false,
                post: [],
                postList: newPostList
            }
        }

        case actionTypes.GET_POSTS_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                // postList: []
            }

        case actionTypes.ADD_POST_ERROR:
        case actionTypes.GET_POST_BY_ID_ERROR:
        case actionTypes.EDIT_POST_ERROR:
        case actionTypes.EDIT_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        default:
            return state
    }
}

export default postReducer