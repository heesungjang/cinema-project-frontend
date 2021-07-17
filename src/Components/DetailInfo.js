import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Grid, Button } from "@material-ui/core";

const useStyles = makeStyles({
    button: {
        padding: "15px",
        borderTop: "None",
        borderLeft: "None",
        borderRight: "None",
    },
});

const DetailInfo = (props) => {
    const classes = useStyles();

    return (
        <Grid xs={12} style={{ display: "flex", margin: "35px 0" }}>
            <Grid xs={6}>
                <Button className={classes.button} variant="outlined" fullWidth>
                    영화정보
                </Button>
            </Grid>
            <Grid xs={6}>
                <Button className={classes.button} variant="outlined" fullWidth>
                    평점 및 관람편 (98)
                </Button>
            </Grid>
        </Grid>
    );
};

export default DetailInfo;
