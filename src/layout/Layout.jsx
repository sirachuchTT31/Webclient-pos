/* eslint-disable react/prop-types */
import React, { useState } from "react";
// import Sidebar from "../components/Sidebar/Sidebar";
import Sidebar from '../components/Sidebar/Sidebar'
// import Footer from '../components/Footer/Footer'
import Appbar from "../components/Appbar/Appbar";
import { Outlet } from "react-router-dom";
export default function Layout() {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)

    function handlerOpenSidebar(isOpen) {
        setIsOpenSidebar(isOpen)
    }
    return (
        <>
            <header>
                <Appbar funcOpenSidebar={handlerOpenSidebar} isOpenSidebar={isOpenSidebar} />
            </header>
            <main className="flex flex-row" style={{ minHeight: '97vh' }}>
                <div className="">
                    <Sidebar isOpenSidebar={isOpenSidebar} />
                </div>
                <div className="basis-full bg-slate-100">
                    <Outlet />
                </div>
            </main>
        </>
    )
}
