import React from "react";

import { makeStyles } from "@material-ui/core";
import { Grid, Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles({
    mainContainer: {
        display: "flex",
        justifyContent: "space-between",
        color: (props) => (props.page === "main" ? "#fff" : "#000"),
    },
    divider: {
        backgroundColor: (props) => (props.page === "main" ? "#fff" : "#000"),
        height: "9px",
        margin: "auto 10px",
    },
    text: {
        fontSize: "14px",
        fontWeight: (props) => (props.page === "main" ? "bold" : "400"),
    },
});

const HeaderLinks = (props) => {
    const classes = useStyles(props);
    return (
        <Grid xs={4} className={classes.mainContainer}>
            <Typography className={classes.text}>예매</Typography>
            <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
            />
            <Typography className={classes.text}>영화</Typography>
            <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
            />
            <Typography className={classes.text}>영화관</Typography>
            <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
            />
            <Typography className={classes.text}>이벤트</Typography>
            <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
            />
            <Typography className={classes.text}>스토어</Typography>
        </Grid>
    );
};

export default HeaderLinks;
