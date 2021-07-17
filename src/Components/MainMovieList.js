import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 185,
    maxHeight: 262,
  },
  paper: {
    height: 262,
    width: 185,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const MainMovieList = (props) => {
  const items = [
    {
      name: "Random Name #1",
      url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202004/15496_101_1.jpg",
    },
    {
      name: "Random Name #2",
      url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17630_101_1.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Slider>
      {/* <span>card</span>
            <span>card</span>
            <span>card</span>
            <span>card</span>
            <span>card</span>
            <span>card</span>
            <span>card</span>
            <span>card</span>
            <span>card</span> */}
    </>
  );
};

function Item(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={props.item.url} />
      </Card>
    </>
  );
}

export default MainMovieList;
