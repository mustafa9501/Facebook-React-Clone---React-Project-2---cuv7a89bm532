import React from 'react';
import {
    Card,
    Typography,
} from "@material-tailwind/react";
import { useState } from 'react';
import Avatar from '../images/avatar-png.png';
import { Icon } from '@iconify/react/dist/iconify.js';
import Delete from './Delete';
import { useUser } from '../provider/UserProvider';



export function CardComment({ content, id, name }) {

    const {setCommentId} = useUser();
    console.log(name)
    const [getDropdown, setDropdown] = useState(false);

    const dropDownHandler = ((event,id) => {
        event.preventDefault();
        setDropdown(!getDropdown);
        setCommentId(id)
    })

    // const dropDownHandler = ((event, id, index) => {
    //     event.preventDefault();
    //     const newDropDown = [...getDropdown]
    //     newDropDown[index] = !newDropDown[index]
    //     setDropdown(newDropDown);
    //     // setDropdown(index = true)
    //     setCommentId(id)
    // })

    console.log(id)

    return (
        <>
            <Card className="w-full px-5 pb-1.5 pt-1.5 dark:bg-[#323436]">
                <Typography className='flex gap-10'>
                    <div className='flex justify-start gap-4'><img src={Avatar} alt='profile' className='h-10 w-10 bg-gray-100 rounded-full ' />
                        <div className='rounded-3xl bg-[#F0F2F5] dark:bg-[#323436] px-3 p-'>
                            <h2 className='font-semibold text-lg dark:text-white'>{name}</h2>
                            <p className='text-black text-md dark:text-white'>{content}</p>
                        </div>
                    </div>
                    <div onClick={(event) => {dropDownHandler(event, id)}}>
                        <Icon icon="tabler:dots" width="1.7rem" height="1.7rem" style={{ color: 'gray' }} className=' rounded-full hover:bg-gray-200 cursor-pointer' />
                    </div>
                </Typography>
                <Typography className='flex gap-4 pl-[70px] pt-1'>
                    <h6 className='text-[11px] font-bold cursor-not-allowed dark:text-white'>Like</h6>
                    <h6 className='text-[11px] font-bold cursor-not-allowed dark:text-white'>Reply</h6>
                </Typography>
                {getDropdown && <Delete />}
            </Card>
        </>
    );
}
