import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMovieDetail, getMovies } from "../Redux/async/movies";

import Header from "../shared/Header";

import MainPageLayout from "../Layouts/Main/MainPageLayout";

import DetailInfo from "../Components/Detail/DetailInfo";
import DetailContent from "../Components/Detail/DetailContent";
import DetailSubSection from "../Components/Detail/DetailSubSection";
import DetailHeaderLayout from "../Layouts/Detail/DetailHeaderLayout";
import DetailContentLayout from "../Layouts/Detail/DetailContentLayout";
import DetailSubSectionLayout from "../Layouts/Detail/DetailSubSectionLayout";
import DetailAd from "../Elements/DetailAd";
import DetailLastAd from "../Elements/DetailLastAd";
import Footer from "../shared/Footer";

const DetailPage = (props) => {
    const dispatch = useDispatch();
    const detailMovie = useSelector((state) => state.detail.movieData);
    const movies = useSelector((state) => state.movie.movies);
    const is_added = useSelector((state) => state.detail.is_added);

    // 예매율 순위
    const rank = movies.result && movies.result.indexOf(props.match.params.id);
    // console.log("rank: ", rank);

    useEffect(() => {
        dispatch(getMovieDetail(props.match.params.id));
    }, []);

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <React.Fragment>
            <MainPageLayout>
                <DetailHeaderLayout>
                    <Header page={"detail"} />
                </DetailHeaderLayout>
                <DetailSubSectionLayout>
                    <DetailSubSection detailMovie={detailMovie} />
                </DetailSubSectionLayout>
                <DetailContentLayout>
                    <DetailContent
                        {...props}
                        detailMovie={detailMovie}
                        rank={rank}
                    />
                    <DetailInfo detailMovie={detailMovie} />
                    <DetailAd />
                </DetailContentLayout>
                <DetailLastAd />
                <DetailHeaderLayout>
                    <Footer />
                </DetailHeaderLayout>
            </MainPageLayout>
        </React.Fragment>
    );
};

export default DetailPage;
