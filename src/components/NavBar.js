import React from "react";
import {NavLink} from "react-router-dom";


function NavBar() {
    return (
        <nav>
            <div className="nav-container">
                <h3>DecalCenter</h3>

                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/events" exact activeClassName="active-link">Events</NavLink>
                    </li>

                    <li>
                        <NavLink to="/user" exact activeClassName="active-link">Profile</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;