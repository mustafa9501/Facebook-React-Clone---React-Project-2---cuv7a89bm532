import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useUser } from '../../provider/UserProvider';

const Skills = () => {

  const { getUser, userId, darkTheme } = useUser();
  const [getData, setData] = useState('')

  const userDetails = async () => {
    try {
      const response = await axios.get(`https://academics.newtonschool.co/api/v1/facebook/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${getUser.token}`
        }
      });
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    userDetails();
  }, [])

  return (
    <>
      <div className={`${darkTheme && 'dark'}`}>
        <h2 className='font-semibold text-xl pt-4 dark:text-white'>Skills</h2>
        {getData.skills && getData.skills.map((obj) => (
          <>
            <div key={obj._id} className='pl-3 pt-2 pb-2'>
              <h3 className='pt-1 dark:text-white'>{obj}</h3>
            </div>
          </>))}
      </div>
    </>
  )
}

export default Skills
