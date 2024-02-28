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

    const openPopup = () =>{
           setPopupOpen(true)           
        };
    const closePopup = () =>{
        setPopupOpen(false);
        }
    const openCommentPopup = () =>{
        setCommentPopup(true)           
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
    };

    return (
        <div>
            <UserContext.Provider value={object}>
                {children}
            </UserContext.Provider>
        </div>
    )
}


