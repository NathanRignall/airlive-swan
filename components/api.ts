import axios from "axios";

import { useState } from "react";

export const fetcher = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
        const error = {
            info: await res,
            status: res.status,
        };
        throw error;
    }

    return res.json();
};

interface ServerStateType {
    show: boolean;
    error: boolean;
    message: string;
}

export function useFlamePostCall(url: string): [ServerStateType, (json: object, callback: () => void) => void] {
    // satus of the hook from requests
    const [serverState, setServerState] = useState<ServerStateType>({
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
