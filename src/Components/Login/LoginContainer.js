import React, { useState } from "react";

import { useSelector } from "react-redux";
import LoginPresenter from "./LoginPresenter";

const LoginContainer = (props) => {
    const user = useSelector((state) => state.user);

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
        console.log(email, password);
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
