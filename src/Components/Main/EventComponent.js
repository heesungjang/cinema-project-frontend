import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

function EventComponent() {
  return (
    <>
      <Container>
        <Title>이벤트</Title>
        <Grid xs={12}>
          <Ul style={{ display: "flex", position: "relative" }}>
            <Li
              bg_image="https://caching.lottecinema.co.kr//Media/Event/c97f5bc0f4384fcdabbb877d8502181b.jpg"
              width="182"
              top="0"
              left="0"
            ></Li>
            <Li
              bg_image="https://caching.lottecinema.co.kr//Media/Event/00ca0af6ef4c4dd481774b91e2fb980e.jpg"
              width="182"
              top="0"
              left="197"
            ></Li>
            <Li
              bg_image="https://caching.lottecinema.co.kr//Media/Event/c2980a0ab2c6425189212ecdeb529c25.jpg"
              width="285"
              top="0"
              left="394"
            ></Li>
            <Li
              bg_image="https://caching2.lottecinema.co.kr/lotte_image/2020/Hyundaicard/Hyundaicard_296511_1.jpg"
              width="285"
              height="511"
              top="0"
              left="694"
            ></Li>
            <Li
              bg_image="https://caching.lottecinema.co.kr//Media/Event/8b6a18411525493580695464be00addf.jpg"
              width="478"
              top="260"
              left="0"
            ></Li>
            <Li
              bg_image="https://caching.lottecinema.co.kr//Media/Event/fff7be8cbf59419a850993a27fbebbba.jpg"
              width="182"
              top="260"
              left="493"
            ></Li>
          </Ul>
        </Grid>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 980px;
  height: 540px;
  margin: 70px auto 0px;
  font-weight: bold;
`;

const Title = styled.div`
  font-size: 17px;
  margin: 0px 0px 10px;
`;

const Ul = styled.ul`
  display: flex;
  position: relative;
`;

const Li = styled.li`
  ${(props) =>
    props.bg_image ? `background-image: url(${props.bg_image});` : ""};
  ${(props) => (props.width ? `width: ${props.width}px;` : "")}
  ${(props) => (props.height ? `height: ${props.height}px;` : "height: 250px;")}
  position: absolute;
  ${(props) => (props.top ? `top: ${props.top}px;` : "")}
  ${(props) => (props.left ? `left: ${props.left}px;` : "")}
  border-radius: 5px;
`;

export default EventComponent;
