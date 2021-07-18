import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { theme } from "./themeConfig";
import MainPage from "../Pages/MainPage";
import DetailPage from "../Pages/DetailPage";
import LoginPage from "../Pages/LoginPage";
import LogoutPage from "../Pages/LogoutPage";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/detail/:id" component={DetailPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/logout" component={LogoutPage} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
