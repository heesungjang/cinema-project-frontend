import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
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
        backgroundColor: "black",
    },
    media: {
        height: 262,
        position: "relative",
    },
    cardContent: {
        padding: 0,
    },
    movieTitle: {
        height: "36px",
        margin: "20px 0px 0px 0px",
        textAlign: "center",
        color: "white",
        fontSize: "13px",
        fontWeight: "600",
    },
    verticalDivider: {
        backgroundColor: "#fff",
        height: "10px",
        margin: "auto 10px",
    },
});

const MainMovieList = (props) => {
    const { history, movies } = props;

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
                    {movies.title &&
                        movies.title.map((title, i) =>
                            movies.photos[i] !== null ? (
                                <Item
                                    key={i}
                                    title={title}
                                    rank={i + 1}
                                    book_rate={movies.bookRate[i]}
                                    photos={movies.photos[i]}
                                    rate={movies.rate[i]}
                                    result={movies.result[i]}
                                    trailers={movies.trailers[i]}
                                    history={history}
                                />
                            ) : null
                        )}
                </Slider>
            </Container>
        </>
    );
};

function Item(props) {
    const classes = useStyles();
    const { history, rank, title, book_rate, photos, rate, result, trailers } =
        props;

    const goDetail = () => {
        history.push(`/detail/${result}`);
    };

    return (
        <>
            <Poster>
                <Card id="card" className={classes.root}>
                    <CardContent
                        id="card_content"
                        className={classes.cardContent}
                    >
                        {/* 영화 포스터 */}
                        <CardMedia
                            id="card_media"
                            className={classes.media}
                            image={photos}
                        >
                            {/* 포스터에 마우스 커서를 올렸을 때 나오는 버튼 */}
                            <HoverMenu id="hover_menu">
                                <Button id="menu_button">예매하기</Button>
                                <Button id="menu_button" onClick={goDetail}>
                                    상세보기
                                </Button>
                            </HoverMenu>
                            {/* 영화 순위 */}
                            <RankContainer>{rank}</RankContainer>
                            {/* 영화 포스터 하단 그라데이션 */}
                            <Gradation />
                        </CardMedia>

                        {/* 영화 정보 (영화 이름이 없으면 출력X) */}
                        {title && (
                            <CardContent style={{ padding: "0px" }}>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    className={classes.movieTitle}
                                >
                                    {title}
                                    <PosterSubBox>
                                        <span>
                                            예매율{" "}
                                            {(book_rate * 100).toFixed(1)} %
                                        </span>
                                        <Divider
                                            orientation="vertical"
                                            flexItem
                                            className={classes.verticalDivider}
                                        />
                                        <PosterSubBoxSpan>
                                            <img src={star} alt="" />
                                            <span style={{ marginLeft: "3px" }}>
                                                {rate === 0
                                                    ? 0
                                                    : rate.toFixed(1)}
                                            </span>
                                        </PosterSubBoxSpan>
                                        <Divider
                                            orientation="vertical"
                                            flexItem
                                            className={classes.verticalDivider}
                                        />
                                        <span>
                                            <img src={heartOff} alt="" />
                                        </span>
                                    </PosterSubBox>
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

const RankContainer = styled.span`
    position: absolute;
    bottom: 0px;
    color: white;
    font-weight: bold;
    font-size: 26px;
    font-style: italic;
    padding: 0px 0px 0px 10px;
    z-index: 98;
`;

const PosterSubBox = styled.div`
    color: white;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PosterSubBoxSpan = styled.span`
    display: flex;
    align-items: center;
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
