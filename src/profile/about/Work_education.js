import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useUser } from '../../provider/UserProvider';

const Work_education = () => {

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

  console.log(getData)

  return (
    <div className={`pt-4 pb-4 ${darkTheme && 'dark'}`}>
      <h2 className='font-semibold text-xl dark:text-white'>Work</h2>
      {getData.workExperience && getData.workExperience.map((obj) => (
        <>
          <div key={obj._id} className='pl-3'>
            <div className='flex pt-4 gap-3'>
              <Icon icon="mdi:company" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : '#727B87' }} />
              <div className='dark:text-white'>
                <h3 className=''>Work at {obj.companyName}</h3>
                <h5 className='text-[10px]'>Start from {obj.startDate} to Enddate {obj.endDate} </h5>
              </div>
            </div>
            <div className='flex pt-3 gap-3'>
              <Icon icon="icon-park-solid:label" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : '#727B87' }} />
              <h3 className='pt-1 dark:text-white'>{obj.designation}</h3>
            </div>
            <div className='flex pt-3 gap-3'>
              <Icon icon="material-symbols:note-alt" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : '#727B87' }} />
              <h3 className='pt-1 pr-5 dark:text-white'>{obj.description}</h3>
            </div>
            <div className='flex pt-3 gap-3'>
              <Icon icon="mingcute:location-fill" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : '#727B87' }} />
              <h3 className='pt-1 dark:text-white'>{obj.location} </h3>
            </div>
          </div>
        </>))}

      <h2 className='font-semibold text-xl pt-5 dark:text-white'>Education</h2>
      {getData.education && getData.education.map((obj) => {
        if (obj.degree.includes("Masters") || obj.degree.includes("Bachelors")) {
          return (
            <div key={obj._id} className='pl-3 '>
              <h2 className='font-semibold text-xl pt-5 dark:text-white'>College</h2>
              <div className='flex pt-4 gap-3'>
                <Icon icon="teenyicons:school-solid" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : '#727B87' }} />
                <div className='dark:text-white'>
                  <h3 className=''>Studied at {obj.schoolName}</h3>
                  <h5 className='text-[10px]'>Start from {obj.startDate} to Enddate {obj.endDate} </h5>
                </div>
              </div>
              <div className='flex pt-3 gap-3'>
                <Icon icon="ic:baseline-school" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : '#727B87' }} />
                <h3 className='pt-1 dark:text-white'>{obj.degree}</h3>
              </div>
              <div className='flex pt-3 gap-3'>
                <Icon icon="material-symbols:note-alt" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : '#727B87' }} />
                <h3 className='pt-1 dark:text-white'>{obj.description}</h3>
              </div>
            </div>
          );
        } else {
          return (
            <div key={obj._id} className='pl-3'>
              <h2 className='font-semibold text-xl pt-5 dark:text-white'>College</h2>
              <div className='flex pt-4 gap-3'>
                <Icon icon="teenyicons:school-solid" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : '#727B87' }} />
                <div className='dark:text-white'>
                  <h3 className=''>Studied at {obj.schoolName}</h3>
                  <h5 className='text-[10px]'>Start from {obj.startDate} to Enddate {obj.endDate} </h5>
                </div>
              </div>
              <div className='flex pt-3 gap-3'>
                <Icon icon="ic:baseline-school" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : '#727B87' }} />
                <h3 className='pt-1 dark:text-white'>{obj.degree}</h3>
              </div>
              <div className='flex pt-3 gap-3'>
                <Icon icon="material-symbols:note-alt" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : '#727B87' }} />
                <h3 className='pt-1 dark:text-white'>{obj.description}</h3>
              </div>
            </div>
          );
        }
      })}
    </div>
  )
}

export default Work_education
