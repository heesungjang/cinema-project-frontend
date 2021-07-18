import React from "react";

import { Grid, Typography, Divider } from "@material-ui/core";

const HeaderLinks = (props) => {
    const { page } = props;
    return (
        <Grid
            xs={6}
            style={{
                display: "flex",
                justifyContent: "space-between",
                color: page === "main" ? "#fff" : "#000",
            }}
        >
            <Typography>예매</Typography>
            <Divider
                orientation="vertical"
                flexItem
                style={{ backgroundColor: page === "main" ? "#fff" : "#000" }}
            />
            <Typography>영화</Typography>
            <Divider
                orientation="vertical"
                flexItem
                style={{ backgroundColor: page === "main" ? "#fff" : "#000" }}
            />
            <Typography>영화관</Typography>
            <Divider
                orientation="vertical"
                flexItem
                style={{ backgroundColor: page === "main" ? "#fff" : "#000" }}
            />
            <Typography>이벤트</Typography>
            <Divider
                orientation="vertical"
                flexItem
                style={{ backgroundColor: page === "main" ? "#fff" : "#000" }}
            />
            <Typography>스토어</Typography>
        </Grid>
    );
};

export default HeaderLinks;
