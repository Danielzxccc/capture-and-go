import React from 'react'
import daniel from '../../assets/aboutus/Daniel.jpg'

import p1 from '../../assets/aboutus/Marie.jpg'
import p2 from '../../assets/aboutus/Winchell.jpg'
import p3 from '../../assets/aboutus/Patrick.jpg'
import p4 from '../../assets/aboutus/Ellaine.jpg'
import p5 from '../../assets/aboutus/Dennisse.jpg'

const Team = () => {
  const teams = [
    {
      name: 'Sophia Marie Davis',
      position: 'Photographer',
      source: p1,
    },
    {
      name: 'Madison Winchell Lee',
      position: 'Set Designer',
      source: p2,
    },
    {
      name: 'Alexander Patrick Lee',
      position: 'Photographer',
      source: p3,
    },
    {
      name: 'Victoria Ellaine Patel',
      position: 'Studio Manager',
      source: p4,
    },
    {
      name: 'Emily Dennisse Thompson',
      position: 'Photo Editor',
      source: p5,
    },
  ]

  return (
    <>
      <div className='flex md:flex-row flex-col md:px-20 px-4 md:mt-8 mt-5'>
        <div className='flex-1 md:p-20 p-10 flex flex-col items-center justify-center'>
          <img
            src={daniel}
            alt='Ceo'
            className=' rounded-full md:h-56 md:w-56 h-40 w-40 object-cover'
          />
          <div className='flex flex-col items-center justify-center mt-5 p-2 bg-[#4B4A46] font-lora text-white font-semibold w-56'>
            <div className='w-full'>
              <h2>CEO</h2>
              <h2>James Daniel Smith</h2>
            </div>
          </div>
        </div>
        <div className='flex-[2] p-4 md:p-20'>
          <div className='flex flex-wrap md:gap-20 gap-8 justify-center'>
            {teams.map((item, index) => (
              <div
                className='flex flex-col items-center px-2'
                key={index}
              >
                <img
                  src={item.source}
                  alt=''
                  className='rounded-full h-32 w-32 object-cover mb-4'
                />
                <h1 className=' text-base font-lora font-bold'>
                  {item.position}
                </h1>
                <h3 className='text-sm font-lora'>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Team
