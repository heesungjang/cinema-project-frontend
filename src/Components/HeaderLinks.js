import React from "react";

import { Grid, Typography, Divider } from "@material-ui/core";

const HeaderLinks = (props) => {
  return (
    <Grid
      xs={4}
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "#fff",
      }}
    >
      <Typography style={{ fontSize: "14px", fontWeight: "bold" }}>
        예매
      </Typography>
      <Divider
        orientation="vertical"
        flexItem
        style={{ backgroundColor: "#fff", height: "9px", margin: "auto 10px" }}
      />
      <Typography style={{ fontSize: "14px", fontWeight: "bold" }}>
        영화
      </Typography>
      <Divider
        orientation="vertical"
        flexItem
        style={{ backgroundColor: "#fff", height: "9px", margin: "auto 10px" }}
      />
      <Typography style={{ fontSize: "14px", fontWeight: "bold" }}>
        영화관
      </Typography>
      <Divider
        orientation="vertical"
        flexItem
        style={{ backgroundColor: "#fff", height: "9px", margin: "auto 10px" }}
      />
      <Typography style={{ fontSize: "14px", fontWeight: "bold" }}>
        이벤트
      </Typography>
      <Divider
        orientation="vertical"
        flexItem
        style={{ backgroundColor: "#fff", height: "9px", margin: "auto 10px" }}
      />
      <Typography style={{ fontSize: "14px", fontWeight: "bold" }}>
        스토어
      </Typography>
    </Grid>
  );
};

export default HeaderLinks;
