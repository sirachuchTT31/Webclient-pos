import React, { useEffect } from "react"
import { RingLoader } from "react-spinners"
import PropTypes from 'prop-types';

function Spinner(props) {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    const spinnerElement = props.isLoading == true ? < RingLoader color="#36d7b7"
        cssOverride={override}
        size={150}
        // color={"#123abc"}
        loading={props.isLoading}
        speedMultiplier={1.5}
        aria-label="Loading Spinner"
        data-testid="loader" /> : ''
    // useEffect(() => {
    //     console.log(props)
    // }, [])
    console.log()
    return <>
        {spinnerElement}
    </>
}

export default Spinner

Spinner.propTypes = {
    isLoading: PropTypes.bool.isRequired
}

