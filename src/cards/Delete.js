import { Icon } from '@iconify/react'
import {React, useState, useEffect} from 'react';
import axios from 'axios';
import { useUser } from '../provider/UserProvider';

const Delete = ({id}) => {

    const {getUser, commentId, singleId, setComment, darkTheme} = useUser();

    const userCommentPost = async () => {
        axios.get(`https://academics.newtonschool.co/api/v1/facebook/post/${singleId}/comments`).then((response) => {
            console.log(response.data.data)
            setComment(response.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    const deleteComment = async () => {  
        try {
            const result = await axios.delete(`https://academics.newtonschool.co/api/v1/facebook/comment/${id}`, {
                headers: {
                    Authorization: `Bearer ${getUser.token}`
                }
            });       
            userCommentPost();
            console.log(result);    
        } catch (err) {
            alert(err.message);
        }
    };

    console.log(id)

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
            <div
            className="absolute left-[12rem] mt-8 sm:w-1/2 md:w-1/6 rounded-md bg-white dark:bg-[#494e50] text-zinc-200 font-semibold py-2 px-2 focus:outline-none z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
            style={{ boxShadow: '0px 1px 4px 3px rgba(0, 0, 0, 0.1)' }}>

            <div className='Settings text-md flex justify-between hover:scale-105 hover:dark:scale-105 cursor-pointer rounded-md pr-1.5'>
                <div className='flex gap-3' onClick={deleteComment}>
                    <Icon icon="subway:delete" width="1.8rem" height="1.8rem" style={{ color: 'black' }}
                        className='border bg-[#E4E6EB] rounded-full p-1.5' />
                    <h2 className='text-black mt-0.5 dark:text-white'>Delete</h2>
                </div>

            </div>
        </div>

        ) : (

            <div
            className="absolute left-[12rem] mt-8 w-1/6 rounded-md bg-white dark:bg-[#494e50] text-zinc-200 font-semibold py-2 px-2 focus:outline-none z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
            style={{ boxShadow: '0px 1px 4px 3px rgba(0, 0, 0, 0.1)' }}>

            <div className='Settings text-md flex justify-between  cursor-pointer rounded-md hover:scale-105 hover:dark:scale-105 pr-2'>
                <div className='flex gap-3 pl-1' onClick={deleteComment}>
                    <Icon icon="subway:delete" width="1.5rem" height="1.5rem" style={{ color: 'black' }}
                        className='border bg-[#E4E6EB] rounded-full p-1' />
                    <h2 className='text-black dark:text-white'>Delete</h2>
                </div>

            </div>
        </div>
        )}
        
    </>
  )
}

export default Delete
