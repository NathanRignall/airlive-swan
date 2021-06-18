import React, { ReactNode, useEffect } from "react";
import Link from "next/link";

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

    const { loggedIn, login, logout } = useAuth();

    useEffect(() => {
        console.log(loggedIn);
    }, [loggedIn]);

    return (
        <>
            <Header title={title} />
            <Navbar />

            <div className={loggedIn ? "flex flex-col w-full h-full" : " flex flex-col w-full h-full fixed"}>
                <div className="container mx-auto px-4 md:px-10 pt-24">{children}</div>
            </div>

            {loggedIn ? (
                "overflow-y-hidden fixed w-full h-full"
            ) : (
                <Overlay>
                    <div>
                        <div>You need to login to AirLive to proceed</div>
                        <Link
                            href={{
                                pathname: "/login",
                                query: { url: window.location.pathname },
                            }}
                        >
                            <a>
                                <Button
                                    className="mt-5"
                                    colour={Button.colour.LOGOLIGHT}
                                    size={Button.size.LARGE}
                                    display={Button.display.BLOCK}
                                >
                                    Login
                                </Button>
                            </a>
                        </Link>
                    </div>
                </Overlay>
            )}
        </>
    );
}
