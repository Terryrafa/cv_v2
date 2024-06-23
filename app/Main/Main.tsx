import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// assets
import Bg from '@/components/assets/Bg.jpg'
import Heroimage from '@/components/assets/Hero.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'



export default function Main() {
  return (
    <div className='h-screen w-full z-10' id='home'>
      <div>
      <Image src={Bg} alt='Background'
          className='background '/>
          <div className='max-w-screen-lg mx-auto h-full px-4'>
            <div className="flex justify-center h-auto">
                <div className='text'>
                    <h2 className='maintt'>{`I'm Terry Davis Raffael`}</h2>
                    <p className="subtt">{`
                        I'm a web designer with a passion for designing and developing websites. I'm mainly work as a frontend developer.
                        I have 4 years of experience designing websites.
                        Curretlly, learning other technology such as ReactJs, NextJs, Tailwind, and Strapi.`}</p>


                <div>
                    <Link href="/" className="ctcbut group text-black w-fit px-6 py-3 my-2 flex items-center bg-[#eeeeee] rounded-md cursor-pointer hover:scale-90 duration-300 hover:ease-in-out drop-shadow-lg">
                      Contact
                      <span className="group-hover:rotate-90 duration-300">
                            <MdKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
                </div>
                <div className="flex w-1/3">
                <Image src={Heroimage} alt='HeroImage'
                 className='HeroImage drop-shadow-lg'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
