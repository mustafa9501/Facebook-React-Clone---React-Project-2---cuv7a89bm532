import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useUser } from '../../provider/UserProvider';

const Overviews = () => {

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
            <h2 className='font-semibold text-xl pt-4'>Overview</h2>
            <div className='pb-6 pl-3'>
                {getData.workExperience && getData.workExperience.map((obj) => (
                    <div key={obj._id} className='pt-3 flex gap-4'>
                        <Icon icon="basil:bag-solid" width="2rem" height="2rem" style={{ color: '#727B87' }} />
                        <h3 className='pt-1.5'>Work at {obj.companyName}</h3>
                    </div>
                ))}

                {getData.education && getData.education.map((obj) => (
                <div className=' pt-4 flex gap-4'>
                    <Icon icon="icon-park-solid:degree-hat" width="2rem" height="2rem" style={{ color: '#727B87' }} />
                    <h3 className='pt-1.5'>Studied at {obj.schoolName}</h3>
                </div>
                ))}
                {getData.address && getData.address.map((obj) => ( <>
                <div className=' pt-4 flex gap-4'>
                    <Icon icon="ion:home" width="1.8rem" height="1.8rem" style={{ color: '#727B87' }} />
                    <h3 className='pt-1.5 pl-1'>Live in {obj.street}, {obj.state}</h3>
                </div>
                    <div className='pt-4 flex gap-4'>
                    <Icon icon="carbon:location-filled" width="1.8rem" height="1.8rem" style={{ color: '#727B87' }} />
                    <h3 className='pt-1.5 pl-1'>From {obj.city}</h3>
                    </div>
                </>
                ))}
                <div className=' pt-4 flex gap-3.5'>
                    <Icon icon="ph:phone-fill" width="1.8rem" height="1.8rem" style={{ color: '#727B87' }} />
                    <h3 className='pt-1 pl-1'>{getData.phone||'123456789'}</h3>
                </div>
            </div>
        </>
    )
}

export default Overviews
