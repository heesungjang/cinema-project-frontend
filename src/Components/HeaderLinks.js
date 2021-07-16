import React from "react";

import { Grid, Typography, Divider } from "@material-ui/core";

const HeaderLinks = (props) => {
  return (
    <Grid
      xs={6}
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "#fff",
      }}
    >
      <Typography>예매</Typography>
      <Divider
        orientation="vertical"
        flexItem
        style={{ backgroundColor: "#fff" }}
      />
      <Typography>영화</Typography>
      <Divider
        orientation="vertical"
        flexItem
        style={{ backgroundColor: "#fff" }}
      />
      <Typography>영화관</Typography>
      <Divider
        orientation="vertical"
        flexItem
        style={{ backgroundColor: "#fff" }}
      />
      <Typography>이벤트</Typography>
      <Divider
        orientation="vertical"
        flexItem
        style={{ backgroundColor: "#fff" }}
      />
      <Typography>스토어</Typography>
    </Grid>
  );
};

export default HeaderLinks;
