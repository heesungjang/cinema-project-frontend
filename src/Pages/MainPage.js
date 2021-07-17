import React from "react";

import Header from "../Components/Header";
import MainMovieList from "../Components/MainMovieList";
import MainContentLayout from "../Layouts/Main/MainContentLayout";
import MainHeaderLayout from "../Layouts/Main/MainHeaderLayout";
import MainPageLayout from "../Layouts/Main/MainPageLayout";
import MainSubSectionLayout from "../Layouts/Main/MainSubSectionLayout";
import MainSubSection from "../Components/MainSubSection";
import EventComponent from "../Components/EventComponent";

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
          <div style={{ height: "641px", backgroundColor: "wheat" }}>
            <EventComponent />
          </div>
          <div style={{ height: "150px", backgroundColor: "yellow" }}>
            시사회/무대인사
          </div>
        </MainContentLayout>
      </MainPageLayout>
    </React.Fragment>
  );
};

export default MainPage;
