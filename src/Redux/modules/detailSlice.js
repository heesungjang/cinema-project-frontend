import { createSlice } from "@reduxjs/toolkit";
import { getMovieDetail } from "../async/movies";

const initialState = {
    isFetching: false,
    movieData: [],
    error: null,
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
        [getMovieDetail.rejected]: (state, { payload }) => {},
    },
});

export default detailSlice;
