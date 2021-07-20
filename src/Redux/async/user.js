import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logIn = createAsyncThunk(
    "user/logIn",
    async (data, thunkAPI) => {}
);

export const signup = createAsyncThunk(
    "users/signup",
    async (
        {
            name,
            email,
            password_1: password,
            phoneNumber: phone,
            birthDate: birthday,
        },
        thunkAPI
    ) => {
        // try {
        const response = await axios({
            url: "http://13.209.84.245/users",
            method: "post",
            data: {
                name,
                email,
                password,
                phone,
                birthday,
            },
        });

        if (response.status === 201) {
            return { username: name, email: email };
        } else {
            return thunkAPI.rejectWithValue();
        }
    }
);
