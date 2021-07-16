import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "../Pages/MainPage";
import DetailPage from "../Pages/DetailPage";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/detail/:id" component={DetailPage} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
