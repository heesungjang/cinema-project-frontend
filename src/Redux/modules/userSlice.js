import { createSlice } from "@reduxjs/toolkit";
import { login, signup, logout } from "../async/user";

const initialState = {
    userId: "",
    name: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        updateLoginState: (state, { payload }) => {
            state.isLoggedIn = true;
            state.userId = JSON.parse(payload).userId;
            state.name = JSON.parse(payload).userName;
        },
    },
    extraReducers: {
        [signup.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.isError = false;
        },
        [signup.pending]: (state) => {
            state.isFetching = true;
        },
        [signup.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = "회원가입에 실패했습니다";
        },
        [login.fulfilled]: (state, { payload }) => {
            state.userId = payload.userId;
            state.name = payload.name;
            state.isFetching = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
        },
        [login.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = "비밀번호 확인 또는 이메일 인증을 진행하세요.";
        },
        [login.pending]: (state) => {
            state.isFetching = true;
        },
        [logout.fulfilled]: (state) => {
            state.userId = "";
            state.name = "";
            // state.isFetching = false;
            // state.isSuccess = true;
            state.isLoggedIn = false;
        },
    },
});

export default userSlice;
