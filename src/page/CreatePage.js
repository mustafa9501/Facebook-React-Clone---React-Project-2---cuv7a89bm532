import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
    // const [backButton] = useState(true);
    const navigate = useNavigate();

    const backButtonHandler = () => {
        navigate(-1); // Use goBack() method to navigate to the previous page
    };

    return (
        <>
            <div className='bg-[#F0F2F5] w-screen h-5/7 flex box-border'>

                <div className='Part-1 w-1/7 h-full bg-white pl-4 pt-2 text-black' style={{ boxShadow: '0px 3px 2px 2px rgba(0, 0, 0, 0.1)' }}>
                    <div className='overflow-y-auto'>
                        <div className='flex justify-between'>
                            <h6 className='text-[12px] mt-3.5 text-zinc-500'><span className='hover:underline cursor-pointer hover:text-[#1877F2]' onClick={backButtonHandler}>Pages</span> › Create a Page</h6>
                            <div className='cursor-pointer pr-2 flex justify-end' onClick={backButtonHandler}>
                                <Icon icon="maki:cross" width="2rem" height="2rem" style={{ color: '#606771' }} className='bg-gray-200 hover:bg-gray-300 rounded-full p-1.5' />
                            </div>
                        </div>

                        <h2 className='text-2xl font-bold'>Create a Page</h2>

                        <h4 className='text-gray-600 pt-1.5 text-md'>Your Page is where people go to learn more about you. Make sure yours has all the information they may need.</h4>

                        <input className='rounded-lg border border-gray-300 mt-2.5 w-5/7 py-3.5 px-3 text-gray-600 hover:border-gray-500 focus:border-[#1877F2] focus:outline-none' placeholder='Page name (required)' type='text'></input>

                        <h6 className='pt-1.5 text-[12px] text-gray-600'>Use the name of your business, brand or organization, or a name that helps explain your Page. <span className='text-[#1877F2] hover:underline cursor-pointer'>Learn More</span></h6>

                        <input className='rounded-lg border border-gray-300 mt-3 w-5/7 py-3.5 px-3 hover:border-gray-500 focus:border-[#1877F2] focus:outline-none' placeholder='Category (required)' type='text'></input>

                        <h6 className='text-[12px] text-gray-600 pt-1.5'>Enter a category that best describes you.</h6>

                        <textarea type='text' className='h-28 w-5/7 mt-3 p-4 text-lg border rounded-lg border-gray-300 hover:border-gray-500 resize-none focus:border-[#1877F2] focus:outline-none' placeholder="Bio (optional)"></textarea>

                        <h6 className='text-[12px] text-gray-600'>Tell people a little about what you do.</h6>
                    </div>

                    <button className='bg-[#1877F2] hover:bg-[#4788dd] text-white font-semibold w-5/7 rounded-lg py-2 mt-2.5'>Create Page</button>

                    <h6 className='text-[10px] text-gray-600 mt-2.5'>By creating a Page, you agree to the <span className='text-[#1877F2] cursor-pointer hover:underline'>Pages, Groups and Events Policies</span></h6>

                </div>

                <div className='Part-2 m-10 bg-white w-2/8 h-5/7 rounded-lg' style={{ boxShadow: '0px 3px 2px 2px rgba(0, 0, 0, 0.1)' }}>
                    <div className='overflow-y-auto border rounded-lg border-gray-300 m-6 h-5/7 relative'>
                        <div className='bg-[#F0F2F5] h-2/3 relative'>
                            <div className='Image-profile absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-4 border rounded-full border-gray-500 bg-[#C9CCD1] w-40 h-40' style={{ boxShadow: '0px 0px 1px 6px rgba(255, 255, 255, 0.7)' }}>
                                <Icon icon="iconamoon:profile-fill" width="8rem" height="10rem" className='ml-3.5' style={{ color: 'white' }} />
                            </div>
                        </div>
                        <h2 className='text-4xl text-[#BCC0C4] font-bold text-center mt-7'>Page name</h2>

                        <div className='border-b border-gray-300 mx-4 mt-7'></div>

                        <div className='flex justify-between'>
                            <div className='flex gap-4 ml-8 pt-5 text-gray-600 font-semibold'>
                            <div className='cursor-pointer'>Post</div>
                            <div className='cursor-pointer'>About</div>
                            <div className='cursor-pointer'>Followers</div>
                            <div className='cursor-pointer'>Photos</div>
                            <div className='cursor-pointer'>Videos</div>
                            <div className='cursor-pointer'>More</div>
                            </div>

                            <div className='flex gap-3 mr-4 pt-3.5'>
                                <div className='rounded-lg bg-gray-300 px-3.5 py-1.5 flex gap-1 cursor-pointer'>
                                <Icon icon="ri:chat-follow-up-fill" width="1.2rem" height="1.2rem"  style={{color: 'gray'}} className='mt-1'/>
                                    <h4 className='font-semibold text-gray-600'>Follow</h4>
                                </div>
                                <div className='flex rounded-lg bg-gray-300 px-3.5 py-1.5 gap-1 cursor-pointer'>
                                <Icon icon="simple-icons:messenger" width="1.2rem" height="1.2rem"  style={{color: 'gray'}} className='mt-1'/>
                                    <h4 className='font-semibold text-gray-600'>Message</h4>
                                </div>
                                <div className='cursor-pointer'>
                                    <h4 className='rounded-lg bg-gray-300 px-3.5 py-1.5 font-semibold text-gray-600'>...</h4>
                                </div>
                            </div>
                        </div>

                            <div className='bg-[#F0F2F5] pt-5 mt-3.5 pl-24 pb-3'>
                                <div className='bg-white rounded-lg w-4/7 h-36 pb-2'> <h5 className='p-4 text-xl font-bold'>Intro</h5>
                                <div className='flex gap-3 pl-4'>
                                <Icon icon="gridicons:reader-following-conversation" width="1.5rem" height="1.5rem"  style={{color: 'gray'}} className='mt-0.5'/>
                                <h4 className='font-semibold text-gray-600'>0 Followers</h4>
                                </div>
                                <div className='flex gap-3 pl-4 pt-2'>
                                <Icon icon="ic:sharp-error" width="1.5rem" height="1.5rem" style={{color: 'gray'}} className='mt-0.5'/>
                                <h4 className='text-gray-600'><span className='text-gray-600 font-semibold'> Page .</span> Category</h4>
                                </div>
                                </div>
                                <div className='bg-white rounded-lg w-4/7 h-12 mt-8 text-xl font-bold pl-4 pt-2'> Posts
                                </div>
                            </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default CreatePage
