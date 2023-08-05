import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from "./actionTypes";

export const fetchPostRequest = () => {
    return {
        type : FETCH_POST_REQUEST
    }
}

export const fetchPostSuccess = (data) => {
    return {
        type : FETCH_POST_SUCCESS,
        payload : data
    }
}

export const fetchPostFailure = (error) => {
    return {
        type : FETCH_POST_FAILURE,
        payload : error
    }
}



// To make API Request in Redux
export const fetchPost = () => {
    return (dispatch) => {
        dispatch(fetchPostRequest());
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(response => {
            console.log(response);
            dispatch(fetchPostSuccess(response));
        })
        .catch(error => {
            console.log(error);
            dispatch(fetchPostFailure(error));
        })
    }
}