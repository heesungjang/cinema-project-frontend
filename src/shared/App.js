import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import MainPage from "../Pages/MainPage";
import DetailPage from "../Pages/DetailPage";
import { theme } from "./themeConfig";
import LoginPage from "../Pages/LoginPage";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/detail/:id" component={DetailPage} />
                    <Route exact path="/login" component={LoginPage} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
