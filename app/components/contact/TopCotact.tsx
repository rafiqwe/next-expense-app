import React from 'react'

const TopCotact = () => {
  return (
    <div className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8  h-screen
        bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500
    dark:from-emerald-900/40 dark:via-green-900/20 dark:to-teal-900/40'>
        <div className="absolute inset-0">
        {/* Soft radial glow top-left */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl"></div>
        {/* Teal glow bottom-right */}
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-teal-500/30 rounded-full blur-3xl"></div>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/20 dark:from-black/30 dark:via-transparent dark:to-emerald-900/30 mix-blend-overlay"></div>
        </div>
        <div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>
        <div className='inline-flex  items-center text-center gap-2 bg-emerald-50 dark:bg-emerald-900/30  text-emerald-700 dark:text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg justify-center'>
                <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full font-semibold animate-pulse '></span>    
                <p>Get in touch</p>
            </div>
            <div className='text-center mt-5 ' >
                <h1 className='text-[6vw] font-bold mb-4 sm:mb-6 text-gray-600 dark:text-gray-100 leading-tight'> Contact   <span className='bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>ExpenseTracker AI  </span></h1>
                <p className='text-center w-[80%] mx-auto text-gray-500 text-2xl'> Have questions about AI-powered expense tracking or need help? We're here to assist you with intelligent financial management.  </p>
            </div>
            <div>
                
                <button></button>
            </div>
        </div>
    </div>
  )
}

export default TopCotact