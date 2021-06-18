import Link from "next/link";

import { useAuth } from "components/context/auth";
import { useToggle } from "components/utility";

import { NavbarLink } from "components/custom/navbar";

export default function Navbar() {
    const { loggedIn, login, logout } = useAuth();

    const [menu, toggleMenu] = useToggle(false);

    return (
        <div className="bg-white shadow-lg fixed w-full z-20 dark:bg-gray-800 dark:text-gray-200">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 sm:py-2">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-white dark:text-white dark:bg-gray-600 dark:hover:bg-white dark:hover:text-gray-700 focus:outline-none"
                            aria-expanded="false"
                        >
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>

                            <svg
                                className="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 right-0 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <img src="/media/logo/wide-logo.svg " className="h-16 hidden sm:block" />
                        <img src="/media/logo/icon.svg " className="h-10 mx-auto sm:hidden" />
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <NavbarLink link="/" name="Home"></NavbarLink>
                                <NavbarLink link="/watch" name="Watch"></NavbarLink>
                                <NavbarLink link="/tickets" name="Tickets"></NavbarLink>

                                {loggedIn ? (
                                    <NavbarLink link="/account" name="Account"></NavbarLink>
                                ) : (
                                    <NavbarLink link="/login" name="Login" active={NavbarLink.active.BOLD}></NavbarLink>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {menu ? (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <NavbarLink link="/" name="Home" size={NavbarLink.size.MOBILE}></NavbarLink>
                        <NavbarLink link="/watch" name="Watch" size={NavbarLink.size.MOBILE}></NavbarLink>
                        <NavbarLink link="/tickets" name="Tickets" size={NavbarLink.size.MOBILE}></NavbarLink>

                        {loggedIn ? (
                            <NavbarLink link="/account" name="Account" size={NavbarLink.size.MOBILE}></NavbarLink>
                        ) : (
                            <NavbarLink
                                link="/login"
                                name="Login"
                                active={NavbarLink.active.BOLD}
                                size={NavbarLink.size.MOBILE}
                            ></NavbarLink>
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
