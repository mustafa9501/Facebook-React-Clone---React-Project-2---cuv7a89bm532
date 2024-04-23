import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useUser } from '../../provider/UserProvider';

const Skills = () => {

  const { getUser, userId } = useUser();
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
      <h2 className='font-semibold text-xl pt-4'>Skills</h2>
      {getData.skills && getData.skills.map((obj) => (
        <>
          <div key={obj._id} className='pl-3 pt-2'>
              <h3 className='pt-1'>{obj}</h3>
          </div>
        </>))}
    </>
  )
}

export default Skills
