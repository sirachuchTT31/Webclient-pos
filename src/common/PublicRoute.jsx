import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = (props) => {
    return props.isAuthenticated === false ? props.children : <>{<Navigate to="/dashboard" />}</>
}

export default PublicRoute;
PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired
}