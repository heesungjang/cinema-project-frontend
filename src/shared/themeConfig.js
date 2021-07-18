import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#778beb",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#e66767",
            contrastText: "#ffffff",
        },
    },
    typography: {
        fontFamily: "Noto Sans KR', sans-serif",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
});
