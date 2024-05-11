import { Icon } from '@iconify/react'
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useUser } from '../provider/UserProvider';
import Profile from '../images/profile.png'

const Aside = () => {
  const {getName, onClickMidNav, getUser, userIdHandler, userId, darkTheme} = useUser();
  const [getData, setData] = useState('')
  const [profileInfo, setProfileInfo] = useState(null);

  const pageDetails = async () => {
    try {
      const response = await axios.get('https://academics.newtonschool.co/api/v1/facebook/post', {
        headers: {
          Authorization: `Bearer ${getUser.token}`
        }
      });
      const filteredData = response.data.data.filter(item => item.author.name === getName);
      setData(filteredData);
      console.log(filteredData)
      if (filteredData.length > 0) {
        const { author: { _id, name } } = filteredData[0];
        setProfileInfo({ _id, name });
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    pageDetails();
  }, [getName]);
 
  return (
    <div className={`px-3 py-3 ${darkTheme && 'dark'} dark:text-white`}>
        {profileInfo && (
        <Link to='/profile/post'>
          <div className='flex hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-pointer px-1 py-2' onClick={() => userIdHandler(profileInfo._id)}>
            <img
              src={Profile}
              alt="Profile"
              className='w-10 h-10 rounded-full cursor-pointer bg-[#d3d1d1]'
            />
            <h3 className='text-black pl-4 pt-2 text-base font-semibold dark:text-white'>{profileInfo.name}</h3>
          </div>
        </Link>
      )}

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
        <Icon icon="dashicons:plus-alt" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold dark:text-white'>COVID-19 Information Center</h3>
        </div>

        <Link to='/pages'><div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-pointer' onClick={() => {onClickMidNav('page')}}>
        <Icon icon="noto-v1:triangular-flag" width="1.6rem" height="1.6rem" />
        <h3 className='font-semibold'>Pages</h3>
        </div></Link>

        <Link to='/friends'><div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-pointer' onClick={() => {onClickMidNav('friends')}}>
        <Icon icon="fa-solid:user-friends" width="1.7rem" height="1.7rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Friends</h3>
        </div></Link>


        <Link to='/group'><div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-pointer' onClick={() => {onClickMidNav('group')}}>
        <Icon icon="el:group-alt" width="1.5rem" height="1.5rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Groups</h3>
        </div></Link>
        
        <Link to='/videos'><div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-pointer' onClick={() => {onClickMidNav('videos')}}>
        <Icon icon="mdi:youtube-tv" width="1.5rem" height="1.5rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Videos</h3>
        </div></Link>
        
        <Link to='/marketplace'><div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-pointer' onClick={() => {onClickMidNav('market')}}>
        <Icon icon="healthicons:market-stall" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Marketplace</h3>
        </div></Link>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
        <Icon icon="icon-park:time" width="1.6rem" height="1.6rem" />
        <h3 className='pt-0.5 font-semibold'>Memories</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
        <Icon icon="ph:bookmarks-simple-duotone" width="1.6rem" height="1.7rem"  style={{color: '#B749CE'}} />
        <h3 className='pt-0.5 font-semibold'>Saved</h3>
        </div>
        

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
        <Icon icon="flat-color-icons:feedback" width="1.6rem" height="1.6rem" />
        <h3 className='pt-0.5 font-semibold'>Feeds</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
       <Icon icon="icon-park:schedule" width="1.6rem" height="1.6rem" />
        <h3 className='pt-0.5 font-semibold'>Events</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
        <Icon icon="svg-spinners:bars-scale-fade" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Ads Manager</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
        <Icon icon="fluent-emoji:drop-of-blood" width="1.6rem" height="1.6rem" />
        <h3 className='pt-0.5 font-semibold'>Blood Donation</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
        <Icon icon="fluent-emoji-flat:potted-plant" width="1.6rem" height="1.6rem" />
        <h3 className='pt-0.5 font-semibold'>Climate Science Center</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
        <Icon icon="fluent:payment-16-filled" width="1.6rem" height="1.6rem"  style={{color: '#1f224c'}} />
        <h3 className='pt-0.5 font-semibold'>Facebook Pay</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
        <Icon icon="mingcute:refund-dollar-line" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Fundraisers</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
        <Icon icon="simple-icons:facebookgaming" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Gaming Video</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
        <Icon icon="logos:messenger" width="1.6rem" height="1.6rem" />
        <h3 className='pt-0.5 font-semibold'>Messenger</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
        <Icon icon="simple-icons:messenger" width="1.6rem" height="1.6rem"  style={{color: '#64dd93'}} />
        <h3 className='pt-0.5 font-semibold'>Messenger Kids</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
        <Icon icon="fluent:games-16-filled" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Play Games</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] dark:hover:bg-[#323436] hover:rounded-md cursor-not-allowed'>
        <Icon icon="codicon:layout-activitybar-right" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Recent ad Activity</h3>
        </div>

        <div className='border-b border-slate-300 dark:border-slate-500 ml-2 mt-3'></div>
        <h6 className='text-zinc-500 dark:text-zinc-300 text-xs mt-3 ml-2 mb-2'>Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  · More · Meta © 2024</h6>

    </div>
  )
}

export default Aside
