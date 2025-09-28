import Link from 'next/link'
import React from 'react'
import ToggleThemBtn from './ToggleThemBtn'
import LogginElem from './LogginElem'


interface INavigation {
    PathName: string,
    link: string
}

const DesktopNavBar = () => {

    const navigationLink : INavigation[] =[ 
        {PathName: 'Home', link: '/' },
        {PathName: 'Contact', link: '/contact' },
        {PathName: 'about', link: '/about' },
]

  return (
    <div className='sticky top-0 z-50 bg-white/95 py-3 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-600/50 shadow-lg shadow-gray-900/5 dark:shadow-black/30'>
        <div className='flex items-center justify-between w-[80%] mx-auto'>
            <div className='flex gap-2 items-center'>
                <div className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3'>
                    <span className='text-white text-xs sm:text-sm md:text-lg font-bold'>💰</span>
                </div>
                <div>
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                        ExpenseTracker
                    </span>
                </div>
            </div>
            <div>
                <nav className='hidden md:flex items-center space-x-1'>
                    {navigationLink.map((navlink) => (
                         <Link href={navlink.link}  key={navlink.PathName} className='relative text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 lg:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 group'>
                            {navlink.PathName}
                        </Link>
                    ))}
         
                </nav>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
                <ToggleThemBtn/>
                <LogginElem/>
            </div>
        </div>
    </div>
  )
}

export default DesktopNavBar