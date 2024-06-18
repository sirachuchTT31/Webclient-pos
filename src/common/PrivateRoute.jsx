import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = (props) => {
    return props.isAuthenticated === true ? props.children : <>{<Navigate to="/auth" />}</>
}

// <Route
//     {...rest}
//     render={props =>
//         isAuthenticated ? (
//             <Component {...props} />
//         ) : (
//             <Redirect to="/login" />
//         )
//     }
// />

export default PrivateRoute;
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired
}