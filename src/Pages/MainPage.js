import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/styles";

import { getMovies } from "../Redux/async/movies";

import { Grid } from "@material-ui/core";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Premiere from "../Components/Main/Premiere";
import MainMovieList from "../Components/Main/MainMovieList";
import MainContentLayout from "../Layouts/Main/MainContentLayout";
import MainHeaderLayout from "../Layouts/Main/MainHeaderLayout";
import MainPageLayout from "../Layouts/Main/MainPageLayout";
import MainSubSectionLayout from "../Layouts/Main/MainSubSectionLayout";
import MainSubSection from "../Components/Main/MainSubSection";
import EventComponent from "../Components/Main/EventComponent";

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

    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movie.movies);
    console.log("MainPage: ", movies);

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <React.Fragment>
            <MainPageLayout>
                <MainHeaderLayout>
                    <Header page={"main"} {...props} />
                </MainHeaderLayout>
                <MainSubSectionLayout>
                    <MainSubSection />
                </MainSubSectionLayout>
                <MainContentLayout>
                    <MainMovieList {...props} movies={movies} />
                    <div className={classes.firstDiv}>
                        <EventComponent />
                    </div>
                    <div className={classes.secondDiv}>
                        <Premiere />
                    </div>
                </MainContentLayout>
                <Grid xs={12}>
                    <Grid
                        xs={12}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "1000px",
                            margin: "auto",
                        }}
                    >
                        <Footer />
                    </Grid>
                </Grid>
            </MainPageLayout>
        </React.Fragment>
    );
};

export default MainPage;
