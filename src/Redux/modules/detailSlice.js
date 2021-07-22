import { createSlice } from "@reduxjs/toolkit";
import { getMovieDetail, addComment } from "../async/movies";

const initialState = {
    isFetching: false,
    movieData: [],
    error: null,
    is_added: false,
};

const detailSlice = createSlice({
    name: "detail",
    initialState: initialState,
    reducers: {
        // 여기 reducers 추가
    },
    extraReducers: {
        [getMovieDetail.fulfilled]: (state, { payload }) => {
            // console.log(payload.response);
            state.movieData = payload.response;
            state.isFetching = false;
        },
        [getMovieDetail.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [getMovieDetail.rejected]: (state, { payload }) => {
            state.isFeching = false;
        },
        [addComment.pending]: (state, actions) => {
            state.is_added = false;
        },
        [addComment.fulfilled]: (state, actions) => {
            state.is_added = true;
        },
    },
});

export default detailSlice;
