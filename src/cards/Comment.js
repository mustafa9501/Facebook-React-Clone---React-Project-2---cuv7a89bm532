import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Icon } from '@iconify/react'
import { useUser } from '../provider/UserProvider'
import { Cards } from './Cards';
import Profile from '../images/profile.png';
import Avatar from '../images/avatar-png.png';
import Delete from './Delete';

const Comment = ({ onClose }) => {
    // console.log(id)
    const { getcomment, singleId, getUser } = useUser();
    const [commentData, setCommentData] = useState([]);
    const [createComment, setCreateComment] = useState([]);
    const [getDropdown, setDropdown] = useState(false);

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

    const writeComment = async (event)=>{
        event.preventDefault();
        const getComment = {createComment};

        axios.post(`https://academics.newtonschool.co/api/v1/facebook/post/${singleId}`, getComment ,{
            headers: {
                Authorization: `Bearer ${getUser.token}`
            }
        }) .then((response)=>{
            console.log(response.data.data.name)
        }).catch((error)=>{
            console.log(error)
        })
    }

    // const deleteComment = async (singleId) => {  
    //     try {
    //         const result = await axios.delete(`https://academics.newtonschool.co/api/v1/facebook/comment/${singleId}`, {
    //             headers: {
    //                 Authorization: `Bearer ${getUser.token}`
    //             }
    //         });       
    //         // window.location.reload();
    //         console.log(result);    
    //     } catch (err) {
    //         alert(err.message);
    //     }
    // };

    const dropDownHandler =(()=>{
        setDropdown(!getDropdown);
    })

    return (<>
        <div className="fixed h-screen w-screen flex items-center justify-center bg-[#F3F3F4] bg-opacity-90 mb-4">
            <div className="main_popup bg-white w-3/6 h-5/7 rounded-lg drop-shadow-xl overflow-y-auto scrollbar">

                {/* <h2 className='text-red-600'>Comment !!!!</h2> */}
                <div className=' pr-3 py-3 flex justify-between' >
                    <div className='m-auto pl-16 text-2xl font-bold' >Post</div>
                    <Icon icon="maki:cross" width="2rem" height="2rem" style={{ color: '#606771' }} className='bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 cursor-pointer' onClick={onClose} />
                </div>
                <div className='border-b pt-1 border-gray-400'></div>
                <div className='mb-3'>
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
                        
                    {getcomment.map((obj) => {
                        return (<>
                            <div className='flex pl-6 gap-3 pt-5'>
                                <img src={Avatar} alt='profile' className='h-10 w-10 bg-gray-100 rounded-full ' />
                                <div className='rounded-3xl bg-[#F0F2F5] px-3 p-2'>
                                    <h2 className='font-semibold'>Unknown</h2>
                                    <p className='text-black'>{obj.content}</p>
                                </div>
                                <Icon icon="tabler:dots" width="1.7rem" height="1.7rem" style={{ color: 'gray' }} className='mt-4 rounded-full hover:bg-gray-200 cursor-pointer px-1 py-1' onClick={dropDownHandler}/>
                            </div>    
                            
                            <div className='flex gap-4 pl-[88px]'>
                                <h6 className='text-[11px] font-bold cursor-not-allowed'>Like</h6>
                                <h6 className='text-[11px] font-bold cursor-not-allowed'>Reply</h6>
                            </div>
                            </> )})}    
                            {getDropdown && <Delete />}               
                </div>
                <div className='flex'>
                    <img src={Profile} className='h-10 w-10 rounded-full bg-gray-100 ml-6' />
                    <input className='mb-10 pl-4 bg-[#F0F2F5] ml-4 w-4/7 rounded-l-2xl pb-4 pt-4 focus:outline-none' placeholder='Write a comment...' onChange={(event)=>setCreateComment(event.target.value)}/>
                    <div className='bg-[#F0F2F5] h-14 py-4 pr-4 mr-4 rounded-r-2xl cursor-pointer' onClick={writeComment}>
                        <Icon icon="iconamoon:send-fill" width="1.5rem" height="1.5rem" style={{ color: '#005DC7' }} />
                    </div>
                </div>

            </div>
        </div>
    </>
    )
}

export default Comment
