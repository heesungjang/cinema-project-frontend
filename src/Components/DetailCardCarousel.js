import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  Grid,
  Paper,
  FormLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 185,
//     maxHeight: 262,
//   },
//   media: {
//     height: 262,
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 185,
    maxHeight: 262,
  },
  paper: {
    height: 262,
    width: 185,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function DetailCardCarousel(props) {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  const items = [
    {
      name: "Random Name #1",
      url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202004/15496_101_1.jpg",
    },
    {
      name: "Random Name #2",
      url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17630_101_1.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>

      {/* <Grid xs={12}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Grid> */}

      {/* <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid
            // container
            // direction="row"
            // justifyContent="center"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
            spacing={spacing}
            xs={12}
          >
            {[0, 1, 2, 3, 4].map((value) => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid> */}
    </>
  );
}

function Item(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={props.item.url} />
      </Card>
    </>
  );
}

export default DetailCardCarousel;
