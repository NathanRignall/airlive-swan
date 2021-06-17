import { useState, useCallback } from "react";

export function classNames(...classes: (false | null | undefined | string)[]) {
    return classes.filter(Boolean).join(" ");
}

export function useToggle(initialValue: boolean): [boolean, () => void] {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggleValue = useCallback(() => {
        setValue((v) => !v);
    }, []);

    return [value, toggleValue];
}
