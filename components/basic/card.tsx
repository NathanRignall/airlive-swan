import React, { ReactNode } from "react";

import { classNames } from "components/utility";

enum Variant {
    LIGHT,
}

enum Padding {
    SMALL,
    MEDIUM,
    LARGE,
    SCREEN,
}

type Props = {
    children?: ReactNode;
    className?: string;
    padding: Padding;
    variant: Variant;
};

const VARIANT_MAPS: Record<Variant, string> = {
    [Variant.LIGHT]: "bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-200",
};

const PADDING_MAPS: Record<Padding, string> = {
    [Padding.SMALL]: "px-4 py-8",
    [Padding.MEDIUM]: "px-5 py-10",
    [Padding.LARGE]: "px-6 py-12",
    [Padding.SCREEN]: "px-8 py-10 sm:px-16 sm:py-16 mx-4",
};

export function Card(props: Props) {
    const { children, className, variant, padding } = props;
    return (
        <div
            className={classNames(
                "rounded-lg overflow-hidden shadow-xl w-full text-center mb-5",
                VARIANT_MAPS[variant],
                PADDING_MAPS[padding],
                className
            )}
        >
            {children}
        </div>
    );
}

Card.defaultProps = {
    variant: Variant.LIGHT,
    padding: Padding.MEDIUM,
};

Card.variant = Variant;
Card.padding = Padding;
