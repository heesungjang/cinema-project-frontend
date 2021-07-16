import React from "react";
import { Grid } from "@material-ui/core";

const DetailSubSectionLayout = (props) => {
    return (
        <Grid
            xs={12}
            style={{
                backgroundColor: "black",
                marginTop: "20px",
            }}
        >
            {props.children}
        </Grid>
    );
};

export default DetailSubSectionLayout;
