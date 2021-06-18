import Head from "next/head";

export default function Header(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://vjs.zencdn.net/7.10.2/video-js.css" rel="stylesheet" />
            <link rel="apple-touch-icon" sizes="180x180" href="/media/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/media/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/media/icons/favicon-16x16.png" />
            <link rel="manifest" href="/media/icons/site.webmanifest" />
            <link rel="mask-icon" href="/media/icons/safari-pinned-tab.svg" color="#4a729d" />
            <link rel="shortcut icon" href="/media/icons/favicon.ico" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-config" content="/media/icons/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
                rel="stylesheet"
            />
        </Head>
    );
}
