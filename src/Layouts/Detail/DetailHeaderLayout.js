import React from "react";
import { Grid } from "@material-ui/core";

const DetailHeaderLayout = (props) => {
    return (
        <Grid
            xs={12}
            style={{
                // backgroundColor: "wheat",
                width: "90%",
                margin: "auto",
                display: "flex",
            }}
        >
            {props.children}
        </Grid>
    );
};

export default DetailHeaderLayout;
