import React from "react";
import ReactPlayer from "react-player";
import { Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    mainContainer: { marginBottom: "80px" },
    subContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    videoContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    videoText: {
        marginTop: "5px",
    },
});

const DetailTrailer = (props) => {
    const { movie } = props;
    const classes = useStyles();
    return (
        <Grid className={classes.mainContainer}>
            <Typography>트레일러</Typography>
            <Grid xs={12} className={classes.subContainer}>
                <Grid xs={4} className={classes.videoContainer}>
                    <ReactPlayer
                        controls="true"
                        width="300px"
                        height="200px"
                        url={movie.trailers[0]}
                    />
                    <Typography className={classes.videoText}>
                        1차 예고편
                    </Typography>
                </Grid>
                <Grid xs={4} className={classes.videoContainer}>
                    <ReactPlayer
                        controls="true"
                        width="300px"
                        height="200px"
                        url={movie.trailers[1]}
                    />
                    <Typography className={classes.videoText}>
                        2차 예고편
                    </Typography>
                </Grid>
                <Grid xs={4} className={classes.videoContainer}>
                    <ReactPlayer
                        controls="true"
                        width="300px"
                        height="200px"
                        url={movie.trailers[2]}
                    />
                    <Typography className={classes.videoText}>
                        3차 예고편
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DetailTrailer;
