import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/decalcenter.png";
import {AuthContext} from "../../context/AuthContext";
import "./NavBar.css"

function NavBar() {

    const {isAuth, logout} = useContext(AuthContext);

    return (
        <nav>
            <div className="nav-container">

                <Link to="/">
                    <img src={logo}
                         alt="logo"
                    />
                </Link>

                <div className="nav-item">

                    <NavLink to="/events" exact activeClassName="active-link">Events</NavLink>

                    <NavLink to="/decals" exact activeClassName="active-link">Decals</NavLink>

                    <NavLink to="/upload-decal" exact activeClassName="active-link">Upload</NavLink>

                    {isAuth ?
                        <NavLink to="/profile" exact activeClassName="active-link">Profile</NavLink>
                        :
                        <NavLink to="/Register" exact activeClassName="active-link">Register</NavLink>
                    }

                    {isAuth ? <NavLink to="/"
                                       exact activeClassName="active-link"
                                       onClick={logout}>
                            Log out
                        </NavLink> :
                        <NavLink
                            to="/login"
                            exact activeClassName="active-link"
                        >
                            Log in
                        </NavLink>}
                </div>


            </div>
            <div className="style1"/>
        </nav>

    )
}

export default NavBar;