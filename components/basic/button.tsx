import React, { ReactNode } from "react";

import { classNames } from "components/utility";

enum Variant {
    LOGOLIGHT,
    LOGOMAIN,
    LOGODARK,
    LIGHT,
    DARK,
    RED,
    YELLOW,
    GREEN,
    BLUE,
}

enum Size {
    SMALL,
    MEDIUM,
    LARGE,
}

enum Display {
    INLINE,
    BLOCK,
}

type Props = {
    variant: Variant;
    children?: ReactNode;
    size: Size;
    display: Display;
};

const SIZE_MAPS: Record<Size, string> = {
    [Size.SMALL]: "px-3 py-1 text-sm",
    [Size.MEDIUM]: "px-4 py-2 text-base",
    [Size.LARGE]: "px-4 py-2 text-2xl",
};

const VARIANT_MAPS: Record<Variant, string> = {
    [Variant.LOGOLIGHT]: "bg-logo-light text-white hover:bg-logo-light-light hover:text-gray-700",
    [Variant.LOGOMAIN]: "bg-logo-main text-white hover:bg-logo-main-light hover:text-gray-700",
    [Variant.LOGODARK]: "bg-logo-dark text-white hover:bg-logo-dark-light hover:text-gray-700",
    [Variant.LIGHT]: "bg-gray-200 text-black",
    [Variant.DARK]: "bg-gray-700 text-white",
    [Variant.RED]: "bg-red-500 text-white",
    [Variant.YELLOW]: "bg-yellow-500 text-black",
    [Variant.GREEN]: "bg-green-500 text-white",
    [Variant.BLUE]: "bg-blue-500 text-white",
};

const DISPLAY_MAPS: Record<Display, string> = {
    [Display.INLINE]: "inline",
    [Display.BLOCK]: "text-center block w-full",
};

export function Button(props: Props) {
    const { children, variant, size, display } = props;
    return (
        <div
            className={classNames(
                "rounded-md mb-2 cursor-pointer",
                VARIANT_MAPS[variant],
                SIZE_MAPS[size],
                DISPLAY_MAPS[display]
            )}
        >
            {children}
        </div>
    );
}

Button.defaultProps = {
    variant: Variant.LOGOMAIN,
    size: Size.MEDIUM,
    display: Display.INLINE,
};

Button.variant = Variant;
Button.size = Size;
Button.display = Display;
