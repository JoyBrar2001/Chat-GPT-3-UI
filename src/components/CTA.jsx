import React from 'react'

const CTA = () => {
  return (
    <div className='feature__gradient text-white flex justify-between items-center flex-col gap-6 md:flex-row p-8 m-16 rounded-2xl'>
      <div className='text-gray-800'>
        <p className='font-semibold text-sm'>Request Early Access to Get Started</p>
        <h3 className='font-extrabold text-lg md:text-2xl'>Register today & start exploring the endless Possibilities</h3>
      </div>
      <div className='flex justify-center items-center'>
        <button className='bg-black rounded-full py-2 px-6 font-semibold' type='button'>Get Started</button>
      </div>
    </div>
  )
}

export default CTA
