import React from 'react'
import Home from './components/Home'
import Works from './components/Works'

function page() {
  return (
    <div className='bg-black/[.9] w-screen min-h-screen flex flex-col items-center justify-center'>
        <Home/>
        {/* <Works/> */}
    </div>
  )
}

export default page