import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk(
    "movie/list",
    async (data, thunkAPI) => {
        const response = await axios({
            // url: "http://localhost:4000/movies",
            url: "http://13.209.84.245/movies",
            method: "get",
        });

        return response.data;
    }
);

export const getMovieDetail = createAsyncThunk(
    "movie/detail",
    async (movieId, thunkAPI) => {
        const response = await axios({
            url: `http://13.209.84.245/movies/${movieId}`,
            method: "get",
        });

        return response.data;

        if (response.status === 200) {
            return response.data;
        }
    }
);

export const addComment = createAsyncThunk(
    "movie/comment",
    async (
        { comment, movieId, star, token, userName, detailMovie },
        thunkAPI
    ) => {
        try {
            const response = await axios({
                url: `http://13.209.84.245/comments`,
                method: "post",
                data: {
                    comment,
                    movieId,
                    star,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (e) {
            return thunkAPI.rejectWithValue({
                error: "이미 관람평을 등록했거나 로그인이 만료되었습니다. ",
            });
        }
        await thunkAPI.dispatch(getMovieDetail(movieId));
    }
);

export const deleteComment = createAsyncThunk(
    "movie/delete/comment",
    async ({ movieId, token, commentId }, { dispatch }) => {
        const response = await axios({
            url: `http://13.209.84.245/comments/${commentId}`,
            method: "delete",
            data: {
                movieId,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        await dispatch(getMovieDetail(movieId));
    }
);

export const editComment = createAsyncThunk(
    "movie/edit/comment",
    async ({ movieId, comment, star, token, commentId }, { dispatch }) => {
        const response = await axios({
            url: `http://13.209.84.245/comments/${commentId}`,
            method: "put",
            data: {
                star,
                comment,
                movieId,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        await dispatch(getMovieDetail(movieId));
    }
);

export const likeComment = createAsyncThunk(
    "movie/like/comment",
    async ({ movieId, token, commentId }, { dispatch }) => {
        const response = await axios({
            url: `http://13.209.84.245/comments/${commentId}/like`,
            method: "post",
            data: {
                movieId,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        await dispatch(getMovieDetail(movieId));
    }
);

export const resetError = createAsyncThunk(
    "movie/error/reset",
    async ({ movieId }, { dispatch }) => {
        await dispatch(getMovieDetail(movieId));
    }
);
