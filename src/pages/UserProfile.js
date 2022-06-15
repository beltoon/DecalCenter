import React from "react";
import PageHeader from "../components/PageHeader";
import user from '../assets/user.png';
import {Link} from "react-router-dom";

function UserProfile() {
    return (
        <div className="page-container">
            <PageHeader icon={user} title="user"/>

            <h2>Welcome!</h2>

            <p>In the overview below you'll find information about upcoming events and brands that may be interesting for you!</p>

            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </div>
    )
}

export default UserProfile;