import { Icon } from '@iconify/react'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../provider/UserProvider';
import ProfileImage from '../../images/profile.png';

const Friends = () => {

    const [getData, setData] = useState([]);
    const navigate = useNavigate();
    const {darkTheme} = useUser();

    const friendsList = async () => {
        axios.get('https://academics.newtonschool.co/api/v1/facebook/post?limit=100').then((response) => {
            console.log(response.data.data)
            setData(response.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        friendsList()
    }, [])

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
                    <div className='Part-1 bg-white dark:bg-[#18191A] pl-4 pt-3'>
                        <div className='flex justify-between pr-4'>
                            <h4 className='text-2xl font-bold pl-2 dark:text-white'>Friends</h4>
                            <Icon icon="ep:back" width="2rem" height="2rem" style={{ color: 'black' }} className='mt-1 bg-[#d9dbe0] hover:bg-[#c2c5c9] rounded-full p-1 cursor-not-allowed ' onClick={() => navigate('/')} />
                        </div>

                        <div className='border-b border-gray-300 dark:border-gray-600 pl-3 mr-4 mt-3'></div>

                        <div className='flex mt-3'>
                            <div className='flex gap-4 bg-[#E4E6EB] dark:bg-[#323436] px-4 cursor-not-allowed rounded-full mr-4 py-2'>
                                <h3 className='font-bold text-lg text-black dark:text-white'>Your friends</h3>
                            </div>

                            <div className='flex gap-4 bg-[#E4E6EB] dark:bg-[#323436] px-4 cursor-not-allowed rounded-full mr-4 py-1.5'>
                                <h3 className='font-bold text-lg text-black dark:text-white'>Suggestions</h3>
                            </div>
                        </div>
                    </div>
                    <div className='font-semibold text-xl p-6 overflow-y-auto scrollbar dark:bg-[#18191A] dark:text-white'>All Friends
                        <div className='flex flex-wrap gap-2 pt-4 bg-[#F0F2F5] dark:bg-[#18191A] px-1 dark:text-white'>
                            {getData.map((obj, id) => {
                                return (
                                    <div key={obj.id} className='Part-2 mt-2'>
                                        <img src={obj.author.profileImage | ProfileImage} alt="profile" className='h-36 w-36 rounded-t-2xl'></img>
                                        <div className='p-2 bg-white dark:bg-[#323436] text-sm rounded-b-2xl'>{obj.author.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </>
                </div>            
            ) : (

                <>
                    <div className='bg-[#F0F2F5] dark:bg-[#18191A] w-screen h-5/7 flex'>

                        <div className='Part-1 w-1/7 h-full bg-white pl-4 pt-3 dark:bg-[#242526]' style={{ boxShadow: '0px 3px 2px 2px rgba(0, 0, 0, 0.1)' }}>
                            <div className='flex justify-between pr-4'>
                                <h4 className='text-2xl font-bold dark:text-white'>Friends</h4>
                                <Icon icon="ic:round-settings" width="2rem" height="2rem" style={{ color: 'gray' }} className='mt-1 bg-[#d9dbe0] hover:bg-[#c2c5c9] rounded-full p-1 cursor-not-allowed ' />
                            </div>

                            <div className='border-b border-gray-300 dark:border-gray-500 pl-3 mr-4 mt-3'></div>

                            <div className='flex gap-4 mt-5 px-1.5 hover:bg-[#f0f2f5] hover:dark:bg-[#323436] dark:bg-[#323436] bg-[#f0f2f5] cursor-not-allowed rounded-lg mr-4 py-2'>
                                <Icon icon="fa-solid:user-friends" width="2rem" height="2rem" style={{ color: 'white' }} className='rounded-full bg-[#1877F2] p-1' />
                                <h3 className='font-semibold text-lg dark:text-white'>Home</h3>
                            </div>
                            <div className='flex gap-4 mt-1 px-1.5 hover:bg-[#f0f2f5] hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-2'>
                                <Icon icon="ri:user-shared-2-fill" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                <h3 className='font-semibold text-lg text-zinc-600 dark:text-white'>Friends Requests</h3>
                            </div>
                            <div className='flex gap-4 mt-1 px-1.5 hover:bg-[#f0f2f5] hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-1.5'>
                                <Icon icon="mingcute:user-add-fill" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                <h3 className='font-semibold text-lg text-zinc-600 dark:text-white'>Suggestions</h3>
                            </div>
                            <div className='flex gap-4 mt-1 px-1.5 hover:bg-[#f0f2f5] hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-1.5'>
                                <Icon icon="ph:gift-fill" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                <h3 className='font-semibold text-lg text-zinc-600 dark:text-white'>Birthday</h3>
                            </div>
                            <div className='flex gap-4 mt-1 px-1.5 hover:bg-[#f0f2f5] hover:dark:bg-[#323436] cursor-not-allowed rounded-lg mr-4 py-1.5'>
                                <Icon icon="ph:user-list-fill" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#d9dbe0] p-1' />
                                <h3 className='font-semibold text-lg text-zinc-600 dark:text-white'>Custom Lists</h3>
                            </div>
                        </div>

                        {/* for right side */}
                        <div className='font-semibold text-xl pt-4 pl-20 w-2/8 overflow-y-auto scrollbar dark:text-white'>All Friends
                            <div className='flex flex-wrap gap-4 pt-4 bg-[#F0F2F5] dark:bg-[#18191A]'>
                                {getData.map((obj, id) => {
                                    return (
                                        <div key={obj.id} className='Part-2 font-semibold text-xl border dark:border-gray-500 rounded-2xl '>
                                            <img src={obj.author.profileImage || ProfileImage} alt='profile' className='h-48 w-48 rounded-t-2xl'></img>
                                            <div className='p-2 bg-white dark:bg-[#323436] text-lg rounded-b-2xl'>{obj.author.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
            )}
        
    </>
    )
}

export default Friends;
