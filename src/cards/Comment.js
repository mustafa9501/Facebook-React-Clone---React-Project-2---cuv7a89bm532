import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useUser } from '../provider/UserProvider';
import { Cards } from './Cards';
import Profile from '../images/profile.png';
import Avatar from '../images/avatar-png.png';
import Delete from './Delete';
import { useNavigate } from 'react-router-dom';
import { CardComment } from './CardComment';

const Comment = ({ onClose }) => {
    // console.log(id)
    const { getcomment, singleId, getUser, setComment } = useUser();
    const [commentData, setCommentData] = useState([]);
    const [content, setCreateComment] = useState([]);
    // const [getDropdown, setDropdown] = useState(false);
    const navigate = useNavigate();

    const commentPost = async () => {
        axios.get(`https://academics.newtonschool.co/api/v1/facebook/post/${singleId}`).then((response) => {
            console.log(response.data.data)
            setCommentData(response.data.data)
            // setDropdown(new Array(response.data.data.length).fill(false))
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

    // const dropDownHandler = (() => {
    //     setDropdown(!getDropdown);
    // })

    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1100);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsScreenSmall(window.innerWidth < 1100);
        };

        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    console.log(singleId)

    return (<>
        {isScreenSmall ? (
            <div className="fixed h-screen w-screen flex items-center justify-center bg-[#F3F3F4] dark:bg-[#18191A] mb-4 z-40">
                <div className="main_popup bg-white dark:bg-[#18191A] w-screen mx-0.5 my-0.5 h-full rounded-lg drop-shadow-xl overflow-y-auto scrollbar">

                    {/* <h2 className='text-red-600'>Comment !!!!</h2> */}
                    <div className='pr-3 py-3 flex justify-between' >
                        <div className='m-auto pl-16 text-2xl font-bold dark:text-white' >Post</div>
                        <Icon icon="maki:cross" width="2rem" height="2rem" style={{ color: '#606771' }} className='bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 cursor-pointer' onClick={() => navigate('/')} />
                    </div>
                    <div className='border-b pt-1 border-gray-400'></div>
                    <div className='mb-3 ml-2 mt-1.5'>
                        {/* {Array.isArray(commentData) && commentData?.map((obj, id) => {
                         return ( */}
                        {commentData && commentData.author && <Cards
                            key={commentData._id}
                            name={commentData.author.name}
                            content={commentData.content}
                            src1={commentData.author.profileImage}
                            src={commentData.images}
                            likeCount={commentData.likeCount}
                            commentCount={commentData.commentCount}
                            alt='images'
                        />}


                        {getcomment.map((obj, id) => {
                            return (<>
                                <div key={obj.id} className='pt-2'>
                                    <CardComment
                                     content={obj.content}
                                     id={obj._id}
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

            <div className="fixed h-screen w-screen flex items-center justify-center bg-[#323436] dark:bg-[#18191A] bg-opacity-90 dark:bg-opacity-85 mb-4 z-40">
                <div className="main_popup bg-white dark:bg-[#323436] w-3/6 h-5/7 rounded-lg drop-shadow-xl overflow-y-auto scrollbar">

                    {/* <h2 className='text-red-600'>Comment !!!!</h2> */}
                    <div className='pr-3 py-3 flex justify-between' >
                        <div className='m-auto pl-16 text-2xl font-bold dark:text-white' >Post</div>
                        <Icon icon="maki:cross" width="2rem" height="2rem" style={{ color: '#606771' }} className='bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 cursor-pointer' onClick={onClose} />
                    </div>
                    <div className='border-b pt-1 border-gray-400 dark:border-gray-600'></div>
                    <div className='mb-3 mt-2 ml-2 pt-1'>
                        {/* {Array.isArray(commentData) && commentData?.map((obj, id) => {
                        return ( */}
                        {commentData && commentData.author && <Cards
                            key={commentData._id}
                            name={commentData.author.name}
                            content={commentData.content}
                            src1={commentData.author.profileImage}
                            src={commentData.images}
                            likeCount={commentData.likeCount}
                            commentCount={commentData.commentCount}
                            alt='images'
                        />}

                        {/* );
                    })} */}

                        {getcomment.map((obj, id) => {
                            return (<>
                                <div key={obj.id} className='pt-5 pb-2 dark:bg-[#323436]'>
                                    <CardComment
                                     content={obj.content}
                                     id={obj._id}
                                    />
                                </div>
                            </>)
                        })}
                        
                    </div>
                    <div className='flex pt-3 pb-6'>
                        <img src={Profile} className='h-10 w-11 rounded-full bg-gray-100 ml-6' />
                        <input className='mb-10 pl-4 bg-[#F0F2F5] dark:bg-[#242526] ml-4 w-4/7 rounded-l-2xl pb-4 pt-4 focus:outline-none' placeholder='Write a comment...' onChange={(event) => setCreateComment(event.target.value)} />
                        <div className='bg-[#F0F2F5] dark:bg-[#242526] h-14 py-4 pr-4 mr-4 rounded-r-2xl cursor-pointer' onClick={writeComment}>
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
