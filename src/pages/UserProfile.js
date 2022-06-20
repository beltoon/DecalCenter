import React from "react";
import {Link} from "react-router-dom";
import "./userProfile.css";

function UserProfile() {
    return (
        <div className="page-container">
            <div className="welcome">
            <div className="profile-card">
                <img className="profile-image" src="https://i.imgur.com/bDLhJiP.jpg" alt="profile"/>
                <h3 className="userName">Alexander Schmidt</h3>
                <span>User Role here</span>
                <br/>
                <div className="buttons">

                    <button>Logout</button>
                    <button>Delete Account</button>
                </div>



            </div>

                <h2>Welcome back [user]</h2>
            </div>

            <p>Visit the <Link to="/">HOME PAGE</Link> for the latest content</p>

            <h1>Favorite brands</h1>

            <p>In the overview below you'll find information about upcoming events and brands that may be interesting
                for you!</p>


        </div>
    )
}

export default UserProfile;