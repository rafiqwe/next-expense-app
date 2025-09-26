import React from 'react'
import TopText from '../common/TopText'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {

    const testimonialsArr = [
        {
            name: "Sarah L.",
            testimonial:"ExpenseTracker AI has completely transformed my budgeting. The AI insights are incredibly helpful and I now have full control over my finances!",
            icon: 'S'
        },
        {
            name: "John D.",
            testimonial:"The AI-powered insights from ExpenseTracker have helped me identify and reduce unnecessary spending. The smart categorization is amazing!",
            icon: 'J'
        },
        {
            name: "Emily R.",
            testimonial:"ExpenseTracker AI is so intelligent and easy to use. The AI recommendations are spot-on and have genuinely improved my financial habits!",
            icon: 'E'
        }
    ]

  return (
    <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 w-full'>
        <TopText headerText={'What Our Users'} hilightText={'Say'}  AboutText={'Join thousands of satisfied users who have transformed their financial habits with ExpenseTracker AI.'} mainText={'Testimonials'} />
        <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-2 sm:px-0 mt-10' >
             {testimonialsArr.map((testimonials, idx) => (
                <TestimonialCard key={idx} name={testimonials.name} icon={testimonials.icon} testimonial={testimonials.testimonial} />
             ))}  
        </div>
    </section>
  )
}

export default Testimonials