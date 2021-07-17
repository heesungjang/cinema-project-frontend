import React from "react";
import { makeStyles } from "@material-ui/styles";

import {
    Grid,
    Typography,
    ListItem,
    Avatar,
    Container,
} from "@material-ui/core";

const useStyles = makeStyles({
    titleText: {
        margin: "60px 0",
    },
    avatar: {
        height: "90px",
        width: "90px",
    },
});

const DetailContentBottom = (props) => {
    const classes = useStyles();

    return (
        <Grid xs={12}>
            <Typography className={classes.titleText}>감독 및 배우</Typography>
            <Grid xs={12}>
                <Grid style={{ display: "flex" }}>
                    <ListItem>
                        <Avatar
                            className={classes.avatar}
                            src="https://caching.lottecinema.co.kr//Media/MovieFile/PersonImg/40000/39933_107_1.jpg"
                        />
                        <Container>
                            <Typography>케이트 쇼트랜드</Typography>
                            <Typography>감독</Typography>
                        </Container>
                    </ListItem>
                    <ListItem>
                        <Avatar
                            className={classes.avatar}
                            src="https://caching.lottecinema.co.kr//Media/MovieFile/PersonImg/3000/2538_107_3.jpg"
                        />
                        <Container>
                            <Typography>케이트 쇼트랜드</Typography>
                            <Typography>배우</Typography>
                        </Container>
                    </ListItem>
                    <ListItem>
                        <Avatar
                            className={classes.avatar}
                            src="https://caching.lottecinema.co.kr//Media/MovieFile/PersonImg/100000/99765_107_3.jpg"
                        />
                        <Container>
                            <Typography>케이트 쇼트랜드</Typography>
                            <Typography>배우</Typography>
                        </Container>
                    </ListItem>
                    <ListItem>
                        <Avatar
                            className={classes.avatar}
                            src="https://caching.lottecinema.co.kr//Media/MovieFile/PersonImg/81000/80678_107_2.jpg"
                        />
                        <Container>
                            <Typography>케이트 쇼트랜드</Typography>
                            <Typography>배우</Typography>
                        </Container>
                    </ListItem>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DetailContentBottom;
