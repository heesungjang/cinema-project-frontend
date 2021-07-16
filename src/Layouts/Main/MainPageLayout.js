import React from "react";
import { Grid } from "@material-ui/core";

const MainPageLayout = (props) => {
  return (
    <Grid
      xs={12}
      style={{
        // backgroundColor: "red",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      {props.children}
    </Grid>
  );
};

export default MainPageLayout;
