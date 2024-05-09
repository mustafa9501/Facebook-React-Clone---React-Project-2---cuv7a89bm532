import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useUser } from '../../../../provider/UserProvider';

const Payments = () => {

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

  return (
    <>  
      <div>
         <h2 className='font-semibold text-xl pt-5 dark:text-white'>Payments Details</h2>
      {getData.owner && getData.owner.paymentDetails && getData.owner.paymentDetails.map((obj) => (
        <>
          <div key={obj._id} className='pl-3'>
            <div className='flex pt-4 gap-3'>
              <Icon icon="ion:card" width="2rem" height="2rem" style={{ color: '#727B87' }} />          
                <h3 className='pt-1 dark:text-white'>{obj.cardNumber}</h3>
            </div>
            <div className='flex pt-3 gap-3'>
              <Icon icon="fluent:dual-screen-update-20-filled" width="2rem" height="2rem" style={{ color: '#727B87' }} />
              <h3 className='pt-1 dark:text-white'>{obj.expirationDate}</h3>
            </div>
            <div className='flex pt-3 gap-3'>
              <Icon icon="solar:card-bold-duotone" width="2rem" height="2rem" style={{ color: '#727B87' }} />
              <h3 className='pt-1 pr-5 dark:text-white'>{obj.cvv}</h3>
            </div>
          </div>
        </>))}
        </div>
    </>
  )
}

export default Payments
