import React from "react";

import { Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import logo_footer from "../images/logo_footer.gif";

const useStyles = makeStyles({
    mainContainer: {
        marginBottom: "100px",
    },
    subContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
    },
    text: {
        margin: "0  5px",
        fontSize: "12px",
    },
    divider: {
        height: "20px",
    },
    thirdRow: {
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
    },
});

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.mainContainer} xs={12}>
            <img src={logo_footer} alt="" />
            <Grid className={classes.subContainer}>
                <Typography className={classes.text}>회원약관</Typography>
                <Divider className={classes.divider} orientation="vertical" />
                <Typography className={classes.text}>회원약관</Typography>
                <Divider
                    className={classes.divider}
                    orientation="vertical"
                    flexItem
                />

                <Typography className={classes.text}>
                    개인정보처리방침
                </Typography>
                <Divider
                    className={classes.divider}
                    orientation="vertical"
                    flexItem
                />

                <Typography className={classes.text}>
                    이메일무단수집거부
                </Typography>
                <Divider
                    className={classes.divider}
                    orientation="vertical"
                    flexItem
                />

                <Typography className={classes.text}>
                    영상정보처리기기 운영 및 관리방침
                </Typography>
                <Divider
                    className={classes.divider}
                    orientation="vertical"
                    flexItem
                />

                <Typography className={classes.text}>
                    L.POINT회원안내
                </Typography>
                <Divider
                    className={classes.divider}
                    orientation="vertical"
                    flexItem
                />

                <Typography className={classes.text}>배정기준</Typography>
                <Divider
                    className={classes.divider}
                    orientation="vertical"
                    flexItem
                />

                <Typography className={classes.text}>채용안내</Typography>
                <Divider
                    className={classes.divider}
                    orientation="vertical"
                    flexItem
                />

                <Typography className={classes.text}>광고/임대문의</Typography>
                <Divider
                    className={classes.divider}
                    orientation="vertical"
                    flexItem
                />

                <Typography className={classes.text}>윤리경영</Typography>
            </Grid>
            <Grid className={classes.thirdRow}>
                <Typography className={classes.text}>
                    서울특별시 송파구 올림픽로 300 롯데월드타워 27층
                </Typography>
                <Typography className={classes.text}>
                    고객센터 1544-8855
                </Typography>
            </Grid>
            <Grid className={classes.thirdRow}>
                <Typography className={classes.text}>
                    COPYRIGHT© LOTTE CINEMA ALL RIGHT RESERVED.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;
