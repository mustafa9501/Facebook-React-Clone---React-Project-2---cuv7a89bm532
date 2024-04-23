import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useUser } from '../../provider/UserProvider';

const Placed_lived = () => {

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

  console.log(getData)

  return (
    <>
      <h2 className='font-semibold text-xl pt-4'>Placed lived</h2>
      {getData.address && getData.address.map((obj) => (
        <>
          <div key={obj._id} className='pl-3 pt-4'>
            <div className='flex gap-3'>
              <Icon icon="fluent:street-sign-24-filled" width="2rem" height="2rem" style={{ color: '#727B87' }} />
                <h3 className=''>Work at {obj.street}</h3>
            </div>
            <div className='flex pt-3 gap-3'>
              <Icon icon="mdi:city" width="2rem" height="2rem" style={{ color: '#727B87' }} />
              <h3 className='pt-1'>{obj.city}</h3>
            </div>
            <div className='flex pt-3 gap-3'>
              <Icon icon="fluent:real-estate-20-filled" width="2rem" height="2rem" style={{ color: '#727B87' }} />
              <h3 className='pt-1 pr-5'>{obj.state}</h3>
            </div>
            <div className='flex pt-3 gap-3'>
              <Icon icon="ic:sharp-flag" width="2rem" height="2rem" style={{ color: '#727B87' }} />
              <h3 className='pt-1'>{obj.country} </h3>
            </div>
            <div className='flex pt-3 gap-3'>
              <Icon icon="ph:file-zip" width="2rem" height="2rem" style={{ color: '#727B87' }} />
              <h3 className='pt-1'>{obj.zipCode} </h3>
            </div>
          </div>
        </>))}
    </>
  )
}

export default Placed_lived
