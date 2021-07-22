import React from "react";
import { history } from "../../Redux/configureStore";

import HoverRating from "../../Elements/HoverRating";

import star from "../../images/star_14.png";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Button } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { addComment, getMovieDetail } from "../../Redux/async/movies";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import CommentItem from "../../Elements/CommentItem";

const useStyles = makeStyles({
    mainContainer: {
        display: "flex",
        maxWidth: "932px",
        margin: "0 auto",
        flexDirection: "column",
    },
    text: { margin: "12px", fontSize: "13px", color: "#7f8c8d" },
});

const DetailComment = ({ detailMovie }) => {
    const comment_list = detailMovie.comments;

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const [comment, setComment] = React.useState("");
    const dispatch = useDispatch();
    const notify = (text) => toast.error(text);

    let total_rate = 0;

    if (comment_list.length > 0) {
        comment_list.map((comment) => {
            total_rate = comment.star + total_rate;
        });
    }

    let token;
    let userName;
    if (localStorage.getItem("user")) {
        userName = JSON.parse(localStorage.getItem("user")).userName;
        token = JSON.parse(localStorage.getItem("user")).accessToken;
    }

    const movie_id = (
        history.location.pathname + history.location.search
    ).substr(8);

    const textOnChangeHandler = (e) => {
        const {
            target: { value, name },
        } = e;
        if (name === "comment") {
            setComment(value);
        }
    };

    const onClickHandler = (e) => {
        const data = {
            comment: comment,
            star: value,
            movieId: movie_id,
            token: token,
            name: userName,
            detailMovie: detailMovie,
        };
        if (comment === "") {
            notify("관람평을 입력해 주세요!");
        } else if (star === null) {
            notify("관람 평점을 입력해 주세요!");
        }

        if (token) {
            dispatch(addComment(data));
            // dispatch(getMovieDetail(movie_id));
            setComment("");
        } else {
            notify("관람평 작성은 로그인이 필요합니다.");
        }
    };

    const final_rate = total_rate / comment_list.length;

    const classes = useStyles();
    return (
        <Grid className={classes.mainContainer} xs={12}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Grid>
                <Grid
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <Grid
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginRight: "27px",
                            alignItems: "center",
                            minWidth: "930px",
                        }}
                    >
                        <Typography>총 평점</Typography>
                        <img
                            src={star}
                            alt=""
                            style={{
                                margin: "0 5px 5px 5px",
                                width: "20px",
                                height: "20px",
                            }}
                        />
                        <Typography
                            style={{
                                fontWeight: "600",
                                fontSize: "25px",
                                color: "grey",
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: "700",
                                    fontSize: "40px",
                                    color: "black",
                                }}
                            >
                                {isNaN(final_rate) ? 0 : final_rate}
                            </span>{" "}
                            / 10
                        </Typography>
                    </Grid>
                    <Grid
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px",
                            minWidth: "930px",
                        }}
                    >
                        <Typography
                            style={{
                                fontSize: "13px",
                                color: "grey",
                                width: "200px",
                            }}
                        >
                            영화 관람 후 관람평을 작성하시면 L.POINT 50P를
                            적립해 드립니다.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                xs={12}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid lightgrey",
                    marginTop: "30px",
                    width: "930px",
                    minWidth: "930px",
                }}
            >
                <Grid
                    xs={4}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        borderRight: "1px solid lightgrey",
                        height: "80px",
                        backgroundColor: "#F8F8F8",
                        paddingTop: "10px",
                    }}
                >
                    {" "}
                    <HoverRating
                        value={value}
                        setValue={setValue}
                        hover={hover}
                        setHover={setHover}
                    />
                </Grid>
                <Grid xs={6}>
                    {" "}
                    <textarea
                        name="comment"
                        value={comment}
                        onChange={textOnChangeHandler}
                        style={{
                            width: "460px",
                            height: "85px",
                            border: "none",
                        }}
                    />
                </Grid>
                <Grid
                    xs={2}
                    style={{
                        borderLeft: "1px solid lightgrey",
                        paddingLeft: "1px",
                    }}
                >
                    <Button
                        onClick={onClickHandler}
                        style={{
                            height: "88px",
                            width: "155px",
                            borderRadius: "0",
                            backgroundColor: "#666666",
                            color: "#ffffff",
                            marginBottom: "1px",
                        }}
                        variant="contained"
                    >
                        관람평 작성
                    </Button>
                </Grid>
            </Grid>
            {comment_list && comment_list.length > 0 ? (
                <Grid
                    style={{
                        minHeight: "296px",
                        borderTop: "1px solid lightgrey",
                        marginTop: "60px",
                        // backgroundColor: "#F8F8F8",
                        display: "flex",
                        minWidth: "930px",
                        flexDirection: "column",
                    }}
                >
                    <Grid xs={12}>
                        {comment_list.map((comment, idx) => (
                            <CommentItem
                                id={idx}
                                comment={comment}
                                movieId={movie_id}
                            />
                        ))}
                    </Grid>
                </Grid>
            ) : (
                <Grid
                    style={{
                        minHeight: "296px",
                        borderTop: "1px solid lightgrey",
                        marginTop: "60px",
                        backgroundColor: "#F8F8F8",
                        display: "flex",
                        minWidth: "930px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Grid xs={12}>
                        <Typography>작성된 관람평이 없습니다.</Typography>
                    </Grid>
                </Grid>
            )}

            <Grid
                style={{
                    height: "223",
                    border: "1px solid lightgrey",
                    marginTop: "60px",
                    borderRadius: "5px",
                    minWidth: "930px",
                }}
            >
                <Typography style={{ marginTop: "20px", marginLeft: "13px" }}>
                    유의사항
                </Typography>
                <hr style={{ width: "900px" }}></hr>
                <Grid>
                    <Typography className={classes.text}>
                        - 관람평 작성에 대한 L.POINT는 익일 적립되며, 관람 후
                        초기
                    </Typography>
                    <Typography className={classes.text}>
                        - 1회에 대해서만 적립됩니다. 수정/삭제 후 재등록 시에는
                        포인트
                    </Typography>
                    <Typography className={classes.text}>
                        - 적립이 되지 않습니다. 관람평은 관람 내역당 1회만 작성
                    </Typography>
                    <Typography className={classes.text}>
                        - 가능하며, 상영종료된 영화의 관람평은 작성 불가합니다.
                    </Typography>
                    <Typography className={classes.text}>
                        - 작성하신 관람평은 마이페이지 > MY무비로그 > 내가
                        본영화에서 확인하실 수 있습니다. 관람 평점은
                        롯데시네마에서 실제 관람한 회원의 평점 입니다.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DetailComment;
