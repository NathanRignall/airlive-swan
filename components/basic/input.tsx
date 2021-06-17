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
    [x: string]: any;
};

const PLACEMENT_MAPS: Record<Placement, string> = {
    [Placement.TOP]: "rounded-t-md border-b-0 focus:ring-b-0",
    [Placement.MIDDLE]: "rounded-none border-x-0",
    [Placement.BOTTOM]: "rounded-b-md border-t-0 focus:ring-t-0",
};

export function Input(props: Props) {
    const { children, className, placement, ...extraProps } = props;
    return (
        <input
            className={classNames(
                "text-lg block w-full px-3 py-2 rounded-none outline-none text-gray-700 border-logo-light-light border-2 placeholder-gray-500  dark:bg-gray-600 dark:text-gray-200 dark:border-logo-light dark:placeholder-gray-300 ",
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
