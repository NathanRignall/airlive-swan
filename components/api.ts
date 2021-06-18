import { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";

import { useAuth } from "components/context/auth";

// fetcher function to be used with swr
export const fetcher = async (url: string) => {
    // delcare the fetcher
    const res = await fetch(url);

    // check the state of the request
    if (!res.ok) {
        // create object with error info in
        const error = {
            info: await res,
            status: res.status,
        };

        throw error;
    }

    // return the json always
    return res.json();
};

// hook for making get api requests to flame
export function useFlameAuth(url: string): [boolean, boolean, object, object] {
    // swr hook for making requests
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_FLAME}${url}`, fetcher);

    // set the state based on issues
    const loading = !data && !error;
    const loggedOut = error && error.status === 401 ? true : false;

    // auth hook
    const { loggedIn, login, logout } = useAuth();

    // when loggedOut var changes update the context
    useEffect(() => {
        if (loggedOut == true) {
            logout();
        } else if (loggedOut == false) {
            login();
        }
    }, [loggedOut]);

    // return all the variables
    return [loading, loggedOut, data, error];
}

interface flamePostServerStateType {
    show: boolean;
    error: boolean;
    message: string;
}

export function useFlamePostCall(
    url: string
): [flamePostServerStateType, (json: object, callback: () => void) => void] {
    // satus of the hook from requests
    const [serverState, setServerState] = useState<flamePostServerStateType>({
        show: false,
        error: false,
        message: "none",
    });

    // set the server state from a response
    const handleServerResponse = (show, error, message) => {
        setServerState({ show, error, message });
    };

    // handle a from submit to edit cue
    const serverPost = (json, callback) => {
        // axios post edit cue
        axios
            .post(`${process.env.NEXT_PUBLIC_API_FLAME}${url}`, json, {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                // set the server state to handle errors
                handleServerResponse(false, false, response.data.message);
                // callback
                callback();
            })
            .catch(function (error) {
                // catch each type of axios error
                if (error.response) {
                    if (error.response.status == 500) {
                        // check if a server error
                        handleServerResponse(true, true, error.response.data.message);
                    } else if (error.response.status == 502) {
                        // check if api is offline
                        handleServerResponse(true, true, "Error fetching api");
                    } else {
                        // check if a user error
                        handleServerResponse(true, false, error.response.data.message);
                    }
                } else if (error.request) {
                    // check if a request error
                    handleServerResponse(true, true, "Error sending request to server");
                } else {
                    // check if a browser error
                    handleServerResponse(true, true, "Error in browser request");
                    // log the uknown error
                    console.log(error);
                }
            });
    };

    return [serverState, serverPost];
}
