import { PhotoSharp } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../async/movies";

const initialState = {
    carousel_movies: [
        {
            name: "아이스로드",
            img: "https://caching2.lottecinema.co.kr/lotte_image/2021/Ice/0715/Ice_1920774.jpg",
            trailer:
                "https://caching2.lottecinema.co.kr/lotte_image/2021/Ice/0707/Ice_1280720.mp4",
        },
        {
            name: "블랙위도우",
            img: "https://caching2.lottecinema.co.kr/lotte_image/2021/Black/0712/Black_1920774.jpg",
            trailer:
                "https://caching2.lottecinema.co.kr/lotte_image/2021/Black/0709/Black_1280720.mp4",
        },
        {
            name: "수어사이드 스쿼드",
            img: "https://caching2.lottecinema.co.kr/lotte_image/2021/Squad/Squad_1920774.jpg",
            trailer:
                "https://caching2.lottecinema.co.kr/lotte_image/2021/Squad/Squad_1280720.mp4",
        },
        {
            name: "모가디슈",
            img: "https://caching2.lottecinema.co.kr/lotte_image/2021/Moga/Moga_1920774.jpg",
            trailer:
                "https://caching2.lottecinema.co.kr/lotte_image/2021/Moga/0714/Moga_1280720.mp4",
        },
        {
            name: "정글 크루즈",
            img: "https://caching2.lottecinema.co.kr/lotte_image/2021/Jungle/Jungle_1920774.jpg",
            trailer:
                "https://caching2.lottecinema.co.kr/lotte_image/2021/Jungle/Jungle_1280720.mp4",
        },
    ],
    main_movie_list: [
        // {
        //     name: "블랙 위도우",
        //     url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202004/15496_101_1.jpg",
        //     rank: "1",
        //     rate: "39.4%",
        //     star: "9",
        // },
        // {
        //     name: "랑종",
        //     url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17630_101_1.jpg",
        //     rank: "2",
        //     rate: "31.1%",
        //     star: "6",
        // },
        // {
        //     name: "보스 베이비2",
        //     url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17623_101_1.jpg",
        //     rank: "3",
        //     rate: "9.9%",
        //     star: "0",
        // },
        // {
        //     name: "이스케이프 룸 2: 노 웨이 아웃",
        //     url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202107/17598_101_1.jpg",
        //     rank: "4",
        //     rate: "6.0%",
        //     star: "8.2",
        // },
        // {
        //     name: "",
        //     url: "https://caching2.lottecinema.co.kr/lotte_image/2021/Ido/Ido_184262.jpg",
        //     rank: "AD",
        //     rate: "",
        //     star: "",
        // },
        // {
        //     name: "크루엘라",
        //     url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202105/17387_101_1.jpg",
        //     rank: "5",
        //     rate: "3.0%",
        //     star: "9.2",
        // },
        // {
        //     name: "꽃다발 같은 사랑을 했다.",
        //     url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17526_101_1.jpg",
        //     rank: "6",
        //     rate: "1.0%",
        //     star: "8.6",
        // },
        // {
        //     name: "콰이어트 플레이스2",
        //     url: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202003/15474_101_1.jpg",
        //     rank: "7",
        //     rate: "0.4%",
        //     star: "8.7",
        // },
    ],
};

const movieSlice = createSlice({
    name: "movie",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMovies.fulfilled, (state, action) => {
            // console.log("fulfilled!!");
            // console.log("state: ", state.main_movie_list);
            // console.log("action: ", action.payload);
            const movies = action.payload;
            // console.log("movies: ", movies);
            movies.map((movie, idx) => {
                let { bookRate, photos, title } = movie;
                let _bookRate = bookRate * 100;
                let _photos = photos[photos.length - 1];
                state.main_movie_list.push({
                    name: title,
                    url: _photos,
                    rate: _bookRate,
                    rank: idx + 1,
                });
            });
        });
    },
});

export default movieSlice;
