import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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
import Profile from '../profile/Profile';
import About from '../profile/About';
import Post from '../profile/Post';
import Overviews from '../profile/about/Overviews';
import Work_education from '../profile/about/Work_education';
import Placed_lived from '../profile/about/Placed_lived';
import Skills from '../profile/about/Skills';
import ProfilePage from '../asidebar/allPages/page/ProfilePage';
import PostProfile from '../asidebar/allPages/page/PostProfile';
import AboutProfile from '../asidebar/allPages/page/AboutProfile';
import Overview1 from '../asidebar/allPages/page/aboutPage/Overview1';
import Work_education1 from '../asidebar/allPages/page/aboutPage/Work_education1';
import Payments from '../asidebar/allPages/page/aboutPage/Payments';
import Skills1 from '../asidebar/allPages/page/aboutPage/Skills1';
import Search from '../navbar/Search';
import Comment from '../cards/Comment';
import Signup from '../login_signup/Signup';
import UpdatePost from '../cards/UpdatePost';
import Popup from '../cards/Popup';

function App() {
  return (
    <div className="h-screen w-full font-poppins bg-black">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {

    axios.interceptors.request.use(async (config) => {
    config.headers["projectid"] = "8hsukqjomca0";
    return config;
  });

  const location = useLocation();
  // const isCallingRoute =
  //   location.pathname === "/search" ||
  //   location.pathname === "/profile/post";

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
      <div className='h-screen w-screen bg-white'>
  
      {(location.pathname !== "/pages" && location.pathname !== "/profile/post" && location.pathname !== "/profile/about" && location.pathname !== "/comment" && location.pathname !== "/search" && location.pathname !== "/pages/profilepage/postprofile" && location.pathname !== "/pages/profilepage/aboutprofile" && location.pathname !== "/pages/createpage" && location.pathname !== "/updatepost" && location.pathname !== "/composer")  && getUser && getUser.status === "success" && (
      <Navbar />)}

        <Routes>
          {!getUser && (
          <Route path="/" element={<Login/>}/>)}
          <Route path="/signup" element={<Signup />}/>
          {getUser && getUser.status === "success" && (
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>)}   
          <Route path="/pages" element={<ProtectedRoute><Pages/></ProtectedRoute>}/>
          <Route path="/pages/createpage" element={<ProtectedRoute><CreatePage/></ProtectedRoute>}/>

          <Route path="/pages/profilepage" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}>
                <Route path="postprofile" element={<ProtectedRoute><PostProfile /></ProtectedRoute>}/>
                <Route path="aboutprofile" element={<ProtectedRoute><AboutProfile /></ProtectedRoute>}>
                    <Route path="overview1" element={<ProtectedRoute><Overview1 /></ProtectedRoute>}/> 
                    <Route path="work_education1" element={<ProtectedRoute><Work_education1 /></ProtectedRoute>}/>
                    <Route path="payments" element={<ProtectedRoute><Payments /></ProtectedRoute>}/>
                    <Route path="skills1" element={<ProtectedRoute><Skills1 /></ProtectedRoute>}/>
                </Route>
          </Route>


          <Route path="/videos" element={<ProtectedRoute><Videos/></ProtectedRoute>}/>
          <Route path="/marketplace" element={<ProtectedRoute><Marketplace/></ProtectedRoute>}/>
          <Route path="/group" element={<ProtectedRoute><Group/></ProtectedRoute>}/>
          <Route path="/friends" element={<ProtectedRoute><Friends/></ProtectedRoute>}/>

          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}>
              <Route path="post" element={<ProtectedRoute><Post /></ProtectedRoute>}/> 
              <Route path="about" element={<ProtectedRoute><About /></ProtectedRoute>}> 
                  <Route path="overviews" element={<ProtectedRoute><Overviews /></ProtectedRoute>}/>
                  <Route path="work_education" element={<ProtectedRoute><Work_education /></ProtectedRoute>}/>
                  <Route path="placed_lived" element={<ProtectedRoute><Placed_lived /></ProtectedRoute>}/>
                  <Route path="skills" element={<ProtectedRoute><Skills /></ProtectedRoute>}/>
               </Route>   
          </Route> 
          {/* {isCallingRoute && <Search/>} */}
          <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>}/>       
          <Route path="/comment" element={<ProtectedRoute><Comment /></ProtectedRoute>}/>              
          <Route path="/updatepost" element={<ProtectedRoute><UpdatePost /></ProtectedRoute>}/>              
          <Route path="/composer" element={<ProtectedRoute><Popup /></ProtectedRoute>}/>              
         </Routes>
      
      </div>
  </>)
}

export default App;
