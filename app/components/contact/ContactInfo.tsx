import React from 'react'
import TopText from '../common/TopText'

const ContactInfo = () => {
  return (
    <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden'>
       <TopText headerText={"Multiple Ways to"} hilightText={'Connect'} AboutText={"Choose the most convenient way to reach out to our ExpenseTracker AI support team."}  mainText={'Contact Information'} />
        <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-2 sm:px-0 mt-10' >
            <div className='bg-white/80 hover:scale-105 transition-all duration-300 dark:bg-gray-800/80  w-full backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-600 dark:border-gray-700/50'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                    <span className="text-white text-base sm:text-lg">✉️</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">Email Support</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">Get detailed assistance with your questions. We typically respond within 24 hours.</p>
                <p className="pt-5 font-semibold text-center mx-auto items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200 text-sm sm:text-base break-all sm:break-normal">
                   <span>support@expensetracker-ai.com→</span>
                </p>
            </div>
             <div className='bg-white/80 hover:scale-105 transition-all duration-300 dark:bg-gray-800/80 w-full  backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                    <span className="text-white text-base sm:text-lg">✨</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">AI Auto Categories</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">Smart analysis of Intelligent expense categorizations</p>
               <p className="pt-5 font-semibold text-center mx-auto items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200 text-sm sm:text-base break-all sm:break-normal">
                   <span>+1 (123) 456-7890 →</span>
                </p>
            </div>
             <div className='bg-white/80 hover:scale-105 transition-all duration-300 dark:bg-gray-800/80 w-full  backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 sm:col-span-2 md:col-span-1'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                    <span className="text-white text-base sm:text-lg">📍</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">Office Locations</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">Visit our headquarters for in-person consultations and partnership discussions.</p>
                <p className="pt-5 font-semibold text-center mx-auto items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200 text-sm sm:text-base break-all sm:break-normal">
                   <span>123 AI Innovation St <br/> Tech City, USA</span>
                </p>
            </div>
        </div>
    </section>
  )
}

export default ContactInfo