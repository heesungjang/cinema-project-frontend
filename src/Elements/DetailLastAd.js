import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
    mainContainer: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#FFD60C",
        marginBottom: "100px",
    },
});

const DetailLastAd = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.mainContainer}>
            <img
                src="https://caching2.lottecinema.co.kr/lotte_image/2021/Inbyu/0316/Inbyu_980240.png"
                alt=""
            />
        </Grid>
    );
};

export default DetailLastAd;
