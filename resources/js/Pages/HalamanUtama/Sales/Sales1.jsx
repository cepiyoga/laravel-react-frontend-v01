import Layout from "../../../layouts/Layout.jsx";
import {Head} from "@inertiajs/react";
import Bar from "../../../components/Bar.jsx";


function Home() {
    return (
        <>
            <Head title="Sales1"/>
            <div>

                <h1 className={`mx-auto text-4xl text-center`}>Sales 1</h1>
                <div className={`grid grid-cols-2 gap-4`}>
                    <div className={` h-96`}>
                        <Bar/>
                    </div>

                    <div className={` h-96`}>
                        <Bar/>
                    </div>

                    <div className={` h-96`}>
                        <Bar/>
                    </div>

                    <div className={` h-96`}>
                        <Bar/>
                    </div>
                </div>
            </div>
        </>
    )
}

Home.layout = page => <Layout>{page}</Layout>;
export default Home;
