import React from 'react'
import { IFaqTexts } from './Faq'

export interface IFaqText {
    faq: IFaqTexts
}
const Faqs: React.FC<IFaqText> = ({faq}) => {
  return (
    <div  className='group hover:scale-110  bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-400 w-full md:w-[70%] mx-auto'>
        <div className='flex items-start gap-3 sm:gap-4'>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white text-xs sm:text-sm">{faq.icon} </span>
            </div>
            <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">{faq.header}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{faq.text}</p>
            </div>     
        </div>
    </div>
  )
}

export default Faqs