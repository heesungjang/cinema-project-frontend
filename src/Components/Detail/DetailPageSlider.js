import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles({
    paper: {
        borderRadius: "0px",
        justifyContent: "Center",
        display: "flex",
        height: "450px",
        // height: "774px",
        backgroundColor: "#000000",
    },
});

const DetailPageSlider = (props) => {
    const { movie } = props;
    const photos = movie.photos;
    // var items = [
    //     {
    //         name: "Random Name #1",
    //         img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17508_105_2.jpg",
    //     },
    //     {
    //         name: "Random Name #2",
    //         img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17508_105_5.jpg",
    //     },
    //     {
    //         name: "Random Name #2",
    //         img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17508_105_6.jpg",
    //     },
    //     {
    //         name: "Random Name #2",
    //         img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17508_105_8.jpg",
    //     },
    // ];

    return (
        <Carousel animation="slide" navButtonsAlwaysVisible="true">
            {photos.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
};

const Item = (props) => {
    console.log(props);
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <img src={props.item} alt="" />
            {/* <Button className="CheckButton">Check it out!</Button> */}
        </Paper>
    );
};

export default DetailPageSlider;
