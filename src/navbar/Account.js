import React, { useState, useEffect } from 'react'
import { useUser } from '../provider/UserProvider';
import axios from 'axios';
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../images/profile.png';
import Avatar from '../images/dummy_avatar.jpg';
import ComingSoon from './SettingPrivacy';

const Account = () => {

  const { getUser, signOutUser, getName, getEmail, displayComponent, helpComponent, settingComponent, feedbackComponent, viewPageHandler} = useUser();
  const navigate = useNavigate();
  const [getData, setData] = useState('')

  const onClickHandler = () => {
    localStorage.removeItem("token");
    signOutUser();
    navigate('/')
  };

  console.log(getEmail)
  console.log(getName)

  const pageDetails = async () => {
    try {
      const response = await axios.get('https://academics.newtonschool.co/api/v1/facebook/channel/', {
        headers: {
          Authorization: `Bearer ${getUser.token}`
        }
      });
      const filteredData = response.data.data.filter(item => item.owner.email === getEmail);
      setData(filteredData);
      console.log(filteredData)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    pageDetails();
  }, [getEmail]);

  return (<>

    <div
      className="absolute right-0 mt-14 mr-4 w-1/4 origin-top-right rounded-md bg-white text-zinc-200 font-semibold py-2 px-2 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex="-1"
      style={{ boxShadow: '1px 3px 4px 4px rgba(0, 0, 0, 0.1)' }}>

      <div className='w-68 m-1.5 mt-2 rounded-lg bg-white text-black p-1.5' style={{ boxShadow: '1px 1px 4px 4px rgba(0, 0, 0, 0.1)' }}>
        <div className='flex hover:bg-[#F2F2F2] cursor-pointer hover:rounded-md px-1 py-2'>
          {getUser && <img
            src={Profile}
            alt="Profile"
            className='w-10 h-10 rounded-full cursor-pointer bg-[#dad7d7]'
          />}
          {getName && <h2 className='text-black pl-4 pt-1.5 text-xl'>{getName}</h2>}
        </div>
        <div className='border-b border-slate-400 mt-1.5'></div>

        {getData && getData.map((obj) => (
          <Link to='/pages/profilepage/postprofile'>
            <div key={obj._id} className='cursor-pointer hover:bg-[#F2F2F2] rounded-lg my-2 py-1' onClick={() => viewPageHandler(obj._id)}>
              <div className='pl-2 flex gap-4'>
                <img className="w-10 h-10 rounded-full bg-gray-200 mt-1" src={obj.image || Avatar} alt="profile" />
                <div>
                  <h2 className='pt-1 font-semibold text-md hover:underline'>{obj.name}</h2>
                  <h2 className=' text-[10px]'>{obj.createdAt}</h2>
                </div>
              </div>
            </div>
          </Link>
        ))}

        <div className='rounded-lg bg-[#E4E6EB] hover:bg-[#d8dadb] text-center p-1.5 mt-3 mb-1 cursor-not-allowed flex justify-center gap-2'>
          <div><Icon icon="heroicons:user-group-solid" width="1.4rem" height="1.4rem" style={{ color: '505050' }} /></div>
          <h2 className=''>
            See all profiles</h2>
        </div>
      </div>
      <div className='Settings mt-5 text-md flex justify-between  cursor-pointer rounded-md hover:bg-[#F2F2F2] py-2 px-2' onClick={settingComponent}>
        <div className='flex gap-4'>
          <Icon icon="material-symbols:settings" width="2rem" height="2rem" style={{ color: 'black' }}
            className='border bg-[#E4E6EB] rounded-full p-1' />
          <h2 className='text-black mt-1'>Setting & privacy</h2>
        </div>
        <Icon icon="ant-design:right-outlined" width="1.5rem" height="1.5rem" style={{ color: '505050' }} />
      </div>
      <div className='Settings text-md flex justify-between  cursor-pointer rounded-md hover:bg-[#F2F2F2] py-2 px-2' onClick={helpComponent}>
        <div className='flex gap-4'>
          <Icon icon="ic:outline-help" width="2rem" height="2rem" style={{ color: 'black' }}
            className='border bg-[#E4E6EB] rounded-full p-1' />
          <h2 className='text-black mt-1'>Help & support</h2>
        </div>
        <Icon icon="ant-design:right-outlined" width="1.5rem" height="1.5rem" style={{ color: '505050' }} />
      </div>
      <div className='Settings text-md flex justify-between  cursor-pointer rounded-md hover:bg-[#F2F2F2] py-2 px-2' onClick={displayComponent}>
        <div className='flex gap-4'>
          <Icon icon="material-symbols-light:dark-mode" width="2rem" height="2rem" style={{ color: 'black' }}
            className='border bg-[#E4E6EB] rounded-full p-1' />
          <h2 className='text-black mt-1'>Display</h2>
        </div>
        <Icon icon="ant-design:right-outlined" width="1.5rem" height="1.5rem" style={{ color: '505050' }} />
      </div>
      <div className='Settings text-md flex justify-between  cursor-pointer rounded-md hover:bg-[#F2F2F2] py-2 px-2' onClick={feedbackComponent}>
        <div className='flex gap-4'>
          <Icon icon="material-symbols:feedback-rounded" width="2rem" height="2rem" style={{ color: 'black' }}
            className='border bg-[#E4E6EB] rounded-full p-1' />
          <h2 className='text-black mt-1'>Give feedback</h2>
        </div>
      </div>
      {getUser && getUser.status === "success" && (
        <div className='Settings text-md flex justify-between  cursor-pointer rounded-md hover:bg-[#F2F2F2] py-2 px-2' onClick={onClickHandler}>
          <div className='flex gap-4' >
            <Icon icon="majesticons:logout" width="2rem" height="2rem" style={{ color: 'black' }}
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
