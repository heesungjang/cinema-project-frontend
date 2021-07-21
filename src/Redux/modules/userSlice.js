import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../async/user";

const initialState = {
    userId: "",
    name: "",
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
            return state;
        },
        [login.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = "비밀번호 확인 또는 이메일 인증을 진행하세요.";
        },
        [login.pending]: (state) => {
            state.isFetching = true;
        },
    },
});

export default userSlice;
