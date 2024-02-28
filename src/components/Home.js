import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cards } from '../cards/Cards';
import Navbar from '../navbar/Navbar';
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
import Popup from './Popup';
import Comment from '../cards/Comment';
import Slider from "react-slick";

const Home = () => {

    // const [post, setPost] = useState([]);
    const { getId, setId, isPopupOpen, openPopup, closePopup, closeCommentPopup, commentPopup } = useUser();
    
   
    const userPost = async () => {
        axios.get('https://academics.newtonschool.co/api/v1/facebook/post?limit=100').then((response) => {
            console.log(response.data.data)
            setId(response.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        userPost()
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };

    return (<>
        {/* <div className='bg-[#F0F2F5] w-full h-screen'> */}

        <div className="w-full h-5/7 flex bg-[#F0F2F5]  pt-1">
            {/* Content for the first part */}
            <div className='basis-1/4 overflow-y-auto'> <Aside />
            </div>

            {/* Content for the second part */}
            <div className="basis-3/5 overflow-y-auto">

            <Slider {...settings}>
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
            </Slider>
                
                <div className='mb-3 h-32 w-2/8 m-auto bg-white rounded-xl'>
                    <div className='flex p-3 gap-3'>
                        <div className='rounded-full bg-black h-11 w-11 ml-2 pl-11'>
                        </div>
                        <input type='text' placeholder="What's on your mind ?"
                        className='rounded-full bg-[#F0F2F5] px-4 py-2 text-lg focus:outline-none hover:bg-[#e5e6e9] cursor-pointer w-full mr-2' onClick={openPopup}/>
                    </div>
                    
                    <div className='border-b border-gray-200 mx-3'></div>
                    <div className='flex justify-between pl-6'>
                        <div className='flex cursor-pointer hover:bg-[#F0F2F5] rounded-lg mt-2 px-2 py-2'>    
                            <Icon icon="wpf:video-call" width="1.8rem" height="1.6rem"  style={{color: '#E42645'}} className='ml-3'/>
                            <h4 className='ml-1.5 text-gray-500 font-semibold'>Live Video</h4>
                        </div>
                        <div className='flex mt-2 cursor-pointer hover:bg-[#F0F2F5] rounded-lg px-2 py-2'>
                            <Icon icon="flat-color-icons:stack-of-photos" width="1.8rem" height="1.8rem" />
                            <h4 className='ml-1 text-gray-500 font-semibold'>Photos/Video</h4>
                        </div>
                        <div className='flex mt-2 px-2 py-2 mr-3 cursor-pointer hover:bg-[#F0F2F5] rounded-lg'>
                            <Icon icon="tdesign:feel-at-ease" width="1.7rem" height="1.7rem"  style={{color: '#EAB129'}} />
                            <h4 className='ml-1.5 text-base text-gray-500 font-semibold'>Feeling/activity</h4>
                        </div>
                    </div>
                </div>
                
                {getId?.map((obj, _id) => {
                    return (
                        <div key={obj.id} className='mb-3 w-2/8 m-auto'>
                            <Cards
                                name={obj.author.name}
                                createdAt={obj.createdAt}
                                src1={obj.author.profileImage}
                                src={obj.images}
                                likeCount={obj.likeCount}
                                commentCount={obj.commentCount}
                                alt='images'
                                id={obj._id}
                                click={userPost}
                            />
                        </div>
                    )
                })}
            </div>

            {/* Content for the third part */}
            <div className="basis-1/4 overflow-y-auto">
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
            {commentPopup && <Comment onClose={closeCommentPopup}/>}
        </div>
        {/* </div> */}
    </>
    )
}

export default Home
