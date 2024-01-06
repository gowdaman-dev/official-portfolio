import React from 'react'

function Navigation() {
  return (
    <div className='fixed z-10 w-screen px-10 backdrop-blur-[1px]'>
      <div className="w-full border-b border-gray-200/[.6] flex flex py-4 justify-between items-center">
        <div className="logo flex gap-4">
          <h1 className='font-migra-bold  text-white'>Gowdaman</h1>
          <h2 className='text-white'>UI Designer / Developer</h2>
        </div>
        <div className="flex gap-2 ">
          <a className='menulink text-white' href="#work">works,</a>
          <a className='menulink text-white' href="#about">about,</a>
          <a className='menulink text-white' href="#contact">contact,</a>
        </div>
      </div>
    </div>
  )
}

export default Navigation