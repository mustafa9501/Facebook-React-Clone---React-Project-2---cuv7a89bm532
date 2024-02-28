import React from 'react'
import { useUser } from '../provider/UserProvider';
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom';

const Account = () => {

    const { getUser, signOutUser } = useUser();
    const navigate = useNavigate();

    const onClickHandler = () => {
        localStorage.removeItem("token");
        signOutUser();
        navigate('/')
    };

    return (<>
        <div
            className="absolute right-0 mt-14 mr-4 w-1/4 origin-top-right rounded-md bg-white text-zinc-200 font-semibold py-2 px-2 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
            style={{ boxShadow: '1px 3px 4px 4px rgba(0, 0, 0, 0.1)' }}>

            <div className='w-68 m-1.5 mt-2 rounded-lg bg-white text-black h-36 p-1.5' style={{ boxShadow: '1px 1px 4px 4px rgba(0, 0, 0, 0.1)' }}>
                <div className='flex hover:bg-[#F2F2F2] cursor-pointer hover:rounded-md px-1 py-2'>
                    <div className='rounded-full bg-black h-11 w-11 flex'>
                    </div>
                    <h2 className='text-black pl-4 pt-1.5 text-lg'>Mustafa Zaheer</h2>
                </div>  
                <div className='border-b border-slate-400 mt-1.5'></div>
                <div className='rounded-lg bg-[#E4E6EB] hover:bg-[#d8dadb] text-center p-1.5 mt-5  cursor-pointer flex justify-center gap-2'>
                <div><Icon icon="heroicons:user-group-solid" width="1.4rem" height="1.4rem"  style={{color: '505050'}} /></div>
                <h2 className=''>
                See all profiles</h2>
                </div>
            </div>
              <div className='Settings mt-5 text-md flex justify-between  cursor-pointer rounded-md hover:bg-[#F2F2F2] py-2 px-2'>
                <div className='flex gap-4'>
                <Icon icon="material-symbols:settings" width="2rem" height="2rem"  style={{color: 'black'}}
                className='border bg-[#E4E6EB] rounded-full p-1' />
                <h2 className='text-black mt-1'>Setting & privacy</h2>
                </div>
                <Icon icon="ant-design:right-outlined" width="1.5rem" height="1.5rem"  style={{color: '505050'}} />
              </div>
              <div className='Settings text-md flex justify-between  cursor-pointer rounded-md hover:bg-[#F2F2F2] py-2 px-2'>
                <div className='flex gap-4'>
                <Icon icon="ic:outline-help" width="2rem" height="2rem"  style={{color: 'black'}}
                className='border bg-[#E4E6EB] rounded-full p-1' />
                <h2 className='text-black mt-1'>Help & support</h2>
                </div>
                <Icon icon="ant-design:right-outlined" width="1.5rem" height="1.5rem"  style={{color: '505050'}} />
              </div>
              <div className='Settings text-md flex justify-between  cursor-pointer rounded-md hover:bg-[#F2F2F2] py-2 px-2'>
                <div className='flex gap-4'>
                <Icon icon="material-symbols-light:dark-mode" width="2rem" height="2rem"  style={{color: 'black'}}
                className='border bg-[#E4E6EB] rounded-full p-1' />
                <h2 className='text-black mt-1'>Display</h2>
                </div>
                <Icon icon="ant-design:right-outlined" width="1.5rem" height="1.5rem"  style={{color: '505050'}} />
              </div>
              <div className='Settings text-md flex justify-between  cursor-pointer rounded-md hover:bg-[#F2F2F2] py-2 px-2'>
                <div className='flex gap-4'>
                <Icon icon="material-symbols:feedback-rounded" width="2rem" height="2rem"  style={{color: 'black'}}
                className='border bg-[#E4E6EB] rounded-full p-1'/>
                <h2 className='text-black mt-1'>Give feedback</h2>
                </div>
              </div>
              {getUser && getUser.status === "success" && (
              <div className='Settings text-md flex justify-between  cursor-pointer rounded-md hover:bg-[#F2F2F2] py-2 px-2' onClick={onClickHandler}>
                <div className='flex gap-4' >
                <Icon icon="majesticons:logout" width="2rem" height="2rem"  style={{color: 'black'}}
                className='border bg-[#E4E6EB] rounded-full p-1' />
                <h2 className='text-black mt-1' >Logout</h2>
                </div>
              </div>
              )}
              <div className='text-gray-500 text-xs pl-3 pt-1.5'>Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  ·   · Meta © 2024</div>
        </div>
    </>
    )
}

export default Account
