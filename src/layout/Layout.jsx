/* eslint-disable react/prop-types */
import React from "react";
// import Sidebar from "../components/Sidebar/Sidebar";
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import PropTypes from 'prop-types';
export default function Layout({ children }) {
    return (
        <>
            <Sidebar />
            {children}
            <Footer />
        </>
    )
}


Layout.PropTypes = {
    children: PropTypes.string.isRequired
}
