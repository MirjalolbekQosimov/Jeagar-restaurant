import React, { useState } from 'react'
import './StickyBar.css'
import { FaBars } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { CiDiscount1 } from "react-icons/ci";
import { FaNetworkWired } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

const index = ({ HandleOpenCart, addedCount, HandleCloseCart }) => {

    const [activeMenu, setActiveMenu] = useState("home");

    function handleActive(event) {
        const newActiveMenu = event.target.getAttribute('values');
        setActiveMenu(newActiveMenu);
        HandleCloseCart()
    }

    function CartClick() {
        handleActive(event)
        HandleOpenCart()
    }
    return (
        <div className='sticky-bar'>
            <div className="left-menu">
                <div className='left-menu-icons'>
                    <a href="#bars" className={activeMenu === "bars" ? 'activeMenu' : null} values='bars' onClick={handleActive}>
                        <div values='bars'>
                            <FaBars values='bars' />
                        </div>
                    </a>
                    <a href="#home" className={activeMenu === "home" ? 'activeMenu' : null} values='home' onClick={handleActive}>
                        <div values='home'>
                            <GoHome values='home' />
                        </div>
                    </a>
                    <a href="#discount" className={activeMenu === "discount" ? 'activeMenu' : null} values='discount' onClick={handleActive}>
                        <div values='discount'>
                            <CiDiscount1 values='discount' />
                        </div>
                    </a>
                    <a href="#network" className={activeMenu === "network" ? 'activeMenu' : null} values='network' onClick={handleActive}>
                        <div values='network' >
                            <FaNetworkWired values='network' />
                        </div>
                    </a>
                    <a href="#mail" className={activeMenu === "mail" ? 'activeMenu' : null} values='mail' onClick={handleActive}>
                        <div values='mail'>
                            <IoMailOutline values='mail' />
                        </div>
                    </a>
                    <a href="#notifications" className={activeMenu === "notifications" ? 'activeMenu' : null} values='notifications' onClick={handleActive}>
                        <div values='notifications'>
                            <IoIosNotificationsOutline values='notifications' />
                        </div>
                    </a>
                    <a href="#cart" className={activeMenu === "cart" ? 'activeMenu' : null} values='cart' onClick={CartClick}  >
                        <div className='cartNum' values='notifications' >
                            <IoCartOutline values='notifications' />
                            {addedCount ? <span className='addcountnumber'>{addedCount}</span> : null}
                        </div>
                    </a>
                    <a href="#user" className={activeMenu === "user" ? 'activeMenu' : null} values='user' onClick={handleActive}>
                        <div values='user'>
                            <CiUser values='user' />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default index
