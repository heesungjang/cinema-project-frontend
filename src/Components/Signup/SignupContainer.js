import React, { useState, useEffect } from "react";
import SignupPresenter from "./SignupPresenter";

import { signup } from "../../Redux/async/user";
import Footer from "../../shared/Footer";

import { useDispatch } from "react-redux";

import { Grid } from "@material-ui/core";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const SignupContainer = (props) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [dateValue, setDateValue] = React.useState(new Date());
    const [password_1, setPassword_1] = useState("");
    const [password_2, setPassword_2] = useState("");
    const [phoneNumber_1, setPhoneNumber_1] = useState("");
    const [phoneNumber_2, setPhoneNumber_2] = useState("");
    const [phoneNumber_3, setPhoneNumber_3] = useState("");

    const notify = (text) => toast.error(text);

    function pad(n) {
        return n < 10 ? "0" + n : n;
    }
    if (dateValue) {
        var birthDate =
            dateValue.getFullYear() +
            "" +
            pad(dateValue.getMonth() + 1) +
            "" +
            pad(dateValue.getDate());
    }

    const onChange = (e) => {
        const {
            target: { name, value },
        } = e;
        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "password_1") {
            setPassword_1(value);
        } else if (name === "password_2") {
            setPassword_2(value);
        }
    };

    const handlePhoneNumber = (e) => {
        const {
            target: { name, value },
        } = e;

        if (name === "phoneNumber_1") {
            setPhoneNumber_1(value);
        } else if (name === "phoneNumber_2") {
            setPhoneNumber_2(value);
        } else if (name === "phoneNumber_3") {
            setPhoneNumber_3(value);
        }
    };

    const handleSubmit = (e) => {
        const phoneNumber =
            phoneNumber_1 + "-" + phoneNumber_2 + "-" + phoneNumber_3;
        const data = {
            name,
            email,
            phoneNumber,
            password_1,
            password_2,
            birthDate,
        };
        if (
            name === "" ||
            email === "" ||
            phoneNumber === "" ||
            password_1 === "" ||
            password_2 === "" ||
            birthDate === ""
        ) {
            notify("?????? ????????? ??????????????????....");
        } else if (name.length < 2) {
            notify("????????? 3??? ?????? ???????????????.");
        } else if (password_1 !== password_2) {
            notify("??????????????? ?????? ????????????.");
        } else if (password_1.length < 8) {
            notify("??????????????? 8??? ?????? ???????????????.");
        } else if (phoneNumber.length < 13) {
            notify("????????? ????????? ????????? ???????????????.");
        } else if (email.includes("@") === false) {
            notify("????????? ????????? ???????????????");
        } else {
            dispatch(signup(data));
        }
    };

    return (
        <>
            <SignupPresenter
                name={name}
                email={email}
                password_1={password_1}
                password_2={password_2}
                phoneNumber_1={phoneNumber_1}
                phoneNumber_2={phoneNumber_2}
                phoneNumber_3={phoneNumber_3}
                dateValue={dateValue}
                onChange={onChange}
                handlePhoneNumber={handlePhoneNumber}
                handleSubmit={handleSubmit}
                setDateValue={setDateValue}
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
            <Grid style={{ marginLeft: "50px" }}>
                <Footer />
            </Grid>
        </>
    );
};

export default SignupContainer;
