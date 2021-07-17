import React from "react";

import styled from "styled-components";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Grid, Typography, Avatar, Divider, Button } from "@material-ui/core";

const detailInfoContainer = styled.div`
    display: "flex";
`;

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
            <Grid xs={9} style={{ margin: "40px 0px 0 150px" }}>
                <Grid
                    xs={12}
                    style={{ display: "flex", flexDirection: "column" }}
                >
                    <Grid style={{ display: "flex", marginBottom: "20px" }}>
                        <Avatar style={{ marginRight: "10px" }}>12</Avatar>
                        <Typography variant="h4">빛나는 순간</Typography>
                    </Grid>
                    <Grid
                        xs={7}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <detailInfoContainer>
                            <Typography>관람객 평점</Typography>
                            <Typography>8.9</Typography>
                        </detailInfoContainer>
                        <detailInfoContainer>
                            <Typography>예매율</Typography>
                            <Typography>17위 0.0%</Typography>
                        </detailInfoContainer>
                        <detailInfoContainer>
                            <Typography>누적관객수</Typography>
                            <Typography>14,728 명</Typography>
                        </detailInfoContainer>
                    </Grid>
                </Grid>
                <Divider style={{ margin: "20px 0" }} />
                <Grid xs={12}>
                    <Grid
                        xs={5}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography>장르</Typography>
                        <Typography>드라마 / 한국</Typography>
                        <Divider orientation="vertical" />
                        <Typography>2021.06.30 개봉</Typography>
                        <Divider orientation="vertical" />
                        <Typography>95분</Typography>
                    </Grid>
                    <Grid
                        xs={2}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography>감독</Typography>
                        <Typography>소준문</Typography>
                    </Grid>
                    <Grid
                        xs={5}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography>출연</Typography>
                        <Typography>고두심</Typography>
                        <Typography>지형우</Typography>
                        <Typography>양정원</Typography>
                        <Typography>전혜진</Typography>
                    </Grid>
                </Grid>
                <Grid
                    xs={12}
                    style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <ShareIcon />
                    <FavoriteBorderIcon style={{ margin: "0px 40px" }} />
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ borderRadius: "25px", padding: "10px 30px" }}
                    >
                        Secondary
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DetailContent;
