import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "components/context/auth";

import Header from "components/parts/header";
import Navbar from "components/parts/navbar";

import { Button } from "components/basic";
import { Overlay } from "components/custom/overlay";

type Props = {
    children?: ReactNode;
    title: string;
};

export default function Layout(props: Props) {
    const { children, title } = props;

    const router = useRouter();

    const { loggedIn, login, logout } = useAuth();

    const handleClick = (event) => {
        event.preventDefault();

        router.push({
            pathname: "/login",
            query: { url: window.location.pathname },
        });
    };

    return (
        <>
            <Header title={title} />
            <Navbar />

            <div className={loggedIn ? "flex flex-col w-full h-full" : " flex flex-col w-full h-full fixed"}>
                <div className="container mx-auto px-4 md:px-10 pt-24">{children}</div>
            </div>

            {loggedIn ? (
                ""
            ) : (
                <Overlay>
                    <div>
                        <div>You need to login to AirLive to proceed</div>

                        <a onClick={handleClick}>
                            <Button
                                className="mt-5"
                                colour={Button.colour.LOGOALT}
                                size={Button.size.LARGE}
                                display={Button.display.BLOCK}
                            >
                                Login
                            </Button>
                        </a>
                    </div>
                </Overlay>
            )}
        </>
    );
}
