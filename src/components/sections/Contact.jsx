import React from 'react'
import ContactForm from '../common/ContactForm'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

const Contact = () => {
  const cirRef = useRef(null)
  useGSAP(()=>{
    // rotateCircle(cirRef.current)
  })
  return (
    <div id="contact" className='w-screen h-screen overflow-hidden  flex  justify-center items-center p-4'>
      <ContactForm/>
    </div>
  )
}

export default Contact