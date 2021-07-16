import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

const DetailCarousel = (props) => {
    var items = [
        {
            name: "Random Name #1",
            img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202004/15496_105_4.jpg",
        },
        {
            name: "Random Name #2",
            img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202004/15496_105_7.jpg",
        },
        {
            name: "Random Name #2",
            img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202004/15496_105_8.jpg",
        },
        {
            name: "Random Name #2",
            img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202004/15496_105_9.jpg",
        },
    ];

    return (
        <Carousel animation="slide">
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
                backgroundColor: "#000000",
            }}
        >
            <img src={props.item.img} alt="" />

            {/* <Button className="CheckButton">Check it out!</Button> */}
        </Paper>
    );
};

export default DetailCarousel;
