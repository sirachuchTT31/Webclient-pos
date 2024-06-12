import React, { useEffect } from "react";
import './Sidebar.scss'
import PropTypes from 'prop-types';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';

function Sidebar(props) {
    const menuList = [
        {
            menu: 'Dashboard',
            route: '/dashboard',
            component: <DashboardIcon fontSize="large" />
        },
        {
            menu: 'Report',
            route: '',
            component: <AssessmentIcon fontSize="large" />
        }
    ]
    useEffect(() => {
        props.isOpenSidebar ? document.getElementById('sidebar').style.width = '220px' : document.getElementById('sidebar').style.width = '60px'
    }, [props]);
    return (

        <>
            <div className=" wrapper-sidebar " id="sidebar" style={{ minHeight: '97vh' }}>
                <ul className="flex flex-col gap-3 ">
                    {
                        menuList.map((item, index) =>
                            <li className="p-2 text-start h-fit cursor-pointer font-bold text-lg uppercase tracking-widest bg-white hover:bg-blue-300 active:bg-blue-300 focus:bg-blue-300 focus-visible:bg-blue-300" key={index}>
                                <a href={item.route}>
                                    {props.isOpenSidebar === true ? item.menu : item.component}
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default Sidebar

Sidebar.propTypes = {
    isOpenSidebar: PropTypes.bool.isRequired
}