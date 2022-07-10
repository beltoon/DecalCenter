import React, {useEffect, useRef, useState} from 'react';
import "./auth.css"
import {useHistory} from "react-router-dom";
import axios from 'axios'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');

    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();
    const source = axios.CancelToken.source();

    const [error, toggleError] = useState(false);

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, [source]);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(username));
    }, [username])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd])

    useEffect(() => {
        setErrorMessage('');
    }, [username, password, matchPwd])


    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrorMessage("Invalid Entry");
            return;

        }
        try {
            const response = await axios.post('http://localhost:8080/users', {
                    email: email,
                    password: password,
                    username: username,
                    enabled: true,
                },
                {
                    cancelToken: source.token,
                }
            );
            history.push('/login');
            console.log(response.data)

        } catch (e) {
            toggleError(true);
            if (!e?.response) {
                setErrorMessage('No Server Response');
            } else if (e.response?.status === 409) {
                setErrorMessage('Username Taken');
            } else {
                setErrorMessage('Registration Failed')
            }
            errRef.current.focus();
        }

    }

    return (
        <>
            <section className="page-container">

                <p ref={errRef} className={errorMessage ? "errmsg" : "offscreen"}
                   aria-live="assertive">{errorMessage}</p>
                <h1>Register</h1>
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
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && username && !validName ? "instructions" : "offscreen"}>
                            4 to 24 characters.<br/>
                            Must begin with a letter.<br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </label>

                    <label htmlFor="e-mail">
                        <h4>E-mail:</h4>
                        <input
                            type="text"
                            id="e-mail"
                            name="e-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </label>

                    <label htmlFor="password">
                        <h4>Password:</h4>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            8 to 24 characters.<br/>
                            Must include uppercase and lowercase letters, a number and a special character.<br/>
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span
                            aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span
                            aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
                    </label>

                    <label htmlFor="confirm_pwd">
                        <h4>Confirm Password:</h4>
                        <input
                            type="password"
                            id="confirm_pwd"
                            name="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            Must match the first password input field.
                        </p>
                    </label>
                    {error && <p className="error">An account has been registered on this e-mailadres</p>}

                    <button
                        disabled={!validName || !validPwd || !validMatch ? true : false}
                    >Sign Up
                    </button>
                </form>

                <span><p>Already Registered?</p><br/>
                <a href={"/login"}>Sign in</a></span>
            </section>

        </>
    );
}

export default Register;