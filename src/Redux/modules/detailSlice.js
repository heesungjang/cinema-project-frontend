import { createSlice } from "@reduxjs/toolkit";
import { getMovies, getMovieDetail } from "../async/movies";

const initialState = {
    isFetching: false,
    movieData: [],
    error: null,
};

const DetailSlice = createSlice({
    name: "detail",
    initialState: initialState,
    reducers: {
        // 여기 reducers 추가
    },
    extraReducers: {
        [getMovieDetail.fulfilled]: (state, { payload }) => {},
        [getMovieDetail.pending]: (state, { payload }) => {},
        [getMovieDetail.rejected]: (state, { payload }) => {},
    },
});
