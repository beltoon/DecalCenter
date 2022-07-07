import React, {useContext} from "react";
import {Link, useHistory} from "react-router-dom";
import logo from "../../assets/decalcenter.png";
import {AuthContext} from "../../context/AuthContext";
import "./NavBar.css"
import HomeIcon from '@mui/icons-material/Home';

function NavBar() {


    const {isAuth, logout} = useContext(AuthContext);
    const history = useHistory();
    // console.log({isAuth})

    console.log(isAuth)

    return (
        <nav>
            <div className="nav-container">
                <Link to="/">
                    <HomeIcon
                        className="home-icon"/>
                </Link>
                <Link to="/">
                    <img src={logo}
                         alt="logo"
                    />
                </Link>


                <ul className="nav-item">
                    {/*<li>*/}
                    {/*    <NavLink to="/" exact activeClassName="active-link">Home</NavLink>*/}
                    {/*</li>*/}

                    {/*<li>*/}
                    {/*    <NavLink to="/events" exact activeClassName="active-link">Events</NavLink>*/}
                    {/*</li>*/}

                    <li>
                        {isAuth ?
                            <button type="button"
                                    onClick={() => history.push('/profile')}>Profile</button>
                            :
                            <button type="button"
                                    onClick={() => history.push('/register')}>Create an account</button>
                        }
                    </li>
                    <li>
                       {isAuth ? <button
                                type="button"
                                onClick={logout}>
                                Log out
                            </button> :
                            <button
                                type="button"
                                onClick={() => history.push('/login')}
                            >
                                Log in
                            </button>}
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
            <div className="style1"/>
        </nav>

    )
}

export default NavBar;