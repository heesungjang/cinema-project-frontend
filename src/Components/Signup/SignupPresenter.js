import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

import logo from "../../images/signup_logo.png";
import logo_two from "../../images/img_1050.png";
import logo_x from "../../images/ico-with.png";

import { makeStyles } from "@material-ui/styles";
import { classExpression } from "@babel/types";

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
                <Grid xs={12} className={classes.inputContainer}>
                    <Grid xs={2}>
                        <Typography>
                            {" "}
                            <span className={classes.bigRedText}>*</span>이름
                        </Typography>
                    </Grid>
                    <Grid xs={5}>
                        <TextField
                            id="filled-basic"
                            label="한글 또는 영문으로 입력해주세요."
                            variant="filled"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid xs={12} className={classes.inputContainer}>
                    <Grid xs={2}>
                        <Typography>
                            <span className={classes.bigRedText}>*</span>이메일
                            주소
                        </Typography>
                    </Grid>
                    <Grid xs={5}>
                        <TextField
                            id="filled-basic"
                            label="이메일주소를 입력해주세요"
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
                            비밀번호
                        </Typography>
                    </Grid>
                    <Grid xs={5}>
                        <TextField
                            id="filled-basic"
                            label="비밀번호를 입력해주세요."
                            variant="filled"
                            fullWidth
                        />
                        <TextField
                            id="filled-basic"
                            label="입력하신 비밀번호를 다시 한번 입력해주세요."
                            variant="filled"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid xs={12} className={classes.inputContainer}>
                    <Grid xs={2}>
                        <Typography>
                            <span className={classes.bigRedText}>*</span>휴대폰
                            번호
                        </Typography>
                    </Grid>
                    <Grid
                        xs={5}
                        style={{
                            display: "flex",
                        }}
                    >
                        <TextField
                            id="filled-basic"
                            variant="filled"
                            inputProps={{ maxLength: 3 }}
                        />
                        <TextField
                            id="filled-basic"
                            variant="filled"
                            style={{ margin: "0 5px" }}
                            inputProps={{ maxLength: 4 }}
                        />
                        <TextField
                            id="filled-basic"
                            variant="filled"
                            inputProps={{ maxLength: 4 }}
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
                    <Button
                        variant="contained"
                        color="default"
                        style={{ padding: "15px 60px" }}
                    >
                        취소하기
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginLeft: "50px", padding: "15px 60px" }}
                    >
                        회원가입
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default SignupPresenter;
