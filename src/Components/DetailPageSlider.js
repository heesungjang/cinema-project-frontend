import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

const DetailPageSlider = (props) => {
    var items = [
        {
            name: "Random Name #1",
            img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17508_105_2.jpg",
        },
        {
            name: "Random Name #2",
            img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17508_105_5.jpg",
        },
        {
            name: "Random Name #2",
            img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17508_105_6.jpg",
        },
        {
            name: "Random Name #2",
            img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17508_105_8.jpg",
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
    return (
        <Paper
            style={{
                borderRadius: "0px",
                justifyContent: "Center",
                display: "flex",
                height: "450px",
                // height: "774px",
                backgroundColor: "#000000",
            }}
        >
            <img src={props.item.img} alt="" />
            {/* <Button className="CheckButton">Check it out!</Button> */}
        </Paper>
    );
};

export default DetailPageSlider;
