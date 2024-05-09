import React, { useState, useEffect } from 'react'
import { useUser } from '../provider/UserProvider';
import axios from 'axios';
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../images/profile.png';
import Avatar from '../images/dummy_avatar.jpg';
import ComingSoon from './SettingPrivacy';


const Menu = () => {

    const { openPopup, darkTheme } = useUser();

    return (<>

        <div
            className={`absolute right-0 mt-14 mr-4 w-2/5 origin-top-right rounded-md bg-[#F7F8FA] dark:bg-[#18191A] text-zinc-200 py-2 px-2 focus:outline-none ${darkTheme && 'dark'}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
            style={{ boxShadow: '1px 3px 4px 4px rgba(0, 0, 0, 0.1)' }}>

            <div className='font-bold text-2xl pl-3 text-black dark:text-white'>Menu</div>

            <div className='flex gap-3 pt-3 m-3'>

                    <div className='left bg-white dark:bg-[#242526] rounded-md w-2/3'>
                    <div className='font-semibold text-xl pl-3 text-black dark:text-white'>Social</div>
                    <div className='p-2 flex gap-2 cursor-not-allowed'>
                        <Icon icon="carbon:event" width="2rem" height="2rem" style={{ color: '#f480b2' }} />
                        <div className='text-black dark:text-white'>
                            <h2 className='text-md font-semibold '>Events</h2>
                            <p className='text-xs'>Organize or find events and other things to do online and nearlby.</p>
                        </div>
                    </div>
                    <Link to="/friends"><div className='p-2 flex gap-2 cursor-pointer'>
                        <Icon icon="fa-solid:user-friends" width="2rem" height="2rem" style={{ color: '#1B82E9' }} />
                        <div className='text-black dark:text-white'>
                            <h2 className='text-md font-semibold'>Friends</h2>
                            <p className='text-xs'>Search for friends or people you know.</p>
                        </div>
                    </div>
                    </Link>
                    <Link to="/group"><div className='p-2 flex gap-2 cursor-pointer'>
                        <Icon icon="el:group-alt" width="2rem" height="2rem" style={{ color: '#1B82E9' }} />
                        <div className='text-black dark:text-white'>
                            <h2 className='text-md font-semibold'>Groups</h2>
                            <p className='text-xs'>Connect with people who share your intrests.</p>
                        </div>
                    </div>
                    </Link>
                    <div className='p-2 flex gap-2 cursor-not-allowed'>
                        <Icon icon="flat-color-icons:feedback" width="1.6rem" height="1.6rem" />
                        <div className='text-black dark:text-white'>
                            <h2 className='text-md font-semibold'>Feeds</h2>
                            <p className='text-xs'>See the most recent posts from your friends, Group, Pages and more.</p>
                        </div>
                    </div>
                    <Link to="/pages"><div className='p-2 flex gap-2 cursor-pointer'>
                        <Icon icon="noto-v1:triangular-flag" width="1.6rem" height="1.6rem" />
                        <div className='text-black dark:text-white'>
                            <h2 className='text-md font-semibold'>Pages</h2>
                            <p className='text-xs'>Discover and connect with business on facebook.</p>
                        </div>
                    </div>
                    </Link>

                </div>

                <div className='right bg-white dark:bg-[#242526] rounded-md w-1/3'>

                    <div className='text-black dark:text-white font-semibold text-xl pl-3 pt-3'>Create</div>

                    <div className='pt-2' onClick={openPopup}>
                        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
                            <Icon icon="mage:edit-fill" width="2rem" height="2rem" style={{ color: '#484747' }} className='bg-[#E4E6EB] rounded-full p-1' />
                            <h3 className='font-semibold text-black pt-1 dark:text-white'>Post</h3>
                        </div>
                    </div>
                    <div className='pt-2'>
                        <Link to='/pages/createpage'><div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
                            <Icon icon="tabler:flag-filled" width="2rem" height="2rem" style={{ color: '#484747' }} className='bg-[#E4E6EB] rounded-full p-1' />
                            <h3 className='font-semibold text-black dark:text-white pt-1'>Create Page</h3>
                        </div></Link>
                    </div>
                    <div className='pt-2'>
                        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-not-allowed'>
                            <Icon icon="gridicons:video" width="2rem" height="2rem" style={{ color: '#484747' }} className='bg-[#E4E6EB] rounded-full p-1' />
                            <h3 className='font-semibold text-black dark:text-white pt-1'>Reel</h3>
                        </div>
                    </div>
                    <div className='pt-2'>
                        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-not-allowed'>
                            <Icon icon="mdi:star-settings" width="2rem" height="2rem" style={{ color: '#484747' }} className='bg-[#E4E6EB] rounded-full p-1' />
                            <h3 className='font-semibold text-black dark:text-white pt-1'>Live event</h3>
                        </div>
                    </div>
                    <div className='pt-2'>
                        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-not-allowed'>
                            <Icon icon="mdi:loudspeaker" width="2rem" height="2rem" style={{ color: '#484747' }} className='bg-[#E4E6EB] rounded-full p-1' />
                            <h3 className='font-semibold text-black dark:text-white pt-1'>Ad</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-gray-500 dark:text-gray-300 text-xs pl-4 pt-1.5'>Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  ·   · Meta © 2024</div>
        </div>
    </>
    )
}

export default Menu
