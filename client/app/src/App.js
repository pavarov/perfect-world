import {Container, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainPage from "./components/MainPage";
import React from "react";
import Header from "./components/Header";
import {quotesSiteName, toolBarSections} from "./constants";
import SocialProjectsPage from "./pages/SocialProjectsPage";
import themeLight from "./constants/themeLight";

function App(props) {
    return (
        <MuiThemeProvider theme={themeLight}>
            <CssBaseline/>
            <Container maxWidth="lg">
                <Header title={`Проект Андрея Бондаренко ${quotesSiteName}`} sections={toolBarSections}/>
                <Router>
                    <Switch>
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/community" component={SocialProjectsPage}/>
                    </Switch>
                </Router>
            </Container>
        </MuiThemeProvider>
    );
}

export default App;
