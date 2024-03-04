import { Icon } from '@iconify/react'
import React from 'react'

const Videos = () => {
    
    return (<>
        <div className='bg-[#F0F2F5] w-screen h-5/7 flex'>

            <div className='Part-1 w-1/7 h-full bg-white pl-4 pt-3  ' style={{ boxShadow: '0px 3px 2px 2px rgba(0, 0, 0, 0.1)' }}>
                <div className='flex justify-between pr-4'>
                    <h4 className='text-2xl font-bold'>Video</h4>
                    <Icon icon="ic:round-settings" width="2rem" height="2rem" style={{ color: 'gray' }} className='mt-1 bg-[#d9dbe0] hover:bg-[#c2c5c9] rounded-full p-1 cursor-pointer ' />
                </div>
                <div className='text-zinc-600 hover:bg-[#d3dde5] rounded-lg px-2 py-1.5 mr-4 mt-5 text-center font-semibold cursor-pointer bg-[#e2f1ef]'>+ Create new Videos</div>
                <div className='border-b border-gray-300 pl-3 mr-4 mt-3'></div>
                <div className='flex gap-4 mt-5 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                <Icon icon="ph:video-fill" width="2rem" height="2rem"  style={{color: 'gray'}} className='rounded-full bg-[#d9dbe0] p-1'/>
                    <h3 className='font-semibold text-lg text-zinc-600 mt-1'>Home</h3>
                </div>
                <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                    <Icon icon="ri:live-fill" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1'/>
                    <h3 className='font-semibold text-lg text-zinc-600 mt-1'>Live</h3>
                </div>
                <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                    <Icon icon="mage:video-player-fill" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1'/>
                    <h3 className='font-semibold text-lg text-zinc-600 mt-1'>Reels</h3>
                </div>
                <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                    <Icon icon="mdi:movie-open-play" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1'/>
                    <h3 className='font-semibold text-lg text-zinc-600 mt-1'>Shows</h3>
                </div>
                <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                    <Icon icon="mage:rocket-fill" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1'/>
                    <h3 className='font-semibold text-lg text-zinc-600 mt-1'>Explore</h3>
                </div>
                <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                    <Icon icon="mdi:bookmark" width="2rem" height="2rem" style={{ color: 'gray' }} className='rounded-full bg-[#d9dbe0] p-1'/>
                    <h3 className='font-semibold text-lg text-zinc-600 mt-1'>Saved Videos</h3>
                </div>
            </div>
            <div className='Part-2 font-bold text-3xl p-5 text-center flex m-auto items-center'>This page is coming soon !!</div>
        </div>
    </>
    )
}

export default Videos
