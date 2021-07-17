import React from "react";

import Header from "../Components/Header";
import MainMovieList from "../Components/MainMovieList";
import MainContentLayout from "../Layouts/Main/MainContentLayout";
import MainHeaderLayout from "../Layouts/Main/MainHeaderLayout";
import MainPageLayout from "../Layouts/Main/MainPageLayout";
import MainSubSectionLayout from "../Layouts/Main/MainSubSectionLayout";
import MainSubSection from "../Components/MainSubSection";
import EventComponent from "../Components/EventComponent";
import Premiere from "../Components/Premiere";

const MainPage = (props) => {
  return (
    <React.Fragment>
      <MainPageLayout>
        <MainHeaderLayout>
          <Header />
        </MainHeaderLayout>
        <MainSubSectionLayout>
          <MainSubSection />
        </MainSubSectionLayout>
        <MainContentLayout>
          <MainMovieList />
          <div
            style={{
              height: "641px",
              // backgroundColor: "wheat"
              backgroundColor: "white",
            }}
          >
            <EventComponent />
          </div>
          <div
            style={{
              height: "400px",
              // backgroundColor: "yellow"
              backgroundColor: "white",
            }}
          >
            <Premiere />
          </div>
        </MainContentLayout>
      </MainPageLayout>
    </React.Fragment>
  );
};

export default MainPage;
