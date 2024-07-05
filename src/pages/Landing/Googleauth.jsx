// import React from "react"
import { useEffect, useState, React } from "react"
import Cookies from 'js-cookie'

function GoogleAuth() {
    const getCookie = () => {
        return Cookies.get("credentialsGoogle");
    };
    useEffect(() => {
        console.log(getCookie())
        // const responseGoogle = Cookies.get('credentialsGoogle')
        // console.log('test', responseGoogle)

        // console.log('test')
    }, [])
    return (
        <>
            {/* <div className=""> */}
            {/* test */}
            {/* </div> */}
        </>
    )
}
// const GoogleAuth = () => {

// }

export default GoogleAuth