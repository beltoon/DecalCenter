import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";
import SignIn from "../components/auth/SignIn";

function SignInPage() {

    const {userLogInFunction} = useContext(AuthContext);

    return (
        <>
            <div className="page-container">

                <SignIn/>

            </div>
        </>
    );
}

export default SignInPage;