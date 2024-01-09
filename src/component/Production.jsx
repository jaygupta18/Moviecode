import React from 'react'
import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import starwar from './../assets/Images/starwar.png'
 
import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'

function Production() {

    const Production=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ] 
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 overflow-none scrollbar-hide '>{Production.map((item)=>(
        <div className='border-[2px] border-gray-400 rounded-md 
        hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-lg  shadow-gray-500 '>
            <img src={item.image}  className='w-full z-2 opacity-100 '/>
            <video src={item.video} autoPlay loop  muted className='absolute z-2 top-0 rounded-md opacity-0 hover:opacity-50' />
       </div>
    ))}
    </div>
  )
}
 
export default Production                                         