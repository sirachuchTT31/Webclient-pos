import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
export default function Appbar(props) {

    function handlerSidebar() {
        if (props.isOpenSidebar === false) {
            props.funcOpenSidebar(true)
        }
        else {
            props.funcOpenSidebar(false)
        }
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handlerSidebar}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                           <p>BACK-OFFICE</p>
                        </Typography>
                        {/* <Button color="inherit">Login</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

Appbar.propTypes = {
    funcOpenSidebar: PropTypes.func.isRequired,
    isOpenSidebar: PropTypes.bool.isRequired
} 