import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../async/movies";

const initialState = {
    isFetching: false,
    movies: [],
    error: null,
};

const movieSlice = createSlice({
    name: "movie",
    initialState: initialState,
    reducers: {
        // 여기 reducers 추가
    },
    extraReducers: {
        [getMovies.fulfilled]: (state, { payload }) => {
            state.movies.push(payload.data);
        },
        [getMovies.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [getMovies.rejected]: (state, { payload }) => {
            state.error = payload.data.error;
        },
    },
});

export default movieSlice;
