import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    mainContainer: {
        display: "flex",
        justifyContent: "center",
        margin: "200px 0 100px 0 ",
    },
});

const DetailAd = (props) => {
    const classes = useStyles();
    return (
        <Grid className={classes.mainContainer} xs={12}>
            <img
                src="https://caching2.lottecinema.co.kr/lotte_image/2021/Bus/Bus_980180.jpg"
                alt=""
            />
        </Grid>
    );
};

export default DetailAd;
