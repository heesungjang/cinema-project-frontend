import React from "react";

import Header from "../Components/Header";
import MainMovieList from "../Components/MainMovieList";
import DetailContentLayout from "../Layouts/Detail/DetailContentLayout";
import DetailHeaderLayout from "../Layouts/Detail/DetailHeaderLayout";
import MainPageLayout from "../Layouts/Main/MainPageLayout";
import DetailSubSectionLayout from "../Layouts/Detail/DetailSubSectionLayout";
import DetailSubSection from "../Components/DetailSubSection";
import DetailContent from "../Components/DetailContent";

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
                </DetailContentLayout>
            </MainPageLayout>
        </React.Fragment>
    );
};

export default DetailPage;
