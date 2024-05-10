import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useUser } from '../provider/UserProvider';
import Profile from '../images/profile.png';
import { useNavigate } from 'react-router-dom';

const Popup = ({ onClose }) => {
    const { getName, getUser } = useUser();
    const [getValue, setValue] = useState([]);

    const navigate = useNavigate();

    const postDetails = async (event) => {
        event.preventDefault();

        let imageData = document.getElementById('images').files[0];

        let formData = new FormData();
        formData.append('title', 'newton');
        formData.append('content', getValue);  
        formData.append('images', imageData);
        
        try {
            const result = await axios.post('https://academics.newtonschool.co/api/v1/facebook/post/', formData, {
                headers: {
                    Authorization: `Bearer ${getUser.token}`
                }
            });
            
            // window.location.reload();
            console.log(result);
            
        } catch (err) {
            alert(err.message);
        }
        onClose();
    };

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
            {isScreenSmall ? (
                <div className="fixed h-screen w-screen flex items-center justify-center bg-[#F3F3F4] dark:bg-[#18191A] bg-opacity-85">
                <div className="main_popup bg-white dark:bg-[#323436] w-full h-3/5 mx-5 rounded-lg drop-shadow-xl">
                    <div className='flex justify-center'>
                        <h3 className='text-center text-xl font-bold py-3 ml-auto dark:text-white'>Create post</h3>
                        <div className='cursor-pointer pr-3 py-3 ml-auto' onClick={()=>navigate('/')}>
                            <Icon icon="maki:cross" width="2rem" height="2rem" style={{ color: '#606771' }} className='bg-gray-200 hover:bg-gray-300 rounded-full p-1.5' />
                        </div>
                    </div>
                    <div className='border-b border-gray dark:border-gray-500'></div>
                    <div className='flex'>
                        {getUser && 
                        <img
                        src={Profile} 
                        alt="Profile"
                        className='w-10 h-10 m-4 rounded-full cursor-pointer bg-[#eceaea] hover:bg-[#dad8d8]'
                      />}
                        {getName && 
                        <h3 className='text-gray text-lg pt-6 font-semibold dark:text-white'>{getName}</h3>}
                    </div>
                    {getName && 
                    <textarea type='text' className='h-32 w-5/7 text-zinc-800 dark:bg-[#323436] text-2xl pl-1.5 ml-4 mt-1 focus:outline-none resize-none' placeholder={`What's on your mind, ${getName}?`} onChange={(e)=>setValue(e.target.value)}></textarea>}

                    <div className='rounded-lg border border-gray mx-5 dark:border-gray-500'>
                        <div className='flex justify-between px-3 py-3.5'>
                            {/* <h4 className='font-semibold pl-1 cursor-pointer'>Add to your post</h4> */}
                            <input type="file" name="images" id="images" className='dark:text-white'/>
                            <div className='flex gap-3'>
                                <Icon icon="flat-color-icons:stack-of-photos" width="1.7rem" height="1.7rem" className='cursor-pointer hover:scale-110' />
                                {/* <Icon icon="fa-solid:user-tag" width="1.6rem" height="1.6rem" style={{ color: '#1B82E9' }} className='cursor-pointer hover:scale-110' /> */}
                                <Icon icon="tdesign:feel-at-ease" width="1.6rem" height="1.6rem" style={{ color: '#EAB129' }} className='cursor-pointer hover:scale-110' />
                                {/* <Icon icon="mdi:location" width="1.6rem" height="1.6rem" style={{ color: '#F5533D' }} className='cursor-pointer hover:scale-110' /> */}
                                <Icon icon="heroicons:gif-20-solid" width="1.6rem" height="1.6rem" style={{ color: '#28B19E' }} className='cursor-pointer hover:scale-110' />
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg  bg-[#1B82E9] px-2 py-1.5 mx-5 my-2 text-center text-white font-semibold cursor-pointer hover:bg-[#5997d6]' onClick={postDetails}>Post</div>
                </div>
            </div>

            ) : (

                <div className="fixed h-screen w-screen flex items-center justify-center bg-[#F3F3F4] dark:bg-[#18191A] bg-opacity-85 dark:bg-opacity-85 ">
                <div className="main_popup bg-white dark:bg-[#323436] w-2/6 h-3/5 rounded-lg drop-shadow-xl">
                    <div className='flex justify-end gap-32'>
                        <h3 className='text-center text-xl font-bold py-3 dark:text-white'>Create post</h3>
                        <div className='cursor-pointer pr-3 py-3 flex justify-end' onClick={onClose}>
                            <Icon icon="maki:cross" width="2rem" height="2rem" style={{ color: '#606771' }} className='bg-gray-200 hover:bg-gray-300 rounded-full p-1.5' />
                        </div>
                    </div>
                    <div className='border-b border-gray dark:border-gray-500'></div>
                    <div className='flex'>
                        {getUser && 
                        <img
                        src={Profile} 
                        alt="Profile"
                        className='w-10 h-10 m-4 rounded-full cursor-pointer bg-[#eceaea] hover:bg-[#dad8d8]'
                      />}
                        {getName && 
                        <h3 className='text-gray text-lg pt-6 font-semibold dark:text-white'>{getName}</h3>}
                    </div>
                    {getName && 
                    <textarea type='text' className='h-32 w-5/7 text-zinc-800 dark:text-zink-400 dark:bg-[#323436] text-2xl pl-1.5 ml-4 mt-1 focus:outline-none resize-none' placeholder={`What's on your mind, ${getName}?`} onChange={(e)=>setValue(e.target.value)}></textarea>}

                    <div className='rounded-lg border border-gray dark:border-gray-500 mx-5 '>
                        <div className='flex justify-between px-3 py-3.5 dark:bg-[#323436] dark:text-white'>
                            {/* <h4 className='font-semibold pl-1 cursor-pointer'>Add to your post</h4> */}
                            <input type="file" name="images" id="images" />
                            <div className='flex gap-3'>
                                <Icon icon="flat-color-icons:stack-of-photos" width="1.7rem" height="1.7rem" className='cursor-pointer hover:scale-110' />
                                {/* <Icon icon="fa-solid:user-tag" width="1.6rem" height="1.6rem" style={{ color: '#1B82E9' }} className='cursor-pointer hover:scale-110' /> */}
                                <Icon icon="tdesign:feel-at-ease" width="1.6rem" height="1.6rem" style={{ color: '#EAB129' }} className='cursor-pointer hover:scale-110' />
                                {/* <Icon icon="mdi:location" width="1.6rem" height="1.6rem" style={{ color: '#F5533D' }} className='cursor-pointer hover:scale-110' /> */}
                                <Icon icon="heroicons:gif-20-solid" width="1.6rem" height="1.6rem" style={{ color: '#28B19E' }} className='cursor-pointer hover:scale-110' />
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg  bg-[#1B82E9] px-2 py-1.5 mx-5 my-2 text-center text-white font-semibold cursor-pointer hover:bg-[#5997d6]' onClick={postDetails}>Post</div>
                </div>
            </div>
            )}
                       
        </>
    )
}

export default Popup
