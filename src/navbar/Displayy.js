import { Icon } from '@iconify/react'
import { useUser } from '../provider/UserProvider'

const Displayy = () => {

    const {comingSoonPopupClose} = useUser();

    return (
        <>
            <div
                className="absolute right-0 mt-14 mr-4 w-1/4 origin-top-right rounded-md bg-white text-zinc-200 font-semibold py-2 px-2 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
                style={{ boxShadow: '1px 3px 4px 4px rgba(0, 0, 0, 0.1)' }}>

                <div className='Settings flex gap-5 ml-4 '>
                    <Icon icon="ic:baseline-arrow-back" width="2rem" height="2rem" style={{ color: 'black' }} className='mt-4 cursor-pointer rounded-full bg-[#F2F2F2] hover:bg-[#e2e1e1] px-1 py-1' onClick={comingSoonPopupClose}/>
                    <h2 className='text-2xl text-black font-bold mt-1 px-2 py-3'>Display</h2>
                </div>
                <div className='border-b border-slate-400 mt-2'></div>
                <div className='text-black text-lg pl-2.5 pt-5 flex gap-3'>
                    <Icon icon="material-symbols-light:dark-mode" width="2rem" height="2rem" style={{ color: 'black' }}
            className='border bg-[#E4E6EB] rounded-full p-1 mt-2' />
                    <h3 className='pt-2 text-black'>Dark mode</h3>
                </div>
                <p className='text-sm pl-14 text-zinc-500'>Adjust the appearance of Facebook to reduce glare and give your eyes a break.</p>
                <div className='flex justify-between pl-3.5 pr-4 text-black mt-5 text-lg hover:bg-[#e7e6e6] cursor-pointer rounded-lg py-2 ml-10'>
                    <label for='radio-off' className='cursor-pointer'>Off</label>
                    <input type='radio' id='radio-off' name='radio-btn' value='Off' checked="checked" className='w-5 h-5 mt-1 cursor-pointer'/>
                </div>
                <div className='flex justify-between pl-3.5 pr-4 text-black  text-lg hover:bg-[#e7e6e6] cursor-pointer rounded-lg py-2 ml-10 mb-2'>
                    <label for='radio-on' className='cursor-pointer'>On</label>
                    <input type='radio' id='radio-on' name='radio-btn' value='On' className='w-5 h-5 mt-1 cursor-pointer'/>
                </div>
            </div>
        </>
    )
}

export default Displayy
