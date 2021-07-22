import React from "react";

import { Divider, Grid } from "@material-ui/core";

import smileEmoji from "../images/smile.png";
import star from "../images/star_14.png";
import good from "../images/ic_review_good.png";

import { useDispatch } from "react-redux";
import { deleteComment, editComment } from "../Redux/async/movies";
import { Button } from "@material-ui/core";

const CommentItem = ({ comment, movieId }) => {
    const [editActive, setEditActive] = React.useState(false);
    const [editValue, setEditValue] = React.useState("");
    const dispatch = useDispatch();

    const commentId = comment._id;
    const logged_userName = JSON.parse(localStorage.getItem("user")).userName;
    const commented_userName = comment.userName;

    const onClickHandler = () => {
        if (logged_userName === commented_userName) {
            const data = {
                commentId,
                token: JSON.parse(localStorage.getItem("user")).accessToken,
                movieId,
            };
            dispatch(deleteComment(data));
        }
    };

    const handleEditChange = (e) => {
        const {
            target: { value },
        } = e;

        setEditValue(value);
    };

    const handleEdit = () => {
        const data = {
            movieId,
            comment: editValue,
            star: comment.star,
            token: JSON.parse(localStorage.getItem("user")).accessToken,
            commentId,
        };
        if (editValue) {
            dispatch(editComment(data));
            setEditActive(false);
        }
    };

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
                        {editActive ? (
                            <div>
                                <input
                                    value={editValue}
                                    onChange={handleEditChange}
                                    placeholder={comment.comment}
                                />
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={handleEdit}
                                >
                                    수정하기
                                </Button>
                            </div>
                        ) : (
                            <span>{comment.comment}</span>
                        )}
                        {logged_userName === commented_userName && (
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() =>
                                    setEditActive((current) => !current)
                                }
                            >
                                {editActive ? "취소" : "수정"}
                            </Button>
                        )}
                    </Grid>
                    <Grid style={{ marginBottom: "30px" }}>
                        <Grid>
                            <Grid>
                                <span>{comment.createdAt.substr(0, 10)}</span>
                                <img
                                    src={good}
                                    alt=""
                                    style={{ margin: "0 5px 0 15px" }}
                                />
                                <span>{comment.likedUsers.length}</span>
                            </Grid>
                            <Grid
                                xs={12}
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                }}
                            >
                                {logged_userName === commented_userName && (
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        onClick={onClickHandler}
                                    >
                                        삭제
                                    </Button>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CommentItem;
