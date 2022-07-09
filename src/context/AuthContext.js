import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from 'axios';
import isTokenValid from "../helpers/isTokenValid";

export const AuthContext = createContext({});

function AuthContextProvider( {children} ) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory();


    useEffect(() => {

        const token = localStorage.getItem('token');


        if (token && isTokenValid(token)) {
            const decoded = jwtDecode(token);
            fetchUserData(decoded.sub, token);
        } else {

            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(JWT) {

        localStorage.setItem('token', JWT);

        const decodedToken = jwtDecode(JWT);
        console.log(decodedToken)

        //redirect profile
        fetchUserData(decodedToken.sub, JWT, '/profile');

        // history.push('/profile')


    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log('User has logged out!');
        history.push('/');
    }


    async function fetchUserData(username, token, redirectUrl) {
        try {

            const result = await axios.get(`http://localhost:8080/users/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },

            });

            // zet de gegevens in de state
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    role: result.data.authorities[0].authority,
                    id: result.data.id,
                },
                status: 'done',
            });


            // als er een redirect URL is meegegeven (bij het mount-effect doen we dit niet) linken we hiernnaartoe door
            // als we de history.push in de login-functie zouden zetten, linken we al door voor de gebuiker is opgehaald!
            // if (redirectUrl) {
            //     history.push(redirectUrl);
            // }

        } catch (e) {
            console.error(e);
            // ging er iets mis? Plaatsen we geen data in de state
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {

        isAuth: isAuth.isAuth,
        user: isAuth.user,
        role: isAuth.role,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
            {isAuth.status === 'pending' && <p>Loading...</p>}
            {isAuth.status === 'error' && <p>Error! Refresh de pagina!</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;