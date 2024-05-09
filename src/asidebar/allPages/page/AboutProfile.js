import React, { useState, useEffect } from 'react';
import { useUser } from '../../../provider/UserProvider';
// import { Link, Outlet } from 'react-router-dom';
import Work_education1 from './aboutPage/Work_education1';
import Skills1 from './aboutPage/Skills1';
import Overview1 from './aboutPage/Overview1';
import Payments from './aboutPage/Payments';
// import { useNavigate } from 'react-router-dom';

const AboutProfile = () => {
    const [isActive, setIsActive] = useState('Contact and basic info');
    const {darkTheme} = useUser();

    const activeHandler = (tag) => {
        console.log('Clicked:', tag);
        setIsActive(tag);
    }

    const contentMap = {
        'Contact and basic info': <> <Overview1 /> </>,
        'Work and education': <> <Work_education1 /> </>,
        'Payments details': <> <Payments /> </>,
        'Skills': <> <Skills1 /> </>
    };

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
            <div className={`${darkTheme && 'dark'}`}>
                {isScreenSmall ? (
                    <>
                        <div className='pl-3 pb-4 dark:bg-[#18191A]'>
                            <h2 className='font-bold text-xl px-4 pt-5 dark:text-white'>About</h2>
                            <h3 className='pl-4 pt-2 dark:text-white'><Overview1 /></h3>
                            <h3 className='pl-4 pt-2 dark:text-white'><Work_education1 /></h3>
                            <h3 className='pl-4 dark:text-white'><Payments /></h3>
                            <h3 className='pl-4 pt-2 dark:text-white'><Skills1 /></h3>
                        </div>
                    </>

                ) : (

                    <div className='w-screen bg-[#F0F2F5] dark:bg-[#18191A] mt-2 px-5 pb-6 flex justify-end pr-16'>

                        <div className='bg-white dark:bg-[#242526] w-2/3 rounded-lg flex gap-10'>
                            {/* left */}
                            <div className='w-1/3 Left mb-6 pb-3 dark:text-white'>
                                <h2 className='font-bold text-xl px-4 pt-4'>About</h2>
                                {/* <Link to='overview1'> */}
                                    <h3 className='px-2 py-2 mt-1 font-semibold text-[#5A5A5A] cursor-pointer mx-2 rounded-lg hover:bg-[#EBF5FF] dark:hover:dark:bg-[#323436]' style={{ color: darkTheme ? (isActive === 'Contact and basic info' ? '#0866FF' : 'white' ) : (isActive === 'Contact and basic info' ? '#0866FF' : '#5A5A5A' )}} onClick={() => activeHandler('Contact and basic info')}>Contact and basic info</h3>
                                    {/* </Link> */}
                                {/* <Link to='work_education1'> */}
                                    <h3 className='px-2 py-2 font-semibold text-[#5A5A5A] cursor-pointer mx-2 rounded-lg hover:bg-[#EBF5FF] dark:hover:dark:bg-[#323436]'
                                    style={{ color: darkTheme ? (isActive === 'Work and education' ? '#0866FF' : 'white' ) : (isActive === 'Work and education' ? '#0866FF' : '#5A5A5A' )}}
                                    onClick={() => activeHandler('Work and education')}>
                                    Work and education
                                </h3>
                                {/* </Link> */}
                                {/* <Link to='payments'> */}
                                    <h3 className='pl-2 py-2 font-semibold text-[#5A5A5A] cursor-pointer mx-2 rounded-lg hover:bg-[#EBF5FF] dark:hover:dark:bg-[#323436]'
                                    style={{ color: darkTheme ? (isActive === 'Payments details' ? '#0866FF' : 'white' ) : (isActive === 'Payments details' ? '#0866FF' : '#5A5A5A' )}} onClick={() => activeHandler('Payments details')}>Payments details
                                </h3>
                                {/* </Link> */}
                                {/* <Link to='skills1'> */}
                                    <h3 className='pl-2 py-2 font-semibold text-[#5A5A5A] cursor-pointer mx-2 rounded-lg hover:bg-[#EBF5FF] dark:hover:dark:bg-[#323436]'
                                    style={{ color: darkTheme ? (isActive === 'Skills' ? '#0866FF' : 'white' ) : (isActive === 'Skills' ? '#0866FF' : '#5A5A5A' )}} onClick={() => activeHandler('Skills')}>Skills
                                </h3>
                                {/* </Link> */}
                            </div>
                            <div className='border-r border-gray-300 dark:border-gray-500'></div>
                            {/* <Outlet /> */}

                            {/* right */}
                            <div className='Right'>
                                <div className='Right mb-4'>
                                    {contentMap[isActive]}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default AboutProfile;
