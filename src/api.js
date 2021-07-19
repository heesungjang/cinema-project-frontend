import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000",
    // header: {
    //     Authorization: "bearer accessKey",
    // },
});

export const authApi = {
    userLogin: () => api.post("/login"),
    userSignup: () => api.post("/signup"),
};

export const moviesApi = {
    getAllMovies: () => api.get("/movies"),
    getMovie: (id) => api.get("/movies/id"),
};
