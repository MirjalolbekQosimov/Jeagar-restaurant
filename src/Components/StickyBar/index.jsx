import React, { useState } from 'react'
import './StickyBar.css'
import Menu from '../Menu'
import Cart from '../Cart'
import { FaBars } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { CiDiscount1 } from "react-icons/ci";
import { FaNetworkWired } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

const index = () => {
    const [activeMenu, setActiveMenu] = useState("home");
    const [card, setCard] = useState([])
    const [cartMenu, setCardMenu] = useState(false)

    function handleActive(event) {
        const newActiveMenu = event.target.getAttribute('values');
        setActiveMenu(newActiveMenu);
    }
    const [addedCount, setAddedCount] = useState(0);
    function addCountFunc(value) {
        setAddedCount(addedCount + 1);
        setCard([...card, value]);
        console.log(card);
    }
    function handleToggleCart(event) {
        setCardMenu(!cartMenu);
        handleActive(event)
    }

    return (
        <div className='sticky-bar'>
            <div className="left-menu">
                <FaBars />
                <div className='left-menu-icons'>
                    <a href="#home" className={activeMenu === "home" ? 'activeMenu' : null} values='home' onClick={handleActive}>
                        <div>
                            <GoHome />
                        </div>
                    </a>
                    <a href="#discount" className={activeMenu === "discount" ? 'activeMenu' : null} values='discount' onClick={handleActive}>
                        <div>
                            <CiDiscount1 />
                        </div>
                    </a>
                    <a href="#network" className={activeMenu === "network" ? 'activeMenu' : null} values='network' onClick={handleActive}>
                        <div>
                            <FaNetworkWired />
                        </div>
                    </a>
                    <a href="#mail" className={activeMenu === "mail" ? 'activeMenu' : null} values='mail' onClick={handleActive}>
                        <div>
                            <IoMailOutline />
                        </div>
                    </a>
                    <a href="#notifications" className={activeMenu === "notifications" ? 'activeMenu' : null} values='notifications' onClick={handleActive}>
                        <div>
                            <IoIosNotificationsOutline />
                        </div>
                    </a>
                    <a href="#cart" className={activeMenu === "cart" ? 'activeMenu' : null} values='cart' onClick={handleToggleCart} >
                        <div className='cartNum' >
                            <IoCartOutline />
                            {addedCount == 0 ? null : <span className='addcountnumber'>{addedCount}</span>}
                        </div>
                    </a>
                </div>
                <a href="#user">
                    <CiUser />
                </a>
            </div>
            <div className='menu-container'>
                <Menu count={addCountFunc} />
            </div>
            <Cart opencart={cartMenu} data={card} toggle={handleToggleCart} title='Orders #34562' />
        </div>
    )
}

export default index
