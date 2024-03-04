import React, { useState } from "react";
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

export function Cards({ src, src1, alt, name, createdAt, content, likeCount, commentCount, id, click, }) {

  const { getUser, openCommentPopup, setComment, setTemp, getId, temp } = useUser();
  const [getDropdown, setDropdown] = useState(false);

  const likeHandler = async (idd) => {
    await axios.post(`https://academics.newtonschool.co/api/v1/facebook/like/${idd}`, null, {
      headers: {
        Authorization: `Bearer ${getUser.token}`
      }
    }).then((response) => {
      if (response.data.status === 'success') {
        alert(response.data.message);
      }
      click()
    }).catch((error) => {
      alert(error.response.data.message);
    })
  }


  const userCommentPost = async () => {
    axios.get(`https://academics.newtonschool.co/api/v1/facebook/post/${id}/comments`).then((response) => {
      console.log(response.data.data)
      setComment(response.data.data)

    }).catch((error) => {
      console.log(error);
    })
  }

  const dropDownHandler = (()=>{
    setDropdown(!getDropdown);
})

  // const post = (getId.find(post => post._id === id))

  // console.log(post)

  return (
    <>
      <Card className="w-full ml-2 rounded-xl">
        <CardHeader className="flex justify-between gap-3.5">
          <div className="py-3 flex">
            <img className="w-10 h-10 rounded-full" src={src1} alt="Rounded avatar" />
            <Typography variant="h4" color="blue-gray" className="px-3 text-lg">
              {name}
            </Typography>
          </div>
          <div className="Edit flex pt-3" onClick={dropDownHandler}>
            <Icon icon="solar:menu-dots-bold" width="2rem" height="2rem" style={{ color: '#6c6a6a' }} className="rounded-full hover:bg-[#e4e1e1] cursor-pointer p-1"/>
          </div>
          {getDropdown && <Dropdown />}
        </CardHeader>
        <Typography variant="h4" color="blue-gray" className="text-[10px] absolute mt-9 ml-16 pl-1.5 text-zinc-500">
          {createdAt}
        </Typography>

        <CardBody floated={false} className="h-full w-full">
          <p className="pl-6 pr-3 pb-3">{content}</p>
          <div className="flex justify-center mb-3">
            <img src={src} alt={alt} />
          </div>
          <div className="flex justify-between">
            <div className="ml-4 mb-2.5 bg-blue-500 w-5 h-5 rounded-full flex gap-3"><div className="flex mt-1 ml-1"><Icon icon="mdi:like" width="0.8rem" height="0.8rem" style={{ color: 'white' }} /></div>
              <h5 className="mb-2">{likeCount}</h5>
            </div>
            <div className="mr-4 flex gap-1"><h5>{commentCount}</h5>
              <Icon icon="basil:comment-solid" width="1.4rem" height="1.4rem" style={{ color: '#606770' }} /></div>
          </div>
          <div className="border-b border-neutral-400 mx-4"></div>
        </CardBody>

        <CardFooter className="flex justify-between px-5 pt-2 pb-1">
          <Typography className="flex gap-2 cursor-pointer hover:bg-[#F2F2F2] rounded-md px-5 py-1" onClick={() => likeHandler(id)}>
            <Icon icon="mdi:like" width="1.2rem" height="1.2rem" style={{ color: 'gray' }} className="mt-0.5" />
            <h4 className="font-semibold
            text-gray-600  test-sm">Like</h4>
          </Typography>
          <Typography className="flex gap-2 cursor-pointer hover:bg-[#F2F2F2] rounded px-2 py-1 mb-1" onClick={() => { openCommentPopup(id); userCommentPost() }}>
            <Icon icon="cil:comment-bubble" width="1.2rem" height="1.2rem" style={{ color: 'gray' }} className="mt-1" />
            <h4 className="text-gray-600 font-semibold
              test-sm">Comment</h4>
          </Typography>
          <Typography className="flex gap-2 cursor-pointer hover:bg-[#F2F2F2] rounded px-3 py-1 mb-1">
            <Icon icon="majesticons:share-line" width="1.5rem" height="1.5rem" style={{ color: 'gray' }} />
            <h4 className="font-semibold
            text-gray-600  test-sm">Share</h4>
          </Typography>
        </CardFooter>

      </Card>
    </>
  );
}