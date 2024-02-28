import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../provider/UserProvider'

const Pages = () => {
    const {closePopup, openPopup} = useUser()

    return (<>
        <div className='bg-[#F0F2F5] w-screen h-5/7 flex'>

            <div className='Part-1 w-1/7 h-full bg-white pl-4 pt-3  ' style={{ boxShadow: '0px 3px 2px 2px rgba(0, 0, 0, 0.1)' }}>
                <div className='flex justify-between pr-4'>
                    <h4 className='text-2xl font-bold'>Pages</h4>
                    <Icon icon="ic:round-settings" width="2rem" height="2rem" style={{ color: 'black' }} className='mt-1 bg-[#d9dbe0] hover:bg-[#c2c5c9] rounded-full p-1 cursor-pointer ' />
                </div>
                <Link to='/pages/createpage'><div className='text-[#0866FF] hover:bg-[#d3dde5] rounded-lg px-2 py-1.5 mr-4 mt-5 text-center font-semibold cursor-pointer bg-[#e2f1ef]'>+ Create new Page</div></Link>
                <div className='border-b border-gray-300 pl-3 mr-4 mt-3'></div>
                <div className='flex gap-4 mt-5 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                    <Icon icon="arcticons:business-suite" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#E4E6EB] p-1.5'/>
                    <h3 className='font-semibold text-lg mt-0.5'>Meta Business Suite</h3>
                </div>
                <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                    <Icon icon="iconamoon:discover-bold" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#d9dbe0] p-1.5'/>
                    <h3 className='font-semibold text-lg'>Discover</h3>
                </div>
                <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                    <Icon icon="mdi:like" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#d9dbe0] p-1.5'/>
                    <h3 className='font-semibold text-lg'>Liked Pages</h3>
                </div>
                <div className='flex gap-4 mt-3 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                    <Icon icon="mingcute:user-add-fill" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#d9dbe0] p-1.5'/>
                    <h3 className='font-semibold text-lg'>Invites</h3>
                </div>
            </div>
            <div className='Part-2 font-bold text-2xl p-5 text-center'>Pages you manage</div>
        </div>
    </>
    )
}

export default Pages
