import React from "react";
import parse from "html-react-parser"; // html --> react 변환
import styled from "styled-components";

import male from "../images/male-solid.svg";
import female from "../images/female-solid.svg";

import { makeStyles } from "@material-ui/styles";
import { Typography, Grid } from "@material-ui/core";

const ScrollbarContainer = styled.div`
    overflow: scroll;
    &::-webkit-scrollbar {
        /* 세로 스크롤 넓이 */
        width: 8px;

        /* 가로 스크롤 높이 */
        height: 8px;

        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
`;

const useStyles = makeStyles({
    mainContainer: {
        display: "flex",
        maxWidth: "932px",
        margin: "0 auto",
    },
    subContainer: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "60px",
    },

    contentTopTitle: {
        fontWeight: 700,
        fontSize: "16px",
        marginBottom: "15px",
    },
    textContent: {
        height: "100px",
        // overflowY: "auto",
        padding: "10px 0",
    },
    preferenceContainer: {
        display: "flex",
        borderBottom: "1px solid rgba(232, 236, 241, 1)",
    },
    iconContainer: {
        margin: "0px 10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    maleIcon: {
        fontSize: "50px",
        fillColor: "red",
    },
    agePreferenceText: {
        fontSize: "15px",
        fontWeight: "600",
    },
    maleColoredText: {
        fontWeight: "600",
        color: "#8BE2FC",
    },
    femaleColoredText: {
        fontWeight: "600",
        color: "#FB5B95",
    },
});

const DetailContentTop = (props) => {
    const classes = useStyles();

    const { detailMovie } = props;
    // console.log(detailMovie);

    // 남성 선호도
    const man_like =
        detailMovie.preference && detailMovie.preference.gender !== (0 || null)
            ? ((1 - detailMovie.preference.gender) * 100).toFixed(1)
            : parseFloat(0).toFixed(1);
    // 여성 선호도
    const woman_like =
        detailMovie.preference &&
        (detailMovie.preference.gender * 100).toFixed(1);

    // 10대 선호도
    const teens_like =
        detailMovie.preference &&
        detailMovie.preference.generation["10"] !== null
            ? detailMovie.preference.generation["10"].toFixed(1)
            : 0;
    // 20대 선호도
    const twenties =
        detailMovie.preference &&
        detailMovie.preference.generation["20"] !== null
            ? detailMovie.preference.generation["20"].toFixed(1)
            : 0;
    // 30대 선호도
    const thirties =
        detailMovie.preference &&
        detailMovie.preference.generation["30"] !== null
            ? detailMovie.preference.generation["30"].toFixed(1)
            : 0;
    // 40대 선호도
    const forties =
        detailMovie.preference &&
        detailMovie.preference.generation["40"] !== null
            ? detailMovie.preference.generation["40"].toFixed(1)
            : 0;

    return (
        <Grid xs={12} className={classes.mainContainer}>
            <Grid xs={6} className={classes.subContainer}>
                <Grid xs={10}>
                    <Typography className={classes.contentTopTitle}>
                        시놉시스
                    </Typography>
                    <ScrollbarContainer>
                        <Grid className={classes.textContent}>
                            {detailMovie.synopsis &&
                                parse(detailMovie.synopsis)}
                        </Grid>
                    </ScrollbarContainer>
                </Grid>
            </Grid>

            <Grid xs={6} className={classes.subContainer}>
                <Typography className={classes.contentTopTitle}>
                    관람 선호도
                </Typography>
                <Grid xs={12} className={classes.preferenceContainer}>
                    <Grid xs={6}>
                        <Grid>
                            <dl style={{ display: "flex" }}>
                                <Grid className={classes.iconContainer}>
                                    <img
                                        src={male}
                                        alt=""
                                        style={{
                                            height: "50px",
                                        }}
                                    />
                                    <Typography>남성</Typography>
                                    <Typography
                                        className={classes.maleColoredText}
                                    >
                                        {man_like}%
                                    </Typography>
                                </Grid>

                                <dd>
                                    <Grid className={classes.iconContainer}>
                                        <img
                                            src={female}
                                            alt=""
                                            style={{ height: "50px" }}
                                        />
                                        <Typography>여성</Typography>
                                        <Typography
                                            className={
                                                classes.femaleColoredText
                                            }
                                        >
                                            {woman_like}%
                                        </Typography>
                                    </Grid>
                                </dd>
                            </dl>
                        </Grid>
                    </Grid>
                    <Grid xs={6}>
                        <Grid>
                            <dl style={{ display: "flex" }}>
                                <Grid className={classes.iconContainer}>
                                    <Typography>10대</Typography>
                                    <Typography
                                        className={classes.agePreferenceText}
                                    >
                                        {teens_like}%
                                    </Typography>
                                </Grid>

                                <dd>
                                    <Grid className={classes.iconContainer}>
                                        <Typography>20대</Typography>
                                        <Typography
                                            className={
                                                classes.agePreferenceText
                                            }
                                        >
                                            {twenties}%
                                        </Typography>
                                    </Grid>
                                </dd>
                                <dd>
                                    <Grid className={classes.iconContainer}>
                                        <Typography>30대</Typography>
                                        <Typography
                                            className={
                                                classes.agePreferenceText
                                            }
                                        >
                                            {thirties}%
                                        </Typography>
                                    </Grid>
                                </dd>
                                <dd>
                                    <Grid className={classes.iconContainer}>
                                        <Typography>40대</Typography>
                                        <Typography
                                            className={
                                                classes.agePreferenceText
                                            }
                                        >
                                            {forties}%
                                        </Typography>
                                    </Grid>
                                </dd>
                            </dl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DetailContentTop;
