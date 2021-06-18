import Layout from "components/layout/auth";

import { useFlameAuth } from "components/api";

const StreamCardLoader = (props) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full animate-pulse ">
        <div className="justify-between">
            <div className="md:flex-shrink-0 relative">
                <div className="w-full pt-[56.25%] bg-gray-700 relative">
                    <div className="absolute top-0 left-0"></div>
                </div>
            </div>

            <div className="px-8 py-6 w-full md:flex md:justify-between md:items-end">
                <div className="w-full">
                    <div className="h-9 bg-gray-200 rounded w-8/12"></div>
                    <div className="mt-1 h-4 bg-gray-100 rounded  w-7/12 sm:w-4/12"></div>
                    <div className="mt-2 h-4 bg-gray-400 rounded w-10/12"></div>
                </div>
            </div>
        </div>
    </div>
);

const StreamGrid = (props) => <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">{props.children}</div>;

export default function Main() {
    const [loading, loggedOut, data, error] = useFlameAuth("/app/streams");

    if (true) {
        return (
            <Layout title="Airlive Watch">
                <StreamGrid>
                    <StreamCardLoader />
                    <StreamCardLoader />
                </StreamGrid>
            </Layout>
        );
    } else {
        console.log(data);
        return <>Okay</>;
    }
}
