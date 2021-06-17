import React, { ReactNode } from "react";

import Link from "next/link";

import { classNames } from "components/utility";

enum Active {
    NOTACTIVE,
    ACTIVE,
}

enum Size {
    MOBILE,
    DESKTOP,
}

type Props = {
    active: Active;
    size: Size;
    link: string;
    name: string;
};

const ACTIVE_MAPS: Record<Active, string> = {
    [Active.NOTACTIVE]:
        "bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-white dark:hover:text-gray-700",
    [Active.ACTIVE]: "bg-gray-700 text-white",
};

const SIZE_MAPS: Record<Size, string> = {
    [Size.MOBILE]: "block text-base text-center",
    [Size.DESKTOP]: "text-lg ",
};

export function NavbarLink(props: Props) {
    const { active, size, link, name } = props;
    return (
        <Link href={link}>
            <a
                className={classNames("px-3 py-2 rounded-md font-medium", ACTIVE_MAPS[active], SIZE_MAPS[size])}
                href={link}
            >
                {name}
            </a>
        </Link>
    );
}

NavbarLink.defaultProps = {
    active: Active.NOTACTIVE,
    size: Size.DESKTOP,
};

NavbarLink.active = Active;
NavbarLink.size = Size;
