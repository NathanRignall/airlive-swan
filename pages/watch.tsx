import Layout from "components/layout/default";

import { useAuth } from "components/context/auth";

export default function Home() {
    const { details, login, logout } = useAuth();

    console.log(details);

    return <Layout title="Test">{details.session ? "Logged In" : "Not logged In"}</Layout>;
}
