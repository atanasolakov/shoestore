import React, { useState } from 'react';
import './sidebar.css'; // Assuming sidebar.css is in the same directory as this component
import Price from './Price/Price';
import Color from './Color/Color';
import Category from './Category/Category';
import { Menu } from "@mui/icons-material";

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <button className="sidebar-toggle-button" onClick={toggleSidebar}>
               <Menu className={'sidebar-icon'} fontSize={"small"}/>
            </button>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <Price />
                <Color />
                <Category />
            </div>
        </>
    );
};

export default Sidebar;
