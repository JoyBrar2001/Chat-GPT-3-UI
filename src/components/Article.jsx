import React from 'react'

const Article = ({ imgUrl }) => {
  return (
    <div className='w-full h-full flex flex-col bg-[#031B34] rounded-2xl overflow-hidden'>
      <div className='w-full h-[50%] bg-[#031B34]'>
        <img src={imgUrl} className='w-full h-full' alt="blog image" />
      </div>
      <div className='w-full h-full flex flex-col justify-between py-4 px-6'>
        <div>
          <p className='text-sm text-white'>May 18, 2023</p>
          <h3 className='text-xl font-bold text-white'>GPT-3 and Open AI is the future. Let us explore how it is ?</h3>
        </div>
        <p className='text-sm text-white cursor-pointer'>Read full article</p>
      </div>
    </div>
  )
}

export default Article
