import { Grid } from "@material-ui/core";
import React from "react";
import Footer from "../../shared/Footer";
import SignupPresenter from "./SignupPresenter";

const SignupContainer = () => {
    return (
        <>
            <SignupPresenter />
            <Grid style={{ marginLeft: "50px" }}>
                <Footer />
            </Grid>
        </>
    );
};

export default SignupContainer;
