import { Icon } from '@iconify/react'
import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Friends = () => {

    const [getData, setData] =useState([]);

    const friendsList = async () => {
        axios.get('https://academics.newtonschool.co/api/v1/facebook/post?limit=100').then((response) => {
            console.log(response.data.data)
            setData(response.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        friendsList()
    }, [])
    
    return (<>
        <div className='bg-[#F0F2F5] w-screen h-5/7 flex'>

            <div className='Part-1 w-1/7 h-full bg-white pl-4 pt-3  ' style={{ boxShadow: '0px 3px 2px 2px rgba(0, 0, 0, 0.1)' }}>
                <div className='flex justify-between pr-4'>
                    <h4 className='text-2xl font-bold'>Friends</h4>
                    <Icon icon="ic:round-settings" width="2rem" height="2rem" style={{ color: 'gray' }} className='mt-1 bg-[#d9dbe0] hover:bg-[#c2c5c9] rounded-full p-1 cursor-pointer ' />
                </div>
                
                <div className='border-b border-gray-300 pl-3 mr-4 mt-3'></div>
                <div className='flex gap-4 mt-5 hover:bg-[#f0f2f5] bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-2'>
                <Icon icon="fa-solid:user-friends" width="2rem" height="2rem"  style={{color: 'white'}} className='rounded-full bg-[#1877F2] p-1'/>
                    <h3 className='font-semibold text-lg '>Home</h3>
                </div>
                <div className='flex gap-4 mt-1 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-2'>
                    <Icon icon="ri:user-shared-2-fill" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#d9dbe0] p-1'/>
                    <h3 className='font-semibold text-lg text-zinc-600'>Friends Requests</h3>
                </div>
                <div className='flex gap-4 mt-1 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                    <Icon icon="mingcute:user-add-fill" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#d9dbe0] p-1'/>
                    <h3 className='font-semibold text-lg text-zinc-600 '>Suggestions</h3>
                </div>
                <div className='flex gap-4 mt-1 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                    <Icon icon="ph:gift-fill" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#d9dbe0] p-1'/>
                    <h3 className='font-semibold text-lg text-zinc-600'>Birthday</h3>
                </div>
                <div className='flex gap-4 mt-1 hover:bg-[#f0f2f5] cursor-pointer rounded-lg mr-4 py-1.5'>
                    <Icon icon="ph:user-list-fill" width="2rem" height="2rem" style={{ color: 'black' }} className='rounded-full bg-[#d9dbe0] p-1'/>
                    <h3 className='font-semibold text-lg text-zinc-600 '>Custom Lists</h3>
                </div>
            </div>

            <div className='font-semibold text-xl pt-4 pl-20 w-2/8 overflow-y-auto scrollbar'>All Friends
            <div className='flex flex-wrap gap-4 pt-4 bg-[#F0F2F5] '>
            {getData.map((obj, id)=>{
                return (
                    <div key={obj.id} className='Part-2 font-semibold text-xl border rounded-2xl '>
                          <img src={obj.author.profileImage} className='h-48 w-48 rounded-t-2xl'></img>
                          <div className='p-2 bg-white text-lg rounded-b-2xl'>{obj.author.name}</div>
                    </div>
                )
            })}
            </div>
            </div>
        </div>
    </>
    )
}

export default Friends;
