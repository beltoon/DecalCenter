import React, {useContext, useState} from "react";

import "./UserProfile.css";
import {AuthContext} from "../context/AuthContext";

import axios from 'axios'
import EventFrame from "../components/EventFrame";


function UserProfile() {
 const [deleteRequest, setDeleteRequest] = useState('');

    const {user} = useContext(AuthContext);

    console.log(user.url)

    async function deleteAccount(e) {
        e.preventDefault()
        try {
            const response = await axios.delete(user.url)
            setDeleteRequest(response)

            console.log(deleteRequest)
        } catch (e) {
            console.error(e);
        }
    }

    const [show, setShow] = useState(false);

    function changeState() {
        setShow(!show);
    }

    return (
        <div className="page-container">
            <div className="welcome">
                <div className="profile-card">
                    <img className="profile-image" src="https://i.imgur.com/bDLhJiP.jpg" alt="profile"/>
                    <h3 className="userName">
                        {user.username}
                    </h3>
                    <h4>{user.role}</h4>
                    <br/>
                    <div className="buttons">






                    </div>


                </div>

                <h2>Welcome back {user.username}</h2>
            </div>

            {/*<p>Visit the <Link to="/">HOME PAGE</Link> for the latest content</p>*/}

            <EventFrame endpoint='http://localhost:8080/events'/>


            <div className="delete-button">
                {show ? (
                    <button
                        onClick={deleteAccount}> <h4>Are you sure?</h4></button>
                ) : (
                    <button onClick={changeState}><h5>Delete account </h5> </button>
                )}
            </div>



        </div>
    )
}

export default UserProfile;