import React from 'react';
import axios from 'axios';
import UserProfile from '../images/user-profile.png';
import { Icon } from '@iconify/react';
import { useUser } from '../provider/UserProvider';
import { Cards } from '../cards/Cards';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProfileImage from '../images/profile.png';

const Profile = () => {

    const { getUser, userId } = useUser();
    const [getData, setData] = useState(JSON.parse(localStorage.getItem('userData')) || {});
    const [isActive, setIsActive] = useState('post');
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
    }, [])

    const activeHandler = (link) => {
        setIsActive(link);
    }

    console.log('profile')

    return (
        <>
            {/*  */}
            <div className='h-5/7 w-screen'>

                <div className='h-full drop-shadow-md overflow-y-auto'>
                    <div className='h-3/7 w-4/6  rounded-b-xl m-auto'>
                        <img src={UserProfile} className='h-full w-full rounded-b-xl ' />
                    </div>
                    <div className='flex justify-between px-52'>
                        <div className='flex'>
                            <div className='ml-4 mt-3'>
                                <img src={getData.profileImage||ProfileImage} alt='profile' className='rounded-full h-40 w-40' />
                            </div>
                            <h2 className='Name text-4xl font-bold  pl-7 flex items-center'>{getData.name}</h2>
                        </div>
                        <div className='flex gap-4 py-16 pr-6'>
                            <button className='border px-3 rounded-lg bg-[#0861F2] text-white font-semibold flex gap-2 pt-2 cursor-not-allowed'>
                                <Icon icon="mdi:plus" width="1.2rem" height="1.2rem" style={{ color: 'white' }} className='mt-0.5' />Add to story</button>
                            <button className='border px-3 rounded-lg bg-[#d9dbe0] font-semibold flex gap-2 pt-2 cursor-not-allowed'>
                                <Icon icon="ic:baseline-edit" width="1.2rem" height="1.2rem" style={{ color: 'black' }} className='mt-0.5' />Edit profile</button>
                        </div>
                    </div>
                    <div className='border-b border-gray-400 mx-60 mt-4'></div>
                    <div className='flex justify-evenly px-12'>
                        <div className='flex gap-3 ml-5 mt-2 text-gray-600 font-semibold'>
                            <Link to='post'>
                                <div
                                    className={`cursor-pointer hover:bg-[#F0F2F5] rounded-lg px-2 py-2 ${isActive === 'post' ? 'text-[#0866FF]' : ''}`}
                                    onClick={() => activeHandler('post')}
                                >
                                    <h2 className={`${isActive === 'post' ? 'border-b-2 border-[#0866FF]' : ''}`}>Post</h2>
                                </div>
                            </Link>
                            <Link to='about'>
                                <div
                                    className={`cursor-pointer hover:bg-[#F0F2F5] rounded-lg px-2 py-2 ${isActive === 'about' ? 'text-[#0866FF]' : ''}`}
                                    onClick={() => activeHandler('about')}
                                >
                                    <h2 className={`${isActive === 'about' ? 'border-b-2 border-[#0866FF]' : ''}`}>About</h2>
                                </div>
                            </Link>
                            <div className='cursor-not-allowed hover:bg-[#F0F2F5] rounded-lg px-2 py-2'>Followers</div>
                            <div className='cursor-not-allowed hover:bg-[#F0F2F5] rounded-lg px-2 py-2'>Photos</div>
                            <div className='cursor-not-allowed hover:bg-[#F0F2F5] rounded-lg px-2 py-2'>Videos</div>
                            <div className='cursor-not-allowed hover:bg-[#F0F2F5] rounded-lg px-2 py-2'>More</div>
                        </div>

                        <div className='flex gap-3 mr-6 pt-2.5'>
                            <div className='rounded-lg bg-gray-300 px-3.5 py-1.5 flex gap-1 cursor-not-allowed'>
                                <Icon icon="ri:chat-follow-up-fill" width="1.2rem" height="1.2rem" style={{ color: 'gray' }} className='mt-1' />
                                <h4 className='font-semibold text-gray-600'>Follow</h4>
                            </div>
                            <div className='flex rounded-lg bg-gray-300 px-3.5 py-1.5 gap-1 cursor-not-allowed'>
                                <Icon icon="simple-icons:messenger" width="1.2rem" height="1.2rem" style={{ color: 'gray' }} className='mt-1' />
                                <h4 className='font-semibold text-gray-600'>Message</h4>
                            </div>
                            <div className='cursor-not-allowed'>
                                <h4 className='rounded-lg bg-gray-300 px-3.5 py-1.5 font-semibold text-gray-600 '>...</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Profile
