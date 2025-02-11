import Navbar from '@/components/navbar/navbar'
import React from 'react'
import HeroSection from './hero-section'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
  {/* Navbar 
    HeroSection
    Section
  */}  
    <Navbar/>
    <HeroSection/>


    </div>
  )
}

export default page