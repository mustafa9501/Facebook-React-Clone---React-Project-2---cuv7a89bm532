import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../provider/UserProvider';
import Facebook from '../images/new-Facebook-Logo.png';
import { Icon } from '@iconify/react/dist/iconify.js';

const Login = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const { signInUser, onNameHandler, onEmailHandler } = useUser();

    const openPopup = (event) => {
        event.preventDefault();
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    }

    const onClickHandler = (event) => {
        event.preventDefault();

        const getData = { email, password, appType: 'facebook' };
        setError('');
        axios.post('https://academics.newtonschool.co/api/v1/user/login', getData).then((response) => {

            localStorage.setItem('token', response.data.token);
            console.log(response)
            signInUser({ status: response.data.status, token: response.data.token });
            onNameHandler(response.data.data.user.name);
            onEmailHandler(response.data.data.user.email);
            console.log(response.data.data.user.name);
            console.log(response.data.data.user.email)
            navigate('/');

        }).catch((error) => {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message)
            }
            else {
                setError("Unknown error please try after sometime !!")
            }
        })
    };

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
            {isScreenSmall ? (<>
                <div className='bg-[#FFFBE2] py-2 pl-4 flex gap-3'>
                <Icon icon="fa:mobile" width="1.2rem" height="1.4rem"  style={{color: 'black'}} className='mt-1'/>
                    <p className='pt-1 text-[#3B5998]'>Get Facebook for Android and browser faster</p>
                </div>
                <div className='flex justify-center pt-10'>
                    <img src={Facebook} className='h-14 w-28 m-3 ml-5' />
                </div>

                <div className='w-full px-4 '>
                    <div className='text-red-700 ml-2.5 mt-1'>{error}</div>
                    <form className='flex flex-col pl-3 pr-3  text-lg' onSubmit={onClickHandler}>
                        <input className='p-3 border border-zinc-300 rounded-md mt-1 focus:border-blue-500 focus:outline-none bg-[#F5F6F7]'
                            type='text'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input className='p-3 border border-zinc-300 rounded-md mt-3 focus:border-blue-500 focus:outline-none bg-[#F5F6F7]'
                            type='password'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type='submit' className='rounded-md mt-4 py-2.5 text-white font-bold text-xl text-semibold border bg-blue-600 cursor-pointer'>Log in</button>
                        <div className='text-center mt-3 text-blue-600 text-base cursor-pointer'>
                            Forgotten password?
                        </div>
                        <div className='border-b border-zinc-200 mt-5'>
                        </div>
                        <button className='px-2 py-2.5 border text-black rounded-md w-2/3 m-auto mt-6 cursor-pointer'
                            onClick={openPopup}>Create new account</button>
                    </form>
                </div>
                <div className='flex justify-between px-14 pt-10'>
                    <div className='text-[12px]'>
                        <h4>English (UK)</h4>
                        <h4>اردو</h4>
                        <h4>বাংলা</h4>
                        <h4>मराठी</h4>
                    </div>
                    <div className='text-[10px]'>
                        <h4>हिन्दी</h4>
                        <h4>ਪੰਜਾਬੀ</h4>
                        <h4>ગુજરાતી</h4>
                        <h4>मराठी</h4>
                    </div>
                </div>
                <div className='text-center pt-6 text-[12px]'>Meta @ 2024</div>
            </>
            ) : (
                //for large device login code
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
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input className='p-3 border border-zinc-300 rounded-md mt-3 focus:border-blue-500 focus:outline-none'
                                type='password'
                                placeholder='Enter your password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
            )}

        </>
    )
}

export default Login
