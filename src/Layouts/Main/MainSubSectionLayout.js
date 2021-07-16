import React from "react";
import { Grid } from "@material-ui/core";

const MainSubSectionLayout = (props) => {
    return (
        <Grid x={12} style={{ width: "100%", backgroundColor: "black" }}>
            {props.children}
        </Grid>
    );
};

export default MainSubSectionLayout;
