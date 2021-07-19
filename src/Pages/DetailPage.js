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
    const movies = useSelector((state) => state.movie);
    console.log(movies);
    return (
        <React.Fragment>
            <MainPageLayout>
                <DetailHeaderLayout>
                    <Header page={"detail"} />
                </DetailHeaderLayout>
                <DetailSubSectionLayout>
                    <DetailSubSection />
                </DetailSubSectionLayout>
                <DetailContentLayout>
                    <DetailContent {...props} />
                    <DetailInfo />
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
