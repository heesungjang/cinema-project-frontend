import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import { Grid, Button } from "@material-ui/core";
import DetailPoster from "../../Elements/DetailPoster";
import DetailContentTop from "../../Elements/DetailContentTop";
import DetailContentBottom from "../../Elements/DetailContentBottom";
import DetailTrailer from "../../Elements/DetailTrailer";
import DetailComment from "./DetailComment";

const useStyles = makeStyles({
    in_active_button: {
        padding: "15px",
        borderTop: "None",
        borderLeft: "None",
        borderRight: "None",
        borderRadius: "0px",
    },
    active_button: {
        padding: "15px",
        borderTop: "None",
        borderLeft: "None",
        borderRight: "None",
        borderRadius: "0px",
        border: "2px solid",
    },
    MainContainer: {
        display: "flex",
        margin: "35px auto",
        minWidth: "932px",
    },
});

const DetailInfo = (props) => {
    const classes = useStyles();
    const { detailMovie } = props;
    const [is_info_button_active, set_is_info_button_active] = useState(true);
    const [is_comment_button_active, set_is_comment_button_active] =
        useState(false);

    return (
        <React.Fragment>
            <Grid xs={12} className={classes.MainContainer}>
                <Grid xs={6}>
                    <Button
                        className={
                            is_info_button_active
                                ? classes.active_button
                                : classes.in_active_button
                        }
                        variant="outlined"
                        fullWidth
                        onClick={() => {
                            set_is_info_button_active(true);
                            set_is_comment_button_active(false);
                        }}
                    >
                        영화정보
                    </Button>
                </Grid>
                <Grid xs={6}>
                    <Button
                        className={
                            is_comment_button_active
                                ? classes.active_button
                                : classes.in_active_button
                        }
                        variant="outlined"
                        fullWidth
                        onClick={() => {
                            set_is_info_button_active(false);
                            set_is_comment_button_active(true);
                        }}
                    >
                        평점 및 관람편 (
                        {detailMovie.comments && detailMovie.comments.length})
                    </Button>
                </Grid>
            </Grid>
            <Grid xs={12}>
                {is_info_button_active ? (
                    <>
                        <DetailContentTop detailMovie={detailMovie} />
                        <DetailTrailer detailMovie={detailMovie} />
                        <DetailPoster detailMovie={detailMovie} />
                        <DetailContentBottom detailMovie={detailMovie} />
                    </>
                ) : (
                    <>
                        <DetailComment detailMovie={detailMovie} />
                    </>
                )}
            </Grid>
        </React.Fragment>
    );
};

export default DetailInfo;
