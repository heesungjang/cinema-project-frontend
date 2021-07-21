import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { history } from "../Redux/configureStore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const InformEmail = () => {
    React.useEffect(() => {
        notify("회원가입 성공");
    }, []);

    const notify = (text) => toast.success(text);
    return (
        <Grid
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "600px",
            }}
        >
            <ToastContainer
                limit={1}
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
            <Grid
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography variant="h4">
                    🎉 인증 메일을 전송했습니다 🎉
                </Typography>
                <Typography variant="h6" style={{ margin: "20px 0" }}>
                    로그인은 이메일 인증이후 사용 가능합니다.
                </Typography>
                <Button
                    onClick={() => {
                        history.replace("/login");
                    }}
                    style={{ padding: "5px 50px" }}
                    variant="contained"
                    color="secondary"
                >
                    로그인 이동
                </Button>
            </Grid>
        </Grid>
    );
};

export default InformEmail;
