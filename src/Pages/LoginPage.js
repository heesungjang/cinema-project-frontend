import React from "react";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import DetailAd from "../Elements/DetailAd";
import DetailLastAd from "../Elements/DetailLastAd";
import LoginContainer from "../Components/LoginContainer";

import MainPageLayout from "../Layouts/Main/MainPageLayout";
import DetailHeaderLayout from "../Layouts/Detail/DetailHeaderLayout";

const LoginPage = () => {
    return (
        <MainPageLayout>
            <DetailHeaderLayout>
                <Header page={"detail"} />
            </DetailHeaderLayout>
            <LoginContainer />
            <DetailAd />
            <DetailLastAd />
            <DetailHeaderLayout>
                <Footer />
            </DetailHeaderLayout>
        </MainPageLayout>
    );
};

export default LoginPage;
