import React from "react";

import Header from "../Components/Header";
import MainMovieList from "../Components/MainMovieList";
import MainContentLayout from "../Layouts/Main/MainContentLayout";
import DetailHeaderLayout from "../Layouts/Detail/DetailHeaderLayout";
import MainPageLayout from "../Layouts/Main/MainPageLayout";
import DetailSubSectionLayout from "../Layouts/Detail/DetailSubSectionLayout";
import DetailSubSection from "../Components/DetailSubSection";

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
                <MainContentLayout>
                    <MainMovieList />
                    <div style={{ height: "400px", backgroundColor: "blue" }}>
                        여기 이벤트
                    </div>
                    <div style={{ height: "150px", backgroundColor: "yellow" }}>
                        시사회/무대인사
                    </div>
                </MainContentLayout>
            </MainPageLayout>
        </React.Fragment>
    );
};

export default DetailPage;
