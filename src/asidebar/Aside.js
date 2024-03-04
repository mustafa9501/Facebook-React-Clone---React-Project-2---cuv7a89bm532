import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../provider/UserProvider';

const Aside = () => {
  const {getName, onClickMidNav } = useUser();
 
  return (
    <div className='px-3 py-3'>

        <div className='flex hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer  px-1 py-2'>
          {getName && 
          <div className='rounded-full bg-[#c7c5c5] font-bold text-[#1B82E9] text-xl items-center justify-center h-8 w-8 flex'>{getName.charAt(0)}
          </div>}
          {getName && 
          <h3 className='text-black pl-4 pt-1 text-base font-semibold'>{getName}</h3>}
        </div>

        <div className='flex gap-4 px-2 pt-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="dashicons:plus-alt" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>COVID-19 Information Center</h3>
        </div>

        <Link to='/pages'><div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer mt-2'>
        <Icon icon="noto-v1:triangular-flag" width="1.6rem" height="1.6rem" onClick={() => onClickMidNav('page')}/>
        <h3 className='font-semibold'>Pages</h3>
        </div></Link>

        <Link to='/friends'><div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="fa-solid:user-friends" width="1.7rem" height="1.7rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Friends</h3>
        </div></Link>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="icon-park:time" width="1.6rem" height="1.6rem" />
        <h3 className='pt-0.5 font-semibold'>Memories</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="ph:bookmarks-simple-duotone" width="1.6rem" height="1.7rem"  style={{color: '#B749CE'}} />
        <h3 className='pt-0.5 font-semibold'>Saved</h3>
        </div>

        <Link to='/group'><div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="el:group-alt" width="1.5rem" height="1.5rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Groups</h3>
        </div></Link>
        
        <Link to='/videos'><div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="mdi:youtube-tv" width="1.5rem" height="1.5rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Videos</h3>
        </div></Link>

        <Link to='/marketplace'><div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="healthicons:market-stall" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Marketplace</h3>
        </div></Link>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="flat-color-icons:feedback" width="1.6rem" height="1.6rem" />
        <h3 className='pt-0.5 font-semibold'>Feeds</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
       <Icon icon="icon-park:schedule" width="1.6rem" height="1.6rem" />
        <h3 className='pt-0.5 font-semibold'>Events</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="svg-spinners:bars-scale-fade" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Ads Manager</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="fluent-emoji:drop-of-blood" width="1.6rem" height="1.6rem" />
        <h3 className='pt-0.5 font-semibold'>Blood Donation</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="fluent-emoji-flat:potted-plant" width="1.6rem" height="1.6rem" />
        <h3 className='pt-0.5 font-semibold'>Climate Science Center</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="fluent:payment-16-filled" width="1.6rem" height="1.6rem"  style={{color: '#1f224c'}} />
        <h3 className='pt-0.5 font-semibold'>Facebook Pay</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="mingcute:refund-dollar-line" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Fundraisers</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="simple-icons:facebookgaming" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Gaming Video</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="logos:messenger" width="1.6rem" height="1.6rem" />
        <h3 className='pt-0.5 font-semibold'>Messenger</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="simple-icons:messenger" width="1.6rem" height="1.6rem"  style={{color: '#64dd93'}} />
        <h3 className='pt-0.5 font-semibold'>Messenger Kids</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="fluent:games-16-filled" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>PLay Games</h3>
        </div>

        <div className='flex gap-4 px-2 py-2 hover:bg-[#e6e3e3] hover:rounded-md cursor-pointer'>
        <Icon icon="codicon:layout-activitybar-right" width="1.6rem" height="1.6rem"  style={{color: '#1B82E9'}} />
        <h3 className='pt-0.5 font-semibold'>Recent ad Activity</h3>
        </div>

        <div className='border-b border-slate-300 ml-2 mt-3'></div>
        <h6 className='text-zinc-500 text-xs mt-3 ml-2 mb-2'>Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  · More · Meta © 2024</h6>

    </div>
  )
}

export default Aside
