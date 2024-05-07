import React from 'react'

const Messenger = () => {
  return (
    <div
            className="absolute right-0 mt-14 mr-4 w-1/4 origin-top-right rounded-md bg-white text-zinc-200 py-2 px-2 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
            style={{ boxShadow: '1px 3px 4px 4px rgba(0, 0, 0, 0.1)' }}>

            <div className='flex justify-between'>
                <h2 className='text-black text-2xl pl-3 font-bold'>Chats</h2>
                <h5 className='text-xl text-black pr-2 cursor-not-allowed'>...</h5>
            </div>  
            <div className='flex gap-8 pl-3 pt-4 text-black font-semibold'>
                <h3 className='cursor-not-allowed text-[#0866FF] bg-[#DFE9F2] rounded-full px-2 py-1'>Inbox</h3>
                {/* <h3 className='cursor-not-allowed pt-1'>Unread</h3> */}
            </div>    
            <div className='pl-3 text-black pt-3 pb-3'>
                <h5 className='text-xl'>There is no chat available.</h5>
            </div>

        <div className='text-gray-500 text-xs pl-3 pt-1.5'>Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  ·   · Meta © 2024</div>
        </div>
  )
}

export default Messenger

