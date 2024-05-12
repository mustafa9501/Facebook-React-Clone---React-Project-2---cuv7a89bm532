import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useUser } from '../provider/UserProvider';
// import { Cards } from './Cards';
import Profile from '../images/profile.png';
import Avatar from '../images/avatar-png.png';
import Delete from './Delete';
import { useNavigate } from 'react-router-dom';
import { CardComment } from './CardComment';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

const Comment = ({ onClose1, commentId }) => {
    console.log(commentId)
    const { getcomment, singleId, getUser, setComment, darkTheme } = useUser();
    const [commentData, setCommentData] = useState([]);
    const [content, setCreateComment] = useState([]);
    const [liked, setLiked] = useState(false);
    // const [getDropdown, setDropdown] = useState(false);
    const navigate = useNavigate();
    
    const commentPost = async () => {
        axios.get(`https://academics.newtonschool.co/api/v1/facebook/post/${singleId}`).then((response) => {
            console.log(response.data.data)
            setCommentData(response.data.data)
            // setDropdown(new Array(response.data.data.length).fill(false))
            console.log(singleId)
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        commentPost();
    }, [])

    const writeComment = async (event) => {
        event.preventDefault();
        const getComment = { content };

        axios.post(`https://academics.newtonschool.co/api/v1/facebook/comment/${singleId}`, getComment, {
            headers: {
                Authorization: `Bearer ${getUser.token}`
            }
        }).then((response) => {
            userCommentPost();
            console.log(response.data.data.name)
        }).catch((error) => {
            console.log(error)
        })
    }

    const userCommentPost = async () => {
        axios.get(`https://academics.newtonschool.co/api/v1/facebook/post/${singleId}/comments`).then((response) => {
            console.log(response.data.data)
            setComment(response.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1100);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsScreenSmall(window.innerWidth < 1100);
        };

        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    console.log(singleId)

    // const likeHandler = async () => {
    //     try {
    //       // Fetch the post data from the API
    //       const response = await axios.get(`https://academics.newtonschool.co/api/v1/facebook/post/${singleId}`, {
    //         headers: {
    //           Authorization: `Bearer ${getUser.token}`
    //         }
    //       });   
    //       // Extract the isLiked and likeCount properties from the API response
    //       const { isLiked, likeCount } = response.data.data;   
    //       // Toggle the like status
    //       if (isLiked) {
    //         // Unlike the post
    //         await axios.delete(`https://academics.newtonschool.co/api/v1/facebook/like/${singleId}`, {
    //           headers: {
    //             Authorization: `Bearer ${getUser.token}`
    //           }
    //         });
    //         // Decrease likeCount
    //         const updatedLikeCount = likeCount - 1;
    //         setDisplayLikeCount(updatedLikeCount);
    //         // Remove like status from localStorage
    //         localStorage.removeItem(`liked-${postId}`);
    //       } else {
    //         // Like the post
    //         await axios.post(`https://academics.newtonschool.co/api/v1/facebook/like/${postId}`, null, {
    //           headers: {
    //             Authorization: `Bearer ${getUser.token}`
    //           }
    //         });
    //         // Increase likeCount
    //         const updatedLikeCount = likeCount + 1;
    //         setDisplayLikeCount(updatedLikeCount);
    //         // Store like status in localStorage
    //         localStorage.setItem(`liked-${postId}`, 'true');
    //       }
    //       // Toggle the liked state
    //       setLiked(!isLiked);
    //       // Update the local state or perform any other necessary actions
    //       // For example, you can update the UI to reflect the new like status and like count
    //       console.log("Like status toggled successfully");
    //     } catch (error) {
    //       console.error("Error:", error);
    //     }
    //   };
    
    //   useEffect(() => {
    //     // Check if the post is liked
    //     const likedState = localStorage.getItem(`liked-${singleId}`);
    //     if (likedState === 'true') {
    //       setLiked(true);
    //     }
    //   }, [singleId]);

    return (<>
        {isScreenSmall ? (
            <div className="fixed h-screen w-screen flex items-center justify-center bg-[#F3F3F4] dark:bg-[#18191A] mb-4 z-40">
                <div className="main_popup bg-white dark:bg-[#18191A] w-screen mx-2 my-0.5 h-full rounded-lg drop-shadow-xl overflow-y-auto scrollbar">

                    {/* <h2 className='text-red-600'>Comment !!!!</h2> */}
                    <div className='pr-2 py-3 flex justify-between' >
                        {commentData.author && <div className='m-auto text-xl font-bold dark:text-white'>{commentData.author.name}'s Post</div>}
                        <Icon icon="maki:cross" width="2rem" height="2rem" style={{ color: '#606771' }} className='bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 cursor-pointer' onClick={() => navigate('/')} />
                    </div>
                    <div className='border-b pt-1 border-gray-400'></div>
                    <div className='mb-3 mt-1.5'>
                        {/* {Array.isArray(commentData) && commentData?.map((obj, id) => {
                         return ( */}
                        {commentData && commentData.author &&
                            <Card className="w-full px-2 mx-2rounded-xl dark:bg-[#323436]">
                                <CardHeader className="flex justify-between gap-3.5 dark:bg-[#323436]">
                                    <div className="py-2.5 flex">
                                        <img className="w-10 h-10 rounded-full" src={commentData.author.profileImage || Profile} alt="Rounded avatar" />
                                        <Typography variant="h4" color="blue-gray" className="px-3 text-lg hover:underline dark:text-white">
                                            {commentData.author.name}
                                        </Typography>
                                    </div>
                                    {/* <div className="Edit flex pt-3">
                                        <Icon icon="solar:menu-dots-bold" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : '#6c6a6a' }} className="rounded-full hover:bg-[#e4e1e1] dark:hover:bg-[#606264] cursor-pointer p-1" />
                                    </div> */}
                                </CardHeader>
                                <Typography variant="h4" color="blue-gray" className="text-[10px] absolute mt-9 ml-16 pl-1 text-zinc-500 dark:text-zinc-300">
                                    {/* {createdAt} */}
                                </Typography>

                                <CardBody floated={false} className="p-0 h-full w-full px-2">
                                    <p className="pl-6 pr-3 pt-2 pb-3 dark:text-white">{commentData.content}</p>
                                    <div className="flex justify-center mb-3">
                                        <img src={commentData.images} alt="image" />
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="ml-4 mb-2.5 bg-blue-500 w-5 h-5 rounded-full flex gap-3"><div className="flex mt-1 ml-1"><Icon icon="mdi:like" width="0.8rem" height="0.8rem" style={{ color: 'white' }} /></div>
                                            <h5 className="mb-2 dark:text-white">{commentData.likeCount}</h5>
                                        </div>
                                        <div className="mr-4 flex gap-1 dark:text-white"><h5>{commentData.commentCount}</h5>
                                            <Icon icon="basil:comment-solid" width="1.4rem" height="1.4rem" style={{ color: darkTheme ? 'white' : '#606770' }} /></div>
                                    </div>
                                    <div className="border-b border-neutral-400 dark:border-neutral-500 mx-4"></div>
                                </CardBody>

                                <CardFooter className="flex justify-between px-5 pt-2 pb-1 dark:text-white">
                                    <Typography className="flex gap-2 cursor-pointer hover:bg-[#F2F2F2] dark:hover:bg-[#606264] rounded-md px-5 py-1" >
                                        <Icon icon={liked ? "mdi:like" : "mdi:like-outline"} width="1.2rem" height="1.2rem" style={{ color: liked ? '#1877F2' : (darkTheme ? 'white' : 'gray') }} className="mt-0.5" />
                                        <h4 className={`font-semibold
            ${liked ? 'text-[#1877F2]' : (darkTheme ? 'dark:text-white' : 'text-gray-600')} text-sm pt-0.5`}>Like</h4>
                                    </Typography>
                                    <Typography className="flex gap-2 cursor-not-allowed hover:bg-[#F2F2F2] dark:hover:bg-[#606264] rounded px-3 py-1 mb-1">
                                        <Icon icon="majesticons:share-line" width="1.5rem" height="1.5rem" style={{ color: darkTheme ? 'white' : 'gray' }} />
                                        <h4 className="font-semibold
            text-gray-600 dark:text-white test-sm">Share</h4>
                                    </Typography>
                                </CardFooter>
                            </Card>
                        }

                        {/* for getting comments */}
                        {getcomment.map((obj, id) => {
                            return (<>
                                <div key={obj.id} className='pt-2'>
                                    <CardComment
                                     content={obj.content}
                                     id={obj._id}
                                     name={obj.author_details.name}
                                    />
                                </div>
                            </>)
                        })}
                    </div>


                    <div className='flex'>
                        <img src={Profile} className='h-10 w-10 rounded-full bg-gray-100 ml-4' />
                        <input className='mb-10 pl-3 bg-[#F0F2F5] dark:text-white dark:bg-[#323436] ml-4 w-4/7 rounded-l-2xl pb-4 pt-4 focus:outline-none' placeholder='Write a comment...' onChange={(event) => setCreateComment(event.target.value)} />
                        <div className='bg-[#F0F2F5] dark:bg-[#323436] h-14 py-4 pr-3 mr-1 rounded-r-2xl cursor-pointer' onClick={writeComment}>
                            <Icon icon="iconamoon:send-fill" width="1.5rem" height="1.5rem" style={{ color: '#005DC7' }} />
                        </div>
                    </div>

                </div>
            </div>

        ) : (

            <div className="fixed h-screen w-screen flex items-center justify-center bg-[#323436] dark:bg-[#18191A] bg-opacity-90 dark:bg-opacity-85 z-40 bottom-0">
                <div className="main_popup bg-white dark:bg-[#323436] w-3/6 h-5/7 rounded-lg drop-shadow-xl overflow-y-auto scrollbar">

                    {/* <h2 className='text-red-600'>Comment !!!!</h2> */}
                    <div className='pr-3 py-3 flex justify-between' >
                    {commentData.author && <div className='m-auto text-xl font-bold dark:text-white'>{commentData.author.name}'s Post</div>}
                        <Icon icon="maki:cross" width="2rem" height="2rem" style={{ color: '#606771' }} className='bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 cursor-pointer' onClick={onClose1} />
                    </div>
                    <div className='border-b pt-1 border-gray-400 dark:border-gray-600'></div>
                    <div className='mb-3 mt-2 mx-1.5 pt-1'>
                        {/* {Array.isArray(commentData) && commentData?.map((obj, id) => {
                        return ( */}
                        {commentData && commentData.author &&
                            
                            <Card className="w-full px-2 mx-2rounded-xl dark:bg-[#323436]">
                                <CardHeader className="flex justify-between gap-3.5 dark:bg-[#323436]">
                                    <div className="py-2.5 flex">
                                        <img className="w-10 h-10 rounded-full" src={commentData.author.profileImage || Profile} alt="Rounded avatar" />
                                        <Typography variant="h4" color="blue-gray" className="px-3 text-lg hover:underline dark:text-white">
                                            {commentData.author.name}
                                        </Typography>
                                    </div>
                                </CardHeader>

                                <CardBody floated={false} className="p-0 h-full w-full px-2">
                                    <p className="pl-6 pr-3 pt-2 pb-3 dark:text-white">{commentData.content}</p>
                                    <div className="flex justify-center mb-3">
                                        <img src={commentData.images} alt="image" />
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="ml-4 mb-2.5 bg-blue-500 w-5 h-5 rounded-full flex gap-3"><div className="flex mt-1 ml-1"><Icon icon="mdi:like" width="0.8rem" height="0.8rem" style={{ color: 'white' }} /></div>
                                            <h5 className="mb-2 dark:text-white">{commentData.likeCount}</h5>
                                        </div>
                                        <div className="mr-4 flex gap-1 dark:text-white"><h5>{commentData.commentCount}</h5>
                                            <Icon icon="basil:comment-solid" width="1.4rem" height="1.4rem" style={{ color: darkTheme ? 'white' : '#606770' }} /></div>
                                    </div>
                                    <div className="border-b border-neutral-400 dark:border-neutral-500 mx-4"></div>
                                </CardBody>

                                <CardFooter className="flex justify-between px-5 pt-2 pb-1 dark:text-white">
                                    <Typography className="flex gap-2 cursor-not-allowed hover:bg-[#F2F2F2] dark:hover:bg-[#606264] rounded-md px-5 py-1">
                                        <Icon icon={liked ? "mdi:like" : "mdi:like-outline"} width="1.2rem" height="1.2rem" style={{ color: liked ? '#1877F2' : (darkTheme ? 'white' : 'gray') }} className="mt-0.5" />
                                        <h4 className={`font-semibold
            ${liked ? 'text-[#1877F2]' : (darkTheme ? 'dark:text-white' : 'text-gray-600')} text-sm pt-0.5`}>Like</h4>
                                    </Typography>
                                    <Typography className="flex gap-2 cursor-not-allowed hover:bg-[#F2F2F2] dark:hover:bg-[#606264] rounded px-3 py-1 mb-1">
                                        <Icon icon="majesticons:share-line" width="1.5rem" height="1.5rem" style={{ color: darkTheme ? 'white' : 'gray' }} />
                                        <h4 className="font-semibold
            text-gray-600 dark:text-white test-sm">Share</h4>
                                    </Typography>
                                </CardFooter>
                            </Card>}


                        {getcomment.map((obj, id) => {
                            return (<>
                                <div key={obj.id} className='pt-5 pb-2 dark:bg-[#323436]'>
                                    <CardComment
                                        content={obj.content}
                                        id={obj._id}
                                        name={obj.author_details.name}
                                    />
                                </div>
                            </>)
                        })}

                    </div>
                    <div className='flex pt-3'>
                        <img src={Profile} className='h-10 w-11 rounded-full bg-gray-100 ml-6' />
                        <input className='mb-10 pl-4 bg-[#e3e5e9] dark:text-white dark:bg-[#242526] ml-4 w-4/7 rounded-l-2xl pb-4 pt-4 focus:outline-none' placeholder='Write a comment...' onChange={(event) => setCreateComment(event.target.value)} />
                        <div className='bg-[#e3e5e9] dark:bg-[#242526] h-14 py-4 pr-4 mr-4 rounded-r-2xl cursor-pointer' onClick={writeComment}>
                            <Icon icon="iconamoon:send-fill" width="1.5rem" height="1.5rem" style={{ color: '#005DC7' }} />
                        </div>
                    </div>

                </div>
            </div>
        )}

    </>
    )
}

export default Comment
