import React, { useState, useEffect } from 'react'
import { useUser } from '../provider/UserProvider';
import axios from 'axios';
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../images/profile.png';
import Avatar from '../images/dummy_avatar.jpg';
import ComingSoon from './SettingPrivacy';


const Menu = () => {

     const { getUser, signOutUser, getName, getEmail, displayComponent, helpComponent, settingComponent, feedbackComponent, viewPageHandler } = useUser();

    return (<>

        <div
            className="absolute right-0 mt-14 mr-4 w-1/4 origin-top-right rounded-md bg-white text-zinc-200 font-semibold py-2 px-2 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
            style={{ boxShadow: '1px 3px 4px 4px rgba(0, 0, 0, 0.1)' }}>

            <div className='font-bold text-2xl pl-3 text-black'>Menu</div>

            <div className='text-black font-bold text-xl pl-3 pt-3'>Create</div>
       

        <div className='text-gray-500 text-xs pl-3 pt-1.5'>Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  ·   · Meta © 2024</div>
        </div>
    </>
    )
}

export default Menu
