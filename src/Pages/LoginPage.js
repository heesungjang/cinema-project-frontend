import React from "react";

import Footer from "../shared/Footer";
import Header from "../shared/Header";
import DetailAd from "../Elements/DetailAd";
import DetailLastAd from "../Elements/DetailLastAd";
import LoginContainer from "../Components/Login/LoginContainer";

import MainPageLayout from "../Layouts/Main/MainPageLayout";
import DetailHeaderLayout from "../Layouts/Detail/DetailHeaderLayout";

const LoginPage = (props) => {
    return (
        <MainPageLayout>
            <DetailHeaderLayout>
                <Header page={"detail"} {...props} />
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
