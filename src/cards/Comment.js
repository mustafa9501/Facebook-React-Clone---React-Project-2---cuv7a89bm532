import React from 'react'
import { Icon } from '@iconify/react'
import { useUser } from '../provider/UserProvider'
import { Cards } from './Cards';

const Comment = ({ onClose }) => {

    const { getId } = useUser();
    
    return (<> 
        <div className="fixed h-screen w-screen flex items-center justify-center bg-[#F3F3F4] bg-opacity-85 mb-4">
            <div className="main_popup bg-white w-3/6 h-5/7 rounded-lg drop-shadow-xl overflow-y-auto">
                <h2 className='text-red-600'>Comment !!!!</h2>
                <div className='cursor-pointer pr-3 py-3 flex justify-end' onClick={onClose}>
                    <Icon icon="maki:cross" width="2rem" height="2rem" style={{ color: '#606771' }} className='bg-gray-200 hover:bg-gray-300 rounded-full p-1.5' />
                </div>                
                    
                        <div className='mb-3'>
                            <Cards
                                
                            />
                        </div>         
            </div>
        </div>
    </>
    ) 
}

export default Comment
