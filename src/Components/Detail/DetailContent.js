import React from "react";

import star from "../../images/star_14.png";
import { makeStyles } from "@material-ui/styles";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Grid, Typography, Avatar, Divider, Button } from "@material-ui/core";

const useStyles = makeStyles({
    postCard: {
        height: "290px",
        width: "200px",
        position: "absolute",
        top: "-40px",
        left: "0px",
        borderRadius: "5px",
    },
    mainContainer: {
        display: "flex",
        margin: "0 auto",
        width: "932px",
    },
    subContainer: {
        display: "flex",
        position: "relative",
    },
    detailContainer: {
        margin: "40px 0px 0 150px",
        width: "732px",
    },
    titleContainer: {
        display: "flex",
        marginBottom: "20px",
    },
    rateContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    rateSubContainer: {
        display: "flex",
        alignItems: "center",
        marginRight: "25px",
    },
    subContainerText: {
        marginLeft: "5px",
        fontWeight: "700",
        fontSize: "20px",
        minWidth: "40px",
    },
    subContainerViewer: {
        marginLeft: "5px",
        fontWeight: "700",
        fontSize: "20px",
        minWidth: "200px",
    },
    detailInfoContainer: {
        display: "flex",
    },
    detailInfoContentContainer: {
        display: "flex",
        marginLeft: "10px",
    },
    detailInfoContentNameContainer: {
        display: "flex",
        marginLeft: "10px",
        justifyContent: "flex-start",
    },
    buttonContainer: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    button: {
        borderRadius: "25px",
        padding: "10px 70px",
    },
    startImage: {
        height: "15px",
        margin: "0 2px 5px 10px",
    },
    divider: {
        margin: "20px 0",
    },
    subDivider: {
        height: "9px",
        margin: "auto 10px",
    },
    movieRatingTitle: {
        fontSize: "15px",
        minWidth: "81px",
        fontWeight: "600",
    },
    movieRating: {
        fontWeight: "700",
        fontSize: "20px",
    },
    ticketingRateTitle: {
        fontSize: "15px",
        minWidth: "75px",
        fontWeight: "600",
    },
    attendanceTitle: {
        fontSize: "15px",
        minWidth: "75px",
        fontWeight: "600",
    },
    detailInfoContentContainerText: {
        fontSize: "13px",
        minWidth: "26px",
    },
    directorName: {
        fontSize: "13px",
    },
    actorName: {
        fontSize: "13px",
        marginRight: "8px",
    },
    avatarCircle: {
        marginRight: "10px",
        fontSize: "13px",
        backgroundColor: (props) =>
            props.grade === "전체"
                ? "#5BC77E"
                : props.grade === "12"
                ? "#4DD6FF"
                : props.grade === "15"
                ? "#FFC134"
                : "#ED4C6B",
    },
});

const DetailContent = (props) => {
    const { detailMovie, rank } = props;
    console.log("DetailContent: ", detailMovie);

    const grade = detailMovie.grade && detailMovie.grade.trim().substring(0, 2);
    const _grade = { grade }; // 연령
    console.log(grade);

    // 연령 글자
    const _grade_text = grade === "청소" ? "청불" : grade;

    const classes = useStyles(_grade);

    const comment_list = detailMovie.comments;
    let total_rate = 0;

    if (comment_list && comment_list.length > 0) {
        comment_list.map((comment) => {
            total_rate = comment.star + total_rate;
        });
    }
    const final_rate = total_rate / comment_list && comment_list.length;

    return (
        <Grid xs={12} className={classes.mainContainer}>
            <Grid xs={3} className={classes.subContainer}>
                <Grid>
                    <img
                        className={classes.postCard}
                        src={
                            detailMovie.photos &&
                            detailMovie.photos[detailMovie.photos.length - 1]
                        }
                        alt=""
                    />
                </Grid>
            </Grid>
            <Grid xs={9} className={classes.detailContainer}>
                <Grid>
                    <Grid className={classes.titleContainer}>
                        <Avatar className={classes.avatarCircle}>
                            {_grade_text}
                        </Avatar>
                        <Typography variant="h4">
                            {detailMovie.title && detailMovie.title}
                        </Typography>
                    </Grid>
                    <Grid xs={7} className={classes.rateContainer}>
                        <Grid className={classes.rateSubContainer}>
                            <Typography className={classes.movieRatingTitle}>
                                관람객 평점
                            </Typography>
                            <img
                                src={star}
                                alt=""
                                className={classes.startImage}
                            />
                            <Typography className={classes.movieRating}>
                                {comment_list && isNaN(final_rate)
                                    ? 0
                                    : final_rate}
                            </Typography>
                        </Grid>
                        <Grid className={classes.rateSubContainer}>
                            <Typography className={classes.ticketingRateTitle}>
                                예매율 {rank + 1}위
                            </Typography>
                            <Typography className={classes.subContainerText}>
                                {detailMovie.bookRate &&
                                    (detailMovie.bookRate * 100).toFixed(1)}
                                %
                            </Typography>
                        </Grid>
                        <Grid className={classes.rateSubContainer}>
                            <Typography className={classes.attendanceTitle}>
                                누적관객수
                            </Typography>
                            <Typography className={classes.subContainerViewer}>
                                {detailMovie.viewers &&
                                    detailMovie.viewers.toLocaleString(
                                        "ko-KR"
                                    )}{" "}
                                명
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <Grid xs={12}>
                    <Grid xs={12} className={classes.detailInfoContainer}>
                        <Typography
                            className={classes.detailInfoContentContainerText}
                        >
                            장르
                        </Typography>
                        <Grid className={classes.detailInfoContentContainer}>
                            <Typography style={{ fontSize: "13px" }}>
                                {detailMovie.genre}
                            </Typography>
                            <Divider
                                orientation="vertical"
                                flexItem
                                className={classes.subDivider}
                            />
                            <Typography style={{ fontSize: "13px" }}>
                                {detailMovie.releaseDate &&
                                    detailMovie.releaseDate.split("T")[0]}{" "}
                                개봉
                            </Typography>
                            <Divider
                                orientation="vertical"
                                flexItem
                                className={classes.subDivider}
                            />
                            <Typography style={{ fontSize: "13px" }}>
                                {detailMovie.runningTime &&
                                    detailMovie.runningTime}
                                분
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={2} className={classes.detailInfoContainer}>
                        <Typography
                            className={classes.detailInfoContentContainerText}
                        >
                            감독
                        </Typography>
                        <Grid className={classes.detailInfoContentContainer}>
                            <Typography className={classes.directorName}>
                                <u>
                                    {detailMovie.director &&
                                        detailMovie.director.name}
                                </u>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.detailInfoContainer}>
                        <Typography
                            className={classes.detailInfoContentContainerText}
                        >
                            출연
                        </Typography>
                        <Grid
                            xs={12}
                            className={classes.detailInfoContentNameContainer}
                        >
                            {detailMovie.actors &&
                                detailMovie.actors.map((actor, idx) => (
                                    <Typography className={classes.actorName}>
                                        <u>{actor.name}</u>
                                    </Typography>
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} className={classes.buttonContainer}>
                    <ShareIcon />
                    <FavoriteBorderIcon style={{ margin: "0px 40px" }} />
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                    >
                        예매하기
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DetailContent;
