import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 border-t border-gray-100/50 dark:border-gray-700/50 pt-10 ">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 w-[90%] mx-auto  '>
            <div>
                 <div className='flex gap-2 items-center'>
                    <div className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3'>
                        <span className='text-white text-xs sm:text-sm md:text-lg font-bold'>💰</span>
                    </div>
                    <div>
                        <span className="text-sm sm:text-base md:text-md lg:text-lg font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                            ExpenseTracker
                        </span>
                    </div>
                </div>
                <p className='pt-3 text-md text-gray-500 w-96'>
                    Intelligent financial management powered by AI.Track your expenses, manage your budget, and gain insights into your spending patterns.
                </p>
            </div>
            <div>
                <h1 className='text-md md:text-lg font-bold pb-4'>
                    Quick Links
                </h1>
                <ul className='flex flex-col gap-1 text-sm'>
                    <li className='text-gray-400 hover:text-gray-200 transition-colors duration-150 ' >
                        <Link href={'/'}>
                            Home 
                        </Link>
                    </li>
                    <li className='text-gray-400 hover:text-gray-200 transition-colors duration-150 '>
                         <Link href={'/about'}>
                            about 
                        </Link>
                    </li>
                    <li className='text-gray-400 hover:text-gray-200 transition-colors duration-150 '>
                         <Link href={'/contact'}>
                            contact 
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className='text-md md:text-lg font-bold pb-4'>Feature</h1>
                <div className='flex flex-col gap-1 '>
                    <h1 className='flex items-center gap-3  text-gray-400 text-sm'>
                        <div className='w-5 h-5 bg-gradient-to-br from-emerald-500 to-green-500 rounded-md flex items-center justify-center shadow-sm'>
                            <span className='text-white text-xs'>🤖</span>
                        </div>
                         AI-Powered Insights 
                    </h1>
                    <h1 className='flex items-center gap-3 text-gray-400 text-sm'>
                        <div className='w-5 h-5 bg-gradient-to-br from-emerald-500 to-green-500 rounded-md flex items-center justify-center shadow-sm'>
                         <span className='text-white text-xs'>✨</span>
                        </div>
                         Smart Categorization
                    </h1>
                    <h1 className='flex items-center gap-3 text-gray-400 text-sm'>
                        <div className='w-5 h-5 bg-gradient-to-br from-emerald-500 to-green-500 rounded-md flex items-center justify-center shadow-sm'>
                         <span className='text-white text-xs'>📊</span>
                        </div>
                         Analytics Dashboard
                    </h1>
                </div>
            </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-8"></div>
        <div className='flex items-center justify-between w-[90%] mx-auto '>
            <h1 className='text-gray-500 dark:text-gray-400 text-sm'>© {year} ExpenseTracker AI. All rights reserved.</h1>
            <div className='inline-flex items-center text-center gap-2 bg-emerald-50 dark:bg-emerald-900/30  text-emerald-700 dark:text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg justify-center'>
                <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse '></span>    
                <p>Made By Muhammad Rabbi</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer