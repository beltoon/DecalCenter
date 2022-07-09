import React, {useContext, useEffect, useRef, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {Link, useHistory} from "react-router-dom";
import "./auth.css"
import axios from 'axios'


function Login() {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const {login} = useContext(AuthContext);
    const source = axios.CancelToken.source();

    const history = useHistory();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, [source]);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorMessage('');
    }, [username, password])


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password,
            }, {
                cancelToken: source.token,
            });
            console.log(result.data);
            login(result.data.jwt);
            history.push('/profile');

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
            <section className="app">
                <p ref={errRef} className={errorMessage ? "errormessage" : "offscreen"}
                   aria-live="assertive">{errorMessage}</p>
                <h1>Inloggen</h1>


                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">
                        <h4>Username:</h4>
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
                        <h4>Password: </h4>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </label>
                    <p ref={errRef} className={errorMessage ? "errmsg" : "offscreen"}
                       aria-live="assertive">{errorMessage}</p>


                    <button
                        type="submit"
                        className="form-button"
                    >
                        Log In
                    </button>
                </form>

                <p>If you have no account, feel free to <Link to="/register">register here.</Link></p>

            </section>

        </>
    );
}

export default Login;