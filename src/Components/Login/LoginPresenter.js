import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import DetailContentLayout from "../../Layouts/Detail/DetailContentLayout";
import { useHistory } from "react-router";
const useStyles = makeStyles({
    mainContainer: {
        display: "flex",
        marginTop: "120px",
        justifyContent: "center",
        marginBottom: "30px",
    },
    activeSubContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "5px",
        borderBottom: "2px solid",
    },
    inactiveSubContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "5px",
        borderBottom: "1px solid grey",
        color: "grey",
    },
    formMainContainer: {
        backgroundColor: "#F5F5F5",
    },
    formSubContainer: {
        padding: "60px 20px",
    },
    formContents: {
        display: "flex",
        alignItems: "center",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
    },
    loginButton: {
        padding: "10px",
        backgroundColor: "#FF253E",
        fontWeight: "500",
        fontSize: "15px",
        height: "112px",
        width: "112px",
        marginLeft: "10px",
    },
    outerInputContainer: {
        display: "flex",
        marginTop: "10px",
    },

    signupButtonContainer: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "flex-end",
    },
    signupText: {
        color: "grey",
    },
});

const LoginPresenter = (props) => {
    const history = useHistory();
    const { email, password, handleSubmit, onChange } = props;

    const classes = useStyles();
    return (
        <DetailContentLayout>
            <Grid item xs={12} className={classes.mainContainer}>
                <Grid className={classes.activeSubContainer} xs={4}>
                    회원
                </Grid>
                <Grid className={classes.inactiveSubContainer} xs={4}>
                    비회원
                </Grid>
                <Grid className={classes.inactiveSubContainer} xs={4}>
                    소셜 로그인
                </Grid>
            </Grid>
            <Grid item className={classes.formMainContainer} xs={12}>
                <Grid className={classes.formSubContainer}>
                    <Grid item xs={12} className={classes.formContents}>
                        <Grid item xs={6}>
                            <Typography>
                                L.POINT, 롯데시네마 ID로 별도의 회원가입 없이
                                이용 가능 합니다.
                            </Typography>
                            <Grid className={classes.outerInputContainer}>
                                <Grid
                                    item
                                    xs={12}
                                    className={classes.inputContainer}
                                >
                                    <TextField
                                        name="email"
                                        id="outlined-password-input"
                                        label="이메일을 입력해 주세요."
                                        type="email"
                                        autoComplete="current-password"
                                        variant="outlined"
                                        value={email}
                                        onChange={onChange}
                                    />
                                    <TextField
                                        name="password"
                                        id="outlined-password-input"
                                        label="비밀번호를 입력해 주세요."
                                        type="password"
                                        autoComplete="current-password"
                                        variant="outlined"
                                        value={password}
                                        onChange={onChange}
                                    />
                                </Grid>
                                <Button
                                    className={classes.loginButton}
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleSubmit}
                                >
                                    로그인
                                </Button>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                className={classes.signupButtonContainer}
                            >
                                <Grid>
                                    <Button
                                        className={classes.signupText}
                                        onClick={() => {
                                            history.push("/signup");
                                        }}
                                    >
                                        회원가입
                                    </Button>
                                    <Button className={classes.signupText}>
                                        아이디 찾기
                                    </Button>
                                    <Button className={classes.signupText}>
                                        비밀번호 찾기
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                style={{ width: "400px" }}
                                src="https://caching2.lottecinema.co.kr/lotte_image/2021/Inbyu/0317/Inbyu_450220.png"
                                alt=""
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </DetailContentLayout>
    );
};

export default LoginPresenter;
