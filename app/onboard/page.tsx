
import Navbar from '@/components/navbar/navbar';
import React from 'react'
import CreateProfile from './contact-form';

type Props = {}

const OnBoard = (props: Props) => {
  return (
    <div>
      <Navbar/>
      <CreateProfile/>
    </div>
  )
}

export default OnBoard;