import React, {useContext} from "react";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import DecalPage from "./pages/DecalPage";
import UploadDecalPage from "./pages/UploadDecalPage"
import EventOverview from "./pages/EventOverview";
import EventPage from "./pages/EventPage";
import CarPage from "./pages/CarPage"
import UserProfile from "./pages/UserProfile";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {AuthContext} from "./context/AuthContext";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import DecalOverview from "./pages/DecalOverview";
import AdminPage from "./pages/AdminPage";

function App() {

    const { isAuth } = useContext(AuthContext)

    return (
        <Router>
            <NavBar/>

            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/cars/:id">
                    <CarPage/>
                </Route>

                <Route exact path="/decals">
                    <DecalOverview/>
                </Route>

                <Route exact path="/decals/:id">
                    <DecalPage/>
                </Route>

                <Route exact path="/upload-decal">
                    {isAuth ?  <UploadDecalPage/> : <Redirect to="/" /> }
                </Route>

                <Route exact path="/events">
                    <EventOverview/>
                </Route>

                <Route exact path="/events/:id">
                    <EventPage/>
                </Route>

                <Route exact path="/profile">
                    {isAuth ? <UserProfile/> : <Redirect to="/" /> }
                </Route>

                <Route exact path="/login">
                    <SignInPage/>
                </Route>
                <Route exact path="/register">
                    <SignUpPage/>
                </Route>

                <Route exact path="/admin">
                    {isAuth ? <AdminPage/> : <Redirect to="/" /> }
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
