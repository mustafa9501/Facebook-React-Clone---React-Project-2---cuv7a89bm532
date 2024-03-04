import React from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from '../login_signup/Login';
import Home from './Home';
import Navbar from '../navbar/Navbar';
// import {Cards} from '../cards/Cards';
import { useUser } from '../provider/UserProvider';
import Pages from '../asidebar/allPages/page/Pages';
import CreatePage from '../asidebar/allPages/page/CreatePage';
import Videos from '../asidebar/allPages/Videos';
import Marketplace from '../asidebar/allPages/Marketplace';
import Group from '../asidebar/allPages/Group';
import { useNavigate } from 'react-router-dom';
import Friends from '../asidebar/allPages/Friends';

function App() {

  axios.interceptors.request.use(async (config) => {
    config.headers["projectid"] = "8hsukqjomca0";
    return config;
  });

  const { getUser } = useUser();

  function ProtectedRoute({children}){
    if(getUser){
      return children;
    }
    else{
       return <Navigate to="/"/>
    }  
 }

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
          <Route path="/pages" element={<ProtectedRoute><Pages/></ProtectedRoute>}/>
          <Route path="/pages/createpage" element={<ProtectedRoute><CreatePage/></ProtectedRoute>}/>
          <Route path="/videos" element={<ProtectedRoute><Videos/></ProtectedRoute>}/>
          <Route path="/marketplace" element={<ProtectedRoute><Marketplace/></ProtectedRoute>}/>
          <Route path="/group" element={<ProtectedRoute><Group/></ProtectedRoute>}/>
          <Route path="/friends" element={<ProtectedRoute><Friends/></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
      </div>
  </>)
}

export default App;
