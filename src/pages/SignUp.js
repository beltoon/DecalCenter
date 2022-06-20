import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <>
            <div className="page-container">
            <h1>Registreren</h1>
            <p>Registreer je hier</p>
            <form>
                <p>*Invoervelden*</p>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
            </div>
        </>
    );
}

export default SignUp;