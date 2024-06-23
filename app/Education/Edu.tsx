import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import SD from '@/components/assets/edu/sd.jpg'
import SMP from '@/components/assets/edu/smp.jpeg'
import SMK from '@/components/assets/edu/smk.jpg'
export default function Edu() {
  return (
    <div className='h-screen w-full z-10 ' id='education'>
    <div className='h-fit w-full z-20 bg-[#DCE0D9] mt-[12rem] pb-[6rem]'>
      <div className='max-w-screen-lg mx-auto h-full px-4 '>
        <div className='flex mx-auto justify-center items-center h-auto z-0'>
          <div className='abouttlt'>
            <h2 className='abouttxt'>Education </h2><span className='mt-[-0.5rem] ml-[2rem] text-[#424242]'>______</span>
          </div>

          
        </div>
      </div>

      <div className='containerv2'>
          <div className='desc eduimg drop-shadow-lg'>
            <Link href='/Sekolah_dasar'>
              <p className='edubut ctcbut text-black w-fit px-6 py-2 flex items-center bg-[#eeeeee] rounded-md cursor-pointer hover:scale-110 hover:ml-[29.2rem] hover:mt-[20.8rem] duration-300 hover:ease-in-out'>Click For More Info</p>
            </Link>
            <Image src={SD} alt={'sd'} className='imgedu'/>
          </div>

          <div className='desc eduimg drop-shadow-lg'>
          <Link href=''>
              <p className='edubut ctcbut text-black w-fit px-6 py-2 flex items-center bg-[#eeeeee] rounded-md cursor-pointer hover:scale-110 hover:ml-[29.2rem] hover:mt-[20.8rem] duration-300 hover:ease-in-out '>Click For More Info</p>
            </Link>
            <Image src={SMP} alt={'smp'} className='imgedu '/>
          </div>

          <div className='desc eduimg drop-shadow-lg'>
          <Link href=''>
              <p className='edubut ctcbut text-black w-fit px-6 py-2 flex items-center bg-[#eeeeee] rounded-md cursor-pointer hover:scale-110 hover:ml-[29.2rem] hover:mt-[20.8rem] duration-300 hover:ease-in-out'>Click For More Info</p>
            </Link>
            <Image src={SMK} alt={'smk'} className='imgedu'/>
          </div>
        </div>
    </div>
</div>
  )
}
