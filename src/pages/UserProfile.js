import React, {useContext, useEffect, useState} from "react";
import "./UserProfile.css";
import {AuthContext} from "../context/AuthContext";
import axios from 'axios'
import EventFrame from "../components/EventFrame";
import {Link} from "react-router-dom";

function UserProfile() {
    const [deleteRequest, setDeleteRequest] = useState('');
    const [role, setRole] = useState('');

    const {user} = useContext(AuthContext);

    useEffect(() => {
        setRole(user.role)
    }, [user.role])

    console.log(role)


    useEffect(() => {
        const source = axios.CancelToken.source();

        return function cleanup() {
            source.cancel();
        }
    }, []);

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

    console.log(user)
    return (
        <div className="page-container">
            <div className="welcome">
                <div className="profile-card">

                    <h3 className="userName">
                        {user.username}
                    </h3>
                    <h4>{user.role}</h4>
                    <br/>
                    <div className="buttons">


                    </div>

                    {role === "ROLE_ADMIN" ?
                        <Link to="/admin">
                            <button>Admin Page</button>
                        </Link>
                        : <Link to="/">
                            <button>home</button>
                        </Link>

                    }


                </div>

                <h2>Welcome back {user.username}</h2>

            </div>

            <EventFrame endpoint='http://localhost:8080/events'/>


            <div className="delete-button">
                {show ? (
                    <button
                        className="delete-button"
                        onClick={deleteAccount}><h4>Are you sure?</h4></button>
                ) : (
                    <button onClick={changeState}><h5>Delete account </h5></button>
                )}
            </div>


        </div>
    )
}

export default UserProfile;