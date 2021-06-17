import Link from "next/link";
import React, { Component } from "react";

function DesktopNavLink(props) {
  if (props.active == true) {
    return (
      <Link href={props.link}>
        <a className="bg-gray-700 text-white px-3 py-2 rounded-md text-lg font-medium">
          {props.name}
        </a>
      </Link>
    );
  } else {
    return (
      <Link rel="preload" href={props.link}>
        <a className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
          {props.name}
        </a>
      </Link>
    );
  }
}

function MobileNavLink(props) {
  if (props.active == true) {
    return (
      <Link href={props.link}>
        <a className="bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
          {props.name}
        </a>
      </Link>
    );
  } else {
    return (
      <Link rel="preload" href={props.link}>
        <a className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          {props.name}
        </a>
      </Link>
    );
  }
}
class Navbar extends Component {
  state = {
    menuOpen: false,
  };

  menuToggle = () => {
    if (this.state.menuOpen == true) {
      this.setState({
        menuOpen: false,
      });
    } else {
      this.setState({
        menuOpen: true,
      });
    }
  };

  render() {
    return (
      <div className="bg-white shadow-lg  fixed w-full z-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 sm:py-2">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={this.menuToggle}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

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
              <img
                src="/media/logo/wide-logo.svg "
                className="h-16 hidden sm:block"
              />
              <img
                src="/media/logo/icon.svg "
                className="h-10 mx-auto sm:hidden"
              />
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <DesktopNavLink link="/" name="Home" />
                  <DesktopNavLink link="/watch/" name="Watch" />
                  <DesktopNavLink link="/book/" name="Book" />
                  <DesktopNavLink link="/account/" name="Account" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.state.menuOpen ? (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink link="/" name="Home" />
              <MobileNavLink link="/watch/" name="Watch" />
              <MobileNavLink link="/book/" name="Book" />
              <MobileNavLink link="/account/" name="Account" />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default function NavbarXpo() {
  return <Navbar />;
}
