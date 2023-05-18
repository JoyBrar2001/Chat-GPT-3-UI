import React from 'react'

const Feature = ({ title, text, flex }) => {
  return (
    <div className={`w-full flex gap-4  items-start m-4 ${flex == 'row' ? 'flex-col md:flex-row justify-between' : 'flex-col'}`}>
      <div className='max-w-[180px] mr-8 relative'>
        <div className='absolute w-[38px] h-[3px] feature__gradient top-[-10px]' />
        <h1 className='text-white text-xl font-semibold'>{title}</h1>
      </div>
      <div className='flex max-w-[390px]'>
        <p className='text-[#81AFDD]'>
          {text}
        </p>
      </div>
    </div>
  )
}

export default Feature
