import React from 'react';
import axios from 'axios';
import UserProfile from '../images/user-profile.png';
import { Icon } from '@iconify/react';
import { useUser } from '../provider/UserProvider';
import { Cards } from '../cards/Cards';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProfileImage from '../images/profile.png';
import { useLocation } from 'react-router-dom';

const Profile = () => {

    const { getUser, userId, darkTheme, setIsActive1, isActive1 } = useUser();
    const [getData, setData] = useState(JSON.parse(localStorage.getItem('userData')) || {});
    const location = useLocation();
    
    const navigate = useNavigate();
    console.log(userId)

    const userDetails = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/facebook/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${getUser.token}`
                }
            });
            console.log(response.data.data);
            setData(response.data.data);
            localStorage.setItem('userData', JSON.stringify(response.data.data));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        userDetails();
        {(location.pathname == "/profile/post") ? setIsActive1('post') : ""}
    }, [])

    const activeHandler = (link) => {
        setIsActive1(link)
        // if (link === "about") {
        //     setIsActive1('about');
        // }
        // if (link === "about") {
        //     navigate('about')
        // } else if (link === "post") {
        //     navigate('post')
        // }
    }

    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1100);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsScreenSmall(window.innerWidth < 1100);
        };

        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    console.log('profile')


    return (
        <>
            {isScreenSmall ? (
                <div className={`${darkTheme && 'dark'}`}>
                    <>
                        <div className='profile'>
                            <div className='flex relative'>
                                <div className='w-full bg-white '>
                                    <Icon icon="tabler:arrow-left" width="1.5rem" height="1.5rem" style={{ color: darkTheme ? 'white' : 'black' }} className='mt-2 ml-4 fixed z-20 bg-white dark:bg-[#18191A]' onClick={() => navigate('/')} />
                                </div>
                                <h2 className='Name text-lg font-bold pt-1.5 pb-1.5 pl-16 flex items-center fixed z-10 dark:text-white bg-white dark:bg-[#18191A] w-full'>{getData.name}</h2>
                            </div>
                            <div className='pt-2 relative'>
                                <img src={UserProfile} className='h-80 w-full relative' />
                                <img src={getData.profileImage || ProfileImage} alt='profile' className='rounded-full h-44 w-44 absolute top-2/3 ml-4 bg-white' />
                            </div>
                            <h2 className='Name text-2xl font-bold pt-20 pl-6 dark:text-white'>{getData.name}</h2>

                            <div className='flex gap-4 pt-6 px-6'>
                                <button className='w-full px-4 rounded-lg bg-[#d9dbe0] dark:bg-[#323436] text-black font-bold flex gap-2 justify-center items-center cursor-not-allowed py-1 text-sm dark:text-white'>
                                    <Icon icon="bxs:user-check" width="1.5rem" height="1.5rem" style={{ color: darkTheme ? 'white' : 'black' }} className='mt-0.5' />Friends</button>
                                <button className='w-full px-3 rounded-lg bg-[#0762f2] font-bold text-white flex gap-2 justify-center items-center py-1 cursor-not-allowed text-sm dark:text-white'>
                                    <Icon icon="ic:baseline-edit" width="1.2rem" height="1.2rem" style={{ color: 'white' }} className='mt-0.5' />Message</button>
                                <div className='cursor-not-allowed'>
                                    <h4 className='rounded-lg bg-gray-300 px-3.5 py-1.5 font-semibold text-gray-600 dark:bg-[#323436] dark:text-white'>...</h4>
                                </div>
                            </div>
                            <div className='border-b border-gray-400 mt-4'></div>

                            <div className='flex justify-evenly ml-2 mr-2 mt-2 text-gray-600 dark:text-white font-semibold'>
                                <Link to='post'>
                                    <div
                                        className={`cursor-pointer py-2 px-2 text-sm ${isActive1 === 'post' ? 'text-[#0866FF]' : ''}`}
                                        onClick={() => activeHandler('post')}
                                    >
                                        <h2 className={`${isActive1 === 'post' ? 'border-b-2 border-[#0866FF]' : ''}`}>Post</h2>
                                    </div>
                                </Link>
                                <Link to='about'>
                                    <div
                                        className={`cursor-pointer py-2 px-2 text-sm ${isActive1 === 'about' ? 'text-[#0866FF]' : ''}`}
                                        onClick={() => activeHandler('about')}
                                    >
                                        <h2 className={`${isActive1 === 'about' ? 'border-b-2 border-[#0866FF]' : ''}`}>About</h2>
                                    </div>
                                </Link>
                                <div className='cursor-not-allowed hover:bg-[#F0F2F5] px-2 py-2 text-sm'>Followers</div>
                                <div className='cursor-not-allowed hover:bg-[#F0F2F5] px-2 py-2 text-sm'>Photos</div>
                                <div className='cursor-not-allowed hover:bg-[#F0F2F5] px-2 py-2 text-sm'>Videos</div>
                                <div className='cursor-not-allowed hover:bg-[#F0F2F5] px-2 py-2 text-sm'>More</div>
                            </div>
                        </div>
                        <Outlet />
                    </>
                </div>

            ) : (
                <>
                    <div className={`h-5/7 w-screen ${darkTheme && 'dark'}`}>

                        <div className='h-full drop-shadow-md overflow-y-auto'>
                            <div className='h-3/7 w-4/6  rounded-b-xl m-auto'>
                                <img src={UserProfile} className='h-full w-full rounded-b-xl ' />
                            </div>
                            <div className='flex justify-between px-52'>
                                <div className='flex'>
                                    <div className='ml-4 mt-3'>
                                        <img src={getData.profileImage || ProfileImage} alt='profile' className='rounded-full h-40 w-40' />
                                    </div>
                                    <h2 className='Name text-4xl font-bold  pl-7 flex items-center dark:text-white'>{getData.name}</h2>
                                </div>
                                <div className='flex gap-4 py-16 pr-6'>
                                    <button className='px-3 rounded-lg bg-[#0861F2] text-white font-semibold flex gap-2 pt-2 cursor-not-allowed'>
                                        <Icon icon="mdi:plus" width="1.2rem" height="1.2rem" style={{ color: 'white' }} className='mt-0.5' />Add to story</button>
                                    <button className='px-3 rounded-lg bg-[#d9dbe0] dark:bg-[#323436] dark:text-white font-semibold flex gap-2 pt-2 cursor-not-allowed'>
                                        <Icon icon="bxs:user-check" width="1.2rem" height="1.2rem" style={{ color: darkTheme ? 'white' : 'black' }} className='mt-0.5' />Friends</button>
                                </div>
                            </div>
                            <div className='border-b border-gray-400 dark:border-gray-600 mx-60 mt-4'></div>
                            <div className='flex justify-evenly px-12'>
                                <div className='flex gap-3 ml-5 mt-2 text-gray-600 dark:text-white font-semibold'>
                                    <Link to='post'>
                                    <div
                                        className={`cursor-pointer hover:bg-[#F0F2F5] dark:hover:dark:bg-[#323436] rounded-lg px-2 py-2 ${isActive1 === 'post' ? 'text-[#0866FF]' : ''}`}
                                        onClick={() => activeHandler('post')}
                                    >
                                        <h2 className={`${isActive1 === 'post' ? 'border-b-2 border-[#0866FF]' : ''}`}>Post</h2>
                                    </div>
                                    </Link>
                                    <Link to='about'>
                                    <div
                                        className={`cursor-pointer hover:bg-[#F0F2F5] dark:hover:dark:bg-[#323436] rounded-lg px-2 py-2 ${isActive1 === 'about' ? 'text-[#0866FF]' : ''}`}
                                        onClick={() => activeHandler('about')}
                                    >
                                        <h2 className={`${isActive1 === 'about' ? 'border-b-2 border-[#0866FF]' : ''}`}>About</h2>
                                    </div>
                                    </Link>
                                    <div className='cursor-not-allowed hover:bg-[#F0F2F5] dark:hover:dark:bg-[#323436] rounded-lg px-2 py-2'>Followers</div>
                                    <div className='cursor-not-allowed hover:bg-[#F0F2F5] dark:hover:dark:bg-[#323436] rounded-lg px-2 py-2'>Photos</div>
                                    <div className='cursor-not-allowed hover:bg-[#F0F2F5] dark:hover:dark:bg-[#323436] rounded-lg px-2 py-2'>Videos</div>
                                    <div className='cursor-not-allowed hover:bg-[#F0F2F5] dark:hover:dark:bg-[#323436] rounded-lg px-2 py-2'>More</div>
                                </div>

                                <div className='flex gap-3 mr-6 pt-2.5'>
                                    <div className='rounded-lg bg-gray-300 dark:bg-[#323436] px-3.5 py-1.5 flex gap-1 cursor-not-allowed'>
                                        <Icon icon="ri:chat-follow-up-fill" width="1.2rem" height="1.2rem" style={{ color: darkTheme ? 'white' : 'gray' }} className='mt-1' />
                                        <h4 className='font-semibold text-gray-600 dark:text-white'>Follow</h4>
                                    </div>
                                    <div className='flex rounded-lg bg-gray-300 dark:bg-[#323436] px-3.5 py-1.5 gap-1 cursor-not-allowed'>
                                        <Icon icon="simple-icons:messenger" width="1.2rem" height="1.2rem" style={{ color: darkTheme ? 'white' : 'gray' }} className='mt-1' />
                                        <h4 className='font-semibold text-gray-600 dark:text-white'>Message</h4>
                                    </div>
                                    <div className='cursor-not-allowed'>
                                        <h4 className='rounded-lg bg-gray-300 dark:bg-[#323436] px-3.5 py-1.5 font-semibold text-gray-600 dark:text-white'>...</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </>

            )}
        </>
    )
}

export default Profile
