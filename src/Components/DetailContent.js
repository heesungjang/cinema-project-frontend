import React from "react";
import { Grid, Typography, Avatar } from "@material-ui/core";

const DetailContent = () => {
    return (
        <Grid xs={12} style={{ display: "flex" }}>
            <Grid xs={3} style={{ display: "flex", position: "relative" }}>
                <Grid>
                    <img
                        style={{
                            height: "290px",
                            width: "200px",
                            position: "absolute",
                            top: "-40px",
                            left: "120px",
                            borderRadius: "5px",
                        }}
                        src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17508_103_1.jpg"
                        alt=""
                    />
                </Grid>
            </Grid>
            <Grid xs={9} style={{ margin: "40px 0px 0 80px" }}>
                <Grid
                    xs={12}
                    style={{ display: "flex", flexDirection: "column" }}
                >
                    <Grid style={{ display: "flex", marginBottom: "20px" }}>
                        <Avatar style={{ marginRight: "10px" }} />
                        <Typography variant="h4">빛나는 순간</Typography>
                    </Grid>
                    <Grid
                        xs={7}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography variant="h6">빛나는 순간</Typography>
                        <Typography variant="h6">빛나는 순간</Typography>
                        <Typography variant="h6">빛나는 순간</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DetailContent;
