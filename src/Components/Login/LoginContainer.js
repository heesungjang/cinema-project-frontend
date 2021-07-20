import React, { useState } from "react";
import { login } from "../../Redux/async/user";

import { useSelector, useDispatch } from "react-redux";
import LoginPresenter from "./LoginPresenter";

const LoginContainer = (props) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        dispatch(login(data));
    };

    return (
        <LoginPresenter
            email={email}
            password={password}
            handleSubmit={handleSubmit}
            onChange={onChange}
        />
    );
};

export default LoginContainer;
