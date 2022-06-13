import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(true);

    function userLogIn() {
        if (isAuth === false) {
            toggleIsAuth(!false)
        }
    }

    function userLogOut() {
        if (isAuth === true) {
            toggleIsAuth(false)
        }
    }


    const data = {
        isAuth: isAuth,
        userLogInFunction: userLogIn,
        userLogOutFunction: userLogOut,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContextProvider