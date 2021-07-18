import React from "react";

import { makeStyles } from "@material-ui/styles";

import Header from "../Components/Header";
import MainMovieList from "../Components/MainMovieList";
import MainContentLayout from "../Layouts/Main/MainContentLayout";
import MainHeaderLayout from "../Layouts/Main/MainHeaderLayout";
import MainPageLayout from "../Layouts/Main/MainPageLayout";
import MainSubSectionLayout from "../Layouts/Main/MainSubSectionLayout";
import MainSubSection from "../Components/MainSubSection";
import EventComponent from "../Components/EventComponent";
import Premiere from "../Components/Premiere";

const useStyles = makeStyles({
    firstDiv: {
        height: "641px",
        // backgroundColor: "wheat"
        backgroundColor: "white",
    },
    secondDiv: {
        height: "400px",
        // backgroundColor: "yellow"
        backgroundColor: "white",
    },
});

const MainPage = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <MainPageLayout>
                <MainHeaderLayout>
                    <Header page={"main"} />
                </MainHeaderLayout>
                <MainSubSectionLayout>
                    <MainSubSection />
                </MainSubSectionLayout>
                <MainContentLayout>
                    <MainMovieList />
                    <div className={classes.firstDiv}>
                        <EventComponent />
                    </div>
                    <div className={classes.secondDiv}>
                        <Premiere />
                    </div>
                </MainContentLayout>
            </MainPageLayout>
        </React.Fragment>
    );
};

export default MainPage;
