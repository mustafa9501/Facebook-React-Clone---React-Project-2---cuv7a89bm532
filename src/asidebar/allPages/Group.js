import { Icon } from '@iconify/react'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUser } from '../../provider/UserProvider';

const Group = () => {

    const navigate = useNavigate();
    const {darkTheme} = useUser();

    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1100);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsScreenSmall(window.innerWidth < 1100);
        };

        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (<>
        <div className={`${darkTheme && 'dark'}`}>
            {isScreenSmall ? (
                <>
                    <div className='Part-1 h-full bg-white dark:bg-[#18191A] pl-4 pt-3  '>
                        <div className='flex justify-between pr-4'>
                            <h4 className='text-2xl font-bold dark:text-white'>Groups</h4>
                            <Icon icon="ep:back" width="2rem" height="2rem" style={{ color: 'black' }} className='bg-[#d9dbe0] hover:bg-[#c2c5c9] rounded-full p-1 cursor-not-allowed ' onClick={() => navigate('/')} />
                        </div>
                        <div className='text-zinc-600 hover:bg-[#d3dde5] rounded-lg px-2 py-1.5 mr-4 mt-5 text-center font-semibold cursor-not-allowed bg-[#e2f1ef] dark:bg-[#323436] dark:text-white'>+ Create new group</div>

                        <div className='border-b border-gray-300 pl-3 mr-4 mt-3'></div>
                        <div className='flex justify-evenly overflow-x-auto scrollbar'>
                            <div className='flex mt-5 bg-[#d9dbe0] dark:bg-[#323436] cursor-not-allowed rounded-full  py-1.5 px-2'>
                                <Icon icon="material-symbols:feed" width="1.8rem" height="1.8rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                <h3 className='font-semibold text-sm text-black mt-1 dark:text-white'>Your feed</h3>
                            </div>
                            <div className='flex  mt-5 cursor-not-allowed rounded-full bg-[#d9dbe0] dark:bg-[#323436] py-1.5 px-2 '>
                                <Icon icon="iconamoon:discover-fill" width="1.8rem" height="1.8rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                <h3 className='font-semibold text-sm text-zinc-black mt-1 dark:text-white'>Discover</h3>
                            </div>
                            <div className='flex mt-5 bg-[#d9dbe0] dark:bg-[#323436] cursor-not-allowed rounded-full  py-1.5 px-2 '>
                                <Icon icon="material-symbols:groups" width="1.8rem" height="1.8rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                <h3 className='font-semibold text-sm text-black mt-1 dark:text-white'>Your groups</h3>
                            </div>
                        </div>
                        <div className='Part-2 font-bold text-2xl pt-10 flex items-center justify-center dark:text-white'>This page is coming soon !!
                        </div>
                    </div>
                </>

            ) : (

                <div className='bg-[#F0F2F5] w-screen h-5/7 flex'>

                    <div className='Part-1 w-1/7 h-full bg-white pl-4 pt-3  ' style={{ boxShadow: '0px 3px 2px 2px rgba(0, 0, 0, 0.1)' }}>
                        <div className='flex justify-between pr-4'>
                            <h4 className='text-2xl font-bold'>Groups</h4>
                            <Icon icon="ic:round-settings" width="2rem" height="2rem" style={{ color: 'gray' }} className='mt-1 bg-[#d9dbe0] hover:bg-[#c2c5c9] rounded-full p-1 cursor-pointer ' />
                        </div>
                        <div className='absolute mt-5 pl-4'>
                            <Icon icon="carbon:search" width="1.1rem" height="1.1rem" style={{ color: '#545454' }} />
                        </div>
                        <div className='Search'>
                            <input type='text' className='bg-[#F0F2F5] rounded-full mt-2.5 py-1.5 px-10 w-5/7 focus:outline-none' placeholder='Search group' />
                        </div>

                        <div className='flex gap-4 mt-5 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                            <Icon icon="material-symbols:feed" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                            <h3 className='font-semibold text-lg text-zinc-600 mt-1'>Your feed</h3>
                        </div>
                        <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                            <Icon icon="iconamoon:discover-fill" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                            <h3 className='font-semibold text-lg text-zinc-600 mt-1'>Discover</h3>
                        </div>
                        <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                            <Icon icon="material-symbols:groups" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1' />
                            <h3 className='font-semibold text-lg text-zinc-600 mt-1'>Your groups</h3>
                        </div>

                        <div className='text-zinc-600 hover:bg-[#d3dde5] rounded-lg px-2 py-1.5 mr-4 mt-5 text-center font-semibold cursor-pointer bg-[#e2f1ef]'>+ Create new group</div>
                    </div>
                    <div className='Part-2 font-bold text-3xl p-5 text-center flex m-auto items-center'>This page is coming soon !!</div>
                </div>
            )}
        </div>
    </>
    )
}

export default Group
