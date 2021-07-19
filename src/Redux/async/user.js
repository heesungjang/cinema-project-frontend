import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../api";

export const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
    const result = await authApi.userLogin(data.email, data.password);
    console.log(result);
    // const result = await delay(500, {
    //     email: data.email,
    //     password: data.password,
    // });
    // return result;
});

export const signup = createAsyncThunk(
    "user/signup",
    async (data, thunkAPI) => {
        const result = await authApi.userSignup(
            data.name,
            data.email,
            data.password,
            data.phone,
            data.birthday
        );
    }
);
