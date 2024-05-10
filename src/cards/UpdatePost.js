import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useUser } from '../provider/UserProvider';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';


const UpdatePost = ({ onClose, id }) => {
    console.log(id)

    const { singleId, getUser, getName, dropDownForId } = useUser();
    const [getValue, setValue] = useState('');
    const [postContent, setPostContent] = useState('');
    const [hasStartedTyping, setHasStartedTyping] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setValue(e.target.value);
        setHasStartedTyping(true);
    };

    console.log(singleId)

    const postContentHandler = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/facebook/post/${singleId}`, {
                header: {
                    Authorization: `Bearer ${getUser.token}`
                }
            })
            setPostContent(response.data.data)
            console.log(response.data.data)

        } catch (error) {
            console.log(error)
        }
    };

    const postUpdate = async (event) => {
        event.preventDefault();
        let imageData = document.getElementById('images1').files[0];
        let formData = new FormData();
        formData.append('title', 'newton');
        formData.append('content', getValue);  // Use the content from getValue state
        formData.append('images', imageData);
        try {
            const result = await axios.patch(`https://academics.newtonschool.co/api/v1/facebook/post/${singleId}`, formData, {
                headers: {
                    Authorization: `Bearer ${getUser.token}`
                }
            });
            window.location.reload();
            console.log(result);
        } catch (error) {
            alert(error.message);
        }
        onClose();
    };

    useEffect(() => {
        postContentHandler();
    }, [singleId])


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
                <div className="h-screen w-screen flex items-center justify-center bg-[#F3F3F4] dark:bg-[#18191A]">
                    <div className="main_popup bg-white dark:bg-[#323436] w-full h-4/6 mx-3 rounded-lg drop-shadow-xl overflow-y-auto scrollbar-post">
                        <div className='flex justify-center py-2.5'>
                        <div className='ml-auto'>
                            <h3 className='text-xl font-bold dark:text-white'>Update post</h3>
                        </div>
                        <div className='cursor-pointer pr-3 ml-auto' onClick={() => navigate('/')}>
                            <Icon icon="maki:cross" width="2rem" height="2rem" style={{ color: '#606771' }} className='bg-gray-200 hover:bg-gray-300 rounded-full p-1.5' />
                        </div>
                        </div>

                        <div className='border-b border-gray dark:border-gray-500'></div>
                        <div className='flex'>
                            {getName &&
                                <div className='rounded-full bg-[#c7c5c5] font-bold text-[#1B82E9] text-2xl flex items-center justify-center h-11 w-11 m-4'>{getName.charAt(0)}
                                </div>}
                            {getName &&
                                <h3 className='text-gray text-lg pt-6 font-semibold dark:text-white'>{getName}</h3>}
                        </div>
                        {getName &&
                            <textarea type='text' className='h-32 w-5/7 text-zinc-800 dark:bg-[#323436] dark:text-white text-2xl pl-1.5 ml-4 mt-1 focus:outline-none resize-none' placeholder={`What's on your mind, ${getName}?`} onChange={handleInputChange} value={hasStartedTyping ? getValue : postContent.content}></textarea>}

                        <div className='px-2 rounded-lg'>
                            <img src={postContent.images} alt='image' />
                        </div>

                        <div className='rounded-lg border border-gray dark:border-gray-500 mx-5 mt-2'>
                            <div className='flex justify-between px-3 py-3.5'>
                                {/* <h4 className='font-semibold pl-1 cursor-pointer'>Add to your post</h4> */}
                                <input type="file" name="images" id="images1" className='dark:text-white'/>
                                <div className='flex gap-3'>
                                    <Icon icon="flat-color-icons:stack-of-photos" width="1.7rem" height="1.7rem" className='cursor-pointer hover:scale-110' />
                                    {/* <Icon icon="fa-solid:user-tag" width="1.6rem" height="1.6rem" style={{ color: '#1B82E9' }} className='cursor-pointer hover:scale-110' /> */}
                                    <Icon icon="tdesign:feel-at-ease" width="1.6rem" height="1.6rem" style={{ color: '#EAB129' }} className='cursor-pointer hover:scale-110' />
                                    {/* <Icon icon="mdi:location" width="1.6rem" height="1.6rem" style={{ color: '#F5533D' }} className='cursor-pointer hover:scale-110' /> */}
                                    <Icon icon="heroicons:gif-20-solid" width="1.6rem" height="1.6rem" style={{ color: '#28B19E' }} className='cursor-pointer hover:scale-110' />
                                </div>
                            </div>
                        </div>
                        <div className='rounded-lg bg-[#1B82E9] px-2 py-1.5 mx-5 my-2 mb-4 text-center text-white font-semibold cursor-pointer hover:bg-[#5997d6]' onClick={postUpdate}>Post</div>
                    </div>
                </div>

            ) : (

                <div className="fixed h-screen w-screen flex items-center justify-center bg-[#F3F3F4] dark:bg-[#18191A] dark:bg-opacity-90 bg-opacity-85">
                    <div className="main_popup bg-white dark:bg-[#323436] w-2/6 h-3/5 rounded-lg drop-shadow-xl overflow-y-auto scrollbar-post">
                        <div className='flex justify-end gap-32'>
                            <h3 className='text-center text-xl font-bold py-3 dark:text-white'>Update post</h3>
                            <div className='cursor-pointer pr-3 py-3 flex justify-end' onClick={onClose}>
                                <Icon icon="maki:cross" width="2rem" height="2rem" style={{ color: '#606771' }} className='bg-gray-200 hover:bg-gray-300 rounded-full p-1.5' />
                            </div>
                        </div>
                        <div className='border-b border-gray dark:border-gray-500'></div>
                        <div className='flex'>
                            {getName &&
                                <div className='rounded-full bg-[#c7c5c5] font-bold text-[#1B82E9] text-2xl flex items-center justify-center h-11 w-11 m-4 dark:text-white'>{getName.charAt(0)}
                                </div>}
                            {getName &&
                                <h3 className='text-gray text-lg pt-6 font-semibold dark:text-white'>{getName}</h3>}
                        </div>
                        {getName &&
                            <textarea type='text' className='h-32 w-5/7 text-zinc-800 dark:bg-[#323436] dark:text-white text-2xl pl-1.5 ml-4 mt-1 focus:outline-none resize-none' placeholder={`What's on your mind, ${getName}?`} onChange={handleInputChange} value={hasStartedTyping ? getValue : postContent.content}></textarea>}

                        <div className='px-2 rounded-lg'>
                            <img src={postContent.images} alt='image' />
                        </div>

                        <div className='rounded-lg border border-gray dark:border-gray-500 mx-5 mt-2'>
                            <div className='flex justify-between px-3 py-3.5'>
                                {/* <h4 className='font-semibold pl-1 cursor-pointer'>Add to your post</h4> */}
                                <input type="file" name="images" id="images1" className='dark:text-white'/>
                                <div className='flex gap-3'>
                                    <Icon icon="flat-color-icons:stack-of-photos" width="1.7rem" height="1.7rem" className='cursor-pointer hover:scale-110' />
                                    {/* <Icon icon="fa-solid:user-tag" width="1.6rem" height="1.6rem" style={{ color: '#1B82E9' }} className='cursor-pointer hover:scale-110' /> */}
                                    <Icon icon="tdesign:feel-at-ease" width="1.6rem" height="1.6rem" style={{ color: '#EAB129' }} className='cursor-pointer hover:scale-110' />
                                    {/* <Icon icon="mdi:location" width="1.6rem" height="1.6rem" style={{ color: '#F5533D' }} className='cursor-pointer hover:scale-110' /> */}
                                    <Icon icon="heroicons:gif-20-solid" width="1.6rem" height="1.6rem" style={{ color: '#28B19E' }} className='cursor-pointer hover:scale-110' />
                                </div>
                            </div>
                        </div>
                        <div className='rounded-lg bg-[#1B82E9] px-2 py-1.5 mx-5 my-2 mb-4 text-center text-white font-semibold cursor-pointer hover:bg-[#5997d6]' onClick={postUpdate}>Post</div>
                    </div>
                </div>
            )}

        </>
    )
}

export default UpdatePost
