import { Icon } from '@iconify/react'
import { useUser } from '../provider/UserProvider'

const SettingPrivacy = () => {

    const {comingSoonPopupClose} = useUser();

    return (
        <>
            <div
                className="absolute right-0 mt-14 mr-4 w-1/4 origin-top-right rounded-md bg-white text-zinc-200 font-semibold py-2 px-2 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
                style={{ boxShadow: '1px 3px 4px 4px rgba(0, 0, 0, 0.1)' }} >

                <div className='Settings flex gap-5 ml-4 '>
                    <Icon icon="ic:baseline-arrow-back" width="2rem" height="2rem" style={{ color: 'black' }} className='mt-4 cursor-pointer rounded-full bg-[#F2F2F2] hover:bg-[#e2e1e1] px-1 py-1' onClick={comingSoonPopupClose}/>
                    <h2 className='text-2xl text-black font-bold mt-1 px-2 py-3'>Settings & privacy</h2>
                </div>
                <div className='border-b border-slate-400 mt-2'></div>
                <div className='text-black
                text-lg p-5 flex gap-3'>
                    <Icon icon="mingcute:information-fill" width="2rem" height="2rem" style={{ color: 'gray' }} className='mt-0.5'/>
                    <h3 className='pt-1 text-zinc-700'>This feature is coming soon !!</h3>
                </div>
            </div>
        </>
    )
}

export default SettingPrivacy
