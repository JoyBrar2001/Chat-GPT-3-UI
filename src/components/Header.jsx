import React from 'react'
import people from '../assets/people.png'
import ai from '../assets/ai.png'

const Header = () => {
  return (
    <div className='flex flex-col lg:flex-row section__padding mt-5 lg:mt-2'>
        <div className='flex flex-1 justify-center items-start flex-col mr-20 tracking-tight'>
            <h1 className='text-4xl lg:text-7xl font-bold gradient__text'>Let's Build something amazing with Chat GPT Open AI</h1>
            <p className='text-[#81AFDD] font-[20px]'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

            <div className='w-full my-8 flex'>
                <input type="email" placeholder='Your Email Adress' className='bg-[#052D56] rounded-l-lg text-[#3D6184] min-h-[50px] w-full border-b-2 pl-4' />
                <button type='button' className='w-full min-h-[50px] max-w-[150px] bg-[#FF4820] font-bold text-base text-white rounded-r-lg'>Get Started</button>
            </div>

            <div className='w-full flex justify-start items-center mt-8 text-white'>
                <img src={people} alt="People" className='w-[180px] h-[38px]' />
                <p className='ml-4 text-center'>1,600 people requested access in the past 24 hours</p>
            </div>

        </div>
            <div className='flex flex-1 justify-center items-center'>
                <img src={ai} alt="ai" className='w-full' />
            </div>
    </div>
  )
}

export default Header
