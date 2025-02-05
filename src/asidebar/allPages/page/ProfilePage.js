import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../provider/UserProvider';
import Cover from '../../../images/desktop-wallpaper.jpg';
import Avatar from '../../../images/dummy_avatar.jpg';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {

    const { getUser, viewPageId, darkTheme, isActive2, setIsActive2  } = useUser();

    // const [isActive, setIsActive] = useState('post');
    const [getData, setData] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const pageDetails = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/facebook/channel/${viewPageId}`, {
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
       {(location.pathname == "/pages/profilepage/postprofile") ? setIsActive2('post') : ""}
    }, []);

    console.log(getData)

    const activeHandler = (link) => {
        setIsActive2(link);
    }

    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1100);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsScreenSmall(window.innerWidth < 1100);
        };

        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <>
            <div className={`${darkTheme && 'dark'}`}>
                {isScreenSmall ? (
                    <>
                        <div className='w-full bg-white dark:bg-[#18191A]'>

                            <div className='h-full'>
                                <div className='flex py-1 pl-3 bg-white dark:bg-[#18191A]  w-full fixed '>
                                    <Icon icon="mingcute:arrow-left-line" width="1.6rem" height="1.6rem" style={{ color: darkTheme ? 'white' : 'black' }} className=' cursor-pointer bg-white dark:bg-[#18191A]' onClick={() => navigate('/pages')} />
                                    <h2 className='Name text-md font-bold pl-4 pt-0.5 flex dark:text-white'>{getData.name}</h2>
                                </div>
                                <div className='h-3/7'>
                                    <img src={Cover} className='h-80 w-full' />
                                </div>
                                <div className='px-4 mt-4'>
                                    <div className='flex'>
                                        <div className='ml-1 '>
                                            <img src={getData.image || Avatar} alt='profile' className='rounded-full h-44 w-44 absolute top-[12.5rem]' />
                                        </div>
                                        <div>
                                            <h2 className='Name text-3xl font-bold pt-14 pl-4 flex dark:text-white'>{getData.name}</h2>
                                            <h2 className='Name text-sm pt-2 pl-4 pr-4 dark:text-white'>{getData.description}</h2>
                                        </div>
                                    </div>
                                    <div className='w-100% flex justify-center gap-2 mt-4'>
                                        <button className='w-1/2 px-6 rounded-lg bg-[#d9dbe0] dark:bg-[#323436] dark:text-white font-semibold flex gap-2 pt-2.5 cursor-not-allowed'>
                                            <Icon icon="ri:chat-follow-up-fill" width="1.2rem" height="1.2rem" style={{ color: darkTheme ? 'white' : 'black' }} className='mt-0.5 ' />Follow
                                        </button>
                                        <button className='w-1/2 px-6 py-2 rounded-lg bg-[#0861F2] text-white font-semibold flex gap-2 pt-2.5 cursor-not-allowed'>
                                            <Icon icon="zondicons:announcement" width="1.2rem" height="1.2rem" style={{ color: 'white' }} className='mt-0.5' />Promote
                                        </button>
                                    </div>
                                </div>
                                <div className='border-b border-gray-400 mt-4'></div>

                                <div className='flex justify-evenly  mt-2 text-gray-600 dark:text-white font-semibold'>
                                    <Link to='postprofile'>
                                        <div className={`cursor-pointer hover:bg-[#F0F2F5] rounded-lg px-2 py-2 ${isActive2 === 'post' ? 'text-[#0866FF]' : ''}`} onClick={() => activeHandler('post')}>
                                            <h2 className={`${isActive2 === 'post' ? 'border-b-2 border-[#0866FF]' : ''}`}>Post</h2>
                                        </div>
                                    </Link>
                                    <Link to='aboutprofile'>
                                        <div
                                            className={`cursor-pointer hover:bg-[#F0F2F5] rounded-lg px-2 py-2 ${isActive2 === 'about' ? 'text-[#0866FF]' : ''}`}
                                            onClick={() => activeHandler('about')}
                                        >
                                            <h2 className={`${isActive2 === 'about' ? 'border-b-2 border-[#0866FF]' : ''}`}>About</h2>
                                        </div>
                                    </Link>
                                    <div className='cursor-not-allowed rounded-lg px-2 py-2'>Followers</div>
                                    <div className='cursor-not-allowed rounded-lg px-2 py-2'>Photos</div>
                                </div>

                            </div>
                        </div>
                        <Outlet />
                    </>

                ) : (

                    <>
                        <div className='bg-[#F0F2F5] dark:bg-[#18191A] w-screen h-full flex mb-2'>

                            {/* part-1 */}
                            <div className='Part-1 w-1/7 h-5/7 bg-white dark:bg-[#242526] pl-4 pt-3 drop-shadow-lg fixed left-0'>
                                <Link to='/pages'><div className='flex justify-between pr-4'>
                                    <h4 className='text-2xl font-bold dark:text-white'>Manage Page</h4>
                                    <Icon icon="maki:cross" width="2rem" height="2rem" style={{ color: 'gray' }} className='mt-1 bg-[#d9dbe0] hover:bg-[#c2c5c9] rounded-full p-1 cursor-pointer ' />
                                </div></Link>

                                <div className='flex gap-3 pt-3 '>
                                    <img src={getData.image || Avatar} className='h-12 w-12 rounded-full' alt='profile' />
                                    <h2 className='text-lg font-bold pt-2.5 dark:text-white'>{getData.name}</h2>
                                </div>
                                <div className='border-b border-gray-300 pt-3'></div>

                                <div className='flex gap-4 mt-5 hover:bg-[#f0f2f5] dark:hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-1.5'>
                                    <Icon icon="ph:video-fill" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                    <h3 className='font-semibold text-lg text-zinc-600 mt-1 dark:text-white'>Professional dashboard</h3>
                                </div>
                                <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] dark:hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-1.5'>
                                    <Icon icon="ri:live-fill" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                    <h3 className='font-semibold text-lg text-zinc-600 mt-1 dark:text-white'>Insights</h3>
                                </div>
                                <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] dark:hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-1.5'>
                                    <Icon icon="mage:video-player-fill" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                    <h3 className='font-semibold text-lg text-zinc-600 mt-1 dark:text-white'>Ad Center</h3>
                                </div>
                                <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] dark:hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-1.5'>
                                    <Icon icon="mdi:movie-open-play" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                    <h3 className='font-semibold text-lg text-zinc-600 mt-1 dark:text-white'>Create Ads</h3>
                                </div>
                                <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] dark:hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-1.5'>
                                    <Icon icon="mdi:movie-open-play" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                    <h3 className='font-semibold text-lg text-zinc-600 mt-1 dark:text-white'>Settings</h3>
                                </div>
                                <div className='text-zinc-600 hover:bg-[#d3dde5] dark:hover:dark:bg-[#494c4e] rounded-lg px-2 py-1.5 mr-4 mt-5 text-center font-semibold cursor-not-allowed bg-[#e2f1ef] dark:bg-[#323436] dark:text-white'> Promote</div>
                            </div>

                            {/* part 2 */}

                            <div className='w-4/7 h-5/7 bg-white dark:bg-[#18191A] ml-[22.8rem]'>
                                {/* {getData && getData.map((obj)=>(  */}
                                <div className='h-full drop-shadow-sm'>
                                    <div className='h-3/7 w-4/7 rounded-b-xl m-auto'>
                                        <img src={Cover} className='h-full w-full rounded-b-xl ' />
                                    </div>
                                    <div className='flex justify-between px-20'>
                                        <div className='flex'>
                                            <div className='ml-1 mt-4'>
                                                <img src={getData.image || Avatar} alt='profile' className='rounded-full h-32 w-36' />
                                            </div>
                                            <div>
                                                <h2 className='Name text-4xl font-bold pt-10 pl-4 flex dark:text-white'>{getData.name}</h2>
                                                <h2 className='Name text-sm pt-2 pl-4 pr-4 dark:text-white'>{getData.description}</h2>
                                            </div>
                                        </div>
                                        <div className='flex gap-4 py-14'>
                                            <button className='px-4 rounded-lg bg-[#d9dbe0] dark:bg-[#323436] font-semibold flex gap-2 pt-2.5 cursor-not-allowed dark:text-white'>
                                                <Icon icon="ri:chat-follow-up-fill" width="1.2rem" height="1.2rem" style={{ color: darkTheme ? 'white' : 'black' }} className='mt-0.5' />Follow
                                            </button>
                                            <button className='px-3 py-2 rounded-lg bg-[#0861F2] text-white font-semibold flex gap-2 pt-2.5 cursor-not-allowed'>
                                                <Icon icon="zondicons:announcement" width="1.2rem" height="1.2rem" style={{ color: 'white' }} className='mt-0.5 dark:text-white' />Promote
                                            </button>
                                        </div>
                                    </div>
                                    <div className='w-4/7 ml-20 border-b border-gray-400 mt-4'></div>
                                    <div className='flex justify-between px-12'>
                                        <div className='flex gap-3 ml-7 mt-2 text-gray-600 font-semibold dark:text-white'>
                                            <Link to='postprofile'>
                                                <div className={`cursor-pointer hover:bg-[#F0F2F5] dark:hover:dark:bg-[#323436] rounded-lg px-2 py-2 ${isActive2 === 'post' ? 'text-[#0866FF]' : ''}`} onClick={() => activeHandler('post')}>
                                                    <h2 className={`${isActive2 === 'post' ? 'border-b-2 border-[#0866FF]' : ''}`}>Post</h2>
                                                </div>
                                            </Link>
                                            <Link to='aboutprofile'>
                                                <div
                                                    className={`cursor-pointer hover:bg-[#F0F2F5] dark:hover:dark:bg-[#323436] rounded-lg px-2 py-2 ${isActive2 === 'about' ? 'text-[#0866FF]' : ''}`}
                                                    onClick={() => activeHandler('about')}
                                                >
                                                    <h2 className={`${isActive2 === 'about' ? 'border-b-2 border-[#0866FF]' : ''}`}>About</h2>
                                                </div>
                                            </Link>
                                            <div className='cursor-not-allowed hover:bg-[#F0F2F5] dark:hover:dark:bg-[#323436] rounded-lg px-2 py-2'>Followers</div>
                                            <div className='cursor-not-allowed hover:bg-[#F0F2F5] dark:hover:dark:bg-[#323436] rounded-lg px-2 py-2'>Photos</div>
                                            <div className='cursor-not-allowed hover:bg-[#F0F2F5] dark:hover:dark:bg-[#323436] rounded-lg px-2 py-2'>Videos</div>
                                            <div className='cursor-not-allowed hover:bg-[#F0F2F5] dark:hover:dark:bg-[#323436] rounded-lg px-2 py-2'>More</div>
                                        </div>

                                        <div className='flex gap-3 mr-6 pt-2.5'>
                                            <div className='cursor-not-allowed flex gap-4'>
                                                <button className='px-2 rounded-lg bg-[#d9dbe0] dark:bg-[#323436] font-semibold flex gap-2 pt-2 cursor-not-allowed dark:text-white'>
                                                    <Icon icon="simple-icons:messenger" width="1.2rem" height="1.2rem" style={{ color: darkTheme ? 'white' : 'black' }} className='mt-0.5' />Message</button>
                                                <h4 className='rounded-lg bg-gray-300 dark:bg-[#323436] dark:text-white px-3.5 py-1.5 font-semibold text-gray-600 '>...</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Outlet />
                    </>
                )}
            </div>
        </>
    )
}

export default ProfilePage
