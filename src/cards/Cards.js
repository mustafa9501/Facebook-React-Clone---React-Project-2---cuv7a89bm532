import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { useUser } from "../provider/UserProvider";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import Profile from "../images/profile.png"

export function Cards({ src, src1, alt, name, createdAt, content, likeCount, commentCount, id, authorId }) {

  const { getUser, openCommentPopup, setComment, userIdHandler, openComment, darkTheme } = useUser();
  const [getDropdownn, setDropdownn] = useState(false);
  const [liked, setLiked] = useState(false);
  const [displayLikeCount, setDisplayLikeCount] = useState(likeCount);
  const popupRef = useRef(null);


  const likeHandler = async (postId) => {
    try {
      // Fetch the post data from the API
      const response = await axios.get(`https://academics.newtonschool.co/api/v1/facebook/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${getUser.token}`
        }
      });

      // Extract the isLiked and likeCount properties from the API response
      const { isLiked, likeCount } = response.data.data;

      // Toggle the like status
      if (isLiked) {
        // Unlike the post
        await axios.delete(`https://academics.newtonschool.co/api/v1/facebook/like/${postId}`, {
          headers: {
            Authorization: `Bearer ${getUser.token}`
          }
        });
        // Decrease likeCount
        const updatedLikeCount = likeCount - 1;
        setDisplayLikeCount(updatedLikeCount);
        // Remove like status from localStorage
        localStorage.removeItem(`liked-${postId}`);
      } else {
        // Like the post
        await axios.post(`https://academics.newtonschool.co/api/v1/facebook/like/${postId}`, null, {
          headers: {
            Authorization: `Bearer ${getUser.token}`
          }
        });
        // Increase likeCount
        const updatedLikeCount = likeCount + 1;
        setDisplayLikeCount(updatedLikeCount);
        // Store like status in localStorage
        localStorage.setItem(`liked-${postId}`, 'true');
      }
      // Toggle the liked state
      setLiked(!isLiked);
      // Update the local state or perform any other necessary actions
      // For example, you can update the UI to reflect the new like status and like count
      console.log("Like status toggled successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };


  useEffect(() => {
    // Check if the post is liked
    const likedState = localStorage.getItem(`liked-${id}`);
    if (likedState === 'true') {
      setLiked(true);
    }
  }, [id]);

  const userCommentPost = async () => {
    axios.get(`https://academics.newtonschool.co/api/v1/facebook/post/${id}/comments`).then((response) => {
      console.log(response.data.data)
      setComment(response.data.data)
    }).catch((error) => {
      // console.log(error);
    })
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        // Clicked outside the popup, close it
        setDropdownn(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  const [dropDownFlag, setDropDownFlag] = useState(false)
  // let dropDownFlag = false;
  const dropDownHandler = (() => {
    // const filteredData = name.filter(item => item.owner.email === getEmail);
    if(sessionStorage.getItem("name") === name){
      setDropDownFlag(true);
    } else {
      setDropDownFlag(false);
    }
    setDropdownn(!getDropdownn);
  })

  // const onClickHandler =(event)=>{
  //    event.preventDefault();
  // }

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
      {isScreenSmall ? (
        <div className={`${darkTheme && 'dark'}`}>
          <>
            <Card className="w-full mx-2rounded-xl dark:bg-[#323436]">
              <CardHeader className="flex justify-between gap-3 dark:bg-[#323436] dark:text-white">
                <Link to='/profile/post'><div className="py-2.5 flex" onClick={() => userIdHandler(authorId)}>
                  <img className="w-10 h-10 rounded-full" src={src1 || Profile} alt="Rounded avatar" />
                  <Typography variant="h4" color="blue-gray" className="px-3 text-lg hover:underline ">
                    {name}
                  </Typography>
                </div></Link>
                <div className="Edit flex pt-3" onClick={dropDownHandler}>
                  <Icon icon="solar:menu-dots-bold" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : '#6c6a6a' }} className="rounded-full hover:bg-[#e4e1e1] cursor-pointer p-1" />
                </div>
                {getDropdownn && <Dropdown id={id} dropDownFlag={dropDownFlag} />}
              </CardHeader>
              <Typography variant="h4" color="blue-gray" className="text-[10px] absolute mt-9 ml-16 pl-1.5 text-zinc-500 dark:text-white">
                {createdAt}
              </Typography>

              <CardBody floated={false} className="p-0 h-full w-full dark:text-white">
                <p className="pl-3 pr-2 pt-2 pb-3">{content}</p>
                <div className="flex justify-center mb-3">
                  <img src={src} alt="image" />
                </div>
                <div className="flex justify-between">
                  <div className="ml-4 mb-2.5 bg-blue-500 w-5 h-5 rounded-full flex gap-3"><div className="flex mt-1 ml-1"><Icon icon="mdi:like" width="0.8rem" height="0.8rem" style={{ color: 'white' }} /></div>
                    <h5 className="mb-2">{displayLikeCount}</h5>
                  </div>
                  <div className="mr-4 flex gap-1"><h5>{commentCount}</h5>
                    <Icon icon="basil:comment-solid" width="1.4rem" height="1.4rem" style={{ color: darkTheme ? 'white' : '#606770' }} /></div>
                </div>
                <div className="border-b border-neutral-400 mx-4"></div>
              </CardBody>

              <CardFooter className="flex justify-between px-2 pt-2 pb-1 ">
                <Typography className="flex gap-2 cursor-pointer rounded-md px-5 py-1" onClick={() => likeHandler(id)}>
                  <Icon icon={liked ? "mdi:like" : "mdi:like-outline"} width="1.2rem" height="1.2rem" style={{ color: liked ? '#1877F2' : (darkTheme ? 'white' : 'gray') }} className="mt-0.5" />
                  <h4 className={`font-semibold
            ${liked ? 'text-[#1877F2]' : (darkTheme ? 'dark:text-white' : 'text-gray-600')} text-sm font-semibold pt-0.5`}>Like</h4>
                </Typography>
                <Typography className="flex gap-2 cursor-pointer hover:bg-[#F2F2F2] rounded px-2 py-1 mb-1" onClick={() => { openComment(id); userCommentPost() }}>
                  <Icon icon="cil:comment-bubble" width="1.2rem" height="1.2rem" style={{ color: darkTheme ? 'white' : 'gray' }} className="mt-1" />
                  <Link to='/comment'><h4 className="text-gray-600 dark:text-white font-semibold
              test-sm">Comment</h4></Link>
                </Typography>
                <Typography className="flex gap-2 cursor-not-allowed hover:bg-[#F2F2F2] rounded px-3 py-1 mb-1">
                  <Icon icon="majesticons:share-line" width="1.5rem" height="1.5rem" style={{ color: darkTheme ? 'white' : 'gray' }} />
                  <h4 className="font-semibold
            text-gray-600 dark:text-white test-sm">Share</h4>
                </Typography>
              </CardFooter>

            </Card>
          </>
        </div>
      ) : (
        <div className={`${darkTheme && 'dark'}`}>
          <Card className="w-full px-2 mx-2rounded-xl dark:bg-[#323436]">
            <CardHeader className="flex justify-between gap-3.5 dark:bg-[#323436]">
              <Link to='/profile/post'><div className="py-2.5 flex" onClick={() => userIdHandler(authorId)}>
                <img className="w-10 h-10 rounded-full" src={src1 || Profile} alt="Rounded avatar" />
                <Typography variant="h4" color="blue-gray" className="px-3 text-lg hover:underline dark:text-white">
                  {name}
                </Typography>
              </div></Link>
              <div ref={popupRef} className="Edit flex pt-3" onClick={dropDownHandler}>
                <Icon icon="solar:menu-dots-bold" width="2rem" height="2rem" style={{ color: darkTheme ? 'white' : '#6c6a6a' }} className="rounded-full hover:bg-[#e4e1e1] dark:hover:bg-[#606264] cursor-pointer p-1" />
              </div>
              {getDropdownn && <Dropdown id={id} dropDownFlag={dropDownFlag}/>}
            </CardHeader>
            <Typography variant="h4" color="blue-gray" className="text-[10px] absolute mt-9 ml-16 pl-1 text-zinc-500 dark:text-zinc-300">
              {createdAt}
            </Typography>

            <CardBody floated={false} className="p-0 h-full w-full px-2">
              <p className="pl-6 pr-3 pt-2 pb-3 dark:text-white">{content}</p>
              <div className="flex justify-center mb-3">
                <img src={src} alt="image" />
              </div>
              <div className="flex justify-between">
                <div className="ml-4 mb-2.5 bg-blue-500 w-5 h-5 rounded-full flex gap-3"><div className="flex mt-1 ml-1"><Icon icon="mdi:like" width="0.8rem" height="0.8rem" style={{ color: 'white' }} /></div>
                  <h5 className="mb-2 dark:text-white">{displayLikeCount}</h5>
                </div>
                <div className="mr-4 flex gap-1 dark:text-white"><h5>{commentCount}</h5>
                  <Icon icon="basil:comment-solid" width="1.4rem" height="1.4rem" style={{ color: darkTheme ? 'white' : '#606770' }} /></div>
              </div>
              <div className="border-b border-neutral-400 dark:border-neutral-500 mx-4"></div>
            </CardBody>

            <CardFooter className="flex justify-between px-5 pt-2 pb-1 dark:text-white">
              <Typography className="flex gap-2 cursor-pointer hover:bg-[#F2F2F2] dark:hover:bg-[#606264] rounded-md px-5 py-1" onClick={() => likeHandler(id)}>
                <Icon icon={liked ? "mdi:like" : "mdi:like-outline"} width="1.2rem" height="1.2rem" style={{ color: liked ? '#1877F2' : (darkTheme ? 'white' : 'gray') }} className="mt-0.5" />
                <h4 className={`font-semibold
            ${liked ? 'text-[#1877F2]' : (darkTheme ? 'dark:text-white' : 'text-gray-600')} text-sm pt-0.5`}>Like</h4>
              </Typography>
              <Typography className="flex gap-2 cursor-pointer hover:bg-[#F2F2F2] dark:hover:bg-[#606264] rounded px-2 py-1 mb-1" onClick={() => { openCommentPopup(id); userCommentPost() }}>
                <Icon icon="cil:comment-bubble" width="1.2rem" height="1.2rem" style={{ color: darkTheme ? 'white' : 'gray' }} className="mt-1" />
                <h4 className="text-gray-600 font-semibold
              test-sm dark:text-white">Comment</h4>
              </Typography>
              <Typography className="flex gap-2 cursor-not-allowed hover:bg-[#F2F2F2] dark:hover:bg-[#606264] rounded px-3 py-1 mb-1">
                <Icon icon="majesticons:share-line" width="1.5rem" height="1.5rem" style={{ color: darkTheme ? 'white' : 'gray' }} />
                <h4 className="font-semibold
            text-gray-600 dark:text-white test-sm">Share</h4>
              </Typography>
            </CardFooter>

          </Card>
        </div>
      )}

    </>
  );
}