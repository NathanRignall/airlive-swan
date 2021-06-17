import Header from "components/parts/header";
import Navbar from "components/parts/navbar";

export default function Home() {
    return (
        <>
            <Header title="AirLive Home" />
            <Navbar />

            <div className="flex flex-col min-h-screen ">
                <section className="flex bg-gradient-to-r from-green-100 to-blue-100 py-20 text-center dark:from-green-800 dark:to-blue-800">
                    <div className="m-auto pt-32">
                        <h1 className="lg:text-10xl md:text-10xl sm:text-9xl text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-logo-light to-logo-dark dark:from-logo-light-light dark:to-logo-dark-light">
                            AirLive
                        </h1>
                        <p className="md:text-5xl text-4xl font-bold mb-8 text-gray-700 dark:text-white">
                            Simple Live Broadcasts
                        </p>
                    </div>
                </section>
                <div className="mx-auto px-4 pt-24 flex-grow "></div>
            </div>
        </>
    );
}
