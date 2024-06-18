import React from "react";
import PropTypes from 'prop-types';
export default function LoginMessage(props) {
    return <>
        {
            props.message?.length > 0 &&
            <div className="bg-red-100 border border-red-400 text-red-700 text-center px-4 py-3 rounded relative" role="alert" >
                <strong className="font-bold">Wrong credentials</strong><br />
                <span className="block sm:inline">{props.message}</span>
            </div>
        }
    </>
}

LoginMessage.propTypes = {
    message: PropTypes.string
}