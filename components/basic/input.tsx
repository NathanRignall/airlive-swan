import React, { ReactNode } from "react";

import { classNames } from "components/utility";

enum Placement {
    TOP,
    MIDDLE,
    BOTTOM,
}

type Props = {
    children?: ReactNode;
    className?: string;
    placement: Placement;
};

const PLACEMENT_MAPS: Record<Placement, string> = {
    [Placement.TOP]: "rounded-t-md",
    [Placement.MIDDLE]: "rounded-none",
    [Placement.BOTTOM]: "rounded-b-md ",
};

export function Input(props: Props) {
    const { children, className, placement, ...extraProps } = props;
    return (
        <input
            className={classNames(
                "text-lg block w-full px-3 py-2 rounded-none border text-gray-700 border-gray-300 placeholder-gray-500  dark:bg-gray-600 dark:text-gray-200 dark:border-gray-900 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:border-transparent focus:z-10 focus:ring-logo-light",
                PLACEMENT_MAPS[placement],
                className
            )}
            {...extraProps}
        >
            {children}
        </input>
    );
}

Input.defaultProps = {
    placement: Placement.MIDDLE,
};

Input.placement = Placement;
