import React from "react";

import { makeStyles } from "@material-ui/core";
import { Grid, Typography, Container, Divider } from "@material-ui/core";

import logo from "../images/logo.png";
import logo_red from "../images/logo_red.png";
import HeaderLinks from "./HeaderLinks";

import follow from "../images/gnb_follow_wht.png";
import follow_blk from "../images/gnb_follow_blk.png";

import signup from "../images/nav_side_my_wht.png";
import signup_blk from "../images/nav_side_my_blk.png";

import reserve from "../images/nav_side_reserve_wht.png";
import reserve_blk from "../images/nav_side_reserve_blk.png";

import allMenu from "../images/nav_side_all_wht.png";
import allMenu_blk from "../images/nav_side_all_blk.png";

import youtube from "../images/gnb_youtube_wht.png";
import youtube_blk from "../images/gnb_youtube_blk.png";

import facebook from "../images/gnb_facebook_wht.png";
import facebook_blk from "../images/gnb_facebook_blk.png";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
    mainContainer: {
        height: "115px",
        alignItems: "center",
    },
    subContainer: {
        display: "flex",
        marginTop: "25px",
    },
    headerTopContainer: {
        display: "flex",
        alignItems: "center",
        color: (props) => (props.page === "main" ? "#fff" : "#000"),
    },
    headerTopText: {
        margin: "0px 0px 0px 5px",
        fontSize: "12px",
        "&:hover": {
            cursor: "pointer",
        },
    },
    subscribeTextContainer: {
        margin: "0 15px",
    },
    logoContainer: {
        display: "flex",
        justifyContent: "center",
    },
    topRightContainer: {
        display: "flex",
        justifyContent: "flex-end",
        color: "#fff",
        fontSize: "12px",
        alignItems: "center",
    },
    topRightTexts: {
        fontSize: "12px",
        margin: "0 0 0 15px",
        color: (props) => (props.page === "main" ? "#fff" : "#000"),
    },
    horizontalDivider: {
        margin: "10px 0",
        backgroundColor: (props) => (props.page === "main" ? "#fff" : "#000"),
    },
    signupButtonContainer: {
        display: "flex",
        color: "#fff",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    topBottomTexts: {
        margin: "0px 0px 0px 5px",
        fontSize: "12px",
        color: (props) => (props.page === "main" ? "#fff" : "#000"),
    },
});

const Header = (props) => {
    const { page } = props;
    const classes = useStyles(props);
    return (
        <Container className={classes.mainContainer}>
            <Grid xs={12} className={classes.subContainer}>
                <Grid xs={4} className={classes.headerTopContainer}>
                    <Typography>
                        <span>
                            <img
                                src={page === "main" ? facebook : facebook_blk}
                                alt=""
                            />
                        </span>

                        <span className={classes.headerTopText}>좋아요</span>
                    </Typography>
                    <Typography className={classes.subscribeTextContainer}>
                        <span>
                            <img
                                src={page === "main" ? youtube : youtube_blk}
                                alt=""
                            />
                        </span>
                        <span className={classes.headerTopText}>구독하기</span>
                    </Typography>
                    <Typography>
                        <span>
                            <img
                                src={page === "main" ? follow : follow_blk}
                                alt=""
                            />
                        </span>
                        <span className={classes.headerTopText}>팔로우</span>
                    </Typography>
                </Grid>

                <Grid xs={4} className={classes.logoContainer}>
                    <Typography>
                        <Button>
                            <img
                                src={page === "mian" ? logo : logo_red}
                                alt="Lotte Cinema"
                                onClick={() => {
                                    props.history.push("/");
                                }}
                            />
                        </Button>
                    </Typography>
                </Grid>

                <Grid xs={4} className={classes.topRightContainer}>
                    <Typography className={classes.topRightTexts}>
                        멤버십
                    </Typography>
                    <Typography className={classes.topRightTexts}>
                        고객센터
                    </Typography>
                    <Button>
                        <Typography
                            className={classes.topRightTexts}
                            onClick={() => {
                                props.history.push("/login");
                            }}
                        >
                            로그인
                        </Typography>
                    </Button>
                </Grid>
            </Grid>

            <Divider variant="middle" className={classes.horizontalDivider} />

            <Grid
                xs={12}
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <Grid xs={4} />
                <HeaderLinks page={page} />
                <Grid xs={4} className={classes.signupButtonContainer}>
                    <Typography>
                        <span>
                            <img
                                src={page === "main" ? signup : signup_blk}
                                alt=""
                            />
                        </span>
                        <Button>
                            <span
                                className={classes.topBottomTexts}
                                onClick={() => {
                                    props.history.push("/signup");
                                }}
                            >
                                회원가입
                            </span>
                        </Button>
                    </Typography>
                    <Typography style={{ margin: "0 15px" }}>
                        <span>
                            <img
                                src={page === "main" ? reserve : reserve_blk}
                                alt=""
                            />
                        </span>
                        <span className={classes.topBottomTexts}>바로예매</span>
                    </Typography>
                    <Typography>
                        <span>
                            <img
                                src={page === "main" ? allMenu : allMenu_blk}
                                alt=""
                            />
                        </span>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;
