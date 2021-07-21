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
        [getMovies.fulfilled]: (state, action) => {
            console.log("reducer: ", action.payload);
            state.movies = action.payload;
            // console.log(action.payload[0]);
            state.isFetching = false;
            // state.movies.push(action.payload);
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
