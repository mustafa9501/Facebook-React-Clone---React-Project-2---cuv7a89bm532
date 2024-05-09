import React, { useState, useEffect } from 'react'
import axios from 'axios';
import UserProfile from '../images/user-profile.png';
import { Icon } from '@iconify/react';
import { useUser } from '../provider/UserProvider';
import { Link, Outlet } from 'react-router-dom';
import Overviews from './about/Overviews';
import Work_education from './about/Work_education';
import Placed_lived from './about/Placed_lived';
import Skills from './about/Skills';


const About = () => {
    console.log('about!!!')
    const { getUser, userId, darkTheme } = useUser();
    const [getData, setData] = useState('')
    const [isActive, setIsActive] = useState('Overview')

    const activeHandler = (tag) => {
        console.log('Clicked:', tag);
        setIsActive(tag);
    }

    const contentMap = {
        Overview: <> <Overviews /> </>,
        'Work and education': <> <Work_education /> </>,
        'Place lived': <> <Placed_lived /> </>,
        'Skills': <> <Skills /> </>
    };

    console.log('Active tag:', isActive);

    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1100);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsScreenSmall(window.innerWidth < 1100);
        };

        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <>
            {isScreenSmall ? (
                <div className={`${darkTheme && 'dark'}`}>
                    <div className='pl-4 pb-4 dark:bg-[#18191A]'>
                        <h2 className='font-bold text-xl px-4 pt-5 dark:text-white'>About</h2>
                        <h3 className='pl-4 pt-2 dark:text-white'><Overviews /></h3>
                        <h3 className='pl-4 dark:text-white'><Work_education /></h3>
                        <h3 className='pl-4 pt-2 dark:text-white'><Placed_lived /></h3>
                        <h3 className='pl-4 pt-2 dark:text-white'><Skills /></h3>
                    </div>
                </div>

            ) : (

                <div className={`w-screen bg-[#F0F2F5] dark:bg-[#18191A] pt-4 px-5 pb-6 flex justify-center ${darkTheme && 'dark'}`}>

                    <div className='bg-white dark:bg-[#323436] w-2/3 rounded-lg flex gap-10'>
                        {/* left */}
                        <div className='w-1/3 Left mb-6 pb-3 dark:text-white'>
                            <h2 className='font-bold text-xl px-4 pt-4 dark:text-white'>About</h2>
                            {/* <Link to='overviews'> */}
                            <h3 className='px-2 py-2 mt-1 font-semibold text-[#5A5A5A]  cursor-pointer mx-2 rounded-lg hover:bg-[#EBF5FF] hover:dark:bg-[#323436]' style={{ color: darkTheme ? (isActive === 'Overview' ? '#0866FF' : 'white') : (isActive === 'Overview' ? '#0866FF' : '#5A5A5A') }} onClick={() => activeHandler('Overview')}>Overview</h3>
                            {/* </Link> */}
                            {/* <Link to='work_education'> */}
                            <h3 className='px-2 py-2 font-semibold text-[#5A5A5A] cursor-pointer mx-2 rounded-lg hover:bg-[#EBF5FF] hover:dark:bg-[#323436]'
                                style={{ color: darkTheme ? (isActive === 'Work and education' ? '#0866FF' : 'white') : (isActive === 'Work and education' ? '#0866FF' : '#5A5A5A') }}
                                onClick={() => activeHandler('Work and education')}>
                                Work and education
                            </h3>
                            {/* </Link> */}
                            {/* <Link to='placed_lived'> */}
                            <h3 className='pl-2 py-2 font-semibold text-[#5A5A5A] cursor-pointer mx-2 rounded-lg hover:bg-[#EBF5FF] hover:dark:bg-[#323436]'
                                style={{ color: darkTheme ? (isActive === 'Place lived' ? '#0866FF' : 'white') : (isActive === 'Place lived' ? '#0866FF' : '#5A5A5A') }} onClick={() => activeHandler('Place lived')}>Place lived
                            </h3>
                            {/* </Link> */}
                            {/* <Link to='skills'> */}
                            <h3 className='pl-2 py-2 font-semibold text-[#5A5A5A] cursor-pointer mx-2 rounded-lg hover:bg-[#EBF5FF] hover:dark:bg-[#323436]'
                                style={{ color: darkTheme ? (isActive === 'Skills' ? '#0866FF' : 'white') : (isActive === 'Skills' ? '#0866FF' : '#5A5A5A') }} onClick={() => activeHandler('Skills')}>Skills
                            </h3>
                            {/* </Link> */}
                        </div>
                        <div className='border-r border-gray-300 dark:border-gray-500'></div>
                        <Outlet />

                        {/* right */}
                        <div className='Right'>
                            <div className='Right mb-4'>
                                {contentMap[isActive]}
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </>
    )
}

export default About;
