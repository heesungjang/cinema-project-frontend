import React from "react";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import { Gradient } from "@material-ui/icons";

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
    <>
      <Carousel animation="slide" navButtonsAlwaysVisible="true">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Gradation location="top" />
      <Gradation top="624" />
    </>
  );
};

const Item = (props) => {
  return (
    <>
      <Paper
        style={{
          borderRadius: "0px",
          justifyContent: "Center",
          display: "flex",
          // height: "450px",
          height: "774px",
          backgroundColor: "#000000",
          background:
            "linear-gradient(to-bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 1) 100%)",
        }}
      >
        <img src={props.item.img} alt="" />
        {/* <Button className="CheckButton">Check it out!</Button> */}
      </Paper>
    </>
  );
};

const Gradation = styled.div`
  width: 100%;
  height: 150px;
  position: absolute;
  ${(props) => (props.top ? `top: ${props.top}px;` : "top: 0px;")}
  left: 0;
  ${(props) =>
    props.location === "top"
      ? "background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 1) 100%);"
      : "background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 1) 100%);"}
`;

export default DetailCarousel;
