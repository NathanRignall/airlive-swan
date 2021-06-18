import React, { useState, createContext, useContext, ReactNode } from "react";

// context type
type authContextType = {
    loggedIn: boolean;
    login: () => void;
    logout: () => void;
};

// default vlaues for the context
const authContextDefaultValues = {
    loggedIn: false,
    login: () => {},
    logout: () => {},
};

// create the context to be used
const AuthContext = createContext<authContextType>(authContextDefaultValues);

// export use context
export function useAuth() {
    return useContext(AuthContext);
}

// provider props
type Props = {
    children: ReactNode;
};

// export the provider
export function AuthProvider({ children }: Props) {
    // state for context
    const [loggedIn, setloggedIn] = useState<boolean>(false);

    // fucntion to set login
    const login = () => {
        setloggedIn(true);
    };

    // function to set logout
    const logout = () => {
        setloggedIn(false);
    };

    // create valyue object to be returned
    const value = {
        loggedIn,
        login,
        logout,
    };

    return (
        <>
            <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
        </>
    );
}
