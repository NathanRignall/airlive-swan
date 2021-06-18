import React, { ReactNode, useEffect } from "react";
import Link from "next/link";

import { useAuth } from "components/context/auth";

import Header from "components/parts/header";
import Navbar from "components/parts/navbar";

type Props = {
    children?: ReactNode;
    title: string;
};

export function LoginMessage(props) {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-5 px-5 sm:p-0">
                <div className="fixed inset-0" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
                </div>
                <div className="inline-block bg-white rounded-lg overflow-hidden shadow-xl transform transition-all w-full sm:max-w-md">
                    <div className="bg-white px-4 py-14 sm:px-16 sm:py-16">
                        <div className="text-center text-2xl">{props.children}</div>
                        <div className="mt-2">
                            <div className="items-center w-full flex justify-center py-2 px-4 text-lg font-medium rounded-md text-white bg-logo3 hover:bg-logo1 cursor-pointer">
                                Login
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

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

            <div className="flex flex-col min-h-screen">
                <div className="container mx-auto px-4 md:px-10 pt-24 flex-grow">{children}</div>
            </div>

            {loggedIn ? "no" : <LoginMessage />}
        </>
    );
}
