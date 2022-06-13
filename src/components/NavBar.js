import React, {useContext} from "react";
import {Link, NavLink, useHistory} from "react-router-dom";
import logo from "../assets/decalcenter-small.png";
import {AuthContext} from "../context/AuthContext";

function NavBar() {

    const history = useHistory();
    const {isAuth, userLogOutFunction, userLogInFunction} = useContext(AuthContext);
    console.log({isAuth})

    return (
        <nav>

            <div className="nav-container">
                <Link to="/">
                <span className="logo-container">
                    <img src={logo} alt="logo"/>
                </span>
                </Link>

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


                {isAuth ? <button
                    type="button"
                    onClick={userLogOutFunction}>
                    Log out
                </button> : <div>
                    <button
                        type="button"
                        onClick={userLogInFunction}
                        //  onClick={() => history.push('/signin')}
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={() => history.push('/signup')}
                    >
                        Registreren
                    </button>

                </div>}
            </div>
        </nav>
    )
}

export default NavBar;