import React, { ReactNode } from "react";

import Header from "components/parts/header";
import Navbar from "components/parts/navbar";

type Props = {
    children?: ReactNode;
    title: string;
};

export default function Layout(props: Props) {
    const { children, title } = props;

    return (
        <>
            <Header title={title} />
            <Navbar />
            <div className="pt-24 ">{children}</div>
        </>
    );
}
