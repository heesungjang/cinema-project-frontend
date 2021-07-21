import React, { useState, useEffect } from "react";
import { login } from "../../Redux/async/user";

import LoginPresenter from "./LoginPresenter";
import { useSelector, useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const LoginContainer = (props) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const notify = (text) => toast.error(text);
    const {
        _props: { history },
    } = props;

    const {
        user: { isError, errorMessage },
    } = useSelector((state) => state);

    useEffect(() => {
        if (isError === true) {
            notify(errorMessage);
        }
    }, [isError, errorMessage]);

    const onChange = (e) => {
        const {
            target: { name, value },
        } = e;
        if (name === "email") {
            setEmail(value);
        } else {
            setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        const data = {
            email,
            password,
        };
        if (email.includes("@") === false) {
            notify("이메일 형식을 확인하세요");
        } else if (password.length < 8) {
            notify("비밀번호는 8자리 이상 입력하세요.");
        } else {
            dispatch(login(data));
        }
    };

    return (
        <>
            <LoginPresenter
                email={email}
                password={password}
                handleSubmit={handleSubmit}
                onChange={onChange}
            />

            <ToastContainer
                limit={1}
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default LoginContainer;
