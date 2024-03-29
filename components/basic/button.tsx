import React, { ReactNode } from "react";

import { classNames } from "components/utility";

enum Colour {
    LOGOALT,
    LOGOMAIN,
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

enum Element {
    DIV,
    SUBMIT,
}

type Props = {
    children?: ReactNode;
    className?: string;
    colour: Colour;
    size: Size;
    display: Display;
    element: Element;
};

const SIZE_MAPS: Record<Size, string> = {
    [Size.SMALL]: "px-3 py-1 text-sm",
    [Size.MEDIUM]: "px-4 py-2 text-base",
    [Size.LARGE]: "px-4 py-2 text-2xl",
};

const COLOUR_MAPS: Record<Colour, string> = {
    [Colour.LOGOALT]:
        "bg-logo-light text-white hover:bg-logo-light-dark dark:bg-logo-dark-dark dark:text-gray-200 dark:hover:bg-logo-dark-light dark:hover:text-gray-700",
    [Colour.LOGOMAIN]: "bg-logo-main text-white hover:bg-logo-main-dark",
    [Colour.LIGHT]: "bg-gray-200 text-black",
    [Colour.DARK]: "bg-gray-700 text-white",
    [Colour.RED]: "bg-red-500 text-white",
    [Colour.YELLOW]: "bg-yellow-500 text-black",
    [Colour.GREEN]: "bg-green-500 text-white",
    [Colour.BLUE]: "bg-blue-500 text-white",
};

const DISPLAY_MAPS: Record<Display, string> = {
    [Display.INLINE]: "inline",
    [Display.BLOCK]: "text-center block w-full",
};

export function Button(props: Props) {
    const { children, className, colour, size, display, element } = props;

    if (element == Element.DIV) {
        return (
            <div
                className={classNames(
                    "rounded-md mb-2 cursor-pointer",
                    COLOUR_MAPS[colour],
                    SIZE_MAPS[size],
                    DISPLAY_MAPS[display],
                    className
                )}
            >
                {children}
            </div>
        );
    } else {
        return (
            <button
                className={classNames(
                    "rounded-md mb-2 cursor-pointer",
                    COLOUR_MAPS[colour],
                    SIZE_MAPS[size],
                    DISPLAY_MAPS[display],
                    className
                )}
                type="submit"
            >
                {children}
            </button>
        );
    }
}

Button.defaultProps = {
    colour: Colour.LOGOMAIN,
    size: Size.MEDIUM,
    display: Display.INLINE,
    element: Element.DIV,
};

Button.colour = Colour;
Button.size = Size;
Button.display = Display;
Button.element = Element;
