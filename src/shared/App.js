import React from "react";

import { history } from "../Redux/configureStore";
import { ConnectedRouter } from "connected-react-router";

import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import { theme } from "./themeConfig";
import MainPage from "../Pages/MainPage";
import DetailPage from "../Pages/DetailPage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import InformEmail from "../Pages/InformEmail";

function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route
                            exact
                            path="/detail/:id"
                            component={DetailPage}
                        />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/signup" component={SignupPage} />
                        <Route
                            exact
                            path="/verification"
                            component={InformEmail}
                        />
                    </Switch>
                </ConnectedRouter>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
