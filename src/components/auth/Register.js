import React, {useEffect, useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from '../../api/axios';

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

function Register() {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');

    const [username, setUsername] = useState('');
    // const [validName, setValidName] = useState(false);
    // const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');
    // const [validPwd, setValidPwd] = useState(false);
    // const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    // const [validMatch, setValidMatch] = useState(false);
    // const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    // useEffect(() => {
    //     setValidName(USER_REGEX.test(username));
    // }, [username])

    // useEffect(() => {
    //     setValidPwd(PWD_REGEX.test(password));
    //     setValidMatch(password === matchPwd);
    // }, [password, matchPwd])
    //
    useEffect(() => {
        setErrMsg('');
    }, [username, password, matchPwd])


    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post(REGISTER_URL, {
                email: email,
                password: password,
                username: username,
            });

            // Om te zien hoe je een canceltoken implementeerd kun je de bonus-branch bekijken!

            history.push('/login');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }


    return (
        <section>

            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Register</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>
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
                        // aria-invalid={validName ? "false" : "true"}
                        // aria-describedby="uidnote"
                        // onFocus={() => setUserFocus(true)}
                        // onBlur={() => setUserFocus(false)}
                    />
                    {/*<p id="uidnote" className={userFocus && username && !validName ? "instructions" : "offscreen"}>*/}
                    {/*    <FontAwesomeIcon icon={faInfoCircle} />*/}
                    {/*    4 to 24 characters.<br />*/}
                    {/*    Must begin with a letter.<br />*/}
                    {/*    Letters, numbers, underscores, hyphens allowed.*/}
                    {/*</p>*/}
                </label>

                <label htmlFor="e-mail">
                    E-mail:
                    <input
                        type="text"
                        id="e-mail"
                        name="e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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
                        required
                        // aria-invalid={validPwd ? "false" : "true"}
                        // aria-describedby="pwdnote"
                        // onFocus={() => setPwdFocus(true)}
                        // onBlur={() => setPwdFocus(false)}
                    />
                    {/*<p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>*/}
                    {/*    <FontAwesomeIcon icon={faInfoCircle}/>*/}
                    {/*    8 to 24 characters.<br/>*/}
                    {/*    Must include uppercase and lowercase letters, a number and a special character.<br/>*/}
                    {/*    Allowed special characters: <span aria-label="exclamation mark">!</span> <span*/}
                    {/*    aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span*/}
                    {/*    aria-label="dollar sign">$</span> <span aria-label="percent">%</span>*/}
                    {/*</p>*/}
                </label>

                <label htmlFor="confirm_pwd">
                    Confirm Password:
                    <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        // aria-invalid={validMatch ? "false" : "true"}
                        // aria-describedby="confirmnote"
                        // onFocus={() => setMatchFocus(true)}
                        // onBlur={() => setMatchFocus(false)}
                    />
                    {/*<p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>*/}
                    {/*    <FontAwesomeIcon icon={faInfoCircle}/>*/}
                    {/*    Must match the first password input field.*/}
                    {/*</p>*/}
                </label>
                {error && <p className="error">An account has been registered on this e-mailadres</p>}

                <button
                    // disabled={!validName || !validPwd || !validMatch ? true : false}
                >Sign Up</button>
            </form>

            <p>Do you already have an account? Please <Link to="/login">login here</Link>.</p>
        </section>
    );
}

export default Register;