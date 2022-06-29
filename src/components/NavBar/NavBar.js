import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/decalcenter.png";
import {AuthContext} from "../../context/AuthContext";
import "./NavBar.css"

function NavBar() {

    // const history = useHistory();
    const {isAuth, userLogOutFunction, userLogInFunction} = useContext(AuthContext);
    console.log({isAuth})

    return (
        <nav>

            <div className="nav-container">
                <Link to="/">

                    <img src={logo}
                         alt="logo"
                    className="decalcenterlogo"/>

                </Link>

                <ul className>
                    {/*<li>*/}
                    {/*    <NavLink to="/" exact activeClassName="active-link">Home</NavLink>*/}
                    {/*</li>*/}

                    {/*<li>*/}
                    {/*    <NavLink to="/events" exact activeClassName="active-link">Events</NavLink>*/}
                    {/*</li>*/}

                    <li>
                        {isAuth ?
                            <NavLink to="/user" exact activeClassName="active-link">Profile</NavLink>
                            :
                            <NavLink to="/signup" exact activeClassName="active-link">Create an account</NavLink>
                        }
                                        </li>
                    <li>
                        {isAuth ? <NavLink
                            to="/"
                            onClick={userLogOutFunction}>
                            Log out
                        </NavLink> :
                            <NavLink
                                to="/user"
                                onClick={userLogInFunction}
                                //  onClick={() => history.push('/signin')}
                            >
                                Log in
                            </NavLink>}
                    </li>
                </ul>


                {/*{isAuth ? <button*/}
                {/*    type="button"*/}
                {/*    onClick={userLogOutFunction}>*/}
                {/*    Log out*/}
                {/*</button> : <div>*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        onClick={userLogInFunction}*/}
                {/*        //  onClick={() => history.push('/signin')}*/}
                {/*    >*/}
                {/*        Log in*/}
                {/*    </button>*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        onClick={() => history.push('/signup')}*/}
                {/*    >*/}
                {/*        Registreren*/}
                {/*    </button>*/}
                {/*</div>}*/}

            </div>
        </nav>
    )
}

export default NavBar;