import React from "react";
import PageHeader from "../components/PageHeader";
import user from '../assets/user.png';

function UserProfile() {
    return (
        <div className="page-container">
            <PageHeader icon={user} title="user"/>

            <p>DIT IS DE USERPAGE</p>
        </div>
    )
}

export default UserProfile;