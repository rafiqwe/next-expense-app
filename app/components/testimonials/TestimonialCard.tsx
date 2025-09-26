import React from 'react'
interface ItestimProps {
    name: string,
    icon: string,
    testimonial:string
}

const TestimonialCard: React.FC<ItestimProps> = ({name, icon, testimonial}) => {
  return (
    <div className='bg-white/80 hover:scale-105 transition-all duration-300 dark:bg-gray-800/80  w-full backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-600 dark:border-gray-700/50 '>
        <div className='flex justify-start gap-4'>
            <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg mb-3 sm:mb-4'>
            <span className="text-white text-base sm:text-lg"> {icon} </span>
            </div>
                <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 -ml-2  text-center">
                    {name}</h3>
                     <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">Verified User</p>
                </div>
            </div>
        <div className='mt-3 '>
            <p className='text-md text-gray-400 mb-5 '>
                “{testimonial}”
            </p>
            <p>⭐⭐⭐⭐⭐</p>
        </div>
    </div>
  )
}

export default TestimonialCard