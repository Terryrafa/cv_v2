import React from 'react'
import '@/public/styles/globals.css'
import Image from 'next/image'


import Navalb from '@/components/Navalb.tsx'
import SD from '@/components/assets/edu/sd.jpg'

export default function Sekolah_dasar() {
  return (
    <div>
        <Navalb/>
    <div className='h-full w-full z-10' id='Sekolah_dasar'>
        <div className='h-screen w-full z-10 bg-[#DCE0D9] pb-12'>
         <div className='max-w-screen-2xl mx-auto h-full '>
                <Image src={SD} alt={'Primary Pelita Bangsa'} className='sdimage container rounded-lg'/>
            </div>
            <div className="absolute justify-center mt-[-45rem] ml-[76rem] md:w-[40rem] md:h-auto bg-white p-4 rounded-lg ">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odit, ipsa ab, natus eius deserunt soluta culpa cum quam nemo ea officiis eaque et, aspernatur beatae laboriosam ratione. Incidunt, sunt.</p>
            </div>
        </div>
    </div>
    </div>
  )
}
