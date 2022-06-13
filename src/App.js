import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import UserProfile from "./pages/UserProfile";
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
    return (
        <Router>
            <NavBar/>

            <switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/events">
                    <EventPage/>
                </Route>

                <Route exact path="/user">
                    <UserProfile/>
                </Route>
            </switch>
        </Router>
    );
}

export default App;
