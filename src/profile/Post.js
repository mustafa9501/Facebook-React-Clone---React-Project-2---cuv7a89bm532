import React from 'react'
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useUser } from '../provider/UserProvider';
import { Cards } from '../cards/Cards';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import ProfileImage from '../images/profile.png';

const Post = () => {

    const { getUser, userId, darkTheme } = useUser();
    const [getData, setData] = useState(JSON.parse(localStorage.getItem('userData')) || {});
    const [getPost, setPost] = useState(JSON.parse(localStorage.getItem('postData')) || []);
    const [liked, setLiked] = useState(false);
    // const popupRef = useRef(null);
    // console.log(userId)

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
    }, []);

    useEffect(() => {
        if (getData.name) {
            userPosts(getData.name);
        }
    }, [getData]);


    const userPosts = async (authorName) => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/facebook/post?filter={"author.name" : "${authorName}"}`, {
                headers: {
                    Authorization: `Bearer ${getUser.token}`
                }
            });
            console.log(response.data.data);
            setPost(response.data.data);
            localStorage.setItem('postData', JSON.stringify(response.data.data));
        } catch (error) {
            console.error(error);
        }
    };
    //    console.log(getPost)

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
                        <div className='w-full rounded-lg bg-white dark:bg-[#18191A] mt-5 pl-6 px-4'>
                            <h2 className='font-bold text-lg pb-2 dark:text-white'>Intro</h2>
                            {getData.workExperience && getData.workExperience.map((obj, _id) => (
                                <div key={obj._id} className='flex pt-2'><Icon icon="basil:bag-solid" width="1.5rem" height="1.5rem" style={{ color: darkTheme ? 'white' : '#8C939D' }} />
                                    <div >
                                        <h4 className='text-md text-[#5A5A5A] mt-0.5 pl-5 dark:text-white'>Work at {obj.companyName}</h4>
                                    </div>

                                </div>))}
                            {getData.address && getData.address.map((obj, _id) => (
                                <div className='flex'><Icon icon="ic:round-house" width="1.5rem" height="1.5rem" style={{ color: darkTheme ? 'white' : '#8C939D' }} />
                                    <h4 className='text-md text-[#5A5A5A] mt-0.5 pl-5 dark:text-white'>{obj.street},  {obj.city}, {obj.country}</h4>
                                </div>
                            ))}
                            <div className='flex'><Icon icon="ic:baseline-email" width="1.4rem" height="1.4rem" style={{ color: darkTheme ? 'white' : '#8C939D' }} />
                                <h4 className='text-sm text-[#5A5A5A] mt-0.5 pl-5 dark:text-white'>{getData.email}</h4>
                            </div>
                            <div className='flex pt-1'><Icon icon="ph:gender-male-bold" width="1.5rem" height="1.5rem" style={{ color: darkTheme ? 'white' : '#8C939D' }} />
                                <h4 className='text-md text-[#5A5A5A] mt-0.5 pl-5 dark:text-white'>{getData.gender || 'male'}</h4>
                            </div>
                            <div className='flex pt-1'><Icon icon="carbon:time-filled" width="1.4rem" height="1.4rem" style={{ color: darkTheme ? 'white' : '#8C939D' }} />
                                <h4 className='text-sm text-[#5A5A5A] mt-0.5 pl-5 dark:text-white'>{getData.createdAt}</h4>
                            </div>

                            <div className='w-full rounded-lg mt-4  py-4 flex justify-between'>
                                <h3 className='font-bold text-md dark:text-white'>Photos</h3>
                                <h3 className='text-md text-[#0861F2] cursor-not-allowed'>See all photos</h3>
                            </div>
                            <div className='w-full rounded-lg py-4 flex justify-between'>
                                <h3 className='font-bold text-md dark:text-white'>Friends</h3>
                                <h3 className='text-md text-[#0861F2] cursor-not-allowed'>See all photos</h3>
                            </div>
                        </div>

                        <div className='w-full dark:bg-[#18191A] p-1'>
                            {getPost.map((obj) => (
                                <Card key={obj._id} className="w-full rounded-xl mt-6 dark:bg-[#323436]">
                                    <CardHeader className="flex justify-between gap-3.5 dark:bg-[#323436] pt-2">
                                        <div className="flex">
                                            <img className="w-10 h-10 rounded-full mt-1" src={getData.profileImage || ProfileImage} alt="Rounded avatar" />
                                            <div className='dark:text-white '>
                                                <Typography variant="h4" color="blue-gray" className="px-3 text-lg">
                                                    {getData.name}
                                                </Typography>
                                                <h5 className='text-[10px] pl-3.5'>{getData.createdAt}</h5>
                                            </div>
                                        </div>

                                        <div className="Edit flex ">
                                            <Icon icon="solar:menu-dots-bold" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : '#6c6a6a' }} className="rounded-full hover:bg-[#e4e1e1] cursor-pointer p-1" />
                                        </div>
                                    </CardHeader>

                                    {/* <Typography variant="h4" color="blue-gray" className="text-[10px] absolute mt-9 ml-16 pl-1.5 text-zinc-500">

                                </Typography> */}

                                    <CardBody floated={false} className="h-full w-full dark:text-white">
                                        <p className="pr-1 pb-2">{obj.content}</p>
                                        <div className="flex justify-center mb-4">
                                            <img src={obj.images} alt='image' />
                                        </div>
                                        <div className="flex justify-between pb-1">
                                            <div className="ml-4 bg-blue-500 w-5 h-5 rounded-full flex gap-3" onClick={() => likeHandler(obj._id)}><div className="flex mt-1 ml-1"><Icon icon="mdi:like" width="0.8rem" height="0.8rem" style={{ color: 'white' }} /></div>
                                                <h5 className="mb-2">{obj.likeCount}</h5>
                                            </div>
                                            <div className="mr-4 flex gap-1"><h5>{obj.commentCount}</h5>
                                                <Icon icon="basil:comment-solid" width="1.4rem" height="1.4rem" style={{ color: darkTheme ? 'white' : '#606770' }} />
                                            </div>
                                        </div>
                                        <div className="border-b border-neutral-400"></div>
                                    </CardBody>
                                    <CardFooter className="flex justify-between px-5 pb-4 pt-1 dark:text-white
                                ">
                                        <Typography className="flex gap-2 cursor-not-allowed hover:bg-[#F2F2F2] rounded-md px-5 py-1">
                                            <Icon icon="iconamoon:like-light" width="1.5rem" height="1.5rem" style={{ color: darkTheme ? 'white' : 'gray' }} className="mt-0.5" />
                                            <h4 className="font-semibold text-gray-600 mt-0.5 test-sm dark:text-white">Like</h4>
                                        </Typography>
                                        <Typography className="flex gap-2 cursor-not-allowed hover:bg-[#F2F2F2] rounded px-2 py-1" >
                                            <Icon icon="cil:comment-bubble" width="1.2rem" height="1.2rem" style={{ color: darkTheme ? 'white' : 'gray' }} className="mt-1" />
                                            <h4 className="text-gray-600 font-semibold test-sm dark:text-white">Comment</h4>
                                        </Typography>
                                        <Typography className="flex gap-2 cursor-not-allowed hover:bg-[#F2F2F2] rounded px-3 py-1">
                                            <Icon icon="majesticons:share-line" width="1.5rem" height="1.5rem" style={{ color: darkTheme ? 'white' : 'gray' }} />
                                            <h4 className="font-semibold text-gray-600  test-sm dark:text-white">Share</h4>
                                        </Typography>
                                    </CardFooter>

                                </Card>
                            ))}
                        </div>
                    </>

                ) : (

                    <div className='w-full h-full'>
                        <div className='bg-[#F0F2F5] flex justify-center gap-4 pl-60'>
                            {/* left */}
                            <div className='Left w-1/8 mt-5'>
                                <div className='bg-white rounded-lg flex'>
                                    <div className='font-semibold flex gap-3 p-4'>
                                        <Icon icon="mingcute:folder-locked-fill" style={{ color: 'white' }} className='rounded-full bg-[#0861F2] h-11 w-11 p-2' />
                                    </div>
                                    <div className='pl-2 pt-3.5'>
                                        <h2>You locked your profile</h2>
                                        <p className='font-semibold text-blue-600'>Learn more</p>
                                    </div>
                                </div>
                                <div className='w-full rounded-lg bg-white mt-4 pt-2 px-4 pb-4'>
                                    <h2 className='font-bold text-xl pb-2'>Intro</h2>
                                    {getData.workExperience && getData.workExperience.map((obj, _id) => (
                                        <div key={obj._id} className='flex pt-2'><Icon icon="basil:bag-solid" width="1.5rem" height="1.5rem" style={{ color: '#8C939D' }} />
                                            <div >
                                                <h4 className='text-md text-[#5A5A5A] mt-0.5 pl-5'>Work at {obj.companyName}</h4>
                                            </div>

                                        </div>))}
                                    {getData.address && getData.address.map((obj, _id) => (
                                        <div className='flex'><Icon icon="ic:round-house" width="1.5rem" height="1.5rem" style={{ color: '#8C939D' }} />
                                            <h4 className='text-md text-[#5A5A5A] mt-0.5 pl-5'>{obj.street},  {obj.city}, {obj.country}</h4>
                                        </div>
                                    ))}
                                    <div className='flex'><Icon icon="ic:baseline-email" width="1.4rem" height="1.4rem" style={{ color: '#8C939D' }} />
                                        <h4 className='text-sm text-[#5A5A5A] mt-0.5 pl-5'>{getData.email}</h4>
                                    </div>
                                    <div className='flex'><Icon icon="ph:gender-male-bold" width="1.5rem" height="1.5rem" style={{ color: '#8C939D' }} />
                                        <h4 className='text-md text-[#5A5A5A] mt-0.5 pl-5'>{getData.gender || 'male'}</h4>
                                    </div>
                                    <div className='flex'><Icon icon="carbon:time-filled" width="1.4rem" height="1.4rem" style={{ color: '#8C939D' }} />
                                        <h4 className='text-sm text-[#5A5A5A] mt-0.5 pl-5'>{getData.createdAt}</h4>
                                    </div>
                                </div>

                                <div className='w-full rounded-lg bg-white mt-4 px-4 py-4 flex justify-between'>
                                    <h3 className='font-bold text-lg'>Photos</h3>
                                    <h3 className='text-lg text-[#0861F2] cursor-not-allowed'>See all photos</h3>
                                </div>
                                <div className='w-full rounded-lg bg-white mt-4 px-4 py-4 flex justify-between'>
                                    <h3 className='font-bold text-lg'>Friends</h3>
                                    <h3 className='text-lg text-[#0861F2] cursor-not-allowed'>See all photos</h3>
                                </div>
                            </div>

                            {/* right */}
                            <div className='Right w-1/8 mt-5 overflow-y-auto scrollbar' style={{ width: 'calc(80% - 3rem)' }}>
                                <div className='RightContent' style={{ width: 'calc(80% - 3rem)', overflowY: 'auto', maxHeight: 'calc(100vh - 4rem)' }}>
                                    <div className='bg-white w-full rounded-lg mb-4'>
                                        <div className='flex justify-between'>
                                            <h2 className='font-bold text-xl pl-6 pt-3'>Posts</h2>
                                            <div className='flex gap-4 py-2 pr-5'>
                                                <button className='flex gap-2 rounded-lg border bg-[#D1D5DB] px-2 py-1.5 font-semibold text-[#606770] cursor-not-allowed'><Icon icon="mage:filter" width="1.2rem" height="1.2rem" style={{ color: '#606770' }} className='mt-1' />Filters</button>
                                                <button className='flex gap-2 border font-semibold bg-[#D1D5DB] rounded-lg px-1.5 py-1.5 text-[#606770] cursor-not-allowed'><Icon icon="lets-icons:setting-fill" width="1.2rem" height="1.2rem" style={{ color: '#606770' }} className='mt-1' />Manger posts</button>
                                            </div>
                                        </div>
                                        <div className='border-b border-gray-300'></div>
                                        <div className='flex justify-evenly gap-1 pl-6'>
                                            <div className='border-b-2 border-[#176FFF] w-5/7 mt-3 flex justify-center'>
                                                <button className='flex gap-2 font-semibold text-[#176FFF]  '><Icon icon="ph:list" width="1.2rem" height="1.2rem" style={{ color: '#176FFF' }} className='mt-0.5' />Live view</button>
                                            </div>
                                            <div className='py-1 w-full pr-5 '>
                                                <button className='flex justify-center gap-2 font-semibold text-[#606770] rounded-lg w-full py-2 hover:bg-[#F0F2F5] cursor-not-allowed'>
                                                    <Icon icon="ion:grid" width="1.2rem" height="1.2rem" style={{ color: '#606770' }} className='mt-0.5' />Grid view</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Post */}
                                    <div className='w-full mb-4 pr-2'>
                                        {getPost.map((obj) => (
                                            <Card key={obj._id} className="w-full ml-2 rounded-xl mb-3">
                                                <CardHeader className="flex justify-between gap-3.5">
                                                    <div className="py-3 flex">
                                                        <img className="w-10 h-10 rounded-full mt-1" src={getData.profileImage || ProfileImage} alt="Rounded avatar" />
                                                        <div className=''>
                                                            <Typography variant="h4" color="blue-gray" className="px-3 text-lg">
                                                                {getData.name}
                                                            </Typography>
                                                            <h5 className='text-[10px] pl-3.5'>{getData.createdAt}</h5>
                                                        </div>
                                                    </div>

                                                    <div className="Edit flex pt-3">
                                                        <Icon icon="solar:menu-dots-bold" width="2rem" height="2rem" style={{ color: '#6c6a6a' }} className="rounded-full hover:bg-[#e4e1e1] cursor-pointer p-1" />
                                                    </div>
                                                </CardHeader>

                                                <Typography variant="h4" color="blue-gray" className="text-[10px] absolute mt-9 ml-16 pl-1.5 text-zinc-500">

                                                </Typography>

                                                <CardBody floated={false} className="h-full w-full">
                                                    <p className="pl-6 pr-3 pb-3">{obj.content}</p>
                                                    <div className="flex justify-center mb-3">
                                                        <img src={obj.images} alt='image' />
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <div className="ml-4 mb-2.5 bg-blue-500 w-5 h-5 rounded-full flex gap-3" onClick={() => likeHandler(obj._id)}><div className="flex mt-1 ml-1"><Icon icon="mdi:like" width="0.8rem" height="0.8rem" style={{ color: 'white' }} /></div>
                                                            <h5 className="mb-2">{obj.likeCount}</h5>
                                                        </div>
                                                        <div className="mr-4 flex gap-1"><h5>{obj.commentCount}</h5>
                                                            <Icon icon="basil:comment-solid" width="1.4rem" height="1.4rem" style={{ color: '#606770' }} /></div>
                                                    </div>
                                                    <div className="border-b border-neutral-400 mx-4"></div>
                                                </CardBody>
                                                <CardFooter className="flex justify-between px-5 pt-2 pb-1">
                                                    <Typography className="flex gap-2 cursor-not-allowed hover:bg-[#F2F2F2] rounded-md px-5 py-1">
                                                        <Icon icon="iconamoon:like-light" width="1.5rem" height="1.5rem" style={{ color: 'gray' }} className="mt-0.5" />
                                                        <h4 className="font-semibold text-gray-600 mt-0.5 test-sm">Like</h4>
                                                    </Typography>
                                                    <Typography className="flex gap-2 cursor-not-allowed hover:bg-[#F2F2F2] rounded px-2 py-1" >
                                                        <Icon icon="cil:comment-bubble" width="1.2rem" height="1.2rem" style={{ color: 'gray' }} className="mt-1" />
                                                        <h4 className="text-gray-600 font-semibold test-sm">Comment</h4>
                                                    </Typography>
                                                    <Typography className="flex gap-2 cursor-not-allowed hover:bg-[#F2F2F2] rounded px-3 py-1">
                                                        <Icon icon="majesticons:share-line" width="1.5rem" height="1.5rem" style={{ color: 'gray' }} />
                                                        <h4 className="font-semibold text-gray-600  test-sm">Share</h4>
                                                    </Typography>
                                                </CardFooter>

                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Post;
