import React, { ReactNode } from "react";

import { classNames } from "components/utility";

enum Variant {
  LIGHT,
}

enum Padding {
  SMALL,
  MEDIUM,
  LARGE,
}

type Props = {
  variant: Variant;
  children?: ReactNode;
  padding: Padding;
};

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.LIGHT]: "bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-200",
};

const PADDING_MAPS: Record<Padding, string> = {
  [Padding.SMALL]: "px-4 py-8",
  [Padding.MEDIUM]: "px-5 py-10",
  [Padding.LARGE]: "px-6 py-12",
};

export function Card(props: Props) {
  const { children, variant, padding } = props;
  return (
    <div
      className={classNames(
        "rounded-lg overflow-hidden shadow-xl w-full text-center mb-5",
        VARIANT_MAPS[variant],
        PADDING_MAPS[padding]
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
