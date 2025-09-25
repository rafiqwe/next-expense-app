import React from 'react'
import Faqs from './Faqs'
import TopText from '../common/TopText'

export interface IFaqTexts {
    icon: string,
    header: string,
    text:string,
}

const Faq = () => {
    const faqText: IFaqTexts[] = [
        {
            icon: '?',
            header:"What is ExpenseTracker AI?", 
            text:'ExpenseTracker AI is an intelligent financial management tool that uses artificial intelligence to help you monitor your spending patterns, get smart category suggestions, and receive personalized insights to improve your financial health.'
        },

        {
            icon: '🤖',
            header:"How does the AI work?", 
            text:'Our AI analyzes your spending data to automatically categorize expenses, detect patterns, and provide personalized recommendations. You can also ask the AI questions about your spending habits and get instant, intelligent responses.'
        },

        {
            icon: '💎',
            header:"Is ExpenseTracker AI free?", 
            text:'Yes, ExpenseTracker AI offers a free plan with basic AI features including smart categorization and insights. Premium plans are available for advanced AI analytics and unlimited AI interactions.'
        }
    ]
  return (
    <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden '>
        <TopText headerText={'Frequently Asked'} hilightText={'Questions'}  AboutText={'Everything you need to know about ExpenseTracker AI and how it can transform your financial management.'} mainText={'FAQ'} />
        <div className='space-y-2.5 flex flex-col gap-3 mt-10'>
            {faqText.map((faq, idx) =>(
                 <Faqs key={idx} faq={faq}/>
            ))}

        </div>
    </section>
  )
}

export default Faq