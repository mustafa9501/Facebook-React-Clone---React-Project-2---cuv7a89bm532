import React from 'react'
import { createContext, useContext, useState, useEffect } from "react";
import Profile from '../images/profile.png'
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
  }

export const UserProvider = ({ children }) => {

    const [getUser, setUser] = useState(
        localStorage.getItem("token")
            ? { token: localStorage.getItem("token"), status: "success" }
            : null
    );
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [commentPopup, setCommentPopup] = useState(false);
    const [getName, setName] = useState(sessionStorage.getItem('name'));
    const [getEmail, setEmail] = useState(sessionStorage.getItem('email'));
    // const [imageSrc, setImageSrc] = useState(sessionStorage.getItem('imageSrc'));
    const [isActive, setIsActive] = useState(false);
    const [getcomment, setComment] = useState([]);
    const [temp,setTemp]=useState({});
    const [singleId, setSingleId] = useState(0);
    const [updated, setUpdate] = useState(false);
    const [getdisplay, setDisplay] = useState(false);
    const [getsetting, setSetting] = useState(false);
    const [getfeedback, setFeedback] = useState(false);
    const [gethelp, setHelp] = useState(false);
    const [userId, setUserId] = useState(0);
    const [viewPageId, setViewPageId] = useState(0);
    const [searchDroplist, setSearchDroplist] = useState(false);
    const [commentId, setCommentId] = useState(null);
    const [darkTheme, setDarkTheme] = useState(false);

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
  };
     

    const onClickMidNav = (icon) => {
        setIsActive(icon);
      }  

    const onNameHandler = (data)=>{
        setName(data);
        sessionStorage.setItem('name', data);
    }
    const onEmailHandler = (data)=>{
        setEmail(data);
        sessionStorage.setItem('email', data);
    }
    const openPopup = () =>{
           setPopupOpen(true)           
        };
    const closePopup = () =>{
        setPopupOpen(false);
        }
        
    const openCommentPopup = (id) =>{
        setCommentPopup(true)  
        setSingleId(id)         
        };

    const openComment = (id) =>{  
        setSingleId(id)         
        };

    const closeCommentPopup = () =>{
        setCommentPopup(false);
        }

    const signInUser = (input) => {
        setUser(input);
    };

    const signOutUser = () => {
        setUser(null);
    };

    const popupUpdateOpen = (id) =>{
        setUpdate(true)   
        setSingleId(id);        
     };

    const updatePopupClose = () =>{
        setUpdate(false);
     }

    const displayComponent = () =>{
        setDisplay(true);
    }       
    const helpComponent = () =>{
        setHelp(true);;
    }       
    const settingComponent = () =>{
        setSetting(true);
    }       
    const feedbackComponent = () =>{
        setFeedback(true);          
    }       

     const comingSoonPopupClose = () =>{
        setDisplay(false);
        setFeedback(false);
        setHelp(false);
        setSetting(false);
      }

      const userIdHandler = (id)=>{
        setUserId(id)
      }

      const viewPageHandler = (id)=>{
        setViewPageId(id)
      }

      const searchDroplistHandler = () =>{
        setSearchDroplist(true)
      }

      const searchDroplistClose = () =>{
        setSearchDroplist(false)
      }

      const dropDownHandlerOpen = (id) => {
        setCommentId(id);
    };

    const object = {
        getUser,
        signInUser,
        signOutUser,
        openPopup,
        closePopup,
        isPopupOpen,
        setPopupOpen,
        setCommentPopup,
        commentPopup,
        openCommentPopup,
        closeCommentPopup,
        getName,
        onNameHandler,
        isActive,
        onClickMidNav,
        setComment,
        getcomment,
        setTemp,
        temp,
        singleId,
        popupUpdateOpen,
        updatePopupClose,
        updated,
        displayComponent,
        helpComponent,
        settingComponent,
        feedbackComponent,
        comingSoonPopupClose,
        getdisplay,
        getsetting,
        getfeedback,
        gethelp,
        userId,
        userIdHandler,
        viewPageId,
        viewPageHandler,
        searchDroplistHandler,
        searchDroplist,
        setSearchDroplist,
        searchDroplistClose,
        onEmailHandler,
        getEmail,
        openComment,
        commentId,
        setCommentId,
        handleToggle,
        darkTheme
    };

    return (
        <div>
            <UserContext.Provider value={object}>
                {children}
            </UserContext.Provider>
        </div>
    )
}


