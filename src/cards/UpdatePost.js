import Reac, {useState} from 'react'
import axios from 'axios';
import { useUser } from '../provider/UserProvider';
import { Icon } from '@iconify/react';

const UpdatePost = ({ onClose }) => {

    const {singleId, getUser, getName} = useUser();
    const [ getValue, setValue] = useState('dataa');

    const postUpdate = async (event) => {
        event.preventDefault();
  
        let imageData = document.getElementById('images1').files[0];
  
        let formData = new FormData();
        formData.append('title', 'newton');
        formData.append('content', getValue);  // Use the content from getValue state
        formData.append('images', imageData);
        
        try {
            const result = await axios.patch(`https://academics.newtonschool.co/api/v1/facebook/post/${singleId}`, formData, {
                headers: {
                    Authorization: `Bearer ${getUser.token}`
                }
            });
            
            window.location.reload();
            console.log(result);
            
        } catch (err) {
            alert(err.message);
        }
        onClose();
    };

  return (
    <>
         <div className="fixed h-screen w-screen flex items-center justify-center bg-[#F3F3F4] bg-opacity-85">
                <div className="main_popup bg-white w-2/6 h-3/5 rounded-lg drop-shadow-xl">
                    <div className='flex justify-end gap-32'>
                        <h3 className='text-center text-xl font-bold py-3'>Create post</h3>
                        <div className='cursor-pointer pr-3 py-3 flex justify-end' onClick={onClose}>
                            <Icon icon="maki:cross" width="2rem" height="2rem" style={{ color: '#606771' }} className='bg-gray-200 hover:bg-gray-300 rounded-full p-1.5' />
                        </div>
                    </div>
                    <div className='border-b border-gray'></div>
                    <div className='flex'>
                        {getName && 
                        <div className='rounded-full bg-[#c7c5c5] font-bold text-[#1B82E9] text-2xl flex items-center justify-center h-11 w-11 m-4'>{getName.charAt(0)}
                        </div>}
                        {getName && 
                        <h3 className='text-gray text-lg pt-6 font-semibold'>{getName}</h3>}
                    </div>
                    {getName && 
                    <textarea type='text' className='h-32 w-5/7 text-zinc-800 text-2xl pl-1.5 ml-4 mt-1 focus:outline-none resize-none' placeholder={`What's on your mind, ${getName}?`} onChange={(e)=>setValue(e.target.value)}></textarea>}

                    <div className='rounded-lg border border-gray mx-5 '>
                        <div className='flex justify-between px-3 py-3.5'>
                            {/* <h4 className='font-semibold pl-1 cursor-pointer'>Add to your post</h4> */}
                            <input type="file" name="images" id="images1"/>
                            <div className='flex gap-3'>
                                <Icon icon="flat-color-icons:stack-of-photos" width="1.7rem" height="1.7rem" className='cursor-pointer hover:scale-110' />
                                {/* <Icon icon="fa-solid:user-tag" width="1.6rem" height="1.6rem" style={{ color: '#1B82E9' }} className='cursor-pointer hover:scale-110' /> */}
                                <Icon icon="tdesign:feel-at-ease" width="1.6rem" height="1.6rem" style={{ color: '#EAB129' }} className='cursor-pointer hover:scale-110' />
                                {/* <Icon icon="mdi:location" width="1.6rem" height="1.6rem" style={{ color: '#F5533D' }} className='cursor-pointer hover:scale-110' /> */}
                                <Icon icon="heroicons:gif-20-solid" width="1.6rem" height="1.6rem" style={{ color: '#28B19E' }} className='cursor-pointer hover:scale-110' />
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg border bg-[#1B82E9] px-2 py-1.5 mx-5 my-2 text-center text-white font-semibold cursor-pointer hover:bg-[#5997d6]' onClick={postUpdate}>Post</div>
                </div>
            </div>
    </>
  )
}

export default UpdatePost
