import React from "react";
import { Grid, Typography, Container, Divider } from "@material-ui/core";
import HeaderLinks from "./HeaderLinks";

import logo from "../images/logo.png";
import facebook from "../images/gnb_facebook_wht.png";
import youtube from "../images/gnb_youtube_wht.png";
import follow from "../images/gnb_follow_wht.png";
import signup from "../images/nav_side_my_wht.png";
import reserve from "../images/nav_side_reserve_wht.png";
import allMenu from "../images/nav_side_all_wht.png";

const Header = (props) => {
  return (
    <Container style={{ height: "115px", alignItems: "center" }}>
      <Grid xs={12} style={{ display: "flex", marginTop: "30px" }}>
        <Grid
          xs={4}
          style={{ display: "flex", color: "#fff", alignItems: "center" }}
        >
          <Typography>
            <span>
              <img src={facebook} alt="" />
            </span>
            <span style={{ margin: "0px 0px 0px 5px", fontSize: "12px" }}>
              좋아요
            </span>
          </Typography>
          <Typography style={{ margin: "0 15px" }}>
            <span>
              <img src={youtube} alt="" />
            </span>
            <span style={{ margin: "0px 0px 0px 5px", fontSize: "12px" }}>
              구독하기
            </span>
          </Typography>
          <Typography>
            <span>
              <img src={follow} alt="" />
            </span>
            <span style={{ margin: "0px 0px 0px 5px", fontSize: "12px" }}>
              팔로우
            </span>
          </Typography>
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
            alignItems: "center",
          }}
        >
          <Typography style={{ fontSize: "12px" }}>멤버십</Typography>
          <Typography style={{ margin: "0 15px", fontSize: "12px" }}>
            고객센터
          </Typography>
          <Typography style={{ fontSize: "12px" }}>로그인</Typography>
        </Grid>
      </Grid>

      <Divider
        variant="middle"
        style={{ margin: "10px 0", backgroundColor: "#fff" }}
      />

      <Grid
        xs={12}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid xs={4} />
        <HeaderLinks />
        <Grid
          xs={4}
          style={{
            display: "flex",
            color: "#fff",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Typography>
            <span>
              <img src={signup} alt="" />
            </span>
            <span style={{ margin: "0px 0px 0px 5px", fontSize: "12px" }}>
              회원가입
            </span>
          </Typography>
          <Typography style={{ margin: "0 15px" }}>
            <span>
              <img src={reserve} alt="" />
            </span>
            <span style={{ margin: "0px 0px 0px 5px", fontSize: "12px" }}>
              바로예매
            </span>
          </Typography>
          <Typography>
            <span>
              <img src={allMenu} alt="" />
            </span>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
