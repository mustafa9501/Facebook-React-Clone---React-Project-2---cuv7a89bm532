import React, { useState, useEffect } from 'react';
import { useUser } from '../../../provider/UserProvider';
import { Link } from 'react-router-dom'
import Work_education1 from './aboutPage/Work_education1';
import Placed_lived1 from './aboutPage/Payments';
import Skills1 from './aboutPage/Skills1';
import Overview1 from './aboutPage/Overview1';
import Payments from './aboutPage/Payments';

const AboutProfile = () => {
    const [isActive, setIsActive] = useState('Contact and basic info')

    const activeHandler = (tag) => {
        console.log('Clicked:', tag);
        setIsActive(tag);
    }

    const contentMap = {
        'Contact and basic info': <> <Overview1 /> </>,
        'Work and education': <> <Work_education1 /> </>,
        'Place lived': <> <Placed_lived1 /> </>,
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
            {isScreenSmall ? (
                <>
                    <div className='pl-3 pb-4'>
                        <h2 className='font-bold text-xl px-4 pt-5'>About</h2>
                        <h3 className='pl-4 pt-2'><Overview1 /></h3>
                        <h3 className='pl-4 pt-2'><Work_education1 /></h3>
                        <h3 className='pl-4'><Payments /></h3>
                        <h3 className='pl-4 pt-2'><Skills1 /></h3>
                    </div>
                </>

            ) : (

                <div className='w-screen bg-[#F0F2F5]  px-5 pb-6 flex justify-end pr-16'>

                    <div className='bg-white w-2/3 rounded-lg flex gap-10'>
                        {/* left */}
                        <div className='w-1/3 Left mb-6 pb-3'>
                            <h2 className='font-bold text-xl px-4 pt-4'>About</h2>
                            <Link to='overview1'><h3 className='px-2 py-2 mt-1 font-semibold text-[#5A5A5A] cursor-pointer mx-2 rounded-lg hover:bg-[#EBF5FF]' style={{ color: isActive === 'Contact and basic info' ? '#0866FF' : '#5A5A5A' }} onClick={() => activeHandler('Contact and basic info')}>Contact and basic info</h3></Link>
                            <Link to='work_education1'><h3 className='px-2 py-2 font-semibold text-[#5A5A5A] cursor-pointer mx-2 rounded-lg hover:bg-[#EBF5FF]'
                                style={{ color: isActive === 'Work and education' ? '#0866FF' : '#5A5A5A' }}
                                onClick={() => activeHandler('Work and education')}>
                                Work and education
                            </h3></Link>
                            <Link to='payments'><h3 className='pl-2 py-2 font-semibold text-[#5A5A5A] cursor-pointer mx-2 rounded-lg hover:bg-[#EBF5FF]'
                                style={{ color: isActive === 'Place lived' ? '#0866FF' : '#5A5A5A' }} onClick={() => activeHandler('Place lived')}>Payments details
                            </h3></Link>
                            <Link to='skills1'><h3 className='pl-2 py-2 font-semibold text-[#5A5A5A] cursor-pointer mx-2 rounded-lg hover:bg-[#EBF5FF]'
                                style={{ color: isActive === 'Skills' ? '#0866FF' : '#5A5A5A' }} onClick={() => activeHandler('Skills')}>Skills
                            </h3></Link>
                        </div>

                        <div className='border-r border-gray-300'></div>

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

export default AboutProfile;
