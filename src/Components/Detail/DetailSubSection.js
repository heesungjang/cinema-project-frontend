import React from "react";
import DetailPageSlider from "./DetailPageSlider";

const MainSubSection = (props) => {
    const { movie } = props;
    return (
        <>
            <DetailPageSlider movie={movie} />
        </>
    );
};

export default MainSubSection;
