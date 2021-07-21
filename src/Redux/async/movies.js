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

        if (response.status === 200) {
            const data = { ...response.data };
            return data;
        }
    }
);

export const getMovieDetail = createAsyncThunk(
    "movie/detail",
    async ({ movieId }, thunkAPI) => {
        const response = await axios({
            url: `http://13.209.84.245/movie/${movieId}`,
            method: "get",
        });

        if (response.status === 200) {
            return response.data;
        }
    }
);
