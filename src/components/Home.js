import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Cards } from '../cards/Cards';
import './Home.css';
import { useUser } from '../provider/UserProvider';
import Aside from '../asidebar/Aside';
import Screenshot1 from '../images/Screenshot (353).png';
import Screenshot2 from '../images/Screenshot (354).png';
import Screenshot3 from '../images/Screenshot (355).png';
import Microsoft from '../images/microsoft-protction.jpg';
import Image from '../images/images12.jpg';
import Model4 from '../images/model-4.jpeg';
import Model3 from '../images/model-2.jpg';
import Model1 from '../images/model-1.jpeg';
import Model2 from '../images/moodel-2.jpeg';
import { Icon } from '@iconify/react';
import Popup from '../cards/Popup';
import Comment from '../cards/Comment';
import UpdatePost from '../cards/UpdatePost';
import Profile from '../images/profile.png';

const Home = () => {

    const [post, setPost] = useState([]);
    const { isPopupOpen, openPopup, closePopup, closeCommentPopup, commentPopup, getUser, updatePopupClose, updated, getName, darkTheme } = useUser();

    const navigate = useNavigate();

    const userPost = async () => {
        axios.get('https://academics.newtonschool.co/api/v1/facebook/post?limit=100').then((response) => {
            console.log(response.data.data)
            setPost(response.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        userPost()
    }, []);

    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1100);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsScreenSmall(window.innerWidth < 1100);
        };

        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (<>
        {isScreenSmall ? (
            <div className={`${darkTheme && 'dark'}`}>
                <div className={`w-full h-screen bg-white dark:bg-[#18191A]`}>
                    <div className='bg-white  dark:bg-[#18191A] flex pr-3 px-1 pt-2'>
                        <div className='flex pl-5 gap-2 w-full'>
                            {getUser && <img src={Profile} alt="Profile" className='w-12 h-11 rounded-full cursor-pointer bg-[#eceaea] ' />}
                            <input type='text' placeholder={`What's on your mind ?`} className='flex-grow rounded-full bg-[#F0F2F5] dark:bg-[#323436] px-4 text-lg focus:outline-none hover:bg-[#e5e6e9] cursor-pointer mr-2' onClick={() => navigate('/composer')} />
                        </div>
                        <div className='mr-1 cursor-pointer' onClick={() => navigate('/composer')}>
                            <Icon icon="flat-color-icons:stack-of-photos" width="1.8rem" height="1.8rem" className='ml-2' />
                            <h4 className=' text-sm text-gray-500 font-semibold dark:text-white'>Photos</h4>
                        </div>
                    </div>
                    <div className='border-b-4 border-gray-300 dark:border-gray-950  mt-2'></div>
                    {/* story images */}
                    <div className='flex justify-center gap-1 my-5 px-3 dark:bg-[#18191A]'>
                        <div className='rounded-xl w-2/9 h-48'>
                            <img src={Model4} alt='image' className='w-full h-full rounded-xl' />
                        </div>
                        <div className='rounded-xl w-2/9 h-48 '>
                            <img src={Model3} alt='image' className='w-full h-full rounded-xl' />
                        </div>
                        <div className='rounded-xl w-2/9 h-48 '>
                            <img src={Model2} alt='image' className='rounded-xl w-full h-full' />
                        </div>
                        <div className='rounded-xl w-2/9 h-48'>
                            <img src={Model1} alt='image' className='rounded-xl w-full h-full' />
                        </div>
                    </div>
                    {/* posts */}
                    <div className="w-full flex flex-col items-center dark:bg-[#18191A]">
                        {post?.map((obj, _id) => {
                            return (
                                <div key={obj.id} className='mb-3 w-full px-2'>
                                    <Cards
                                        name={obj.author.name}
                                        createdAt={obj.createdAt}
                                        content={obj.content}
                                        src1={obj.author.profileImage}
                                        src={obj.images}
                                        likeCount={obj.likeCount}
                                        commentCount={obj.commentCount}
                                        alt='images'
                                        id={obj._id}
                                        authorId={obj.author._id}
                                        isLiked={obj.isLiked}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        ) : (
            <div className={`w-screen h-5/7 flex bg-[#F0F2F5] dark:bg-[#18191A] pt-1 ${darkTheme && 'dark'}`}>
                {/* Content for the first part */}
                <div className='basis-1/4 overflow-y-auto scrollbar'> <Aside />
                </div>

                {/* Content for the second part */}
                <div className="basis-3/5 overflow-y-auto scrollbar">

                    <div className='flex justify-center gap-1 my-5'>
                        <div className='rounded-xl w-1/5 h-56'>
                            <img src={Model4} alt='image' className='w-full h-full rounded-xl' />
                        </div>
                        <div className='rounded-xl w-1/5 h-56 '>
                            <img src={Model3} alt='image' className='w-full h-full rounded-xl' />
                        </div>
                        <div className='rounded-xl w-1/5 h-56 '>
                            <img src={Model2} alt='image' className='rounded-xl w-full h-full' />
                        </div>
                        <div className='rounded-xl w-1/5 h-56'>
                            <img src={Model1} alt='image' className='rounded-xl w-full h-full' />
                        </div>
                    </div>

                    <div className='mb-3 h-32 w-2/8 m-auto bg-white dark:bg-[#18191A] rounded-xl'>
                        <div className='flex p-3 gap-3'>
                            {getUser &&
                                <img
                                    src={Profile}
                                    alt="Profile"
                                    className='w-12 h-10 rounded-full cursor-pointer bg-[#eceaea]'
                                />}
                            {getName && <input type='text' placeholder={`What's on your mind ? ${getName}`}
                                className='rounded-full bg-[#F0F2F5] dark:bg-[#323436]  px-4 py-2 text-lg focus:outline-none hover:bg-[#e5e6e9] cursor-pointer w-full mr-2' onClick={openPopup} />}
                        </div>
                        <div className='border-b border-gray-200 dark:border-gray-500 mx-3'></div>
                        <div className='flex justify-between pl-6'>
                            <div className='flex cursor-pointer hover:bg-[#F0F2F5] dark:hover:bg-[#323436] rounded-lg mt-2 px-2 py-2' onClick={openPopup}>
                                <Icon icon="wpf:video-call" width="1.8rem" height="1.6rem" style={{ color: '#E42645' }} className='ml-3' />
                                <h4 className='ml-1.5 text-gray-500 dark:text-gray-300 font-semibold'>Live Video</h4>
                            </div>
                            <div className='flex mt-2 cursor-pointer hover:bg-[#F0F2F5] dark:hover:bg-[#323436] rounded-lg px-2 py-2' onClick={openPopup}>
                                <Icon icon="flat-color-icons:stack-of-photos" width="1.8rem" height="1.8rem" />
                                <h4 className='ml-1 text-gray-500 dark:text-gray-300 font-semibold'>Photos/Video</h4>
                            </div>
                            <div className='flex mt-2 px-2 py-2 mr-3 cursor-pointer hover:bg-[#F0F2F5] dark:hover:bg-[#323436] rounded-lg' onClick={openPopup}>
                                <Icon icon="tdesign:feel-at-ease" width="1.7rem" height="1.7rem" style={{ color: '#EAB129' }} />
                                <h4 className='ml-1.5 text-base text-gray-500 dark:text-gray-300 font-semibold'>Feeling/activity</h4>
                            </div>
                        </div>
                    </div>

                    {post?.map((obj, _id) => {
                        return (
                            <div key={obj.id} className='mb-3 w-2/8 m-auto'>
                                <Cards
                                    name={obj.author.name}
                                    createdAt={obj.createdAt}
                                    content={obj.content}
                                    src1={obj.author.profileImage}
                                    src={obj.images}
                                    likeCount={obj.likeCount}
                                    commentCount={obj.commentCount}
                                    alt='images'
                                    id={obj._id}
                                    authorId={obj.author._id}
                                    isLiked={obj.isLiked}
                                // click={userPost}
                                />
                            </div>
                        )
                    })}
                </div>

                {/* Content for the third part */}
                <div className="basis-1/4 overflow-y-auto scrollbar">
                    <div className='mb-1'>
                        <img src={Image} alt='images' className='rounded-md' />
                    </div>
                    <div className='mb-1'>
                        <img src={Microsoft} alt='images' className='rounded-md' />
                    </div>
                    <div className='mb-1'>
                        <img src={Screenshot2} alt='images' className='rounded-md' />
                    </div>
                    <div className='mb-1'>
                        <img src={Screenshot3} alt='images' className='rounded-md' />
                    </div>
                    <div className='mb-1'>
                        <img src={Screenshot1} alt='images' className='rounded-md' />
                    </div>

                </div>
                {isPopupOpen && <Popup onClose={closePopup} />}
                {commentPopup && <Comment onClose={closeCommentPopup} />}
                {updated && <UpdatePost onClose={updatePopupClose} />}
            </div >
        )}


    </>
    )
}

export default Home;
