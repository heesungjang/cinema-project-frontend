import axios from "axios";

export const api = axios.create({
    baseURL: "http://13.209.84.245/",
    // header: {
    //     Authorization: "bearer accessKey",
    // },
});

// export const authApi = {
//     userLogin: () => api.post("/login"),
//     userSignup: (data) => api.post("/users", { ...data }),
// };

// export const moviesApi = {
//     getAllMovies: () => api.get("/movies"),
//     getMovie: (id) => api.get("/movies/id"),
// };
