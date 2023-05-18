import React from 'react'
import Article from './Article'
import blog01 from '../assets/blog01.png'
import blog02 from '../assets/blog02.png'
import blog03 from '../assets/blog03.png'
import blog04 from '../assets/blog04.png'
import blog05 from '../assets/blog05.png'

const Blog = () => {
  return (
    <div className='section__margin' id='Blog'>
      <div>
        <h1 className='gradient__text text-4xl md:text-6xl font-bold pb-4'>A lot is happening,<br />We are blogging about it.</h1>
      </div>
      <div className='grid grid-cols-1 mt-10 md:grid-cols-3 gap-6 justify-center items-start'>
        <div className='w-full h-full'>
            <Article imgUrl={blog01}/>
        </div>
        <div className='md:col-span-2 grid md:grid-cols-2 gap-6'>
            <Article imgUrl={blog02}/>
            <Article imgUrl={blog03}/>
            <Article imgUrl={blog04}/>
            <Article imgUrl={blog05}/>
        </div>
      </div>
    </div>
  )
}

export default Blog
