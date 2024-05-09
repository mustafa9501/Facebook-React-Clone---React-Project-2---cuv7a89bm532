import { Icon } from '@iconify/react'
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../provider/UserProvider';

const Videos = () => {

    const { darkTheme } = useUser();

    const navigate = useNavigate();

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
                <>
                    <div className='Part-1 h-fit bg-white dark:bg-[#18191A] pl-4 pt-3  '>
                        <div className='flex justify-between pr-4'>
                            <h4 className='text-2xl font-bold dark:text-white'>Video</h4>
                            <Icon icon="ep:back" width="2rem" height="2rem" style={{ color: 'black' }} className='bg-[#d9dbe0] hover:bg-[#c2c5c9] rounded-full p-1 cursor-not-allowed ' onClick={() => navigate('/')} />
                        </div>
                        <div className='text-zinc-600 hover:bg-[#d3dde5] rounded-lg px-2 py-1.5 mr-4 mt-5 text-center font-semibold cursor-not-allowed bg-[#e2f1ef] dark:bg-[#323436] dark:text-white'>+ Create new Videos</div>

                        <div className='border-b border-gray-300 pl-3 mr-4 mt-3'></div>
                        <div className='flex justify-evenly gap-1 overflow-x-auto scrollbar mr-3'>
                            <div className='flex gap-1 mt-5 bg-[#d9dbe0] dark:bg-[#323436] cursor-not-allowed rounded-full  py-1.5 px-2 pr-3'>
                                <Icon icon="ph:video-fill" width="1.8rem" height="1.8rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                <h3 className='font-semibold text-sm text-black dark:text-white mt-1'>Foryou</h3>
                            </div>
                            <div className='flex gap-1 mt-5 cursor-not-allowed rounded-full bg-[#d9dbe0] dark:bg-[#323436] py-1.5 px-2 pr-2.5'>
                                <Icon icon="mage:video-player-fill" width="1.8rem" height="1.8rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                <h3 className='font-semibold text-sm text-zinc-black dark:text-white mt-1'>Reels</h3>
                            </div>
                            <div className='flex gap-1 mt-5 bg-[#d9dbe0] dark:bg-[#323436] cursor-not-allowed rounded-full  py-1.5 px-2 pr-3'>
                                <Icon icon="mage:rocket-fill" width="1.8rem" height="1.8rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                <h3 className='font-semibold text-sm text-black mt-1 dark:text-white'>Explore</h3>
                            </div>
                            <div className='flex gap-1 mt-5 bg-[#d9dbe0] dark:bg-[#323436] cursor-not-allowed rounded-full  py-1.5 px-2 pr-3'>
                                <Icon icon="mdi:movie-open-play" width="1.8rem" height="1.8rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] dark:bg-[#323436] p-1' />
                                <h3 className='font-semibold text-sm text-black mt-1 dark:text-white'>Shows</h3>
                            </div>
                            <div className='flex gap-1 mt-5 bg-[#d9dbe0] dark:bg-[#323436] cursor-not-allowed rounded-full  py-1.5 px-2 pr-3'>
                                <Icon icon="mdi:bookmark" width="1.8rem" height="1.8rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                <h3 className='font-semibold text-sm text-black mt-1 dark:text-white'>Saved</h3>
                            </div>
                        </div>
                        <div className='Part-2 font-bold text-2xl pt-10 flex items-center justify-center dark:text-white'>This page is coming soon !!
                        </div>
                    </div>
                </>
            </div>
        ) : (

            <div className='bg-[#F0F2F5] w-screen h-5/7 flex dark:bg-[#18191A]'>

                <div className='Part-1 w-1/7 h-full bg-white dark:bg-[#242526] pl-4 pt-3' style={{ boxShadow: '0px 3px 2px 2px rgba(0, 0, 0, 0.1)' }}>
                    <div className='flex justify-between pr-4'>
                        <h4 className='text-2xl font-bold dark:text-white'>Video</h4>
                        <Icon icon="ic:round-settings" width="2rem" height="2rem" style={{ color: 'gray' }} className='mt-1 bg-[#d9dbe0] hover:bg-[#c2c5c9] rounded-full p-1 cursor-not-allowed ' />
                    </div>
                    <div className='text-zinc-600 hover:bg-[#d3dde5] hover:hover:dark:bg-[#4d5053] rounded-lg px-2 py-1.5 mr-4 mt-5 text-center font-semibold cursor-not-allowed bg-[#e2f1ef] dark:bg-[#323436] dark:text-white'>+ Create new Videos</div>
                    <div className='border-b border-gray-300 dark:border-gray-500 pl-3 mr-4 mt-3'></div>
                    <div className='flex gap-4 mt-5 hover:bg-[#f0f2f5] hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-1.5'>
                        <Icon icon="ph:video-fill" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                        <h3 className='font-semibold text-lg text-zinc-600 mt-1 dark:text-white'>Home</h3>
                    </div>
                    <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-1.5'>
                        <Icon icon="ri:live-fill" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                        <h3 className='font-semibold text-lg text-zinc-600 mt-1 dark:text-white'>Live</h3>
                    </div>
                    <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-1.5'>
                        <Icon icon="mage:video-player-fill" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                        <h3 className='font-semibold text-lg text-zinc-600 mt-1 dark:text-white'>Reels</h3>
                    </div>
                    <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-1.5'>
                        <Icon icon="mdi:movie-open-play" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                        <h3 className='font-semibold text-lg text-zinc-600 mt-1 dark:text-white'>Shows</h3>
                    </div>
                    <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-1.5'>
                        <Icon icon="mage:rocket-fill" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                        <h3 className='font-semibold text-lg text-zinc-600 mt-1 dark:text-white'>Explore</h3>
                    </div>
                    <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-1.5'>
                        <Icon icon="mdi:bookmark" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                        <h3 className='font-semibold text-lg text-zinc-600 mt-1 dark:text-white'>Saved Videos</h3>
                    </div>
                </div>
                <div className='Part-2 font-bold text-3xl p-5 text-center flex m-auto items-center dark:text-white'>This page is coming soon !!
                </div>
            </div>
        )}

    </>
    )
}

export default Videos
