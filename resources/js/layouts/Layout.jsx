import Nav from "../components/Nav.jsx";

export default function Layout({children}) {


    return (
        <div className={`container mx-auto`}>
            <div className={`my-3 mx-1 rounded h-10`}>
                <div className={`border border-gray-200 rounded-lg px-2`}>
                    <Nav/>
                </div>
            </div>
            <div className={`mx-1`}>
                {children}
            </div>


        </div>
    )
}
