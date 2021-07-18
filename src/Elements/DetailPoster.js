import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

const DetailPoster = () => {
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
            >
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
        </Grid>
    );
};

function Item(props) {
    return (
        <Grid>
            <Typography>포스터 스틸컷</Typography>
            <Grid
                xs={12}
                style={{ display: "flex", justifyContent: "space-around" }}
            >
                <Grid xs={3}>
                    <img
                        style={{ height: "150px", width: "260px" }}
                        src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17630_105_1.jpg"
                        alt=""
                    />
                </Grid>
                <Grid xs={3}>
                    <img
                        style={{ height: "150px", width: "260px" }}
                        src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17630_105_6.jpg"
                        alt=""
                    />
                </Grid>
                <Grid xs={3}>
                    <img
                        style={{ height: "150px", width: "260px" }}
                        src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17630_105_10.jpg"
                        alt=""
                    />
                </Grid>
                <Grid xs={3}>
                    <img
                        style={{ height: "150px", width: "260px" }}
                        src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17630_105_11.jpg"
                        alt=""
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default DetailPoster;
