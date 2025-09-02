import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../services/AuthService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const login = (username, password) => {
        return AuthService.login(username, password).then(
            data => {
                setCurrentUser(data);
                return Promise.resolve(data);
            },
            error => {
                return Promise.reject(error);
            }
        );
    };

    const logout = () => {
        AuthService.logout();
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
