import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const getMovies = createAsyncThunk(
    "movie/list",
    async (data, thunkAPI) => {
        const response = await axios({
            // url: "http://localhost:4000/movies",
            url: "http://13.209.84.245/movies",
            method: "get",
        });

        return response.data;

        if (response.status === 200) {
            const data = { ...response.data };
            return data;
        }
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

        getMovieDetail(movieId);
    }
);
