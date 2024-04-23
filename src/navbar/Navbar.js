import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react'
import Account from './Account';
import { Link } from 'react-router-dom';
import { useUser } from '../provider/UserProvider';
import Profile from '../images/profile.png';
import Facebook from '../images/facebook_logos.png';
import SettingPrivacy from './SettingPrivacy';
import HelpSupport from './HelpSuport';
import Feedback from './Feedback';
import Displayy from './Displayy';
import Search from './Search';
import Notification from './Notification';
import Menu from './Menu';

const Navbar = () => {

  const { onClickMidNav, isActive, getUser, getsetting, gethelp, getdisplay, getfeedback, searchDroplistHandler, searchDroplist, searchDroplistClose, getName } = useUser();
  const popupRef = useRef(null);
  const searchRef = useRef(null);

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
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  }
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);

  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchDroplist && searchRef.current && !searchRef.current.contains(event.target)) {
        // Clicked outside the search popup, close it
        searchDroplistClose();
      }
      if (isProfileOpen && popupRef.current && !popupRef.current.contains(event.target)) {
        // Clicked outside the account popup, close it
        setIsProfileOpen(false);
      }
      // if (isNotificationOpen && popupRef.current && !popupRef.current.contains(event.target)) {
      //   // Clicked outside the notification popup, close it
      //   setIsNotificationOpen(false);
      // }
    };
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [searchDroplist, searchDroplistClose, isProfileOpen]);


  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsScreenSmall(window.innerWidth < 1100);
    };

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    onClickMidNav('home');
  }, []);

  return (
    <>
      {isSidebarOpen && (
        <>
          <div className="fixed inset-0 bg-[#F0F2F5] bg-opacity-50 z-50 flex justify-end">
            <div className="bg-[#F0F2F5] w-full h-full pl-3 text-white overflow-y-auto scrollbar">

              <div className=' fixed flex 
            justify-between w-full bg-[#F0F2F5] pt-3 py-2'>
                <div className='flex gap-4 cursor-pointer '><Icon icon="ic:sharp-arrow-back" width="1.6rem" height="1.6rem" style={{ color: 'black' }} onClick={toggleSidebar} />
                  <h2 className='text-black text-lg font-bold'>Menu</h2>
                </div>
                <Icon icon="ion:search" width="2rem" height="2rem" style={{ color: 'black' }} className='mr-7 rounded-full bg-[#E4E6EB] p-1 cursor-pointer' />
              </div>
              
              {/* profile */}
              <div className='flex cursor-pointer px-2 py-3 bg-white ml-2 mt-14 mr-2 rounded-lg'>
                {getUser && <img
                  src={Profile}
                  alt="Profile"
                  className='w-10 h-10 rounded-full cursor-pointer bg-[#dad7d7] mt-1'
                />}
                <div>
                  {getName && <h2 className='text-black pl-4 font-semibold'>{getName}</h2>}
                  <h3 className='text-gray-400 text-[14px] pl-4'>View your profile</h3>
                </div>
              </div>

              {/* menu list */}
              <div className='mt-4 ml-2 mr-2 mb-3'>

                {/* First line: Pages and Friends */}
                <div className='flex gap-3 justify-between'>
                  <Link to='/pages' className='flex-grow'>
                    <div className='pl-3 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer bg-white rounded-lg' onClick={toggleSidebar}>
                      <Icon icon="noto-v1:triangular-flag" width="1.6rem" height="1.6rem" onClick={() => onClickMidNav('page')} />
                      <h3 className='font-semibold text-black '>Pages</h3>
                    </div>
                  </Link>

                  <Link to='/friends' className='flex-grow'>
                    <div className='pl-3 py-2 hover:bg-[#e6e3e3] cursor-pointer bg-white rounded-lg' onClick={toggleSidebar}>
                      <Icon icon="fa-solid:user-friends" width="1.7rem" height="1.7rem" style={{ color: '#1B82E9' }} />
                      <h3 className='pt-0.5 font-semibold text-black'>Friends</h3>
                    </div>
                  </Link>
                </div>

                {/* Second line: Videos and Groups */}
                <div className='flex gap-3 mt-4 justify-between'>
                  <Link to='/videos' className='flex-grow'>
                    <div className='pl-3 py-2 hover:bg-[#e6e3e3] cursor-pointer bg-white rounded-lg' onClick={toggleSidebar}>
                      <Icon icon="mdi:youtube-tv" width="1.5rem" height="1.5rem" style={{ color: '#1B82E9' }} />
                      <h3 className='pt-0.5 font-semibold text-black'>Videos</h3>
                    </div>
                  </Link>

                  <Link to='/group' className='flex-grow'>
                    <div className='pl-3 py-2 hover:bg-[#e6e3e3] cursor-pointer bg-white rounded-lg' onClick={toggleSidebar}>
                      <Icon icon="el:group-alt" width="1.5rem" height="1.5rem" style={{ color: '#1B82E9' }} />
                      <h3 className='pt-0.5 font-semibold text-black'>Groups</h3>
                    </div>
                  </Link>
                </div>

                {/* Third line: Marketplace and Memories */}
                <div className='flex gap-3 mt-4 justify-between'>
                  <Link to='/marketplace' className='flex-grow'>
                    <div className='pl-3 py-2 hover:bg-[#e6e3e3] cursor-pointer bg-white rounded-lg' onClick={toggleSidebar}>
                    <Icon icon="healthicons:market-stall" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
                      <h3 className='pt-0.5 font-semibold text-black'>Marketplace</h3>
                    </div>
                  </Link>

                    <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white rounded-lg '>
                    <Icon icon="icon-park:time" width="1.6rem" height="1.6rem" />
                      <h3 className='pt-0.5 font-semibold text-black'>Memories</h3>
                    </div>
                </div>

                {/* Fourth line: Saved and Feeds */}
                <div className='flex gap-3 mt-4 justify-between'>
                    <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white rounded-lg '>
                    <Icon icon="ph:bookmarks-simple-duotone" width="1.6rem" height="1.7rem"  style={{color: '#B749CE'}} />
                      <h3 className='pt-0.5 font-semibold text-black'>Saved</h3>
                    </div>

                    <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white rounded-lg '>
                    <Icon icon="flat-color-icons:feedback" width="1.6rem" height="1.6rem" />
                      <h3 className='pt-0.5 font-semibold text-black'>Feeds</h3>
                    </div>                 
                </div>

                {/* Fifth line: Events and Ads Manager */}
                <div className='flex gap-3 mt-4 justify-between'>
                    <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white rounded-lg '>
                    <Icon icon="icon-park:schedule" width="1.6rem" height="1.6rem" />
                      <h3 className='pt-0.5 font-semibold text-black'>Events</h3>
                    </div>

                    <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white rounded-lg '>
                    <Icon icon="svg-spinners:bars-scale-fade" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
                      <h3 className='pt-0.5 font-semibold text-black'>Ads Manager</h3>
                    </div>
                </div>

                {/* Sixth line: Messenger and Gaming Video */}
                <div className='flex gap-3 mt-4 justify-between'>
                    <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white rounded-lg '>
                    <Icon icon="logos:messenger" width="1.6rem" height="1.6rem" />
                      <h3 className='pt-0.5 font-semibold text-black'>Messenger</h3>
                    </div>

                    <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white rounded-lg '>
                    <Icon icon="simple-icons:facebookgaming" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
                      <h3 className='pt-0.5 font-semibold text-black'>Gaming Video</h3>
                    </div>
                </div>

                {/* Seventh line: Facebook Pay and Fundraisers */}
                <div className='flex gap-3 mt-4 justify-between'>
                    <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white rounded-lg '>
                    <Icon icon="fluent:payment-16-filled" width="1.6rem" height="1.6rem"  style={{color: '#1f224c'}} />
                      <h3 className='pt-0.5 font-semibold text-black'>Facebook Pay</h3>
                    </div>

                    <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white rounded-lg '>
                    <Icon icon="mingcute:refund-dollar-line" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
                      <h3 className='pt-0.5 font-semibold text-black'>Fundraisers</h3>
                    </div>
                </div>

                {/* Eight line: Messenger Kids and PLay Games */}
                <div className='flex gap-3 mt-4 justify-between'>
                    <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white rounded-lg '>
                    <Icon icon="simple-icons:messenger" width="1.6rem" height="1.6rem"  style={{color: '#64dd93'}} />
                      <h3 className='pt-0.5 font-semibold text-black'>Messenger Kids</h3>
                    </div>

                    <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white rounded-lg '>
                    <Icon icon="codicon:layout-activitybar-right" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
                      <h3 className='pt-0.5 font-semibold text-black'>PLay Games</h3>
                    </div>
                </div>


              </div>

            </div>
          </div>
        </>
      )}

      {isScreenSmall ? (
        <div>
          <div className='flex justify-between w-screen'>
            <img src={Facebook} className='h-8 w-32 m-3 ml-5' />
            <div className='flex gap-3'>
              <Icon icon="ri:search-line" width="2rem" height="2rem" style={{ color: 'black' }} className='mt-3 rounded-full bg-[#E4E6EB] p-1 cursor-pointer' />
              <Icon icon="codicon:three-bars" width="2rem" height="2rem" style={{ color: 'black' }} className='mt-3 mr-4 rounded-full bg-[#E4E6EB] p-1 cursor-pointer' onClick={toggleSidebar} />
            </div>
          </div>
          <div className='border-b border-gray-200'></div>

          {/* home, video, page  */}
          <div className='flex items-center justify-evenly gap-1'>
            <Link to='/'>
              <div
                className={`Home ml-1 w-20 h-12 rounded p-1 cursor-pointer flex justify-center items-center transition-all border-[#0866FF] relative`}
                onMouseEnter={() => dropDownEnter('home')}
                onMouseLeave={dropDownLeave}
                onClick={() => onClickMidNav('home')}
              >
                <Icon icon="fluent:home-28-filled" width="1.5rem" height="1.5rem" style={{ color: isActive === 'home' ? '#0866FF' : '#606266' }} />
              </div></Link>

            <Link to='/pages'><div
              className={`Page ml-1 w-16 h-12 rounded p-1 cursor-pointer flex justify-center items-center transition-all border-[#0866FF] relative`}
              onMouseEnter={() => dropDownEnter('page')}
              onMouseLeave={dropDownLeave}
              onClick={() => onClickMidNav('page')}
            // disabled={!isActive}
            >
              <Icon icon="material-symbols-light:emoji-flags" width="1.7rem" height="1.7rem" style={{ color: isActive === 'page' ? '#0866FF' : '#606266' }} />
            </div></Link>

            <Link to='/videos'><div
              className={`Home ml-1 w-16 h-12 rounded p-1 cursor-pointer flex justify-center items-center transition-all border-[#0866FF] relative`}
              onMouseEnter={() => dropDownEnter('video')}
              onMouseLeave={dropDownLeave}
              onClick={() => onClickMidNav('video')}
            >
              <Icon icon="ph:video-fill" width="1.5rem" height="1.5rem" style={{ color: isActive === 'video' ? '#0866FF' : '#606266' }} />
            </div></Link>
            <Link to='/marketplace'><div
              className={`Home ml-1 w-16 h-12 rounded p-1 cursor-pointer flex justify-center items-center transition-all border-[#0866FF] relative`}
              onMouseEnter={() => dropDownEnter('market')}
              onMouseLeave={dropDownLeave}
              onClick={() => onClickMidNav('market')}
            >
              <Icon icon="healthicons:market-stall" width="1.5rem" height="1.5rem" style={{ color: isActive === 'market' ? '#0866FF' : '#606266' }} />
            </div></Link>
            <Link to='/group'><div
              className={`Groups ml-1 w-16 h-12 rounded p-1 cursor-pointer flex justify-center items-center transition-all border-[#0866FF] relative`}
              onMouseEnter={() => dropDownEnter('group')}
              onMouseLeave={dropDownLeave}
              onClick={() => onClickMidNav('group')}
            >
              <Icon icon="ri:group-2-line" width="1.5rem" height="1.5rem" style={{ color: isActive === 'group' ? '#0866FF' : '#606266' }} />
            </div></Link>
          </div>
          <div className='border-b border-gray-300'></div>
        </div>

      ) : (
        <div className='bg-white drop-shadow-lg w-screen h-14 flex justify-between sticky top-0 z-10'>
          <div className='flex justify-between gap-12'>
            {/* left icons */}
            {searchDroplist && <Search ref={searchRef} />}
            <div className='flex'>
              <Link to='/'><div className='p-2 pl-5 cursor-pointer'>
                <Icon icon="logos:facebook" width="2.5rem" height="2.5rem" />
              </div></Link>
              <div className='absolute mt-5 ml-16 pl-4'>
                <Icon icon="carbon:search" width="1.1rem" height="1.1rem" style={{ color: '#545454' }} />
              </div>
              <div className='Search' onClick={searchDroplistHandler}>
                <input type='text' className='bg-[#F0F2F5] rounded-full mt-2 py-2 px-10 focus:outline-none' placeholder='Search Facebook' readOnly />
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
          {isMenuOpen && <Menu />}
          {isNotificationOpen && <Notification />}
          {getsetting && <SettingPrivacy />}
          {gethelp && <HelpSupport />}
          {getfeedback && <Feedback />}
          {getdisplay && <Displayy />}

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
                onClick={toggleMenu}
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
                onClick={toggleNotification}
              />
              {notificationHovered && (
                <div className='absolute mt-3 text-white shadow-md py-1.5 px-2 rounded-lg bg-[#050505] text-sm'>Notifications</div>
              )}
            </div>
            {/*  */}
            <div ref={popupRef} className='relative' onMouseEnter={() => dropDownEnter('account')}
              onMouseLeave={dropDownLeave}
              onClick={() => onClickRightNav('account')}>
              {getUser ? (
                <img
                  src={Profile}
                  alt="Profile"
                  className='w-10 h-10 rounded-full cursor-pointer bg-[#eceaea] hover:bg-[#dad8d8]'
                  onClick={toggleProfile}
                />
              ) :
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
      )}

    </>
  );
};

export default Navbar;
