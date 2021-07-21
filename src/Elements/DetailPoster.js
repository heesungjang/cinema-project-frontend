import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DetailPoster = (props) => {
    const { detailMovie } = props;

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <Container>
            <Title>
                포스터/스틸컷({detailMovie.photos && detailMovie.photos.length})
            </Title>
            <Slider {...settings}>
                {detailMovie.photos &&
                    detailMovie.photos.map((photo, i) => (
                        <Item key={i} photo={photo} />
                    ))}
            </Slider>
        </Container>
    );
};

function Item(props) {
    return (
        <>
            <StillCut>
                <Img src={props.photo} alt="" />
            </StillCut>
        </>
    );
}

const Container = styled.div`
    width: 932px;
    height: 140px;
    margin: 70px auto 0px;
    .slick-prev:before {
        opacity: 1;
        color: #eee;
    }
    .slick-next:before {
        opacity: 1;
        color: #eee;
    }
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
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
