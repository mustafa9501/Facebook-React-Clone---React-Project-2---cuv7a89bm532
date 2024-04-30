import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useUser } from '../provider/UserProvider';
import Profile from '../images/profile.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const { getUser, searchDroplistClose, userIdHandler } = useUser();
    const [getValue, setValue] = useState('');
    const [searchValue, setSearchValue] = useState([]);
    const [typingTimeout, setTypingTimeout] = useState(null);
    const navigate = useNavigate();
    const [notFound, setNotFound] = useState(false);

    const searchDetails = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/facebook/post?search={"author.name" : "${getValue}"}`, {
                headers: {
                    Authorization: `Bearer ${getUser.token}`
                }
            });
            console.log(response.data.data);
            const uniqueNames = Array.from(new Set(response.data.data.map(obj => obj.author.name)));
            setSearchValue(uniqueNames.map(name => response.data.data.find(obj => obj.author.name === name)));
            setNotFound(uniqueNames.length === 0);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // Clear the previous timeout
        clearTimeout(typingTimeout);

        // Set a new timeout
        const timeoutId = setTimeout(() => {
            searchDetails();
        }, 500); // Adjust the delay as needed

        // Save the timeoutId for cleanup
        setTypingTimeout(timeoutId);

        // Cleanup function to clear timeout on unmount or dependency change
        return () => clearTimeout(timeoutId);
    }, [getValue]); // Trigger searchDetails when getValue 

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
                <div className="w-full shadow-md absolute rounded-lg bg-white pt-3">

                <div className='flex gap-4 w-full'>    
                <div className=' hover:bg-[#F2F2F2] rounded-full'>
                    <Icon icon="tabler:arrow-left" width="1.5rem" height="1.5rem" style={{ color: 'black' }} className='mt-3.5 ml-4' onClick={()=>navigate(-1)}/>
                </div>

                <div className='flex'>
                <div className='absolute pl-3 pt-5'>
                    <Icon icon="carbon:search" width="1.1rem" height="1.1rem" style={{ color: '#545454' }} />
                </div>
                <div className='Search pr-5'>
                    <input type='text' className='bg-[#F0F2F5] rounded-full mt-2 py-2 px-10 w-full focus:outline-none' placeholder='Search Facebook' onChange={(e) => setValue(e.target.value)} />
                </div>
                </div>
                </div>

                <div className='h-[30rem] overflow-y-auto scrollbar bg-white mb-3'>
                    <div className='flex justify-between'>
                    <h3 className='pl-6 pt-6 pb-4 font-semibold text-lg'>Recent</h3>
                    {/* <Icon icon="maki:cross" width="1.8rem" height="1.8rem"  style={{color: 'gray'}} className='mt-6 mr-3 rounded-full bg-[#e7e6e6] p-1 cursor-pointer' onClick={()=>navigate(-1)}/> */}
                    </div>
                    {notFound ? (
                        <div className="ml-6 pt-2 pb-2 pr-3">Not found</div>
                    ) : (
                        searchValue.map((obj, index) => (
                            <Link to='/profile/post'>
                                <div key={index} className='ml-5 pt-2 flex gap-4 py-2 mr-2 mb-1 hover:bg-[#F2F2F2] rounded-lg cursor-pointer' onClick={() => userIdHandler(obj.author._id)}>
                                    <div className='h-10 w-10 pl-1'><img src={obj.author.profileImage || Profile} alt="Profile" className='rounded-full' /></div>
                                    <div className='pt-2'>{obj.author.name}</div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
            </>

          ) : (

            <div className="w-[21rem] shadow-md absolute rounded-lg bg-white">
                <div className='absolute px-1 hover:bg-[#F2F2F2] rounded-full cursor-not-allowed' >
                    <Icon icon="tabler:arrow-left" width="1.5rem" height="1.5rem" style={{ color: 'gray' }} className='mt-3.5 ml-3' />
                </div>

                <div className='absolute pl-20 pt-5'>
                    <Icon icon="carbon:search" width="1.1rem" height="1.1rem" style={{ color: '#545454' }} />
                </div>
                <div className='Search pl-[4rem]'>
                    <input type='text' className='bg-[#F0F2F5] rounded-full mt-2 py-2 px-10 focus:outline-none' placeholder='Search Facebook' onChange={(e) => setValue(e.target.value)} />
                </div>

                <div className='h-[30rem] overflow-y-auto scrollbar bg-white mb-3'>
                    <div className='flex justify-between'>
                    <h3 className='pl-6 pt-6 pb-4 font-semibold text-lg'>Recent</h3>
                    <Icon icon="maki:cross" width="1.8rem" height="1.8rem"  style={{color: 'gray'}} className='mt-6 mr-4 rounded-full hover:bg-[#F2F2F2] p-1 cursor-pointer' onClick={searchDroplistClose}/>
                    </div>
                    {notFound ? (
                        <div className="ml-6 pt-2 pb-2 ">Not found</div>
                    ) : (
                        searchValue.map((obj, index) => (
                            <Link to='/profile/post'>
                                <div key={index} className='ml-5 pt-2 flex gap-4 py-2 mr-2 mb-1 hover:bg-[#F2F2F2] rounded-lg cursor-pointer' onClick={() => userIdHandler(obj.author._id)}>
                                    <div className='h-10 w-10 pl-1'><img src={obj.author.profileImage || Profile} alt="Profile" className='rounded-full' /></div>
                                    <div className='pt-2'>{obj.author.name}</div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
          )}
            
        </>
    )
}

export default Search;
