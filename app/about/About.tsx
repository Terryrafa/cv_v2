import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// assets
import abtimg from '@/components/assets/side.jpg'

export default function About() {
  return (
    <div className='h-screen w-full z-10' id='about'>
        <div className='h-screen w-full z-10 bg-[#DCE0D9]'>
          <div className='max-w-screen-lg mx-auto h-full px-4 '>
            <div className='flex mx-auto justify-center items-center h-auto z-0'>
              <div className='abouttlt'>
                <h2 className='abouttxt'>About me </h2><span className='txtex'>______</span>
              </div>
            </div>


              <div className='container desc'>
                <div>
                    <Image src={abtimg} alt=''
                    className='AbtImage drop-shadow-lg'/>
                </div>
                   
                    <div className=''>
                      <p className='pl-4'>{`Hi, I'm Terry Davis Raffael, but all my friends used to call me Raffael or Rafa, I'm a high school student from SMK Wira Harapan. I have 4 year's of experience at programing, I've been programing since 2019. I've been learning a ton of technology's for example Html, CSS, JavaScript, php, C++, ReactJs, NextJs, Tailwind, and Typescript. Other than programing I do have a hobby like building Gundam and Photography and playing Volleyball with the boys.`}</p>
                      
                     

                     <div>
                        <Link href='/Album'>
                          <p className='ctcbut but text-black w-fit px-6 py-2 flex items-center bg-[#eeeeee] rounded-md cursor-pointer hover:scale-90 duration-300 hover:ease-in-out drop-shadow-lg'>Click Here For More</p>
                        </Link>
                     </div>
                    </div>
                </div>
          </div>
        </div>
    </div>
  )
}
