import React, {useEffect, useState} from 'react'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = ({onClose}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const onClickHandler = (event) =>{
    event.preventDefault();
    const getData = {name, email, password, appType: 'facebook'}

    axios.post('https://academics.newtonschool.co/api/v1/user/signup', getData).then((response) => {
      console.log(response)
      navigate('/')
      onClose();
    }).catch((error) =>{
      console.log(error);
      if(error.response && error.response.data && error.response.data.message){
        setError(error.response.data.message)
    }
    else{
        setError("Unknown error please try after sometime !!")
    }
    })
  }

  return (<>
    <div className="fixed h-screen w-screen flex items-center justify-center bg-white bg-opacity-80">
      <div className="mian_popup bg-white w-2/7 h-4/6 rounded-lg drop-shadow-lg">
        <div className='flex justify-between'>
        <div className='block p-3'>
        <div className='text-4xl font-semibold'>Sign Up</div>
        <div className='test-sm mt-1.5 text-zinc-600'>It's quick and easy.</div></div>
        <div className='cursor-pointer pr-3 pt-3' onClick={onClose}>
        <Icon icon="maki:cross" width="1.4rem" height="1.4rem"  style={{color: '#606771'}} />
        </div>
        </div>
        <div className='border-b w-full'></div>
        <idv className='text-red-700 pl-3'>{error}</idv>
        <div className=''>
             <form className='flex flex-col pl-3 pr-3 pt-1 text-lg' onSubmit={onClickHandler}>
                    <input className='p-2 border border-zinc-300 rounded-md mt-1 focus:border-blue-500 focus:outline-none'
                    type='text'
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                    <input className='p-2 border border-zinc-300 rounded-md mt-2 focus:border-blue-500 focus:outline-none'
                    type='text'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input className='p-2 border border-zinc-300 rounded-md mt-2 focus:border-blue-500 focus:outline-none'
                    type='password'
                    placeholder='Create password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <div className='text-xs text-zinc-700 mt-4'>People who use our service may have uploaded your contact information to Facebook. <span className='text-blue-800 hover:underline cursor-pointer'>Learn more</span>.</div>
                    <div className='text-xs text-zinc-700 mt-3'>By clicking Sign Up, you agree to our <span className='text-blue-900 hover:underline cursor-pointer'>Terms</span>, <span className='text-blue-900 hover:underline cursor-pointer'>Privacy Policy</span> and <span className='text-blue-900 hover:underline cursor-pointer'>Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any time.</div>
                    <button type='submit' className='rounded-md mt-4 w-3/7 py-1 m-auto text-white font-bold text-xl text-semibold border bg-[#00A400] cursor-pointer' onClick={onClickHandler}>Sign Up</button>
              </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
