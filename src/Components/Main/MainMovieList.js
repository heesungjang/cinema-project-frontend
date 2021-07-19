import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Divider,
} from "@material-ui/core";

import star from "../../images/ic_star.png";
import heartOff from "../../images/heart_off.png";

const useStyles = makeStyles({
    root: {
        maxWidth: 184,
        maxHeight: 318,
    },
    media: {
        height: 262,
    },
});

const MainMovieList = (props) => {
    const classes = useStyles();

    const movie_list = useSelector((state) => state.movie.main_movie_list);
    // console.log(movie_list);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    return (
        <>
            <Container>
                <Slider {...settings}>
                    {movie_list.map((movie, i) => (
                        <Item key={i} item={movie} />
                    ))}
                </Slider>
            </Container>
        </>
    );
};

function Item(props) {
    const classes = useStyles();

    return (
        <>
            <Poster>
                <Card
                    id="card"
                    className={classes.root}
                    style={{ backgroundColor: "black" }}
                >
                    <CardContent id="card_content" style={{ padding: 0 }}>
                        {/* 영화 포스터 */}
                        <CardMedia
                            id="card_media"
                            className={classes.media}
                            image={props.item.url}
                            style={{ position: "relative" }}
                        >
                            <HoverMenu id="hover_menu">
                                <Button id="menu_button">예매하기</Button>
                                <Button id="menu_button">상세보기</Button>
                            </HoverMenu>
                            {/* 영화 순위 */}
                            <span
                                style={{
                                    position: "absolute",
                                    bottom: "0px",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "26px",
                                    fontStyle: "italic",
                                    padding: "0px 0px 0px 10px",
                                    zIndex: "98",
                                }}
                            >
                                {props.item.rank}
                            </span>
                            <Gradation />
                        </CardMedia>

                        {/* 영화 정보 (영화 이름이 없으면 출력X) */}
                        {props.item.name && (
                            <CardContent style={{ padding: "0px" }}>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    style={{
                                        height: "36px",
                                        margin: "20px 0px 0px 0px",
                                        textAlign: "center",
                                        color: "white",
                                        fontSize: "13px",
                                    }}
                                >
                                    {props.item.name}
                                    <div
                                        style={{
                                            color: "white",
                                            fontSize: "11px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <span>예매율 {props.item.rate}</span>
                                        <Divider
                                            orientation="vertical"
                                            flexItem
                                            style={{
                                                backgroundColor: "#fff",
                                                height: "10px",
                                                margin: "auto 10px",
                                            }}
                                        />
                                        <span
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <img src={star} alt="" />
                                            <span style={{ marginLeft: "3px" }}>
                                                {props.item.star}
                                            </span>
                                        </span>
                                        <Divider
                                            orientation="vertical"
                                            flexItem
                                            style={{
                                                backgroundColor: "#fff",
                                                height: "10px",
                                                margin: "auto 10px",
                                            }}
                                        />
                                        <span>
                                            <img src={heartOff} alt="" />
                                        </span>
                                    </div>
                                </Typography>
                            </CardContent>
                        )}
                    </CardContent>
                </Card>
            </Poster>
        </>
    );
}

const Container = styled.div`
    width: 980px;
    height: 355px;
    margin: 40px auto 0px;
`;

const Poster = styled.div`
    &:hover > #card > #card_content > #card_media > #hover_menu {
        display: flex;
    }
`;

const Gradation = styled.div`
    width: 100%;
    height: 30px;
    position: absolute;
    top: 234px;
    left: 0;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.3) 50%,
        rgba(0, 0, 0, 0.7) 100%
    );
`;

const HoverMenu = styled.div`
    width: 184px;
    height: 262px;
    position: absolute;
    top: 0;
    left: 0;
    /* display: flex; */
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
`;

const Button = styled.button`
    width: 145px;
    margin: 6px 0px;
    border: 2px solid white;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    padding: 3px 0px;
    &:hover {
        cursor: pointer;
    }
`;

export default MainMovieList;
