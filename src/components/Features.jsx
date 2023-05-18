import React from 'react'
import Feature from './Feature'

const Features = () => {

  const featuresData = [
    {
      title: 'Improving end distrusts instantly',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
      title: 'Become the tended active',
      text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
      title: 'Message or am nothing',
      text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
      title: 'Really boy law county',
      text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
    },
  ]

  return (
    <div className='section__margin flex flex-col lg:flex-row justify-between mt-24 gap-12'>
      <div className='w-full lg:max-w-[450px] flex flex-col gap-4'>
        <h1 className='gradient__text text-3xl font-bold'>The Future is now, and you just need to realize it. Step into the Future Today and make it happen!</h1>
        <p className='gradient__text font-semibold text-base'>Request Early Access to get Started</p>
      </div>
      <div>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index} flex='row' />
        ))}
      </div>
    </div>
  )
}

export default Features
