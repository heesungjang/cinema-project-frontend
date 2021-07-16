import React from "react";
import { Grid, Typography, Container, Divider } from "@material-ui/core";
import HeaderLinks from "./HeaderLinks";

import logo from "../images/logo.png";

const Header = (props) => {
  return (
    <Container style={{ height: "115px", alignItems: "center" }}>
      <Grid xs={12} style={{ display: "flex", marginTop: "30px" }}>
        <Grid xs={4} style={{ display: "flex", color: "#fff" }}>
          <Typography>좋아요</Typography>
          <Typography style={{ margin: "0 15px" }}>구독하기</Typography>
          <Typography>팔로우</Typography>
        </Grid>

        <Grid xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <Typography>
            <img src={logo} alt="Lotte Cinema" />
          </Typography>
        </Grid>

        <Grid
          xs={4}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            color: "#fff",
            fontSize: "12px",
          }}
        >
          <Typography>멤버십</Typography>
          <Typography style={{ margin: "0 15px" }}>고객센터</Typography>
          <Typography>로그인</Typography>
        </Grid>
      </Grid>

      <Divider
        variant="middle"
        style={{ margin: "10px 0", backgroundColor: "#fff" }}
      />

      <Grid xs={12} style={{ display: "flex", justifyContent: "center" }}>
        <HeaderLinks />
      </Grid>
    </Container>
  );
};

export default Header;
