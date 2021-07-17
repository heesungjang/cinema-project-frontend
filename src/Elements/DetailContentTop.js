import React from "react";
import parse from "html-react-parser"; // html --> react 변환
import styled from "styled-components";

import { makeStyles } from "@material-ui/styles";
import {
    Grid,
    Typography,
    TextareaAutosize,
    Container,
} from "@material-ui/core";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import male from "../images/male-solid.svg";
import female from "../images/female-solid.svg";

const ContainerT = styled.div`
    overflow: scroll;
    &::-webkit-scrollbar {
        /* 세로 스크롤 넓이 */
        width: 8px;

        /* 가로 스크롤 높이 */
        height: 8px;

        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
`;

const useStyles = makeStyles({
    mainContainer: {
        display: "flex",
    },
    subContainer: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "60px",
    },

    contentTopTitle: {
        fontWeight: 700,
        fontSize: "16px",
        marginBottom: "15px",
    },
    textContent: {
        height: "100px",
        // overflowY: "auto",
        padding: "10px 0",
    },
    preferenceContainer: {
        display: "flex",
    },
    iconContainer: {},
    maleIcon: {
        fontSize: "50px",
        fillColor: "red",
    },
});

const DetailContentTop = (props) => {
    const classes = useStyles();
    return (
        <Grid xs={12} className={classes.mainContainer}>
            <Grid xs={6} className={classes.subContainer}>
                <Grid xs={10}>
                    <Typography className={classes.contentTopTitle}>
                        시놉시스
                    </Typography>
                    <ContainerT>
                        <Grid className={classes.textContent}>
                            {parse(
                                "<span><b> “제 이름은 고진옥, 제주 해녀입니다” </b><br><br>‘바다에서 숨 오래 참기’로 기네스북에 오른 제주 해녀 진옥(고두심)<br>성질도, 물질도 제주에서 그를 이길 사람이 없다.<br>진옥을 취재하기 위해 서울에서 내려온 다큐멘터리 PD 경훈(지현우)<br>하지만 진옥의 반응은 냉담하다.<br>경훈은 진옥의 마음을 열기 위해 그의 주위를 맴돌기 시작하고,<br>진옥은 바다에 빠진 경훈의 목숨을 구해준 이후<br>자신과 같은 상처를 가졌음을 알고 경훈에게 마음을 연다.<br>제주 그리고 해녀의 삶에 깊숙이 들어가게 된 경훈<br>그런 경훈을 통해 진옥은 생전 처음 느껴보는 감정들을 마주하기 시작하는데…<br><br><b> 당신을 만나고 비로소 알게 된,<br>나의 가장 빛나는 순간 </b></span>"
                            )}
                        </Grid>
                    </ContainerT>
                </Grid>
            </Grid>

            <Grid xs={6} className={classes.subContainer}>
                <Typography className={classes.contentTopTitle}>
                    관람 선호도
                </Typography>
                <Grid xs={12} className={classes.preferenceContainer}>
                    <Grid xs={6}>
                        <Grid>
                            <dl style={{ display: "flex" }}>
                                <dd>
                                    <Grid className={classes.iconContainer}>
                                        <img
                                            src={male}
                                            alt=""
                                            style={{ height: "50px" }}
                                        />
                                    </Grid>
                                    <dt>남성</dt>
                                </dd>
                                <dd>
                                    <Grid className={classes.iconContainer}>
                                        <img
                                            src={female}
                                            alt=""
                                            style={{ height: "50px" }}
                                        />
                                    </Grid>
                                    <dt>여성</dt>
                                </dd>
                            </dl>
                        </Grid>
                    </Grid>
                    <Grid xs={6}>asd</Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DetailContentTop;
