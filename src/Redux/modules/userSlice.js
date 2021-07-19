import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "../async/user";

const initialState = {
    isLoggingIn: false,
    data: null,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logOut: (state, action) => {
            state.data = null;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(logIn.pending, (state, action) => {
                state.data = null;
                state.isLoading = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoggingIn = false;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.error = action.payload;
            }),
});

export const { logOut } = userSlice.actions;

export default userSlice;
