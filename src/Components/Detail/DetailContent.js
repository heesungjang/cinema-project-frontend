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
        left: "120px",
        borderRadius: "5px",
    },
    mainContainer: {
        display: "flex",
    },
    subContainer: {
        display: "flex",
        position: "relative",
    },
    detailContainer: {
        margin: "40px 0px 0 150px",
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
    },
    subContainerText: {
        marginLeft: "5px",
        fontWeight: "700",
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
        justifyContent: "space-between",
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
});

const DetailContent = (props) => {
    console.log(props);
    const { movie } = props;
    const classes = useStyles();
    return (
        <Grid xs={12} className={classes.mainContainer}>
            <Grid xs={3} className={classes.subContainer}>
                <Grid>
                    <img
                        className={classes.postCard}
                        src={movie.main_poster}
                        // src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17508_103_1.jpg"
                        alt=""
                    />
                </Grid>
            </Grid>
            <Grid xs={9} className={classes.detailContainer}>
                <Grid>
                    <Grid className={classes.titleContainer}>
                        <Avatar style={{ marginRight: "10px" }}>12</Avatar>
                        <Typography variant="h4">{movie.title}</Typography>
                        {/* <Typography variant="h4">빛나는 순간</Typography> */}
                    </Grid>
                    <Grid xs={7} className={classes.rateContainer}>
                        <Grid className={classes.rateSubContainer}>
                            <Typography>관람객 평점</Typography>
                            <img
                                src={star}
                                alt=""
                                className={classes.startImage}
                            />
                            <Typography style={{ fontWeight: "700" }}>
                                8.9
                            </Typography>
                        </Grid>
                        <Grid className={classes.rateSubContainer}>
                            <Typography>예매율</Typography>
                            <Typography className={classes.subContainerText}>
                                {movie.rank}위 {movie.bookRate}%
                            </Typography>
                        </Grid>
                        <Grid className={classes.rateSubContainer}>
                            <Typography>누적관객수</Typography>
                            <Typography className={classes.subContainerText}>
                                {movie.viewers.toLocaleString("ko-KR")} 명
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <Grid xs={12}>
                    <Grid xs={5} className={classes.detailInfoContainer}>
                        <Typography>장르</Typography>
                        <Grid className={classes.detailInfoContentContainer}>
                            <Typography>{movie.genre}</Typography>
                            <Typography>{movie.releaseDate} 개봉</Typography>
                            <Typography>{movie.runningTime}분</Typography>
                            {/* <Typography>드라마 / 한국</Typography>
                            <Typography>2021.06.30 개봉</Typography>
                            <Typography>95분</Typography> */}
                        </Grid>
                    </Grid>
                    <Grid xs={2} className={classes.detailInfoContainer}>
                        <Typography>감독</Typography>
                        <Grid className={classes.detailInfoContentContainer}>
                            <Typography>{movie.director.name}</Typography>
                            {/* <Typography>소준문</Typography> */}
                        </Grid>
                    </Grid>
                    <Grid className={classes.detailInfoContainer}>
                        <Typography>출연</Typography>
                        <Grid
                            xs={4}
                            className={classes.detailInfoContentNameContainer}
                        >
                            {movie.actors.map((actor, idx) => (
                                <Typography>{actor.name}</Typography>
                            ))}
                            {/* <Typography>고두심</Typography>
                            <Typography>지형우</Typography>
                            <Typography>양정원</Typography>
                            <Typography>전혜진</Typography> */}
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
