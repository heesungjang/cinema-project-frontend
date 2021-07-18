import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import DetailAd from "../Elements/DetailAd";
import DetailLastAd from "../Elements/DetailLastAd";
import DetailHeaderLayout from "../Layouts/Detail/DetailHeaderLayout";
import MainPageLayout from "../Layouts/Main/MainPageLayout";

const LoginPage = () => {
    return (
        <MainPageLayout>
            <DetailHeaderLayout>
                <Header page={"detail"} />
            </DetailHeaderLayout>
            <DetailAd />
            <DetailLastAd />
            <DetailHeaderLayout>
                <Footer />
            </DetailHeaderLayout>
        </MainPageLayout>
    );
};

export default LoginPage;
