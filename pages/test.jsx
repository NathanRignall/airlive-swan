import Head from "next/head";
import { Button, Card } from "../components/basic";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Button size={Button.size.LARGE}>Button</Button>
            <Button variant={Button.variant.BLUE}>Button</Button>
            <Button size={Button.size.SMALL}>Button</Button>

            <Card>Test Card here for testing perpouses</Card>
        </div>
    );
}
