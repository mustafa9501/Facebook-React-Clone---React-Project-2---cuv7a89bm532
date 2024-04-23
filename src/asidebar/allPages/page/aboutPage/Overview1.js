import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useUser } from '../../../../provider/UserProvider';

const Overview1 = () => {

    const { getUser, viewPageId } = useUser();
    const [getData, setData] = useState('')

    const userDetails = async () => {
        try {
            const response = await axios.get(`https://academics.newtonschool.co/api/v1/facebook/channel/${viewPageId}`, {
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
            <h2 className='font-semibold text-xl pt-5'>Basic info User</h2>
            <div className='pb-6 pl-3'>
                { getData.owner && <>
                    <div className='pt-3 flex gap-4'>
                        <Icon icon="bxs:user" width="2rem" height="2rem" style={{ color: '#727B87' }} />
                        <h3 className='pt-1.5'>{getData.owner.name}</h3>
                    </div>
            
                <div className=' pt-4 flex gap-4'>
                    <Icon icon="ic:baseline-email" width="2rem" height="2rem" style={{ color: '#727B87' }} />
                    <h3 className='pt-1.5'>{getData.owner.email}</h3>
                </div>
           
                <div className=' pt-4 flex gap-4'>
                    <Icon icon="ph:gender-male-bold" width="1.8rem" height="1.8rem" style={{ color: '#727B87' }} />
                    <h3 className='pt-1.5 pl-1'>{getData.owner.gender||'male'}</h3>
                </div>
                </> }
            </div>

            <h2 className='font-semibold text-xl pt-4'>Contact details</h2>
            {getData.owner && getData.owner.address && getData.owner.address.map((obj)=>( <>
                <div className=' pt-4 flex gap-4 pl-4'>
                    <Icon icon="ion:home" width="1.8rem" height="1.8rem" style={{ color: '#727B87' }} />
                    <h3 className='pt-1.5 pl-1'>Live in {obj.street}, {obj.city}</h3>
                </div>
                <div className='pt-4 flex gap-4 pl-4'>
                    <Icon icon="carbon:location-filled" width="1.8rem" height="1.8rem" style={{ color: '#727B87' }} />
                    <h3 className='pt-1.5 pl-1'>From {obj.state}</h3>
                </div>
                <div className='pt-4 flex gap-4 pl-4'>
                    <Icon icon="tabler:flag-filled" width="1.8rem" height="1.8rem" style={{ color: '#727B87' }} />
                    <h3 className='pt-1.5 pl-1'>{obj.country}</h3>
                </div>
                </> ))}
                { getData.owner && <>
                 <div className=' pt-4 flex gap-3.5 pl-4'>
                     <Icon icon="ph:phone-fill" width="1.8rem" height="1.8rem" style={{ color: '#727B87' }} />
                <h3 className='pt-1 pl-1'>{getData.owner.phone||"123456789"}</h3>
                </div>
             </> }
        </>
    )
}

export default Overview1
