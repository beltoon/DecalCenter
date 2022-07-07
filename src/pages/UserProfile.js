import React, { useEffect, useContext } from "react";

import "./UserProfile.css";
import DecalFrame from "../components/DecalFrame";
import {AuthContext} from "../context/AuthContext";

import axios from 'axios'


function UserProfile() {
    // const [profileData, setProfileData] = useState({});
    const { user: username } = useContext(AuthContext);
    useEffect(() => {
        const source = axios.CancelToken.source();

        // we halen de pagina-content op in de mounting-cycle
        async function fetchProfileData() {
            // haal de token uit de Local Storage om in het GET-request te bewijzen dat we geauthoriseerd zijn
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get(`http://localhost:8080/users/${username}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    cancelToken: source.token,
                });
                console.log(result.data)
                // setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchProfileData();

        return function cleanup() {
            source.cancel();
        }
    }, []);


    return (
        <div className="page-container">
            <div className="welcome">
            <div className="profile-card">
                <img className="profile-image" src="https://i.imgur.com/bDLhJiP.jpg" alt="profile"/>
                <h3 className="userName">
                    {/*{username}*/}
                </h3>
                <span>User Role here</span>
                <br/>
                <div className="buttons">

                    {/*<button*/}
                    {/*    to="/"*/}
                    {/*onClick={logout}>Logout</button>*/}
                    {/*<button>Delete Account</button>*/}
                </div>



            </div>

                <h2>Welcome back </h2>
            </div>

            {/*<p>Visit the <Link to="/">HOME PAGE</Link> for the latest content</p>*/}

            <h1>Favorite brands</h1>

            <DecalFrame/>

            <p>In the overview below you'll find information about upcoming events and brands that may be interesting
                for you!</p>


        </div>
    )
}

export default UserProfile;