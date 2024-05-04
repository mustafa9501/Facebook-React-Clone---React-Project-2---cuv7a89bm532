import { Icon } from '@iconify/react'
import React from 'react'

const Delete = () => {

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

  return (
    <>
        <div
            className="absolute left-32 w-1/6 index-10 rounded-md bg-white text-zinc-200 font-semibold px-2 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            // tabIndex="-1"
            style={{ boxShadow: '1px 3px 4px 4px rgba(0, 0, 0, 0.1)' }}>

            <div className='Settings text-md flex justify-between  cursor-not-allowed rounded-md hover:bg-[#F2F2F2] py-1 px-1'>
                <div className='flex gap-3'>
                    <Icon icon="subway:delete" width="1.8rem" height="1.8rem" style={{ color: 'black' }}
                        className='border bg-[#E4E6EB] rounded-full p-1.5' />
                    <h2 className='text-black mt-0.5'>Delete</h2>
                </div>

            </div>
        </div>
    </>
  )
}

export default Delete
