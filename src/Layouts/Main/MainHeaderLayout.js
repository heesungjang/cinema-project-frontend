import React from "react";
import { Grid } from "@material-ui/core";

const MainHeaderLayout = (props) => {
  return (
    <Grid
      xs={12}
      style={{
        // backgroundColor: "wheat",
        width: "90%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0%)",
        zIndex: "2",
      }}
    >
      {props.children}
    </Grid>
  );
};

export default MainHeaderLayout;
