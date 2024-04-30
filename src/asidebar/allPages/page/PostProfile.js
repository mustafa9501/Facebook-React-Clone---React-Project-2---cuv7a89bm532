import React from 'react'
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useUser } from '../../../provider/UserProvider';
import { Cards } from '../../../cards/Cards';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Navbar,
} from "@material-tailwind/react";
import Profile from '../../../images/profile.png';

const PostProfile = () => {

    const { getUser, viewPageId } = useUser();
    const [getData, setData] = useState([]);
    const [getPost, setPost] = useState([]);

    const pageDetails = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/facebook/channel/${viewPageId}`, {
                headers: {
                    Authorization: `Bearer ${getUser.token}`
                }
            });
            console.log(response.data.data);
            setData(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const pagePosts = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/facebook/channel/${viewPageId}/posts`, {
                headers: {
                    Authorization: `Bearer ${getUser.token}`
                }
            });
            console.log(response.data.data);
            setPost(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        pageDetails();
        pagePosts();
    }, []);

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
                <>
                    <div className='Left pl-2'>
                        <div className='w-full rounded-lg bg-white pt-3 px-4 pb-4'>
                            <h2 className='font-bold text-xl'>Intro</h2>

                            <div className='flex gap-2 pt-2 pl-1'><Icon icon="bi:question-diamond-fill" width="1rem" height="1rem" style={{ color: 'black' }} className='pt-0.5 mt-1' />
                                <p className='text-[12px] pt-1 pb-1'>{getData.description}</p>
                            </div>
                            <div className='border-b border-gray-300 pb-2 mb-2'></div>
                            {getData.owner && (<>
                                <div className='flex pb-1 pt-2'><Icon icon="fa6-solid:user" width="1.5rem" height="1.5rem" style={{ color: '#8C939D' }} />
                                    <h4 className='text-sm text-[#5A5A5A] mt-0.5 pl-5'>{getData.owner.name}</h4>
                                </div>
                                <div className='flex pb-1'>
                                    <Icon icon="ph:gender-male-bold" width="1.5rem" height="1.5rem" style={{ color: '#8C939D' }} />
                                    <h4 className='text-md text-[#5A5A5A] mt-0.5 pl-5'>{getData.owner.gender || 'male'}</h4>
                                </div>
                                <div className='flex pb-1'><Icon icon="ic:baseline-email" width="1.4rem" height="1.4rem" style={{ color: '#8C939D' }} />
                                    <h4 className='text-sm text-[#5A5A5A] mt-0.5 pl-5'>{getData.owner.email}</h4>
                                </div>
                                <div className='flex pb-1'><Icon icon="ph:phone-fill" width="1.4rem" height="1.4rem" style={{ color: '#8C939D' }} />
                                    <h4 className='text-sm text-[#5A5A5A] mt-0.5 pl-5'>{getData.owner.phone || '123456789'}</h4>
                                </div>
                            </>)}
                            <div className='flex pb-1'><Icon icon="carbon:time-filled" width="1.4rem" height="1.4rem" style={{ color: '#8C939D' }} />
                                <h4 className='text-sm text-[#5A5A5A] mt-0.5 pl-5'>{getData.createdAt}</h4>
                            </div>

                        </div>
                        <div className='w-full rounded-lg bg-white px-4 py-2 flex justify-between'>
                            <h3 className='font-bold text-lg'>Photos</h3>
                            <h3 className='text-lg text-[#0861F2] cursor-not-allowed'>See all photos</h3>
                        </div>
                        <div className='w-full rounded-lg bg-white px-4 py-2 flex justify-between'>
                            <h3 className='font-bold text-lg'>Friends</h3>
                            <h3 className='text-lg text-[#0861F2] cursor-not-allowed'>See all photos</h3>
                        </div>
                    </div>
                        <div className='border-b-2 border-gray-300 pb-2 mb-2'></div>

                    {/* Post */}
                    <div className='w-full mb-4'>
                        <h2 className='font-bold text-xl pl-6 pt-3'>Posts</h2>

                        {getPost.length > 0 ? (
                            getPost.map((obj) => obj && (
                                <Card key={obj._id} className="w-full rounded-xl pt-3 mb-1">
                                    <CardHeader className="flex justify-between gap-3.5">
                                        {getData && Object.keys(getData).length > 0 && getData.image && (
                                            <div className="py-3 flex">
                                                <img className="w-10 h-10 rounded-full mt-1" src={getData.image || Profile} alt="Rounded avatar" />
                                                {getData && Object.keys(getData).length > 0 && (
                                                    <div className=''>
                                                        <Typography variant="h4" color="blue-gray" className="px-3 text-lg">
                                                            {getData.name}
                                                        </Typography>
                                                        <h5 className='text-[10px] pl-3.5'>{obj.createdAt}</h5>
                                                    </div>)}
                                            </div>
                                        )}
                                        <div className="Edit flex pt-3">
                                            <Icon icon="solar:menu-dots-bold" width="2rem" height="2rem" style={{ color: '#6c6a6a' }} className="rounded-full hover:bg-[#e4e1e1] cursor-pointer p-1" />
                                        </div>
                                    </CardHeader>

                                    <Typography variant="h4" color="blue-gray" className="text-[10px] absolute mt-9 ml-16 pl-1.5 text-zinc-500">

                                    </Typography>

                                    <CardBody floated={false} className=" p-0 h-full w-full">
                                        {getData && Object.keys(getData).length > 0 && (<>
                                            <p className="pl-6 pr-3 pt-2 pb-3">{obj.content}</p>
                                            <div className="flex justify-center mb-3">
                                                <img src={obj.images} alt='image' />
                                            </div>
                                        </>)}
                                        <div className="flex justify-between">
                                            <div className="ml-6 mb-2.5 bg-blue-500 w-5 h-5 rounded-full flex gap-3"><div className="flex mt-1 ml-1"><Icon icon="mdi:like" width="0.8rem" height="0.8rem" style={{ color: 'white' }} /></div>
                                            </div>
                                            <div className="mr-6 flex gap-1">
                                                <Icon icon="basil:comment-solid" width="1.4rem" height="1.4rem" style={{ color: '#606770' }} />
                                            </div>
                                        </div>
                                        <div className="border-b border-neutral-400 mx-4"></div>
                                    </CardBody>

                                    <CardFooter className="flex justify-between px-5 pt-2 pb-3">
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
                            ))
                        ) : (<>
                            <Card className="w-full ml-2 rounded-xl mb-3">
                                <CardHeader className="flex justify-between gap-3.5">
                                    <div className="py-3 flex">
                                        <img className="w-10 h-10 rounded-full mt-1" src={getData.image} alt="Rounded avatar" />
                                        <div className=''>
                                            <Typography variant="h4" color="blue-gray" className="px-3 text-lg">
                                                {getData.name}
                                            </Typography>
                                            <h5 className='text-[10px] pl-3.5'>{ }</h5>
                                        </div>
                                    </div>
                                    <div className="Edit flex pt-3">
                                        <Icon icon="solar:menu-dots-bold" width="2rem" height="2rem" style={{ color: '#6c6a6a' }} className="rounded-full hover:bg-[#e4e1e1] cursor-pointer p-1" />
                                    </div>
                                </CardHeader>

                                <Typography variant="h4" color="blue-gray" className="text-[10px] absolute mt-9 ml-16 pl-1.5 text-zinc-500">
                                </Typography>

                                <CardBody floated={false} className="h-full w-full">

                                    <p className="pl-6 pr-3 pb-3">{ }</p>
                                    <div className="flex justify-center mb-3 font-semibold">
                                        There is no post yet.
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="ml-4 mb-2.5 bg-blue-500 w-5 h-5 rounded-full flex gap-3"><div className="flex mt-1 ml-1"><Icon icon="mdi:like" width="0.8rem" height="0.8rem" style={{ color: 'white' }} /></div>
                                            <h5 className="mb-2"></h5>
                                        </div>
                                        <div className="mr-4 flex gap-1"><h5></h5>
                                            <Icon icon="basil:comment-solid" width="1.4rem" height="1.4rem" style={{ color: '#606770' }} /></div>
                                    </div>
                                    <div className="border-b border-neutral-400 mx-4"></div>
                                </CardBody>

                                <CardFooter className="flex justify-between px-5 pt-2 pb-1">
                                    <Typography className="flex gap-2 cursor-pointer hover:bg-[#F2F2F2] rounded-md px-5 py-1">
                                        <Icon icon="iconamoon:like-light" width="1.5rem" height="1.5rem" style={{ color: 'gray' }} className="mt-0.5" />
                                        <h4 className="font-semibold text-gray-600 mt-0.5 test-sm">Like</h4>
                                    </Typography>
                                    <Typography className="flex gap-2 cursor-pointer hover:bg-[#F2F2F2] rounded px-2 py-1" >
                                        <Icon icon="cil:comment-bubble" width="1.2rem" height="1.2rem" style={{ color: 'gray' }} className="mt-1" />
                                        <h4 className="text-gray-600 font-semibold test-sm">Comment</h4>
                                    </Typography>
                                    <Typography className="flex gap-2 cursor-pointer hover:bg-[#F2F2F2] rounded px-3 py-1">
                                        <Icon icon="majesticons:share-line" width="1.5rem" height="1.5rem" style={{ color: 'gray' }} />
                                        <h4 className="font-semibold text-gray-600  test-sm">Share</h4>
                                    </Typography>
                                </CardFooter>

                            </Card>
                            {/* <div className="text-center">There is no post yet.</div> */}
                        </>)}
                    </div>
                </>

            ) : (
                <>
                    <div className='w-full bg-[#F0F2F5] flex justify-end gap-2 pl-96'>
                        {/* left */}
                        <div className='Left w-3/5 pl-7'>
                            <div className='w-full rounded-lg bg-white pt-2 px-4 pb-4'>
                                <h2 className='font-bold text-xl'>Intro</h2>

                                <div className='flex gap-2 pt-2 pl-1'><Icon icon="bi:question-diamond-fill" width="1rem" height="1rem" style={{ color: 'black' }} className='pt-0.5 mt-1' />
                                    <p className='text-[12px] pt-1 pb-1'>{getData.description}</p>
                                </div>
                                <div className='border-b border-gray-300 pb-2 mb-2'></div>
                                {getData.owner && (<>
                                    <div className='flex pb-1'><Icon icon="fa6-solid:user" width="1.5rem" height="1.5rem" style={{ color: '#8C939D' }} />
                                        <h4 className='text-sm text-[#5A5A5A] mt-0.5 pl-5'>{getData.owner.name}</h4>
                                    </div>
                                    <div className='flex pb-1'>
                                        <Icon icon="ph:gender-male-bold" width="1.5rem" height="1.5rem" style={{ color: '#8C939D' }} />
                                        <h4 className='text-md text-[#5A5A5A] mt-0.5 pl-5'>{getData.owner.gender || 'male'}</h4>
                                    </div>
                                    <div className='flex pb-1'><Icon icon="ic:baseline-email" width="1.4rem" height="1.4rem" style={{ color: '#8C939D' }} />
                                        <h4 className='text-sm text-[#5A5A5A] mt-0.5 pl-5'>{getData.owner.email}</h4>
                                    </div>
                                    <div className='flex pb-1'><Icon icon="ph:phone-fill" width="1.4rem" height="1.4rem" style={{ color: '#8C939D' }} />
                                        <h4 className='text-sm text-[#5A5A5A] mt-0.5 pl-5'>{getData.owner.phone || '123456789'}</h4>
                                    </div>
                                </>)}
                                <div className='flex pb-1'><Icon icon="carbon:time-filled" width="1.4rem" height="1.4rem" style={{ color: '#8C939D' }} />
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
                        <div className='Right w-1/8 overflow-y-auto scrollbar' style={{ width: 'calc(100% - 3rem)' }}>
                            <div className='RightContent' style={{ width: 'calc(100% - 3rem)', overflowY: 'auto', maxHeight: 'calc(100vh - 4rem)' }}>
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

                                    {getPost.length > 0 ? (
                                        getPost.map((obj) => obj && (
                                            <Card key={obj._id} className="w-full ml-2 rounded-xl mb-3">
                                                <CardHeader className="flex justify-between gap-3.5">
                                                    {getData && Object.keys(getData).length > 0 && getData.image && (
                                                        <div className="py-3 flex">
                                                            <img className="w-10 h-10 rounded-full mt-1" src={getData.image || Profile} alt="Rounded avatar" />
                                                            {getData && Object.keys(getData).length > 0 && (
                                                                <div className=''>
                                                                    <Typography variant="h4" color="blue-gray" className="px-3 text-lg">
                                                                        {getData.name}
                                                                    </Typography>
                                                                    <h5 className='text-[10px] pl-3.5'>{obj.createdAt}</h5>
                                                                </div>)}
                                                        </div>
                                                    )}
                                                    <div className="Edit flex pt-3">
                                                        <Icon icon="solar:menu-dots-bold" width="2rem" height="2rem" style={{ color: '#6c6a6a' }} className="rounded-full hover:bg-[#e4e1e1] cursor-pointer p-1" />
                                                    </div>
                                                </CardHeader>

                                                <Typography variant="h4" color="blue-gray" className="text-[10px] absolute mt-9 ml-16 pl-1.5 text-zinc-500">

                                                </Typography>

                                                <CardBody floated={false} className=" p-0 h-full w-full">
                                                    {getData && Object.keys(getData).length > 0 && (<>
                                                        <p className="pl-6 pr-3 pt-2 pb-3">{obj.content}</p>
                                                        <div className="flex justify-center mb-3">
                                                            <img src={obj.images} alt='image' />
                                                        </div>
                                                    </>)}
                                                    <div className="flex justify-between">
                                                        <div className="ml-4 mb-2.5 bg-blue-500 w-5 h-5 rounded-full flex gap-3"><div className="flex mt-1 ml-1"><Icon icon="mdi:like" width="0.8rem" height="0.8rem" style={{ color: 'white' }} /></div>
                                                        </div>
                                                        <div className="mr-4 flex gap-1">
                                                            <Icon icon="basil:comment-solid" width="1.4rem" height="1.4rem" style={{ color: '#606770' }} />
                                                        </div>
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
                                        ))
                                    ) : (<>
                                        <Card className="w-full ml-2 rounded-xl mb-3">
                                            <CardHeader className="flex justify-between gap-3.5">
                                                <div className="py-3 flex">
                                                    <img className="w-10 h-10 rounded-full mt-1" src={getData.image} alt="Rounded avatar" />
                                                    <div className=''>
                                                        <Typography variant="h4" color="blue-gray" className="px-3 text-lg">
                                                            {getData.name}
                                                        </Typography>
                                                        <h5 className='text-[10px] pl-3.5'>{ }</h5>
                                                    </div>
                                                </div>
                                                <div className="Edit flex pt-3">
                                                    <Icon icon="solar:menu-dots-bold" width="2rem" height="2rem" style={{ color: '#6c6a6a' }} className="rounded-full hover:bg-[#e4e1e1] cursor-pointer p-1" />
                                                </div>
                                            </CardHeader>

                                            <Typography variant="h4" color="blue-gray" className="text-[10px] absolute mt-9 ml-16 pl-1.5 text-zinc-500">
                                            </Typography>

                                            <CardBody floated={false} className="h-full w-full">

                                                <p className="pl-6 pr-3 pb-3">{ }</p>
                                                <div className="flex justify-center mb-3 font-semibold">
                                                    There is no post yet.
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="ml-4 mb-2.5 bg-blue-500 w-5 h-5 rounded-full flex gap-3"><div className="flex mt-1 ml-1"><Icon icon="mdi:like" width="0.8rem" height="0.8rem" style={{ color: 'white' }} /></div>
                                                        <h5 className="mb-2"></h5>
                                                    </div>
                                                    <div className="mr-4 flex gap-1"><h5></h5>
                                                        <Icon icon="basil:comment-solid" width="1.4rem" height="1.4rem" style={{ color: '#606770' }} /></div>
                                                </div>
                                                <div className="border-b border-neutral-400 mx-4"></div>
                                            </CardBody>

                                            <CardFooter className="flex justify-between px-5 pt-2 pb-1">
                                                <Typography className="flex gap-2 cursor-pointer hover:bg-[#F2F2F2] rounded-md px-5 py-1">
                                                    <Icon icon="iconamoon:like-light" width="1.5rem" height="1.5rem" style={{ color: 'gray' }} className="mt-0.5" />
                                                    <h4 className="font-semibold text-gray-600 mt-0.5 test-sm">Like</h4>
                                                </Typography>
                                                <Typography className="flex gap-2 cursor-pointer hover:bg-[#F2F2F2] rounded px-2 py-1" >
                                                    <Icon icon="cil:comment-bubble" width="1.2rem" height="1.2rem" style={{ color: 'gray' }} className="mt-1" />
                                                    <h4 className="text-gray-600 font-semibold test-sm">Comment</h4>
                                                </Typography>
                                                <Typography className="flex gap-2 cursor-pointer hover:bg-[#F2F2F2] rounded px-3 py-1">
                                                    <Icon icon="majesticons:share-line" width="1.5rem" height="1.5rem" style={{ color: 'gray' }} />
                                                    <h4 className="font-semibold text-gray-600  test-sm">Share</h4>
                                                </Typography>
                                            </CardFooter>

                                        </Card>
                                        {/* <div className="text-center">There is no post yet.</div> */}
                                    </>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default PostProfile
