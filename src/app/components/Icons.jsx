"use client"
import React from 'react'
import { useEffect,useState } from 'react'


export default function Icons() {

    const [isVisible, setIsVisible] = useState(false);
    
  return (
    <div className=' text-white rounded-full bg-blue-400  fixed bottom-4 right-4 w-10 h-10 flex items-center justify-center cursor-pointer z-999' onClick={setIsVisible}>
      <p>^</p>
    </div>
  )
}
