import { createAsyncThunk } from "@reduxjs/toolkit";
import { moviesApi } from "../../api";

export const getMovies = createAsyncThunk("GET_MOVIES", async () => {
    const reponse = await moviesApi.getAllMovies();
    console.log(reponse.data);
    return reponse.data;
});
