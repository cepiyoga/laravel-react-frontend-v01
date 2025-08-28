import Layout from "../../layouts/Layout.jsx";
import {Head} from "@inertiajs/react";


function Home() {
    return (
        <>
            <Head title="Logout"/>

            <div className={`flex`}>
                <h1 className={`mx-auto text-4xl`}>Logout</h1>
            </div>
        </>
    )
}

Home.layout = page => <Layout>{page}</Layout>;
export default Home;
