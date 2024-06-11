/* eslint-disable react/prop-types */
import React from "react";
// import Sidebar from "../components/Sidebar/Sidebar";
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
// import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
export default function Layout() {
    return (
        <>
            <Sidebar />
                <Outlet />
            <Footer />
        </>
    )
}


// Layout.PropTypes = {
//     children: PropTypes.func.isRequired
// }
