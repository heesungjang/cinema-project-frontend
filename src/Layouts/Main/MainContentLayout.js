import React from "react";
import { Grid } from "@material-ui/core";

const MainContentLayout = (props) => {
    return (
        <Grid
            xs={12}
            style={{
                width: "75%",
                backgroundColor: "yellow",
                display: "flex",
                margin: "auto",
                flexDirection: "column",
            }}
        >
            {props.children}
        </Grid>
    );
};

export default MainContentLayout;
