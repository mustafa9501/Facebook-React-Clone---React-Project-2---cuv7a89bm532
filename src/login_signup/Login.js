import React, { useState } from 'react'
import axios from 'axios';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../provider/UserProvider';

const Login = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();
    const {signInUser} = useUser();

    const openPopup = (event) =>{
        event.preventDefault();
        setPopupOpen(true);
    };

    const closePopup = () =>{
        setPopupOpen(false);
    }

    const onClickHandler = (event) =>{
        event.preventDefault();

        const getData = {email, password, appType: 'facebook'};
        setError('');
        axios.post('https://academics.newtonschool.co/api/v1/user/login', getData).then((response) =>{
            localStorage.setItem('token', response.data.token);
            signInUser({status:response.data.status,token:response.data.token})
            navigate('/')
        }).catch((error)=>{
            if(error.response && error.response.data && error.response.data.message){
                setError(error.response.data.message)
            }
            else{
                setError("Unknown error please try after sometime !!")
            }
        })
    }

    return (
        <>
            {/* main div */}
            <div className='bg-[#F0F2F5] w-full h-full flex justify-center items-center gap-1'>
                <div className='w-1/2 px-8'> 
                    <div className='text-6xl font-bold text-[#0866FF]'>facebook</div>
                    <div className='text-3xl mt-3'>Facebook helps you connect and share
                    with the people in your life.
                    </div>
                </div> 
               <div className='bg-white w-2/7 h-3/7 rounded-lg drop-shadow-md'>
                <div className='text-red-700 ml-2.5 mt-1'>{error}</div>
                <form className='flex flex-col pl-3 pr-3 pt-2 text-lg' onSubmit={onClickHandler}>
                    <input className='p-3 border border-zinc-300 rounded-md mt-1 focus:border-blue-500 focus:outline-none'
                    type='text'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input className='p-3 border border-zinc-300 rounded-md mt-3 focus:border-blue-500 focus:outline-none'
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button type='submit' className='rounded-md mt-4 py-2.5 text-white font-bold text-xl text-semibold border bg-blue-600 cursor-pointer'>Log in</button>
                    <div className='text-center mt-3 text-blue-600 text-base cursor-pointer'>
                        Forgotten password?
                    </div>
                    <div className='border-b border-zinc-200 mt-5'>
                    </div>
                    <button className='px-2 py-2.5 border bg-[#42B72A] rounded-md w-1/2 m-auto mt-6 font-semibold text-white cursor-pointer' 
                    onClick={openPopup}>Create new account</button>
                </form>
               </div>
               {isPopupOpen && <Signup onClose={closePopup} />}
            </div>
        </>
    )
}

export default Login
