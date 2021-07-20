import React from "react";
import { useSelector } from "react-redux";

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
    console.log(props);
    const movies = useSelector((state) => state.movie.main_movie_list);
    console.log(movies);
    const movie = movies.find((movie) => movie.title === props.match.params.id);
    console.log(movie);
    return (
        <React.Fragment>
            <MainPageLayout>
                <DetailHeaderLayout>
                    <Header page={"detail"} />
                </DetailHeaderLayout>
                <DetailSubSectionLayout>
                    <DetailSubSection movie={movie} />
                </DetailSubSectionLayout>
                <DetailContentLayout>
                    <DetailContent {...props} movie={movie} />
                    <DetailInfo movie={movie} />
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
