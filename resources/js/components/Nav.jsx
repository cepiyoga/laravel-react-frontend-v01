import {Link} from "@inertiajs/react";
import {AlignJustify, ArrowRight, CircleChevronRight, X} from 'lucide-react';
import {useState} from "react";

export default function Nav() {
    const [leftNav, setLeftNav] = useState(false);
    const [rightNav, setRightNav] = useState(false);
    const [salNav, setSalNav] = useState(false);
    const [scmNav, setScmNav] = useState(false);
    const childSal = [
        {lk: '/sales1', name: 'Sales1'},
        {lk: '/sales2', name: 'Sales1'},
        {lk: '/sales3', name: 'Sales1'},
    ]

    const childSCM = [
        {lk: '/scm1', name: 'Scm1'},
        {lk: '/scm2', name: 'Scm2'},
        {lk: '/scm3', name: 'Scm3'},

    ]


    return (
        <div className={`flex justify-between`}>
            <div onMouseLeave={() => {
                setLeftNav(false)
                setSalNav(false)
                setScmNav(false)
            }} className={`flex items-center justify-start gap-2 h-10 w-1/4`}>
                <div>
                    <div>
                        <X onClick={() => {
                            setLeftNav(!leftNav);
                        }} className={`${leftNav ? '' : 'hidden'} animate-pulse text-red-500 duration-500`}/>
                        <AlignJustify onClick={() => {
                            setLeftNav(!leftNav);
                        }} className={`${leftNav ? 'hidden' : ''} relative text-red-500`}/>
                        <div className={`${leftNav ? "" : "hidden"} rounded-xl absolute bg-gray-100 p-3`}>
                            <div className={`my-2`}>
                                <div className={`text-xl`}><Link href={`/`}>Home</Link></div>
                            </div>
                            <div className={`my-2`}>
                                <div>
                                    <div onClick={() => {
                                        setSalNav(!salNav);
                                    }} className="flex items-center justify-start gap-2">
                                        <div className={`hover:cursor-pointer text-xl`}>Sales</div>
                                        <div><ArrowRight
                                            className={`${salNav ? 'rotate-90 animate-pulse text-red-500' : ''} duration-500`}
                                            size={15}/></div>
                                    </div>
                                    <div className={`${salNav ? '' : 'hidden'}`}>
                                        {childSal.map((item, index) => (
                                            <div key={index} className={`mx-2 my-3 text-gray-500 italic`}><Link
                                                href={item.lk}>{item.name}</Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={`my-2`}>
                                <div>
                                    <div onClick={() => {
                                        setScmNav(!scmNav);
                                    }} className="flex items-center justify-start gap-2">
                                        <div className={`hover:cursor-pointer text-xl`}>Logistic</div>
                                        <div><ArrowRight
                                            className={`${scmNav ? 'rotate-90 animate-pulse text-red-500' : ''} duration-500`}
                                            size={15}/></div>
                                    </div>
                                    <div className={`${scmNav ? '' : 'hidden'}`}>
                                        {childSCM.map((item, index) => (
                                            <div key={index} className={`mx-2 my-3 text-gray-500 italic`}><Link
                                                href={item.lk}>{item.name}</Link>
                                            </div>
                                        ))}


                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-1/4`}>
                <img src="onduline.jpg" className={`h-10`} alt="onduline"/>
            </div>
            <div className={`hidden flex items-center justify-start gap-2 h-10 w-1/2`}>
                <div>
                    <Link href="/">Home</Link>
                </div>
                <div>
                    <Link href="/about">About</Link>
                </div>
            </div>
            <div onMouseLeave={() => {
                setRightNav(false);
            }} className={`flex items-center  justify-end gap-2 h-10 w-1/4`}>
                <div>
                    <div>
                        <CircleChevronRight onClick={() => {
                            setRightNav(!rightNav)
                        }}
                                            className={`relative duration-500  text-red-500 ${rightNav ? 'rotate-90 ' : ''} `}/>
                        <div
                            className={`${rightNav ? "" : "hidden"} rounded-xl right-2 md:right-auto absolute bg-gray-100 p-3`}>
                            <div className={`my-2 mx-4`}>
                                <Link href={`/profile`} className={`text-xl`}>Profile</Link>
                            </div>
                            <div className={`my-2 mx-4`}>
                                <Link href={`/logout`} className={`text-xl`}>Logout</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
