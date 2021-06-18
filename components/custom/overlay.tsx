import React, { ReactNode } from "react";

import { classNames } from "components/utility";

type Props = {
    children?: ReactNode;
    className?: string;
};

export function Overlay(props: Props) {
    const { children, className } = props;
    return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="fixed w-full h-full bg-gray-500 opacity-50 top-0 left-0 cursor-pointer overflow-hidden"></div>
            <div
                className={classNames(
                    "fixed w-10/12 max-w-md px-10 py-10 rounded-md shadow-xl flex items-center justify-center text-2xl text-center bg-white dark:bg-gray-600 dark:text-white",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}

Overlay.defaultProps = {};
