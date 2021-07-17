import React from "react";
import { Grid } from "@material-ui/core";

const DetailContentLayout = (props) => {
    return (
        <Grid
            xs={12}
            style={{
                width: "90%",
                display: "flex",
                margin: "auto",
                flexDirection: "column",
            }}
        >
            {props.children}
        </Grid>
    );
};

export default DetailContentLayout;
