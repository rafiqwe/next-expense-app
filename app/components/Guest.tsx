import React from 'react'
import HeroText from './hero-component/HeroText'
import Faq from './FAQ/Faq'
import Testimonials from './testimonials/testimonials'

const Guest = () => {
  return (
     <div>
      <HeroText/>
      <Faq  />
      <Testimonials/>
    </div>
  )
}

export default Guest