import React from 'react'
import VRImg from '../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='section__margin flex flex-col md:flex-row gap-20 md:gap-4 justify-center items-center mt-20' id='possibility'>
      <img src={VRImg} className='max-w-[350px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px]' alt="VR Image" />
      <div className='text-white flex flex-col gap-4 justify-center items-start'>
        <h2 className='text-[#64d3ff] text-xl'>Request Early Access to get Started</h2>

        <h1 className='gradient__text font-bold text-4xl lg:text-5xl'>The Possibilities are beyond your imagination</h1>
        <p className='text-[#81AFDD] text-'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto mollitia deleniti in voluptatem quisquam voluptates autonsectetur aspernatur aliquid excepturi.</p>

        <h2 className='text-[#c67b70] text-xl'>Request Early Access to get Started</h2>

      </div>
    </div>
  )
}

export default Possibility
