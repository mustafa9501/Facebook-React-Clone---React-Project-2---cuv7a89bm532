import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react'
import Account from './Account';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../provider/UserProvider';
import Profile from '../images/profile.png';
import Avatar from '../images/dummy_avatar.jpg';
import Facebook from '../images/new-Facebook-Logo.png';
import SettingPrivacy from './SettingPrivacy';
import HelpSupport from './HelpSuport';
import Feedback from './Feedback';
import Displayy from './Displayy';
import Search from './Search';
import Notification from './Notification';
import Menu from './Menu';
import Messenger from './Messenger';

const Navbar = () => {

  const { onClickMidNav, isActive, getUser, getsetting, gethelp, getdisplay, getfeedback, searchDroplistHandler, searchDroplist, searchDroplistClose, getName, signOutUser, getEmail, viewPageHandler, darkTheme, handleToggle } = useUser();
  const popupRef = useRef(null);
  const searchRef = useRef(null);
  const menuRef = useRef(null);
  const messengerRef = useRef(null);
  const notificationRef = useRef(null);

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

  const navigate = useNavigate();

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
  const [isMessenger, setIsMessenger] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  }
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  }
  const toggleMessenger = () => {
    setIsMessenger(!isMessenger);
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  console.log(isMenuOpen)
  // console.log(isProfileOpen)

  // if (searchDroplist && searchRef.current && !searchRef.current.contains(event.target)) {
  //   // Clicked outside the search popup, close it
  //   searchDroplistClose();
  // }

  // useEffect(() => {
  //   const handleClickOutside = (event) => {

  //     if (searchDroplist && searchRef.current && !searchRef.current.contains(event.target)) {
  //       // Clicked outside the search popup, close it
  //       searchDroplistClose();
  //     }

  //     if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
  //       console.log('Closing menu');
  //       setIsMenuOpen(false);
  //     }
  //     if (isMessenger && messengerRef.current && !messengerRef.current.contains(event.target)) {
  //       console.log('Closing menu');
  //       setIsMessenger(false);
  //     }
  //     if (isNotificationOpen && notificationRef.current && !notificationRef.current.contains(event.target)) {
  //       console.log('Closing menu');
  //       setIsNotificationOpen(false);
  //     }
  //     if (isProfileOpen && popupRef.current && !popupRef.current.contains(event.target)) {
  //       // Clicked outside the account popup, close it
  //       setIsProfileOpen(false);
  //     }
  //   };
  //   window.addEventListener('click', handleClickOutside);

  //   return () => {
  //     window.removeEventListener('click', handleClickOutside);
  //   };
  // }, [isProfileOpen, isMenuOpen, isMessenger, isNotificationOpen, searchDroplist]);

  // to open profile
  useEffect(() => {
    const handleClickOutside = (event) => {

      if (isProfileOpen && popupRef.current && !popupRef.current.contains(event.target)) {
        // Clicked outside the account popup, close it
        setIsProfileOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isProfileOpen]);

  // to open menu
  useEffect(() => {
    const handleClickOutside = (event) => {

      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        console.log('Closing menu');
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // to open messenger
  useEffect(() => {
    const handleClickOutside = (event) => {

      if (isMessenger && messengerRef.current && !messengerRef.current.contains(event.target)) {
        console.log('Closing menu');
        setIsMessenger(false);
      }
    };
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isMessenger]);

  // to open notification
  useEffect(() => {
    const handleClickOutside = (event) => {

      if (isNotificationOpen && notificationRef.current && !notificationRef.current.contains(event.target)) {
        console.log('Closing menu');
        setIsNotificationOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isNotificationOpen]);


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

  const onClickHandler = () => {
    localStorage.removeItem("token");
    signOutUser();
    navigate('/')
  };

  const [getData, setData] = useState('');

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

  const [showChannel, setShowChannel] = useState(false);

  const channelPopupHandler = () => {
    setShowChannel(!showChannel);
  }

  return (
    <>
      {isSidebarOpen && (
        <>
          <div className={`fixed inset-0 bg-[#F0F2F5] dark:bg-[#18191A] bg-opacity-50 z-50 flex justify-end ${darkTheme && 'dark'}`}>
            <div className="bg-[#F0F2F5] dark:bg-[#18191A] w-full h-full pl-3 text-white overflow-y-auto scrollbar">

              <div className=' fixed flex 
            justify-between w-full bg-[#F0F2F5] dark:bg-[#18191A] pt-3 py-2'>
                <div className='flex gap-4 cursor-pointer mt-0.5'><Icon icon="ic:sharp-arrow-back" width="1.6rem" height="1.6rem" style={{ color: darkTheme ? 'white' : 'black' }} onClick={toggleSidebar} />
                  <h2 className='text-black dark:text-white text-lg font-bold'>Menu</h2>
                </div>
                {/* <Icon icon="ion:search" width="2rem" height="2rem" style={{ color: 'black' }} className='mr-7 rounded-full bg-[#E4E6EB] p-1 cursor-pointer' /> */}
              </div>

              {/* profile */}
              <div className='flex justify-between cursor-pointer px-2 py-3 bg-white dark:bg-[#323436] ml-2 mt-14 mr-2 rounded-lg'>
                <div className='flex'>
                  {getUser && <img
                    src={Profile}
                    alt="Profile"
                    className='w-10 h-10 rounded-full cursor-pointer bg-[#dad7d7] mt-1'
                  />}
                  <div>
                    {getName && <h2 className='text-black dark:text-white pl-4 font-semibold'>{getName}</h2>}
                    <h3 className='text-gray-400 text-[14px] pl-4'>View your profile</h3>
                  </div>
                </div>
                <Icon icon={showChannel ? "iconamoon:arrow-up-2-bold" : "iconamoon:arrow-down-2-bold"} width="2rem" height="2rem" style={{ color: "black" }} className='bg-[#E4E6EB] rounded-full mr-1.5 mt-2 cursor-pointer' onClick={channelPopupHandler} />
              </div>

              {/* our channel */}
              {showChannel && getData && getData.map((obj) => (
                <Link to='/pages/profilepage/postprofile'>
                  <div key={obj._id} className='cursor-pointer bg-white dark:bg-[#323436] rounded-lg my-2 py-1.5 mx-2 text-black dark:text-white' onClick={() => viewPageHandler(obj._id)}>
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

              {/* menu list */}
              <div className='mt-4 ml-2 mr-2 mb-3'>

                {/* First line: Pages and Friends */}
                <div className='flex gap-3 justify-between'>
                  <Link to='/pages' className='flex-grow'>
                    <div className='pl-3 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer bg-white dark:bg-[#323436]  rounded-lg' onClick={toggleSidebar}>
                      <Icon icon="noto-v1:triangular-flag" width="1.6rem" height="1.6rem" onClick={() => onClickMidNav('page')} />
                      <h3 className='font-semibold text-black dark:text-white'>Pages</h3>
                    </div>
                  </Link>

                  <Link to='/friends' className='flex-grow'>
                    <div className='pl-3 py-2 hover:bg-[#e6e3e3] cursor-pointer bg-white dark:bg-[#323436] rounded-lg' onClick={toggleSidebar}>
                      <Icon icon="fa-solid:user-friends" width="1.7rem" height="1.7rem" style={{ color: '#1B82E9' }} />
                      <h3 className='pt-0.5 font-semibold text-black dark:text-white'>Friends</h3>
                    </div>
                  </Link>
                </div>

                {/* Second line: Videos and Groups */}
                <div className='flex gap-3 mt-2.5 justify-between'>
                  <Link to='/videos' className='flex-grow'>
                    <div className='pl-3 py-2 hover:bg-[#e6e3e3] cursor-pointer bg-white dark:bg-[#323436] rounded-lg' onClick={toggleSidebar}>
                      <Icon icon="mdi:youtube-tv" width="1.5rem" height="1.5rem" style={{ color: '#1B82E9' }} />
                      <h3 className='pt-0.5 font-semibold text-black dark:text-white'>Videos</h3>
                    </div>
                  </Link>

                  <Link to='/group' className='flex-grow'>
                    <div className='pl-3 py-2 hover:bg-[#e6e3e3] cursor-pointer bg-white dark:bg-[#323436] rounded-lg' onClick={toggleSidebar}>
                      <Icon icon="el:group-alt" width="1.5rem" height="1.5rem" style={{ color: '#1B82E9' }} />
                      <h3 className='pt-0.5 font-semibold text-black dark:text-white'>Groups</h3>
                    </div>
                  </Link>
                </div>

                {/* Third line: Marketplace and Memories */}
                <div className='flex gap-3 mt-2.5 justify-between'>
                  <Link to='/marketplace' className='flex-grow'>
                    <div className='pl-3 py-2 hover:bg-[#e6e3e3] cursor-pointer bg-white dark:bg-[#323436] rounded-lg' onClick={toggleSidebar}>
                      <Icon icon="healthicons:market-stall" width="1.6rem" height="1.6rem" style={{ color: '#1B82E9' }} />
                      <h3 className='pt-0.5 font-semibold text-black dark:text-white'>Marketplace</h3>
                    </div>
                  </Link>

                  <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white dark:bg-[#323436] rounded-lg '>
                    <Icon icon="icon-park:time" width="1.6rem" height="1.6rem" />
                    <h3 className='pt-0.5 font-semibold text-black dark:text-white'>Memories</h3>
                  </div>
                </div>

                {/* Fourth line: Saved and Feeds */}
                <div className='flex gap-3 mt-2.5 justify-between'>
                  <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white dark:bg-[#323436] rounded-lg '>
                    <Icon icon="ph:bookmarks-simple-duotone" width="1.6rem" height="1.7rem" style={{ color: '#B749CE' }} />
                    <h3 className='pt-0.5 font-semibold text-black dark:text-white'>Saved</h3>
                  </div>

                  <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white dark:bg-[#323436] rounded-lg '>
                    <Icon icon="flat-color-icons:feedback" width="1.6rem" height="1.6rem" />
                    <h3 className='pt-0.5 font-semibold text-black dark:text-white'>Feeds</h3>
                  </div>
                </div>

                {/* Fifth line: Events and Ads Manager */}
                <div className='flex gap-3 mt-2.5 justify-between'>
                  <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white dark:bg-[#323436] rounded-lg '>
                    <Icon icon="icon-park:schedule" width="1.6rem" height="1.6rem" />
                    <h3 className='pt-0.5 font-semibold text-black dark:text-white'>Events</h3>
                  </div>

                  <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white dark:bg-[#323436] rounded-lg '>
                    <Icon icon="svg-spinners:bars-scale-fade" width="1.6rem" height="1.6rem" style={{ color: '#1B82E9' }} />
                    <h3 className='pt-0.5 font-semibold text-black dark:text-white'>Ads Manager</h3>
                  </div>
                </div>

                {/* Sixth line: Messenger and Gaming Video */}
                <div className='flex gap-3 mt-2.5 justify-between'>
                  <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white dark:bg-[#323436] rounded-lg '>
                    <Icon icon="logos:messenger" width="1.6rem" height="1.6rem" />
                    <h3 className='pt-0.5 font-semibold text-black dark:text-white'>Messenger</h3>
                  </div>

                  <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white dark:bg-[#323436] rounded-lg '>
                    <Icon icon="simple-icons:facebookgaming" width="1.6rem" height="1.6rem" style={{ color: '#1B82E9' }} />
                    <h3 className='pt-0.5 font-semibold text-black dark:text-white'>Gaming Video</h3>
                  </div>
                </div>

                {/* Seventh line: Facebook Pay and Fundraisers */}
                <div className='flex gap-3 mt-2.5 justify-between'>
                  <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white dark:bg-[#323436] rounded-lg '>
                    <Icon icon="fluent:payment-16-filled" width="1.6rem" height="1.6rem" style={{ color: '#1f224c' }} />
                    <h3 className='pt-0.5 font-semibold text-black dark:text-white'>Facebook Pay</h3>
                  </div>

                  <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white dark:bg-[#323436] rounded-lg '>
                    <Icon icon="mingcute:refund-dollar-line" width="1.6rem" height="1.6rem" style={{ color: '#1B82E9' }} />
                    <h3 className='pt-0.5 font-semibold text-black dark:text-white'>Fundraisers</h3>
                  </div>
                </div>

                {/* Eight line: Messenger Kids and PLay Games */}
                <div className='flex gap-3 mt-2.5 justify-between'>
                  <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white dark:bg-[#323436] rounded-lg '>
                    <Icon icon="simple-icons:messenger" width="1.6rem" height="1.6rem" style={{ color: '#64dd93' }} />
                    <h3 className='pt-0.5 font-semibold text-black dark:text-white'>Messenger Kids</h3>
                  </div>

                  <div className='flex-grow pl-3 py-2 hover:bg-[#e6e3e3] cursor-not-allowed bg-white dark:bg-[#323436] rounded-lg '>
                    <Icon icon="codicon:layout-activitybar-right" width="1.6rem" height="1.6rem" style={{ color: '#1B82E9' }} />
                    <h3 className='pt-0.5 font-semibold text-black dark:text-white'>PLay Games</h3>
                  </div>
                </div>

                <div className='border-b border-gray-300 pt-4 w-full'></div>

                <div className='flex gap-4 pt-4'>
                  <Icon icon="material-symbols:settings" width="2rem" height="2rem" style={{ color: 'black' }}
                    className='border bg-[#E4E6EB] rounded-full p-1' />
                  <h2 className='text-black dark:text-white mt-0.5 font-semibold text-lg'>Setting & privacy</h2>
                </div>

                <div className='flex gap-4 bg-white dark:bg-[#323436] mt-3 py-2 px-2 rounded-lg'>
                  <Icon icon="ic:outline-help" width="2rem" height="2rem" style={{ color: 'black' }}
                    className='border bg-[#E4E6EB] rounded-full p-1' />
                  <h2 className='text-black dark:text-white mt-1'>Help & support</h2>
                </div>

                <div className='flex justify-between mt-2.5 rounded-lg bg-white dark:bg-[#323436]'>
                  <div className='flex gap-4 py-2 px-2'>
                    <Icon icon="material-symbols-light:dark-mode" width="2rem" height="2rem" style={{ color: 'black' }}
                      className='border bg-[#E4E6EB] rounded-full p-1' />
                    <h2 className='text-black dark:text-white mt-1'>Display</h2>
                  </div>
                  <div className='pt-3 pr-3'>
                    <label htmlFor="toggle" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          id="toggle"
                          type="checkbox"
                          className="sr-only"
                          checked={darkTheme}
                          onChange={handleToggle}
                        />
                        <div
                          className={`toggle__line w-14 h-6 bg-gray-400 rounded-full shadow-inner ${darkTheme ? 'bg-black' : 'bg-gray-400'
                            }`}
                        ></div>
                        <div
                          className={`toggle__dot absolute w-7 h-5 mt-0.5 bg-black rounded-full shadow inset-y-0 left-0 ${darkTheme ? 'transform translate-x-full bg-black' : 'bg-white'
                            }`}
                        ></div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className='flex gap-4 bg-white dark:bg-[#323436] mt-2.5 py-2 px-2 rounded-lg'>
                  <Icon icon="material-symbols:feedback-rounded" width="2rem" height="2rem" style={{ color: 'black' }}
                    className='border bg-[#E4E6EB] rounded-full p-1' />
                  <h2 className='text-black dark:text-white  mt-1'>Give feedback</h2>
                </div>

                <div className='border-b border-gray-300 pt-4 w-full'></div>

                {getUser && getUser.status === "success" && (
                  <div className='Settings text-md flex justify-between cursor-pointer hover:bg-[#F2F2F2] py-2 px-2  mt-2.5  rounded-lg' onClick={onClickHandler}>
                    <div className='flex gap-4' >
                      <Icon icon="majesticons:logout" width="2rem" height="2rem" style={{ color: 'black' }}
                        className='border bg-[#E4E6EB] rounded-full p-1' />
                      <h2 className='text-black mt-0.5 font-semibold text-lg dark:text-white' >Logout</h2>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        </>
      )}

      {isScreenSmall ? (
        <>
          <div className={`${darkTheme && 'dark'}`}>
            <div className={`flex justify-between w-full px-1 dark:bg-[#18191A]`}>
              <Link to="/"><img src={Facebook} className='h-14 w-32 ml-5' /></Link>
              <div className='flex gap-3'>
                <Link to="/search"><Icon icon="ri:search-line" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : 'black' }} className='mt-3 rounded-full dark:bg-[#323436] bg-[#E4E6EB] p-1 cursor-pointer' /></Link>
                <Icon icon="codicon:three-bars" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : 'black' }} className='mt-3 mr-3 rounded-full bg-[#E4E6EB] dark:bg-[#323436] p-1 cursor-pointer' onClick={toggleSidebar} />
              </div>
            </div>
            <div className='border-b border-gray-200 dark:border-gray-950'></div>

            {/* home, video, page  */}
            <div className='flex items-center justify-evenly gap-1 dark:bg-[#18191A]'>
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
                className={`Groups ml-1 w-16 h-12 rounded p-1 pr-6 cursor-pointer flex justify-center items-center transition-all border-[#0866FF] relative`}
                onMouseEnter={() => dropDownEnter('group')}
                onMouseLeave={dropDownLeave}
                onClick={() => onClickMidNav('group')}
              >
                <Icon icon="ri:group-2-line" width="1.5rem" height="1.5rem" style={{ color: isActive === 'group' ? '#0866FF' : '#606266' }} />
              </div></Link>
            </div>
            <div className='border-b border-gray-300 dark:border-gray-950'></div>
          </div>
        </>

      ) : (

        // for larger screen
        <div className={`bg-white dark:bg-[#242526] drop-shadow-lg w-screen h-14 flex justify-between sticky top-0 z-10 ${darkTheme && 'dark'}`}>
          <div className='flex justify-between gap-12'>
            {/* left icons */}
            {searchDroplist && <Search />}
            <div className='flex'>
              <Link to='/'><div className='p-2 pl-5 cursor-pointer' onClick={() => {
                onClickMidNav('home')}}>
                <Icon icon="logos:facebook" width="2.5rem" height="2.5rem" />
              </div></Link>
              <div className='absolute mt-5 ml-16 pl-4'>
                <Icon icon="carbon:search" width="1.1rem" height="1.1rem" style={{ color: darkTheme ? 'white' : '#545454' }} />
              </div>
              <div className='Search' onClick={searchDroplistHandler}>
                <input type='text' className='bg-[#F0F2F5] dark:bg-[#323436] rounded-full mt-2 py-2 px-10 focus:outline-none' placeholder='Search Facebook' readOnly />
              </div>
            </div>

            {/* middle icons */}
            <div className='flex items-center gap-2'>
              <Link to='/'>
                <div
                  className={`Home w-28 h-12 rounded-lg p-1 cursor-pointer flex justify-center items-center hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C] transition-all border-[#0866FF] relative  ${isActive === 'home' ? 'border-b-[3px]' : ''}`}
                  onMouseEnter={() => dropDownEnter('home')}
                  onMouseLeave={dropDownLeave}
                  onClick={() => onClickMidNav('home')}
                >
                  <Icon icon="fluent:home-28-filled" width="1.8rem" height="1.8rem" style={{ color: isActive === 'home' ? '#0866FF' : '#606266' }} />
                  {homeHovered && (
                    <div className='absolute mt-24 text-white shadow-md py-1.5 px-3 rounded-lg bg-[#050505] text-sm dark:bg-gray-100 dark:text-black'>Home</div>
                  )}
                </div></Link>

              <Link to='/pages'><div
                className={`Page ps w-28 h-12 rounded-lg p-1 cursor-pointer flex justify-center items-center hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C] transition-all relative border-[#0866FF] ${isActive === 'page' ? 'border-b-[3px]' : ''}`}
                onMouseEnter={() => dropDownEnter('page')}
                onMouseLeave={dropDownLeave}
                onClick={() => onClickMidNav('page')}
              // disabled={!isActive}
              >
                <Icon icon="material-symbols-light:emoji-flags" width="2rem" height="2rem" style={{ color: isActive === 'page' ? '#0866FF' : '#606266' }} />
                {pageHovered && (
                  <div className='absolute mt-24 text-white shadow-md py-1.5 px-3 rounded-lg bg-[#050505] text-sm dark:bg-gray-100 dark:text-black'>Pages</div>
                )}
              </div></Link>

              <Link to='/videos'><div
                className={`Home w-28 h-12 rounded-lg p-1 cursor-pointer flex justify-center items-center hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C] transition-all border-[#0866FF] relative  ${isActive === 'video' ? 'border-b-[3px]' : ''}`}
                onMouseEnter={() => dropDownEnter('video')}
                onMouseLeave={dropDownLeave}
                onClick={() => onClickMidNav('video')}
              >
                <Icon icon="ph:video-fill" width="1.8rem" height="1.8rem" style={{ color: isActive === 'video' ? '#0866FF' : '#606266' }} />
                {videoHovered && (
                  <div className='absolute mt-24 text-white shadow-md py-1.5 px-3 rounded-lg bg-[#050505] text-sm dark:bg-gray-100 dark:text-black'>Video</div>
                )}
              </div></Link>
              <Link to='/marketplace'><div
                className={`Home w-28 h-12 rounded-lg p-1 cursor-pointer flex justify-center items-center hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C] transition-all border-[#0866FF] relative  ${isActive === 'market' ? 'border-b-[3px]' : ''}`}
                onMouseEnter={() => dropDownEnter('market')}
                onMouseLeave={dropDownLeave}
                onClick={() => onClickMidNav('market')}
              >
                <Icon icon="healthicons:market-stall" width="1.8rem" height="1.8rem" style={{ color: isActive === 'market' ? '#0866FF' : '#606266' }} />
                {marketHovered && (
                  <div className='absolute mt-24 text-white shadow-md py-1.5 px-3 rounded-lg bg-[#050505] text-sm dark:bg-gray-100 dark:text-black'>Marketplace</div>
                )}
              </div></Link>
              <Link to='/group'><div
                className={`Groups w-28 h-12 rounded-lg p-1 cursor-pointer flex justify-center items-center hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C] transition-all relative border-[#0866FF] ${isActive === 'group' ? 'border-b-[3px]' : ''}`}
                onMouseEnter={() => dropDownEnter('group')}
                onMouseLeave={dropDownLeave}
                onClick={() => onClickMidNav('group')}
              >
                <Icon icon="ri:group-2-line" width="1.8rem" height="1.8rem" style={{ color: isActive === 'group' ? '#0866FF' : '#606266' }} />
                {groupHovered && (
                  <div className='absolute mt-24 text-white shadow-md py-1.5 px-3 rounded-lg bg-[#050505] dark:bg-gray-100 dark:text-black text-sm'>Groups</div>
                )}
              </div></Link>
            </div>
          </div>

          {isProfileOpen && <Account />}
          {isMenuOpen && <Menu />}
          {isNotificationOpen && <Notification />}
          {isMessenger && <Messenger />}
          {getsetting && <SettingPrivacy />}
          {gethelp && <HelpSupport />}
          {getfeedback && <Feedback />}
          {getdisplay && <Displayy />}

          {/* right icons */}
          <div className='flex items-center gap-3 mr-6'>

            <div ref={menuRef} className='relative' onMouseEnter={() => dropDownEnter('menu')}
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
                <div className='absolute mt-3 text-white shadow-md py-1.5 px-2 rounded-lg bg-[#050505] text-sm dark:bg-gray-100 dark:text-black'>Menu</div>
              )}
            </div>

            <div ref={messengerRef} className='relative' onMouseEnter={() => dropDownEnter('messenger')}
              onMouseLeave={dropDownLeave}
              onClick={() => onClickRightNav('messenger')}>
              <Icon
                icon="ri:messenger-fill"
                width="2rem"
                height="2rem"
                style={{ color: activeIcon === 'messenger' ? '#0866FF' : '#050505' }}
                className={`w-10 h-10 rounded-full p-2 bg-[#E4E6EB] cursor-pointer hover:bg-[#dad8d8]`}
                onClick={toggleMessenger}
              />
              {messengerHovered && (
                <div className='absolute mt-3 text-white shadow-md py-1.5 px-2 rounded-lg bg-[#050505] text-sm dark:bg-gray-100 dark:text-black'>Messenger</div>
              )}
            </div>

            <div ref={notificationRef} className='relative' onMouseEnter={() => dropDownEnter('notification')}
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
                <div className='absolute mt-3 text-white shadow-md py-1.5 px-2 rounded-lg bg-[#050505] text-sm dark:bg-gray-100 dark:text-black'>Notifications</div>
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
                <div className='absolute mt-3 text-white shadow-md py-1.5 px-1 rounded-lg bg-[#050505] text-sm dark:bg-gray-100 dark:text-black'>Account</div>
              )}
            </div>

          </div>
        </div>
      )}

    </>
  );
};

export default Navbar;
