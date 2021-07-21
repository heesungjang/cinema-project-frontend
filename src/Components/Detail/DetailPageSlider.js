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
    const { detailMovie } = props;
    console.log("DetailPageSlider: ", detailMovie);

    return (
        <Carousel animation="slide" navButtonsAlwaysVisible="true">
            {detailMovie.photos &&
                detailMovie.photos.map((photo, i) => (
                    <Item key={i} photo={photo} />
                ))}
        </Carousel>
    );
};

const Item = (props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <img src={props.photo} alt="" />
            {/* <Button className="CheckButton">Check it out!</Button> */}
        </Paper>
    );
};

export default DetailPageSlider;
