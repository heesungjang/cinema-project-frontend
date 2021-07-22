import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    mainContainer: { marginBottom: "80px" },
    subContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    videoContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    videoText: {
        marginTop: "5px",
    },
});

const DetailTrailer = (props) => {
    const classes = useStyles();
    const { detailMovie } = props;

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Container>
            <Title>
                트레일러({detailMovie.trailers && detailMovie.trailers.length})
            </Title>
            <Slider {...settings}>
                {detailMovie.trailers &&
                    detailMovie.trailers.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
            </Slider>
        </Container>
        // <Grid className={classes.mainContainer}>
        //     <Typography>트레일러</Typography>
        //     <Grid xs={12} className={classes.subContainer}>
        //         <Grid xs={4} className={classes.videoContainer}>
        //             <ReactPlayer
        //                 controls="true"
        //                 width="300px"
        //                 height="200px"
        //                 url={movie.trailers[0]}
        //             />
        //             <Typography className={classes.videoText}>
        //                 1차 예고편
        //             </Typography>
        //         </Grid>
        //         <Grid xs={4} className={classes.videoContainer}>
        //             <ReactPlayer
        //                 controls="true"
        //                 width="300px"
        //                 height="200px"
        //                 url={movie.trailers[1]}
        //             />
        //             <Typography className={classes.videoText}>
        //                 2차 예고편
        //             </Typography>
        //         </Grid>
        //         <Grid xs={4} className={classes.videoContainer}>
        //             <ReactPlayer
        //                 controls="true"
        //                 width="300px"
        //                 height="200px"
        //                 url={movie.trailers[2]}
        //             />
        //             <Typography className={classes.videoText}>
        //                 3차 예고편
        //             </Typography>
        //         </Grid>
        //     </Grid>
        // </Grid>
    );
};

function Item(props) {
    return (
        <>
            <ReactPlayer
                controls="true"
                width="310px"
                height="193px"
                url={props.item}
            />
        </>
    );
}

const Container = styled.div`
    width: 932px;
    height: 200px;
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

const Title = styled.div`
    font-weight: 600;
    font-size: 15px;
`;

export default DetailTrailer;
