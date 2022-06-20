import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {

    const {userLogInFunction} = useContext(AuthContext);

    return (
        <>
            <div className="page-container">
            <h1>Inloggen</h1>
            <p>Hier kan je inloggen</p>

            <form>
                <p>*invoervelden*</p>
                <button
                    type="button"
                    onClick={userLogInFunction}
                >Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
            </div>
        </>
    );
}

export default SignIn;