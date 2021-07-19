import React from "react";

import { makeStyles } from "@material-ui/styles";
import Carousel from "react-material-ui-carousel";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    itemContainer: {
        display: "flex",
        justifyContent: "space-around",
    },
    img: {
        height: "150px",
        width: "260px",
    },
});

const DetailPoster = () => {
    const classes = useStyles();
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
        },
    ];

    return (
        <Grid xs={12}>
            <Carousel
                animation="slide"
                timeout="900"
                navButtonsAlwaysVisible
                autoPlay="false"
                indicators="false"
                indicatorIconButtonProps={{
                    style: {
                        padding: "10px", // 1
                        color: "white", // 3
                    },
                }}
            >
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
        </Grid>
    );
};

function Item(props) {
    const classes = useStyles();
    return (
        <Grid>
            <Typography>포스터 스틸컷</Typography>
            <Grid xs={12} className={classes.itemContainer}>
                <Grid xs={3}>
                    <img
                        className={classes.img}
                        src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17630_105_1.jpg"
                        alt=""
                    />
                </Grid>
                <Grid xs={3}>
                    <img
                        className={classes.img}
                        src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17630_105_6.jpg"
                        alt=""
                    />
                </Grid>
                <Grid xs={3}>
                    <img
                        className={classes.img}
                        src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17630_105_10.jpg"
                        alt=""
                    />
                </Grid>
                <Grid xs={3}>
                    <img
                        className={classes.img}
                        src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17630_105_11.jpg"
                        alt=""
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default DetailPoster;
