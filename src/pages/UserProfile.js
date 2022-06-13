import React from "react";
import PageHeader from "../components/PageHeader";
import user from '../assets/user.png';
import {Link} from "react-router-dom";

function UserProfile() {
    return (
        <div className="page-container">
            <PageHeader icon={user} title="user"/>

            <p>DIT IS DE USERPAGE</p>

            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </div>
    )
}

export default UserProfile;