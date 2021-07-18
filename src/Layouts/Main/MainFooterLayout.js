import React from "react";
import { Grid } from "@material-ui/core";

const MainFooterLayout = (props) => {
    return (
        <Grid
            xs={12}
            style={{
                display: "flex",
                justifyContent: "center",
                margin: "0 80px",
            }}
        >
            {props.children}
        </Grid>
    );
};

export default MainFooterLayout;
