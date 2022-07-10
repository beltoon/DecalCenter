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

        } catch (e) {
            console.error(e);
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