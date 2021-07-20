import { createSlice } from "@reduxjs/toolkit";
import { logIn, signup } from "../async/user";

const initialState = {
    username: "",
    email: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        // Reducer 여기에 추가
    },
    extraReducers: {
        [signup.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.email;
            state.username = payload.username;
        },
        [signup.pending]: (state) => {
            state.isFetching = true;
        },
        [signup.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            // state.errorMessage = payload.message;
        },
    },
});

export default userSlice;
