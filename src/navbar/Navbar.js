import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react'
import Account from './Account';
import { Link } from 'react-router-dom';
import { useUser } from '../provider/UserProvider';

const Navbar = () => {
  
  const {getName, onClickMidNav, isActive} = useUser();
  console.log(getName)

  const [activeIcon, setActiveIcon] = useState(false);
  
  const [homeHovered, setHomeHovered] = useState(false);
  const [videoHovered, setVideoHovered] = useState(false);
  const [marketHovered, setMarketHovered] = useState(false);
  const [groupHovered, setGroupHovered] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);
  const [messengerHovered, setMessengerHovered] = useState(false);
  const [notificationHovered, setNotificationHovered] = useState(false);
  const [accountHovered, setAccountHovered] = useState(false);
  const [pageHovered, setPageHovered] = useState(false);

  const dropDownEnter = (dropdown) => {
    switch (dropdown) {
      case 'home':
        setHomeHovered(true);
        setVideoHovered(false);
        setGroupHovered(false);
        setMenuHovered(false);
        setMessengerHovered(false);
        setNotificationHovered(false);
        setAccountHovered(false);
        setMarketHovered(false);
        setPageHovered(false);
        break;
      case 'video':
        setHomeHovered(false);
        setVideoHovered(true);
        setGroupHovered(false);
        setMenuHovered(false);
        setMessengerHovered(false);
        setNotificationHovered(false);
        setAccountHovered(false);
        setMarketHovered(false);
        setPageHovered(false);
        break;
      case 'group':
        setHomeHovered(false);
        setVideoHovered(false);
        setGroupHovered(true);
        setMenuHovered(false);
        setMessengerHovered(false);
        setNotificationHovered(false);
        setAccountHovered(false);
        setMarketHovered(false);
        setPageHovered(false);
        break;
      case 'menu':
        setHomeHovered(false);
        setVideoHovered(false);
        setGroupHovered(false);
        setMenuHovered(true);
        setMessengerHovered(false);
        setNotificationHovered(false);
        setAccountHovered(false);
        setMarketHovered(false);
        setPageHovered(false);
        break;
      case 'messenger':
        setHomeHovered(false);
        setVideoHovered(false);
        setGroupHovered(false);
        setMenuHovered(false);
        setMessengerHovered(true);
        setNotificationHovered(false);
        setAccountHovered(false);
        setMarketHovered(false);
        setPageHovered(false);
        break;
      case 'notification':
        setHomeHovered(false);
        setVideoHovered(false);
        setGroupHovered(false);
        setMenuHovered(false);
        setMessengerHovered(false);
        setNotificationHovered(true);
        setAccountHovered(false);
        setMarketHovered(false);
        setPageHovered(false);
        break;
      case 'account':
        setHomeHovered(false);
        setVideoHovered(false);
        setGroupHovered(false);
        setMenuHovered(false);
        setMessengerHovered(false);
        setNotificationHovered(false);
        setAccountHovered(true);
        setMarketHovered(false);
        setPageHovered(false);
        break;
      case 'market':
        setHomeHovered(false);
        setVideoHovered(false);
        setGroupHovered(false);
        setMenuHovered(false);
        setMessengerHovered(false);
        setNotificationHovered(false);
        setAccountHovered(false);
        setMarketHovered(true);
        setPageHovered(false);
        break;
      case 'page':
        setHomeHovered(false);
        setVideoHovered(false);
        setGroupHovered(false);
        setMenuHovered(false);
        setMessengerHovered(false);
        setNotificationHovered(false);
        setAccountHovered(false);
        setMarketHovered(false);
        setPageHovered(true);
        break;
      default:
        break;
    }
  };

  const dropDownLeave = () => {
    setHomeHovered(false);
    setVideoHovered(false);
    setGroupHovered(false);
    setMenuHovered(false);
    setMessengerHovered(false);
    setNotificationHovered(false);
    setAccountHovered(false);
    setMarketHovered(false);
    setPageHovered(false);
  };

  const onClickRightNav = (icon) => {
    setActiveIcon(icon);
  }

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen)
  }

  // useEffect(()=>{
  //   onClickMidNav('home');
  // },[]);

  return (
    <div className='bg-white drop-shadow-lg w-full h-14 flex justify-between'>
      <div className='flex justify-between gap-12'>
        {/* left icons */}
        <div className='flex'>
          <Link to='/'><div className='p-2 pl-5 cursor-pointer'>
            <Icon icon="logos:facebook" width="2.5rem" height="2.5rem" />
          </div></Link>
          <div className='absolute mt-5 ml-16 pl-4'>
            <Icon icon="carbon:search" width="1.1rem" height="1.1rem" style={{ color: '#545454' }} />
          </div>
          <div className='Search'>
            <input type='text' className='bg-[#F0F2F5] rounded-full mt-2 py-2 px-10 focus:outline-none' placeholder='Search Facebook' />
          </div>
        </div>

        {/* middle icons */}
        <div className='flex items-center gap-2'>
          <Link to='/'>
            <div
              className={`Home w-28 h-12 rounded p-1 cursor-pointer flex justify-center items-center hover:bg-[#F2F2F2] transition-all border-[#0866FF] relative  ${isActive === 'home' ? 'border-b-[3px]' : ''}`}
              onMouseEnter={() => dropDownEnter('home')}
              onMouseLeave={dropDownLeave}
              onClick={() => onClickMidNav('home')}
            >
              <Icon icon="fluent:home-28-filled" width="1.8rem" height="1.8rem" style={{ color: isActive === 'home' ? '#0866FF' : '#606266' }} />
              {homeHovered && (
                <div className='absolute mt-24 text-white shadow-md py-1.5 px-3 rounded-lg bg-[#050505] text-sm'>Home</div>
              )}
            </div></Link>

          <Link to='/pages'><div
            className={`Page ps w-28 h-12 rounded p-1 cursor-pointer flex justify-center items-center hover:bg-[#F2F2F2] transition-all relative border-[#0866FF] ${isActive === 'page' ? 'border-b-[3px]' : ''}`}
            onMouseEnter={() => dropDownEnter('page')}
            onMouseLeave={dropDownLeave}
            onClick={() => onClickMidNav('page')}
            // disabled={!isActive}
          >
            <Icon icon="material-symbols-light:emoji-flags" width="2rem" height="2rem" style={{ color: isActive === 'page' ? '#0866FF' : '#606266' }} />
            {pageHovered && (
              <div className='absolute mt-24 text-white shadow-md py-1.5 px-3 rounded-lg bg-[#050505] text-sm'>Pages</div>
            )}
          </div></Link>

          <Link to='/videos'><div
            className={`Home w-28 h-12 rounded p-1 cursor-pointer flex justify-center items-center hover:bg-[#F2F2F2] transition-all border-[#0866FF] relative  ${isActive === 'video' ? 'border-b-[3px]' : ''}`}
            onMouseEnter={() => dropDownEnter('video')}
            onMouseLeave={dropDownLeave}
            onClick={() => onClickMidNav('video')}
          >
            <Icon icon="ph:video-fill" width="1.8rem" height="1.8rem" style={{ color: isActive === 'video' ? '#0866FF' : '#606266' }} />
            {videoHovered && (
              <div className='absolute mt-24 text-white shadow-md py-1.5 px-3 rounded-lg bg-[#050505] text-sm'>Video</div>
            )}
          </div></Link>
          <Link to='/marketplace'><div
            className={`Home w-28 h-12 rounded p-1 cursor-pointer flex justify-center items-center hover:bg-[#F2F2F2] transition-all border-[#0866FF] relative  ${isActive === 'market' ? 'border-b-[3px]' : ''}`}
            onMouseEnter={() => dropDownEnter('market')}
            onMouseLeave={dropDownLeave}
            onClick={() => onClickMidNav('market')}
          >
            <Icon icon="healthicons:market-stall" width="1.8rem" height="1.8rem" style={{ color: isActive === 'market' ? '#0866FF' : '#606266' }} />
            {marketHovered && (
              <div className='absolute mt-24 text-white shadow-md py-1.5 px-3 rounded-lg bg-[#050505] text-sm'>Marketplace</div>
            )}
          </div></Link>
          <Link to='/group'><div
            className={`Groups w-28 h-12 rounded p-1 cursor-pointer flex justify-center items-center hover:bg-[#F2F2F2] transition-all relative border-[#0866FF] ${isActive === 'group' ? 'border-b-[3px]' : ''}`}
            onMouseEnter={() => dropDownEnter('group')}
            onMouseLeave={dropDownLeave}
            onClick={() => onClickMidNav('group')}
          >
            <Icon icon="ri:group-2-line" width="1.8rem" height="1.8rem" style={{ color: isActive === 'group' ? '#0866FF' : '#606266' }} />
            {groupHovered && (
              <div className='absolute mt-24 text-white shadow-md py-1.5 px-3 rounded-lg bg-[#050505] text-sm'>Groups</div>
            )}
          </div></Link>
        </div>
      </div>

      {isProfileOpen && <Account />}
      {/* right icons */}
      <div className='flex items-center gap-3 mr-6'>

        <div className='relative' onMouseEnter={() => dropDownEnter('menu')}
          onMouseLeave={dropDownLeave}
          onClick={() => onClickRightNav('menu')}>
          <Icon
            icon="gg:menu-grid-o"
            width="2rem"
            height="2rem"
            style={{ color: activeIcon === 'menu' ? '#0866FF' : '#050505' }}
            className={`rounded-full w-10 h-10 p-1.5 bg-[#E4E6EB] cursor-pointer hover:bg-[#dad8d8]`}
          />
          {menuHovered && (
            <div className='absolute mt-3 text-white shadow-md py-1.5 px-2 rounded-lg bg-[#050505] text-sm'>Menu</div>
          )}
        </div>

        <div className='relative' onMouseEnter={() => dropDownEnter('messenger')}
          onMouseLeave={dropDownLeave}
          onClick={() => onClickRightNav('messenger')}>
          <Icon
            icon="ri:messenger-fill"
            width="2rem"
            height="2rem"
            style={{ color: activeIcon === 'messenger' ? '#0866FF' : '#050505' }}
            className={`w-10 h-10 rounded-full p-2 bg-[#E4E6EB] cursor-pointer hover:bg-[#dad8d8]`}
          />
          {messengerHovered && (
            <div className='absolute mt-3 text-white shadow-md py-1.5 px-2 rounded-lg bg-[#050505] text-sm'>Messenger</div>
          )}
        </div>

        <div className='relative' onMouseEnter={() => dropDownEnter('notification')}
          onMouseLeave={dropDownLeave}
          onClick={() => onClickRightNav('notification')}>
          <Icon
            icon="carbon:notification-filled"
            width="1.5rem"
            height="1.5rem"
            style={{ color: activeIcon === 'notification' ? '#0866FF' : '#050505' }}
            className='w-10 h-10 rounded-full p-2 bg-[#E4E6EB] cursor-pointer hover:bg-[#dad8d8]'
          />
          {notificationHovered && (
            <div className='absolute mt-3 text-white shadow-md py-1.5 px-2 rounded-lg bg-[#050505] text-sm'>Notifications</div>
          )}
        </div>

        <div className='relative' onMouseEnter={() => dropDownEnter('account')}
          onMouseLeave={dropDownLeave}
          onClick={() => onClickRightNav('account')}>   
          {getName ? <div 
            className='w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold bg-[#E4E6EB] cursor-pointer hover:bg-[#dad8d8]'
            onClick={toggleProfile}> {getName.charAt(0)}          
            </div>  : 
            <Icon
            icon="bxs:user"
            width="1.2rem"
            height="1.2rem"
            style={{ color: activeIcon === 'account' ? 'white' : 'white' }}
            className={`w-10 h-10 rounded-full p-1 bg-[#E4E6EB] cursor-pointer hover:bg-[#dad8d8] `}
            onClick={toggleProfile}
          />
           } 
          {accountHovered && (
            <div className='absolute mt-3 text-white shadow-md py-1.5 px-1 rounded-lg bg-[#050505] text-sm'>Account</div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
