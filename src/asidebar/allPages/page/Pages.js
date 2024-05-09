import { Icon } from '@iconify/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../../../provider/UserProvider';
import Avatar from '../../../images/dummy_avatar.jpg';
import { useNavigate } from 'react-router-dom';

const Pages = () => {
    const { getUser, viewPageHandler, darkTheme } = useUser();
    const [getData, setData] = useState('')

    const navigate = useNavigate();

    const pageDetails = async () => {
        try {
            const response = await axios.get('https://academics.newtonschool.co/api/v1/facebook/channel/', {
                header: {
                    Authorization: `Bearer ${getUser.token}`
                }
            });
            console.log(response.data.data)
            setData(response.data.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        pageDetails();
    }, []);

    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1100);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsScreenSmall(window.innerWidth < 1100);
        };

        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (<>
        {isScreenSmall ? (
            <div className={`${darkTheme && 'dark'}`}>
                <div className={`Part-2 overflow-y-auto scrollbar dark:bg-[#18191A]`}>
                    <div className='w-full bg-white pt-2 fixed dark:bg-[#18191A]'>
                        <div className='flex'>
                            <Icon icon="mingcute:arrow-left-line" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : 'black' }} className='mt mr-4 ml-4 p-1 cursor-not-allowed ' onClick={() => navigate('/')} />
                            <h3 className='font-bold pl-2 text-md pt-1 pb-2 dark:text-white'>Pages</h3>
                        </div>
                        <div className='border-b border-gray-400 dark:border-gray-950'></div>
                    </div>

                    {/* for creating page */}
                    <div className='flex justify-evenly gap-2 overflow-x-auto scrollbar pl-4 pr-3 pt-10'>
                        <Link to='/pages/createpage'><div className='flex gap-1 mt-5 bg-[#e2f1ef] dark:bg-[#323436] cursor-pointer rounded-full px-2 pr-3'>
                            <Icon icon="gridicons:add" width="1.2rem" height="1.2rem" style={{ color: darkTheme ? 'white' : 'black' }} className='mt-2.5 my-3' />
                            <h3 className='font-semibold text-sm text-black dark:text-white pt-2.5'>Createpage</h3>
                        </div>
                        </Link>
                        <div className='flex gap-1 mt-5 cursor-not-allowed rounded-full bg-[#d9dbe0] dark:bg-[#323436] py-1.5 px-2 pr-2.5'>
                            <Icon icon="mage:video-player-fill" width="1.8rem" height="1.8rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                            <h3 className='font-semibold text-sm text-black dark:text-white mt-1'>Inbox</h3>
                        </div>
                        <div className='flex gap-1 mt-5 bg-[#d9dbe0] dark:bg-[#323436] cursor-not-allowed rounded-full  py-1.5 px-2 pr-3'>
                            <Icon icon="mdi:movie-open-play" width="1.8rem" height="1.8rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                            <h3 className='font-semibold text-sm text-black dark:text-white mt-1'>Buying</h3>
                        </div>
                        <div className='flex gap-1 mt-5 bg-[#d9dbe0] dark:bg-[#323436] cursor-not-allowed rounded-full  py-1.5 px-2 pr-3'>
                            <Icon icon="mdi:movie-open-play" width="1.8rem" height="1.8rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                            <h3 className='font-semibold text-sm text-black dark:text-white mt-1'>Selling</h3>
                        </div>
                        <div className='flex gap-1 mt-5 bg-[#d9dbe0] dark:bg-[#323436] cursor-not-allowed rounded-full  py-1.5 px-2 pr-3'>
                            <Icon icon="ri:live-fill" width="1.8rem" height="1.8rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                            <h3 className='font-semibold text-sm text-black dark:text-white mt-1'>Notifications</h3>
                        </div>
                    </div>

                    {/* all pages */}
                    <h3 className='font-bold pl-6 text-lg pt-1 pb-2 dark:text-white'>All Pages</h3>
                    {getData && getData.map((obj) => (
                        <div key={obj._id} className='bg-white dark:bg-[#18191A] rounded-lg mb-4'>
                            <div className='w-full pt-5 pl-5 flex gap-5'>
                                <img className="w-10 h-10 rounded-full bg-gray-200 ml-6" src={obj.image || Avatar} alt="profile" />
                                <div>
                                    <h2 className='pt-1 font-bold text-xl dark:text-white'>{obj.name}</h2>
                                    <h2 className=' text-[10px] dark:text-white'>{obj.createdAt}</h2>
                                </div>
                            </div>
                            <div className='w-full flex ml-11 gap-4 pt-4'>
                                <Link to='/pages/profilepage/postprofile'><button className='w-full px-4 py-1 rounded-lg bg-[#EBF5FF] dark:bg-[#323436] hover:bg-[#dbe5ee] text-[#0866FF] flex  gap-2 font-semibold cursor-pointer dark:text-white' onClick={() => viewPageHandler(obj._id)}>
                                    <Icon icon="wpf:create-new" width="1.5rem" height="1.5rem" style={{ color: '#0866FF' }} />ViewPage
                                </button></Link>

                                <button className=' rounded-lg py-1 px-4 flex justify-center gap-2 font-semibold cursor-not-allowed bg-[#E4E6EB] dark:bg-[#323436] dark:text-white hover:bg-[#d4d6db]'>
                                    <Icon icon="zondicons:announcement" width="1.2rem" height="1.2rem" style={{ color: 'black' }} className='mt-1' />Promote</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        ) : (

            <div className='bg-[#F0F2F5] dark:bg-[#18191A] w-screen h-5/7 flex'>
                {/* left */}
                <div className='Part-1 w-1/7 h-full bg-white dark:bg-[#242526] pl-4 pt-3' style={{ boxShadow: '0px 3px 2px 2px rgba(0, 0, 0, 0.1)' }}>
                    <div className='flex justify-between pr-4'>
                        <h4 className='text-2xl font-bold dark:text-white'>Pages</h4>
                        <Icon icon="gridicons:cross" width="2rem" height="2rem" style={{ color: 'black' }} className='mt-1 bg-[#d9dbe0] hover:bg-[#c2c5c9] rounded-full p-1 cursor-pointer' onClick={() => navigate('/')} />
                    </div>
                    <Link to='/pages/createpage'><div className='text-[#0866FF] dark:bg-[#323436] hover:hover:dark:bg-[#4d5053] hover:bg-[#d3dde5] rounded-lg px-2 py-1.5 mr-4 mt-5 text-center font-semibold cursor-pointer bg-[#e2f1ef]'>+ Create new Page</div></Link>
                    <div className='border-b border-gray-300 pl-3 mr-4 mt-3'></div>
                    <div className='flex gap-4 mt-5 px-1 hover:bg-[#f0f2f5] hover:hover:dark:bg-[#4d5053] cursor-pointer rounded-lg mr-4 py-1.5'>
                        <Icon icon="arcticons:business-suite" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#E4E6EB] p-1.5' />
                        <h3 className='font-semibold text-lg mt-0.5 cursor-not-allowed dark:text-white'>Meta Business Suite</h3>
                    </div>
                    <div className='flex gap-4 mt-3 px-1 hover:bg-[#f0f2f5] hover:hover:dark:bg-[#4d5053] cursor-pointer rounded-lg mr-4 py-1.5'>
                        <Icon icon="iconamoon:discover-bold" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#d9dbe0] p-1.5' />
                        <h3 className='font-semibold text-lg cursor-not-allowed dark:text-white'>Discover</h3>
                    </div>
                    <div className='flex gap-4 mt-3 px-1 hover:bg-[#f0f2f5] hover:hover:dark:bg-[#4d5053] cursor-pointer rounded-lg mr-4 py-1.5'>
                        <Icon icon="mdi:like" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#d9dbe0] p-1.5' />
                        <h3 className='font-semibold text-lg cursor-not-allowed dark:text-white'>Liked Pages</h3>
                    </div>
                    <div className='flex gap-4 mt-3 px-1 hover:bg-[#f0f2f5] hover:hover:dark:bg-[#4d5053] cursor-pointer rounded-lg mr-4 py-1.5'>
                        <Icon icon="mingcute:user-add-fill" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#d9dbe0] p-1.5' />
                        <h3 className='font-semibold text-lg cursor-not-allowed dark:text-white'>Invites</h3>
                    </div>
                </div>

                {/* right side */}
                <div className='Part-2  w-1/2 mx-auto overflow-y-auto scrollbar '>
                    <h3 className='font-bold text-2xl pt-5 pb-6 pl-1 dark:text-white'>All Pages</h3>
                    {getData && getData.map((obj) => (
                        <div key={obj._id} className='bg-white dark:bg-[#242526] h-1/4 rounded-lg mb-4'>
                            <div className='pt-6 pl-5 flex gap-6'>
                                <img className="w-14 h-14 rounded-full bg-gray-200" src={obj.image || Avatar} alt="profile" />
                                <div>
                                    <h2 className='pt-1 font-bold text-xl dark:text-white'>{obj.name}</h2>
                                    <h2 className=' text-[10px] dark:text-white'>{obj.createdAt}</h2>
                                </div>
                            </div>
                            <div className='w-full flex justify-center gap-6 pt-3'>
                                <Link to='/pages/profilepage/postprofile'><button className=' w-full px-16 rounded-lg py-2 bg-[#EBF5FF] dark:bg-[#323436] hover:bg-[#dbe5ee] text-[#0866FF] flex justify-center gap-2 font-semibold cursor-pointer' onClick={() => viewPageHandler(obj._id)}>
                                    <Icon icon="wpf:create-new" width="1.2rem" height="1.2rem" style={{ color: '#0866FF' }} />View Page
                                </button></Link>

                                <button className='rounded-lg py-2 px-16 flex justify-center gap-2 font-semibold cursor-not-allowed bg-[#E4E6EB] dark:bg-[#323436] hover:bg-[#d4d6db] dark:text-white'>
                                    <Icon icon="zondicons:announcement" width="1.2rem" height="1.2rem" style={{ color: darkTheme ? 'white' : 'black' }} className='mt-1' />Promote</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}

    </>
    )
}

export default Pages
