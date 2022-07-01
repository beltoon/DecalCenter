import React, {useContext} from "react";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import DecalPage from "./pages/DecalPage";
import UploadDecal from "./pages/UploadDecal"
import EventOverview from "./pages/EventOverview";
import EventPage from "./pages/EventPage";
import CreateEvent from "./pages/CreateEvent";
import UserProfile from "./pages/UserProfile";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AuthContext} from "./context/AuthContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";



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
                    <UploadDecal/>
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
                    <SignIn/>
                </Route>
                <Route exact path="/signup">
                    <SignUp/>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
