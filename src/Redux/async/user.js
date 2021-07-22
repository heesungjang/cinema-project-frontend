import axios from "axios";
import jwt_decode from "jwt-decode";

import { history } from "../configureStore";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    "user/logIn",
    async ({ email, password }, thunkAPI) => {
        const response = await axios({
            url: "http://13.209.84.245/login",
            method: "post",
            data: {
                email,
                password,
            },
        }).then((response) => {
            const { userId, name } = jwt_decode(response.data.token);
            const data = { userId: userId, name: name };

            if (!response.data.status === "201") {
                return;
            }

            const token = response.data.token;
            const user_data = {
                userId: userId,
                userName: name,
                accessToken: token,
            };
            localStorage.setItem("user", JSON.stringify(user_data));
            history.replace("/");
            return { userId, name };
        });

        return response;
    }
);

export const signup = createAsyncThunk(
    "user/signup",
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
            history.replace("/verification");
            return { name, email };
        } else {
            return thunkAPI.rejectWithValue();
        }
    }
);

export const logout = createAsyncThunk(
    "user/logout",
    async (data, thunkAPI) => {
        localStorage.removeItem("user");
        return;
    }
);
