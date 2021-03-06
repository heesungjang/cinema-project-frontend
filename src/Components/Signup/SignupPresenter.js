import React from "react";

import logo from "../../images/signup_logo.png";
import logo_x from "../../images/ico-with.png";
import logo_two from "../../images/img_1050.png";

import { history } from "../../Redux/configureStore";
import DatePicker from "react-date-picker";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

import { useSelector } from "react-redux";

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

    inputContainer: {
        borderBottom: "1px solid",
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        paddingBottom: "20px",
        color: "grey",
        "&:hover": {
            color: "black",
        },
    },
});

const SignupPresenter = (props) => {
    const isSuccess = useSelector((state) => state.user.isSuccess);

    const classes = useStyles();
    const {
        name,
        email,
        password_1,
        password_2,
        phoneNumber_1,
        phoneNumber_2,
        phoneNumber_3,
        handlePhoneNumber,
        dateValue,
        onChange,
        handleSubmit,
        setDateValue,
    } = props;

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
                    <Typography className={classes.text}>????????????</Typography>
                    <Typography className={classes.textBold}>
                        ???! ??????
                    </Typography>
                    <Typography className={classes.textBold}>
                        ????????? ????????????!
                    </Typography>
                </Grid>
                <Grid
                    xs={12}
                    style={{
                        borderBottom: "1px solid",
                        marginBottom: "20px",
                    }}
                >
                    <Typography>
                        ??????????????????{" "}
                        <span className={classes.bigRedText}>
                            *??? ???????????? ???????????????.
                        </span>
                    </Typography>
                </Grid>
                <Grid xs={12} className={classes.inputContainer}>
                    <Grid xs={2}>
                        <Typography>
                            {" "}
                            <span className={classes.bigRedText}>*</span>
                            ??????
                        </Typography>
                    </Grid>
                    <Grid xs={5}>
                        <TextField
                            name="name"
                            id="filled-basic"
                            label="?????? ?????? ???????????? ??????????????????."
                            variant="filled"
                            fullWidth
                            value={name}
                            onChange={onChange}
                        />
                    </Grid>
                </Grid>
                <Grid xs={12} className={classes.inputContainer}>
                    <Grid xs={2}>
                        <Typography>
                            <span className={classes.bigRedText}>*</span>
                            ????????? ??????
                        </Typography>
                    </Grid>
                    <Grid xs={5}>
                        <TextField
                            name="email"
                            value={email}
                            onChange={onChange}
                            id="filled-basic"
                            label="?????????????????? ??????????????????"
                            variant="filled"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid xs={12} className={classes.inputContainer}>
                    <Grid xs={2}>
                        <Typography>
                            {" "}
                            <span className={classes.bigRedText}>*</span>
                            ????????????
                        </Typography>
                    </Grid>
                    <Grid xs={5}>
                        <TextField
                            name="password_1"
                            value={password_1}
                            onChange={onChange}
                            id="filled-basic"
                            label="??????????????? ??????????????????."
                            variant="filled"
                            fullWidth
                            type="password"
                        />
                        <TextField
                            required
                            type="password"
                            name="password_2"
                            value={password_2}
                            onChange={onChange}
                            id="filled-basic"
                            label="???????????? ??????????????? ?????? ?????? ??????????????????."
                            variant="filled"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid xs={12} className={classes.inputContainer}>
                    <Grid xs={2}>
                        <Typography>
                            <span className={classes.bigRedText}>*</span>
                            ????????? ??????
                        </Typography>
                    </Grid>
                    <Grid
                        xs={5}
                        style={{
                            display: "flex",
                        }}
                    >
                        <TextField
                            required
                            placeholder="010"
                            name="phoneNumber_1"
                            id="filled-basic"
                            variant="filled"
                            inputProps={{ maxLength: 3 }}
                            value={phoneNumber_1}
                            onChange={handlePhoneNumber}
                        />
                        <TextField
                            required
                            name="phoneNumber_2"
                            id="filled-basic"
                            variant="filled"
                            style={{ margin: "0 5px" }}
                            inputProps={{ maxLength: 4 }}
                            value={phoneNumber_2}
                            onChange={handlePhoneNumber}
                        />
                        <TextField
                            required
                            name="phoneNumber_3"
                            id="filled-basic"
                            variant="filled"
                            inputProps={{ maxLength: 4 }}
                            value={phoneNumber_3}
                            onChange={handlePhoneNumber}
                        />
                    </Grid>
                </Grid>
                <Grid xs={12} className={classes.inputContainer}>
                    <Grid xs={2}>
                        <Typography>
                            <span className={classes.bigRedText}>*</span>
                            ????????????
                        </Typography>
                    </Grid>
                    <Grid
                        xs={5}
                        style={{
                            display: "flex",
                        }}
                    >
                        <DatePicker
                            onChange={setDateValue}
                            value={dateValue}
                            format={"yyyy-MM-dd"}
                        />
                    </Grid>
                </Grid>

                <Grid
                    xs={12}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "200px",
                        marginTop: "50px",
                    }}
                >
                    <Grid>
                        <Button
                            variant="contained"
                            color="default"
                            style={{ padding: "15px 60px" }}
                            onClick={() => {
                                history.replace("/");
                            }}
                        >
                            ????????????
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{
                                marginLeft: "50px",
                                padding: "15px 60px",
                            }}
                            onClick={handleSubmit}
                        >
                            ????????????
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default SignupPresenter;
