import React from 'react'

const HeroText = () => {
  return (
    <div className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 
  bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 
  dark:from-emerald-900/40 dark:via-green-900/20 dark:to-teal-900/40'>
         {/* Glow / Mesh Effects */}
  <div className="absolute inset-0">
    {/* Soft radial glow top-left */}
    <div className="absolute -top-32 -left-32 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl"></div>
    {/* Teal glow bottom-right */}
    <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-teal-500/30 rounded-full blur-3xl"></div>
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/20 dark:from-black/30 dark:via-transparent dark:to-emerald-900/30 mix-blend-overlay"></div>
  </div>
        {/* <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div> */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>
        <div className='inline-flex  items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse '></span>    
            <p>AI-Powered Financial Management</p>
        </div>
        <div>
            <div >
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 leading-tight'>Welcome to <span className='bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>  ExpenseTracker AI</span></h1>
                <p>Track your expenses, manage your budget, and get AI-powered insights to take control of your finances with intelligent automation.</p>
            </div>
            <div className="flex mt-10 flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2 sm:px-0">
                <button className="group cursor-pointer relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5">
                    <span className="relative z-10 flex items-center justify-center gap-2">Get Started Free<span className="text-lg">→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    </div>
                </button>
                <button className="group cursor-pointer border-2 border-emerald-500/20 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm">Learn More</button>
                </div>
        </div>
        <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-2 sm:px-0' >
            <div className='bg-white/80 hover:scale-105 transition-all duration-300 dark:bg-gray-800/80  w-full backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-600 dark:border-gray-700/50'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                    <span className="text-white text-base sm:text-lg">🤖</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">AI Insights</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">Smart analysis of your spending patterns</p>
            </div>
             <div className='bg-white/80 hover:scale-105 transition-all duration-300 dark:bg-gray-800/80 w-full  backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                    <span className="text-white text-base sm:text-lg">✨</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">AI Auto Categories</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">Smart analysis of Intelligent expense categorizations</p>
            </div>
             <div className='bg-white/80 hover:scale-105 transition-all duration-300 dark:bg-gray-800/80 w-full  backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 sm:col-span-2 md:col-span-1'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                    <span className="text-white text-base sm:text-lg">📊</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">AI Insights</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">Smart analysis of your spending patterns</p>
            </div>
        </div>
    </div>
  )
}

export default HeroText