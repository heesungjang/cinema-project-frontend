import { LocalConvenienceStoreOutlined } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";
import {
    getMovieDetail,
    addComment,
    resetError,
    deleteComment,
} from "../async/movies";

const initialState = {
    isFetching: false,
    movieData: [],
    error: null,
    is_added: false,
    errorMessage: null,
};

const detailSlice = createSlice({
    name: "detail",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getMovieDetail.fulfilled]: (state, { payload }) => {
            state.movieData = payload.response;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [getMovieDetail.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [getMovieDetail.rejected]: (state, { payload }) => {
            state.isFetching = false;
        },
        [addComment.pending]: (state, actions) => {
            state.is_added = false;
        },
        [addComment.fulfilled]: (state, { payload }) => {
            state.is_added = true;
        },
        [addComment.rejected]: (state, { payload }) => {
            state.errorMessage = payload.error;
        },
        [deleteComment.fulfilled]: (state, { payload }) => {
            state.errorMessage = null;
        },
    },
});

export default detailSlice;
