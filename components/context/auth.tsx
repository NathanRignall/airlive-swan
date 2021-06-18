import React, { useState, createContext, useContext, ReactNode } from "react";

// auth details type
type authDetailsType = {
    session: boolean;
    userID: string;
    firstName: string;
    lastName: string;
    email: string;
};

const authDetailsDefaultValues = { session: false, userID: null, firstName: null, lastName: null, email: null };

// context
type authContextType = {
    details: authDetailsType;
    login: (details: authDetailsType) => void;
    logout: () => void;
};

const authContextDefaultValues = {
    details: authDetailsDefaultValues,
    login: () => {},
    logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

// provider
type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [details, setDetails] = useState<authDetailsType>(authDetailsDefaultValues);

    const login = (details: authDetailsType) => {
        setDetails(details);
    };

    const logout = () => {
        setDetails(authDetailsDefaultValues);
    };

    const value = {
        details,
        login,
        logout,
    };

    return (
        <>
            <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
        </>
    );
}
