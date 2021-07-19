import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core";

import logo from "../../images/signup_logo.png";
import logo_two from "../../images/img_1050.png";
import logo_x from "../../images/ico-with.png";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    mainContainer: {
        margin: "0 50px",
        marginTop: "60px",
    },
    topContainer: {
        borderBottom: "1px solid lightGrey",
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
        margin: "30px 0 10px 50px",
        paddingBottom: "10px",
    },
    logo: {
        width: "200px",
    },
    text: {
        fontSize: "35px",
        fontWeight: "300",
        marginBottom: "50px",
    },
    textBold: {
        fontSize: "35px",
        fontWeight: "350",
    },
    textContainer: {
        marginBottom: "40px",
    },
    bigRedText: {
        color: "red",
        fontSize: "15px",
        marginLeft: "3px",
    },
});

const SignupPresenter = () => {
    const classes = useStyles();
    return (
        <>
            <Grid xs={12} className={classes.topContainer}>
                <Grid className={classes.logoContainer}>
                    <img className={classes.logo} src={logo} alt="" />
                    <img src={logo_x} alt="" />
                    <img className={classes.logo} src={logo_two} alt="" />
                </Grid>
            </Grid>
            <Grid className={classes.mainContainer}>
                <Grid xs={12} className={classes.textContainer}>
                    <Typography className={classes.text}>회원가입</Typography>
                    <Typography className={classes.textBold}>
                        짠! 벌써
                    </Typography>
                    <Typography className={classes.textBold}>
                        마지막 단계에요!
                    </Typography>
                </Grid>
                <Grid
                    xs={12}
                    style={{ borderBottom: "1px solid", marginBottom: "20px" }}
                >
                    <Typography>
                        회원정보입력{" "}
                        <span className={classes.bigRedText}>
                            *는 필수입력 항목입니다.
                        </span>
                    </Typography>
                </Grid>
                <Grid container spacing={1} alignItems="flex-end">
                    <TextField
                        id="input-with-icon-grid"
                        label="With a"
                        fullWidth
                    />
                    <TextField
                        id="input-with-icon-grid"
                        label="With a"
                        fullWidth
                    />
                    <TextField
                        id="input-with-icon-grid"
                        label="With a"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default SignupPresenter;
