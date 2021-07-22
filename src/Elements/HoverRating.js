import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
};

const useStyles = makeStyles({
    root: {
        width: 200,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
});

export default function HoverRating({ value, setValue, hover, setHover }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {value !== null && (
                <>
                    <Box
                        ml={2}
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h4">
                            {labels[hover !== -1 ? hover : value]}{" "}
                        </Typography>
                        <Typography style={{ marginLeft: "5px" }}>
                            점
                        </Typography>
                    </Box>
                </>
            )}
            <Rating
                max={10}
                name="hover-feedback"
                value={value}
                precision={1}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
            />
        </div>
    );
}
