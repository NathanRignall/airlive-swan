import React, { useState, createContext, useContext, ReactNode } from "react";

// context
type authContextType = {
    state: boolean;
    login: () => void;
    logout: () => void;
};

const authContextDefaultValues = {
    state: null,
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
    const [state, setState] = useState<boolean>(null);

    const login = () => {
        setState(true);
    };

    const logout = () => {
        setState(false);
    };

    const value = {
        state,
        login,
        logout,
    };

    return (
        <>
            <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
        </>
    );
}
