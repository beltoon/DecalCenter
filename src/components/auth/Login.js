import React, {useContext, useEffect, useRef, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";

import axios from '../../api/axios'
const LOGIN_URL = '/authenticate'


function Login() {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [success, setSuccess] = useState(false);

    const {login} = useContext(AuthContext);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorMessage('');
    }, [username, password])

    useEffect(() => {
        setErrorMessage('');
    }, [username, password])

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, {
                username,
                password,
            });
            console.log(response.data.jwt);
            login(response.data.jwt);

            setSuccess(true)

        } catch (e) {
            if (!e?.response) {
                setErrorMessage('No Server Response');
            } else if (e.response?.status === 400) {
                setErrorMessage('Missing Username or Password');
            } else if (e.response?.status === 401) {
                setErrorMessage('Unauthorized');
            } else {
                setErrorMessage('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section><h1>You are Logged in</h1></section>
            ) : (
        <section>

            <h1>Inloggen</h1>


            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <input
                        type="username"
                        id="username"
                        name="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                    />
                </label>

                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <p ref={errRef} className={errorMessage ? "errmsg" : "offscreen"} aria-live="assertive">{errorMessage}</p>


                <button
                    type="submit"
                    className="form-button"
                >
                    Log In
                </button>
            </form>

            <p>If you have no account, feel free to <Link to="/register">register here.</Link></p>

        </section>
            )}
        </>
    );
}

export default Login;