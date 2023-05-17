import React from 'react'
import dropbox from '../assets/dropbox.png'
import google from '../assets/google.png'
import slack from '../assets/slack.png'
import atlassian from '../assets/atlassian.png'
import shopify from '../assets/shopify.png'

const Brands = () => {
  return (
    <div className='section__padding py-12 w-full flex gap-6 flex-wrap justify-center items-center'>
      <img src={google} alt="" />
      <img src={dropbox} alt="" />
      <img src={slack} alt="" />
      <img src={atlassian} alt="" />
      <img src={shopify} alt="" />
    </div>
  )
}

export default Brands
