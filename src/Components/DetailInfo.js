import React from "react";

import { Grid, Button } from "@material-ui/core";

const DetailInfo = (props) => {
    return (
        <Grid xs={12} style={{ display: "flex", margin: "35px 0" }}>
            <Grid xs={6}>
                <Button variant="outlined" fullWidth>
                    영화정보
                </Button>
            </Grid>
            <Grid xs={6}>
                <Button variant="outlined" fullWidth>
                    평점 및 관람편 (98)
                </Button>
            </Grid>
        </Grid>
    );
};

export default DetailInfo;
