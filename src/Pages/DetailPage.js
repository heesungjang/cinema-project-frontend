import React from "react";

import Header from "../Components/Header";

import MainPageLayout from "../Layouts/Main/MainPageLayout";

import DetailInfo from "../Components/DetailInfo";
import DetailContent from "../Components/DetailContent";
import DetailSubSection from "../Components/DetailSubSection";
import DetailHeaderLayout from "../Layouts/Detail/DetailHeaderLayout";
import DetailContentLayout from "../Layouts/Detail/DetailContentLayout";
import DetailSubSectionLayout from "../Layouts/Detail/DetailSubSectionLayout";
import DetailAd from "../Elements/DetailAd";
import DetailLastAd from "../Elements/DetailLastAd";
import Footer from "../Components/Footer";

const DetailPage = (props) => {
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
                    <DetailContent />
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
