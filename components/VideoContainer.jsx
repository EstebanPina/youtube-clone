
import React from 'react'

export default function VideoContainer({image,duration,name,channel,views,age,avatar}) {
  console.log(image)
  return (
    <div className='h-72 w-80 flex flex-col'>
      <div className="w-80 flex bg-cover rounded-lg aspect-video justify-end items-end" style={{backgroundImage:`url(${image})`}}>
      <p className='bg-black text-white rounded-lg p-1 m-4 text-xs font-medium'>{duration}</p>
      </div>
      <div className="flex flex-row gap-2">
      <div className='w-2/12 flex justify-center items-center'>
        <img src={avatar} alt="channel" className='rounded-full w-8 h-8 border border-neutral-600'/>
      </div>
      <div className='w-11/12 flex flex-col p-1'>
      <h3 className='text-lg font-medium'>{name}</h3>
      <h4 className='text-xs text-neutral-700'>{channel}</h4>
      <p className='text-xs font-light text-neutral-700'>{views} Vistas • {age} years old</p>
      </div>
      </div>
    </div>
  )
}
