import Layout from "../../../layouts/Layout.jsx";
import {Head} from "@inertiajs/react";


function Home() {
    return (
        <div className={`flex`}>
            <Head title="Sales1"/>
            <h1 className={`mx-auto text-4xl`}>Sales 1</h1>
        </div>
    )
}

Home.layout = page => <Layout>{page}</Layout>;
export default Home;
