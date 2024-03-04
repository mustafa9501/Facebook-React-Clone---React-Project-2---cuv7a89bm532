import React from 'react'
import { createContext, useContext, useState } from "react";

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
    const [getId, setId] = useState([]);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [commentPopup, setCommentPopup] = useState(false);
    const [getName, setName] = useState(sessionStorage.getItem('name'));
    const [isActive, setIsActive] = useState(false);
    const [getcomment, setComment] = useState([]);
    const [temp,setTemp]=useState({});
    const [singleId, setSingleId] = useState(0);

    const onClickMidNav = (icon) => {
        setIsActive(icon);
      }

    const onNameHandler = (data)=>{
        setName(data);
        sessionStorage.setItem('name', data);
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
    const closeCommentPopup = () =>{
        setCommentPopup(false);
        }

    const signInUser = (input) => {
        setUser(input);
    };

    const signOutUser = () => {
        setUser(null);
    };

    const object = {
        getUser,
        signInUser,
        signOutUser,
        setId,
        getId,
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
    };

    return (
        <div>
            <UserContext.Provider value={object}>
                {children}
            </UserContext.Provider>
        </div>
    )
}


