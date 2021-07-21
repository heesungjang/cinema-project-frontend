import React from "react";
import DetailPageSlider from "./DetailPageSlider";

const MainSubSection = (props) => {
    const { detailMovie } = props;
    return (
        <>
            <DetailPageSlider detailMovie={detailMovie} />
        </>
    );
};

export default MainSubSection;
