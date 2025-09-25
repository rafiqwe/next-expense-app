import React from 'react'

interface ITopTextProps{
    headerText: string,
    AboutText:string,
    hilightText:string,
    mainText:string
}

const TopText : React.FC<ITopTextProps> = ({headerText, AboutText,hilightText, mainText }) => {
  return (
        <div className='flex items-center justify-center flex-col'>
            <div className='inline-flex  items-center text-center gap-2 bg-emerald-50 dark:bg-emerald-900/30  text-emerald-700 dark:text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg justify-center'>
                <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse '></span>    
                <p>{mainText}</p>
            </div>
            <div className='text-center' >
                <h1 className='text-3xl  md:text-3xl lg:text-5xl xl:text-5xl font-bold mb-4 sm:mb-6 text-gray-600 dark:text-gray-100 leading-tight'> {headerText}  <span className='bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'> {hilightText} </span></h1>
                <p className='text-center'> {AboutText} </p>
            </div>
        </div>
  )
}

export default TopText