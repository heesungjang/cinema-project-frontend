import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 185,
    maxHeight: 262,
  },
  media: {
    height: 262,
  },
});

const MainMovieList = (props) => {
  const classes = useStyles();
  const items = [
    {
      name: "Random Name #1",
      url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202004/15496_101_1.jpg",
      rank: "1",
    },
    {
      name: "Random Name #2",
      url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17630_101_1.jpg",
      rank: "2",
    },
    {
      name: "Random Name #3",
      url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17623_101_1.jpg",
      rank: "3",
    },
    {
      name: "Random Name #4",
      url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17598_101_1.jpg",
      rank: "4",
    },
    {
      name: "Random Name #5",
      url: "https://caching2.lottecinema.co.kr/lotte_image/2021/Ido/Ido_184262.jpg",
      rank: "AD",
    },
    {
      name: "Random Name #6",
      url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202105/17387_101_1.jpg",
      rank: "5",
    },
    {
      name: "Random Name #7",
      url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17526_101_1.jpg",
      rank: "6",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <Container>
        <Slider {...settings}>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Slider>
      </Container>
    </>
  );
};

function Item(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={props.item.url} />
        <span
          style={{
            position: "absolute",
            bottom: "0px",
            color: "white",
            fontWeight: "bold",
            fontSize: "26px",
            fontStyle: "italic",
            padding: "0px 0px 0px 10px",
          }}
        >
          {props.item.rank}
        </span>
      </Card>
    </>
  );
}

const Container = styled.div`
  width: 980px;
  margin: 0 auto;
`;

export default MainMovieList;
