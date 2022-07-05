import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";


import axios from '../api/axios';
const LOGIN_USER_URL = `http://localhost:8080/users/`;

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory();

       useEffect(() => {
             const token = localStorage.getItem('token');

             if (token) {
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
        console.log(JWT);
        const decodedToken = jwtDecode(JWT);

        fetchUserData(decodedToken.sub, JWT, '/profile');
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

async function fetchUserData(id, token, redirectUrl) {

    try {
        const result = await axios.get(LOGIN_USER_URL + `${id}`, {
                    headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(result.data)
        // zet de gegevens in de state
        toggleIsAuth({
            ...isAuth,
            isAuth: true,
            user: {
                username: result.data.username,
                email: result.data.email,
                // id: result.data.id,
            },
            status: 'done',
        });

        // als er een redirect URL is meegegeven (bij het mount-effect doen we dit niet) linken we hiernnaartoe door
        // als we de history.push in de login-functie zouden zetten, linken we al door voor de gebuiker is opgehaald!
        if (redirectUrl) {
            history.push(redirectUrl);
        }

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
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}


export default AuthContextProvider;
