import React, {useContext} from "react";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import DecalPage from "./pages/DecalPage";
import UploadDecalPage from "./pages/UploadDecalPage"
import EventOverview from "./pages/EventOverview";
import EventPage from "./pages/EventPage";
import CreateEvent from "./pages/CreateEvent";
import UserProfile from "./pages/UserProfile";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AuthContext} from "./context/AuthContext";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";



function App() {

    const {isAuth} = useContext(AuthContext)

    return (
        <Router>
            <NavBar/>

            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/upload-decal">
                    <UploadDecalPage/>
                </Route>

                <Route exact path="/decal/:id">
                    <DecalPage/>
                </Route>

                <Route exact path="/events">
                    <EventOverview/>
                </Route>

                <Route exact path="/events/create">
                    <CreateEvent/>
                </Route>

                <Route exact path="/events/:id">
                    <EventPage/>
                </Route>

                <Route exact path="/user">
                    {isAuth ?
                        <UserProfile/> : <div/>
                    }
                </Route>

                <Route exact path="/signin">
                    <SignInPage/>
                </Route>
                <Route exact path="/register">
                    <SignUpPage/>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
