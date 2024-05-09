import React, { useState, useEffect } from 'react'
import { useUser } from '../provider/UserProvider';
import axios from 'axios';
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../images/profile.png';
import Avatar from '../images/dummy_avatar.jpg';
import ComingSoon from './SettingPrivacy';

const Notification = () => {

    const { darkTheme } = useUser();

    return (<>

        <div
            className={`absolute right-0 mt-14 mr-4 w-1/4 origin-top-right rounded-md bg-white dark:bg-[#242526]  text-zinc-200 py-2 px-2 focus:outline-none ${darkTheme && 'dark'}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
            style={{ boxShadow: '1px 3px 4px 4px rgba(0, 0, 0, 0.1)' }}>

            <div className='flex justify-between'>
                <h2 className='text-black text-2xl pl-3 font-bold dark:text-white'>Notifications</h2>
                <h5 className='text-xl text-black pr-2 cursor-not-allowed'>...</h5>
            </div>  
            <div className='flex gap-8 pl-5 pt-3 text-black font-semibold'>
                <h3 className='cursor-not-allowed text-[#0866FF] bg-[#DFE9F2] rounded-full px-2 py-1'>All</h3>
                <h3 className='cursor-not-allowed pt-1 dark:text-white'>Unread</h3>
            </div>   
            <div className='flex justify-between px-3 pt-3 text-black'>
                <h4 className='font-semibold dark:text-white'>Earlier</h4>
                <h4 className='text-[#0866FF] text-sm cursor-not-allowed'>See all</h4>
            </div>  
            <div className='pl-3 text-black dark:text-white pt-3 pb-3'>
                <h5 className='text-xl '>There is no notification.</h5>
            </div>

        <div className='text-gray-500 dark:text-gray-300 text-xs pl-3 pt-1.5'>Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  ·   · Meta © 2024</div>
        </div>
    </>
    )
}

export default Notification;
