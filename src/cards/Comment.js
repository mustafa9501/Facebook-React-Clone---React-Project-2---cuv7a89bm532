import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Icon } from '@iconify/react'
import { useUser } from '../provider/UserProvider'
import { Cards } from './Cards';

const Comment = ({ onClose }) => {
    // console.log(id)
    const { getcomment, singleId } = useUser();
    const [commentData, setCommentData] = useState([]);

    const commentPost = async () => {
        axios.get(`https://academics.newtonschool.co/api/v1/facebook/post/${singleId}`).then((response) => {
            console.log(response.data.data)
            setCommentData(response.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        commentPost();
    }, [])

    console.log(commentData)

    return (<>
        <div className="fixed h-screen w-screen flex items-center justify-center bg-[#F3F3F4] bg-opacity-90 mb-4">
            <div className="main_popup bg-white w-3/6 h-5/7 rounded-lg drop-shadow-xl overflow-y-auto">

                {/* <h2 className='text-red-600'>Comment !!!!</h2> */}
                <div className=' pr-3 py-3 flex justify-between' >
                <div className='m-auto pl-16 text-2xl font-bold' >Post</div>
                    <Icon icon="maki:cross" width="2rem" height="2rem" style={{ color: '#606771' }} className='bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 cursor-pointer' onClick={onClose}/>
                </div>
                <div className='border-b pt-1 border-gray-400'></div>
                <div className='mb-3'>
                {/* {Array.isArray(commentData) && commentData?.map((obj, id) => {
                        return ( */}
                            <Cards
                                key={commentData.id}
                                // name={commentData.author.name}
                                createdAt={commentData.createdAt}
                                // ssrc1={commentData.author.profileImage}
                                src={commentData.images}
                                likeCount={commentData.likeCount}
                                commentCount={commentData.commentCount}
                                alt='images'
                            />
                        {/* );
                    })} */}

                    {getcomment.map((obj, id) => {
                        return (
                            <p className='text-black pl-12 pt-5'>{obj.content}</p>)
                    })}
                </div>
                <div className='flex'>
                <input className='mb-10 pl-4  bg-[#F0F2F5] ml-10 w-4/7 rounded-l-lg pb-4 pt-4 focus:outline-none' placeholder='Write a comment...'/>
                <div className='bg-[#F0F2F5] h-14 py-4 pr-4 rounded-r-lg'>
                <Icon icon="iconamoon:send-fill" width="1.5rem" height="1.5rem" style={{color: '#005DC7'}}/></div>
                </div>

            </div>
        </div>
    </>
    )
}

export default Comment
