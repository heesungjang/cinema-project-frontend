import React from "react";

import { Divider, Grid } from "@material-ui/core";

import smileEmoji from "../images/smile.png";
import star from "../images/star_14.png";
import good from "../images/ic_review_good.png";

const CommentItem = ({ comment }) => {
    return (
        <Grid xs={12} style={{ borderBottom: "1px solid lightgrey" }}>
            <Grid
                style={{
                    display: "flex",
                    marginTop: "25px",
                    marginLeft: "20px",
                }}
            >
                <Grid>
                    <img src={smileEmoji} alt="" />
                </Grid>
                <Grid
                    xs={12}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "20px",
                    }}
                >
                    <Grid style={{ marginBottom: "15px" }}>
                        <span>{comment.userName}</span>
                        <span style={{ color: "grey", margin: "0 10px" }}>
                            |
                        </span>
                        <img
                            src={star}
                            alt=""
                            style={{ margin: "0 5px 0px 5px" }}
                        />
                        <span style={{ fontWeight: "800", fontSize: "18px" }}>
                            {comment.star}
                        </span>
                    </Grid>
                    <Grid style={{ marginBottom: "15px" }}>
                        <span>{comment.comment}</span>
                    </Grid>
                    <Grid style={{ marginBottom: "30px" }}>
                        <span>{comment.createdAt.substr(0, 10)}</span>
                        <img
                            src={good}
                            alt=""
                            style={{ margin: "0 5px 0 15px" }}
                        />
                        <span>{comment.likedUsers.length}</span>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CommentItem;
