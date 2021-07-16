import React from "react";
import { Grid } from "@material-ui/core";

const MainHeaderLayout = (props) => {
    return (
        <Grid
            xs={12}
            style={{
                width: "90%",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {props.children}
        </Grid>
    );
};

export default MainHeaderLayout;
