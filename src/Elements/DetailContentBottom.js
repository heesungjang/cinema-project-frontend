import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { ListItem, Avatar, Container } from "@material-ui/core";

const useStyles = makeStyles({
    subContainer: {
        display: "flex",
    },
    titleText: {
        margin: "60px 0 30px 0",
        fontWeight: "600",
    },
    avatar: {
        height: "90px",
        width: "90px",
    },
    text: {
        width: "125px",
        fontSize: "13px",
    },
});

const DetailContentBottom = (props) => {
    const { movie } = props;
    console.log("movie: ", movie);
    const classes = useStyles();

    return (
        <Box>
            <Title>감독 및 배우</Title>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <ListItem>
                        <Avatar
                            className={classes.avatar}
                            src={movie.director.img}
                        />
                        <Container>
                            <Typography className={classes.text}>
                                <u>{movie.director.name}</u>
                            </Typography>
                            <Typography className={classes.text}>
                                감독
                            </Typography>
                        </Container>
                    </ListItem>
                </Grid>
                {movie.actors.map((item, i) => (
                    <Item key={item.id} {...item} />
                ))}
            </Grid>
        </Box>
        // <Grid xs={12}>
        //     <Typography className={classes.titleText}>감독 및 배우</Typography>
        //     <Grid xs={12}>
        //         <Grid className={classes.subContainer}>
        //             <ListItem>
        //                 <Avatar
        //                     className={classes.avatar}
        //                     src="https://caching.lottecinema.co.kr//Media/MovieFile/PersonImg/40000/39933_107_1.jpg"
        //                 />
        //                 <Container>
        //                     <Typography>케이트 쇼트랜드</Typography>
        //                     <Typography>감독</Typography>
        //                 </Container>
        //             </ListItem>
        //             <ListItem>
        //                 <Avatar
        //                     className={classes.avatar}
        //                     src="https://caching.lottecinema.co.kr//Media/MovieFile/PersonImg/3000/2538_107_3.jpg"
        //                 />
        //                 <Container>
        //                     <Typography>케이트 쇼트랜드</Typography>
        //                     <Typography>배우</Typography>
        //                 </Container>
        //             </ListItem>
        //             <ListItem>
        //                 <Avatar
        //                     className={classes.avatar}
        //                     src="https://caching.lottecinema.co.kr//Media/MovieFile/PersonImg/100000/99765_107_3.jpg"
        //                 />
        //                 <Container>
        //                     <Typography>케이트 쇼트랜드</Typography>
        //                     <Typography>배우</Typography>
        //                 </Container>
        //             </ListItem>
        //             <ListItem>
        //                 <Avatar
        //                     className={classes.avatar}
        //                     src="https://caching.lottecinema.co.kr//Media/MovieFile/PersonImg/81000/80678_107_2.jpg"
        //                 />
        //                 <Container>
        //                     <Typography>케이트 쇼트랜드</Typography>
        //                     <Typography>배우</Typography>
        //                 </Container>
        //             </ListItem>
        //         </Grid>
        //     </Grid>
        // </Grid>
    );
};

function Item(props) {
    console.log("props: ", props);
    const classes = useStyles();
    return (
        <>
            <Grid item xs={3}>
                <ListItem>
                    <Avatar className={classes.avatar} src={props.img} />
                    <Container>
                        <Typography className={classes.text}>
                            <u>{props.name}</u>
                        </Typography>
                        <Typography className={classes.text}>
                            {props.role}
                        </Typography>
                    </Container>
                </ListItem>
            </Grid>
        </>
    );
}

const Box = styled.div`
    width: 932px;
    height: 140px;
    margin: 70px auto 0px;
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
`;

export default DetailContentBottom;
