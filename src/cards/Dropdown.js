import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../provider/UserProvider';
import { Link } from 'react-router-dom';

const Dropdown = ({ id, dropDownFlag }) => {

    // const navigate = useNavigate();
    const { getUser, popupUpdateOpen } = useUser();
    // const [getValue, setValue] = useState('');

    const postDelete = async (idd) => {
        try {
            const result = await axios.delete(`https://academics.newtonschool.co/api/v1/facebook/post/${idd}`, {
                headers: {
                    Authorization: `Bearer ${getUser.token}`
                }
            });

            window.location.reload();
            console.log(result);

        } catch (err) {
            alert(err.message);
        }
    };

    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1100);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsScreenSmall(window.innerWidth < 1100);
        };

        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(()=>{
        console.log(dropDownFlag)
    }, [])

    return (
        <>
            {isScreenSmall ? (
                <div
                    className="absolute right-0 mt-14 mr-4 w-2/4 origin-top-right rounded-md bg-white dark:bg-[#242526] text-zinc-200 font-semibold py-2 px-2 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                    style={{ boxShadow: '1px 3px 4px 4px rgba(0, 0, 0, 0.1)' }}>

                    {dropDownFlag && (
                        <Link to="/updatepost"><div className='Settings text-md flex gap-4 cursor-pointer rounded-md hover:bg-[#F2F2F2] dark:hover:bg-[#323436] py-2 px-2' onClick={() => popupUpdateOpen(id)}>
                            <Icon icon="ic:baseline-edit" width="2rem" height="2rem" style={{ color: 'black' }}
                                className='border bg-[#E4E6EB] rounded-full p-1' />
                            <h2 className='text-black mt-1 dark:text-white'>Edit</h2>
                        </div></Link>)}


                    <div className='Settings text-md flex justify-between  cursor-pointer rounded-md hover:bg-[#F2F2F2] dark:hover:bg-[#323436] py-2 px-2'>
                        <div className='flex gap-4' onClick={() => postDelete(id)}>
                            <Icon icon="subway:delete" width="2rem" height="2rem" style={{ color: 'black' }}
                                className='border bg-[#E4E6EB] rounded-full p-1' />
                            <h2 className='text-black mt-1 dark:text-white'>Hide</h2>
                        </div>

                    </div>
                </div>

            ) : (

                <div
                    className="absolute right-0 mt-14 mr-4 w-1/3 origin-top-right rounded-md bg-white dark:bg-[#242526] text-zinc-200 font-semibold py-2 px-2 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                    style={{ boxShadow: '1px 3px 4px 4px rgba(0, 0, 0, 0.1)' }}>

                    {dropDownFlag && (
                        <div className='Settings text-md flex gap-4 cursor-pointer rounded-md hover:bg-[#F2F2F2] dark:hover:bg-[#323436] py-2 px-2' onClick={() => popupUpdateOpen(id)}>
                            <Icon icon="ic:baseline-edit" width="2rem" height="2rem" style={{ color: 'black' }}
                                className='border bg-[#E4E6EB] rounded-full p-1' />
                            <h2 className='text-black mt-1 dark:text-white'>Edit</h2>
                        </div>)}

                    <div className='Settings text-md flex justify-between  cursor-pointer rounded-md hover:bg-[#F2F2F2] dark:hover:bg-[#323436] py-2 px-2'>
                        <div className='flex gap-4' onClick={() => postDelete(id)}>
                            <Icon icon="subway:delete" width="2rem" height="2rem" style={{ color: 'black' }}
                                className='border bg-[#E4E6EB] rounded-full p-1' />
                            <h2 className='text-black mt-1 dark:text-white'>Hide</h2>
                        </div>

                    </div>
                </div>
            )}

        </>
    )
}

export default Dropdown
