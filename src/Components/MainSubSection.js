import React from "react";
import { Paper } from "@material-ui/core";

import DetailCarousel from "./DetailCarousel";
import MainMovieList from "./MainMovieList";

const MainSubSection = (props) => {
  return (
    <>
      {/* <Paper style={{ borderRadius: "0px", width: "80%" }}> */}
      <DetailCarousel />
      <MainMovieList />
      {/* </Paper> */}
    </>
  );
};

export default MainSubSection;
