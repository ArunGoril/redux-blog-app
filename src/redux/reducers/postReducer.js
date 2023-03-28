import * as actionTypes from "../actions/types";

const initialState = {
    postList: [],
    isLoading: false,
    isError: false
}

const postReducer = (state = initialState, action) => {
    const { type, payload } = action;
    // console.log(type, payload)

    switch (type) {
        case actionTypes.GET_POSTS_LOADING:
        case actionTypes.ADD_POST_LOADING:
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
        case actionTypes.GET_POSTS_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                // postList: []
            }

        case actionTypes.ADD_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                postList: [...state.postList, payload]
            }

        case actionTypes.ADD_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        default:
            return state
    }
}

export default postReducer