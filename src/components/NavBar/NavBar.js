import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/decalcenter.png";
import {AuthContext} from "../../context/AuthContext";
import "./NavBar.css"
// import HomeIcon from '@mui/icons-material/Home';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function NavBar() {

    const {isAuth, logout} = useContext(AuthContext);

    // const [isAuthorized, setIsAuthorized] = useState(['ADMIN'].includes(user.role));
    //
    // useEffect(() => {
    //     setIsAuthorized(['ADMIN'].includes(user.role))
    // }, [user.role])

    return (
        <nav>
            <div className="nav-container">
                {/*{isAuthorized ?*/}
                {/*    <Link to="/">*/}
                {/*        <HomeIcon*/}
                {/*            className="nav-icon"/>*/}
                {/*    </Link> : <Link to="/admin">*/}
                {/*        <AdminPanelSettingsIcon*/}
                {/*            className="nav-icon"/>*/}
                {/*    </Link>*/}
                {/*}*/}


                <Link to="/">
                    <img src={logo}
                         alt="logo"
                    />
                </Link>


                <ul className="nav-item">


                    <li>
                        <NavLink to="/events" exact activeClassName="active-link">Events</NavLink>
                    </li>
                    <li>
                        <NavLink to="/decals" exact activeClassName="active-link">Decals</NavLink>
                    </li>

                    <li>
                        {isAuth ?
                            <NavLink to="/profile" exact activeClassName="active-link">Profile</NavLink>
                            :
                            <NavLink to="/Register" exact activeClassName="active-link">Profile</NavLink>
                        }
                    </li>
                    <li>
                        {isAuth ? <NavLink
                                to="/"
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