import React from "react";

import { makeStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles({
    paper: {
        borderRadius: "0px",
        justifyContent: "Center",
        display: "flex",
        // height: "450px",
        height: "774px",
        backgroundColor: "#000000",
    },
});

const DetailCarousel = (props) => {
    var items = [
        {
            name: "Random Name #1",
            img: "https://caching2.lottecinema.co.kr/lotte_image/2021/Ice/0715/Ice_1920774.jpg",
        },
        {
            name: "Random Name #2",
            img: "https://caching2.lottecinema.co.kr/lotte_image/2021/Black/0712/Black_1920774.jpg",
        },
        {
            name: "Random Name #2",
            img: "https://caching2.lottecinema.co.kr/lotte_image/2021/Squad/Squad_1920774.jpg",
        },
        {
            name: "Random Name #2",
            img: "https://caching2.lottecinema.co.kr/lotte_image/2021/Moga/Moga_1920774.jpg",
        },
    ];

  return (
    <Carousel animation="slide" navButtonsAlwaysVisible="true">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = (props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <img src={props.item.img} alt="" />
            {/* <Button className="CheckButton">Check it out!</Button> */}
        </Paper>
    );
};

export default DetailCarousel;
