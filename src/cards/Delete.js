import { Icon } from '@iconify/react'
import React from 'react'

const Delete = () => {
  return (
    <>
        <div
            className="absolute right-1/2  w-1/3 rounded-md bg-white text-zinc-200 font-semibold py-2 px-2 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            // tabIndex="-1"
            style={{ boxShadow: '1px 3px 4px 4px rgba(0, 0, 0, 0.1)' }}>

            <div className='Settings text-md flex justify-between  cursor-not-allowed rounded-md hover:bg-[#F2F2F2] py-2 px-2'>
                <div className='flex gap-4'>
                    <Icon icon="subway:delete" width="2rem" height="2rem" style={{ color: 'black' }}
                        className='border bg-[#E4E6EB] rounded-full p-1' />
                    <h2 className='text-black mt-1'>Delete</h2>
                </div>

            </div>
        </div>
    </>
  )
}

export default Delete
