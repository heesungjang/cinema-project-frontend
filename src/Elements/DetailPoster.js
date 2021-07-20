import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DetailPoster = (props) => {
    const { movie } = props;

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <Container>
            <Slider {...settings}>
                {movie.photos.map((movie, i) => (
                    <Item key={i} item={movie} />
                ))}
            </Slider>
        </Container>
    );
};

function Item(props) {
    return (
        <>
            <StillCut>
                <Img src={props.item} alt="" />
            </StillCut>
        </>
    );
}

const Container = styled.div`
    width: 932px;
    height: 140px;
    margin: 0 auto;
    .slick-prev:before {
        opacity: 1;
        color: #eee;
    }
    .slick-next:before {
        opacity: 1;
        color: #eee;
    }
`;

const StillCut = styled.div`
    width: 233px;
    height: 133px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

export default DetailPoster;
