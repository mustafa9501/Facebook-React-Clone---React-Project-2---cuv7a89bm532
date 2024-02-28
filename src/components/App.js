import React from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../login_signup/Login';
import Home from './Home';
import Navbar from '../navbar/Navbar';
import {Cards} from '../cards/Cards';
import { useUser } from '../provider/UserProvider';
import Pages from '../page/Pages';
import CreatePage from '../page/CreatePage';

function App() {

  axios.interceptors.request.use(async (config) => {
    config.headers["projectid"] = "8hsukqjomca0";
    return config;
  });

  const { getUser } = useUser();

  return (<>
      <div className='h-screen w-full'>
      <BrowserRouter>
      {getUser && getUser.status === "success" && (
      <Navbar />)}
        <Routes>
          {!getUser && (
          <Route path="/" element={<Login/>}/>)}
          {getUser && getUser.status === "success" && (
          <Route path="/" element={<Home/>}/>)}
          <Route path="/cards" element={<Cards/>}/>
          <Route path="/pages" element={<Pages/>}/>
          <Route path="/pages/createpage" element={<CreatePage/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  </>)
}

export default App;
