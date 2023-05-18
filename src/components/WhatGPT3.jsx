import React from 'react'
import Feature from './Feature'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin section__padding py-12' id="whpt3">
      <div className='flex flex-col w-full'>
        <Feature title='What is GPT-3 ?' flex='row' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
        
        <div className='flex flex-row gap-16 justify-between items-center w-full mt-16 mb-8'>
            <h1 className='gradient__text font-bold text-4xl'>Possibilities are beyond your imagination</h1>
            <p className='text-lg gradient__text font-bold cursor-pointer'>Explore The Library</p>
        </div>

        <div className='flex flex-col md:flex-row mt-8'>
            <Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought'/>
            <Feature title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
            <Feature title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3
