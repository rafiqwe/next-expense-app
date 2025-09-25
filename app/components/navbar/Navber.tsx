import { checkUser } from '@/lib/checkUser'
import React from 'react'
import DesktopNavBar from './DesktopNavBar'
import MobileNavBar from './MobileNavBar'

const Navber = () => {
    const user = checkUser()
  return (
   <div className='fixed top-0 w-full z-30'>
    <div className='hidden md:block'>
      <DesktopNavBar/>
    </div>
    <div className='md:hidden'>
      <MobileNavBar/>
    </div>
   </div>
  )
}

export default Navber