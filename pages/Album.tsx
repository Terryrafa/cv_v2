import React from 'react'
import '@/public/styles/globals.css'
import Image from 'next/image'

import Navalb from '@/components/Navalb.tsx'
import im1 from '@/components/assets/album/im1.jpg'
import im2 from '@/components/assets/album/im2.jpg'
import im3 from '@/components/assets/album/im3.jpg'
import im4 from '@/components/assets/album/im4.jpg'
import im5 from '@/components/assets/album/im5.jpg'
import im6 from '@/components/assets/album/im6.jpg'
import im7 from '@/components/assets/album/im7.jpg'
import im8 from '@/components/assets/album/im8.jpg'
import im9 from '@/components/assets/album/im9.jpg'
import im10 from '@/components/assets/album/im10.jpg'
import im11 from '@/components/assets/album/im11.jpg'
import im12 from '@/components/assets/album/im12.jpg'
import im13 from '@/components/assets/album/IMG_8214.jpg'
import im14 from '@/components/assets/album/IMG_9221_copy.jpg'
import im15 from '@/components/assets/album/IMG_9276.jpg'




export default function Album() {
  return (
    <div>
      <Navalb />
      <div className='h-full w-full z-10' id='album'>
          <div className='h-full w-full z-10 bg-[#DCE0D9] pb-12'>
            <div className='max-w-screen-2xl mx-auto h-full '>
              <div className='flex justify-center h-auto z-0'>
                <div className='abouttlt'>
                  <h2 className='abouttxt'>Album</h2><span className='txtex albex'>______</span>
                </div>
              </div>
                <div className='containerbox expgal'>
                  <div className='expcolm'>
                  <div className='boxgal'>
                      <Image src={im1} alt='' className='rounded-lg drop-shadow-lg '/>
                    </div>
                    <div className='boxgal'>
                      <Image src={im2} alt='' className='rounded-lg drop-shadow-lg '/>
                    </div>
                    <div className='boxgal'>
                      <Image src={im3} alt='' className='rounded-lg drop-shadow-lg '/>
                    </div>
                    <div className='boxgal'>
                      <Image src={im15} alt='' className='rounded-lg drop-shadow-lg '/>
                    </div>
                  </div>
                    <div className='expcolm'>
                    <div className='boxgal'>
                      <Image src={im4} alt='' className='rounded-lg drop-shadow-lg '/>
                    </div>
                    <div className='boxgal'>
                      <Image src={im5} alt='' className='rounded-lg drop-shadow-lg '/>
                    </div>
                    <div className='boxgal'>
                      <Image src={im6} alt='' className='rounded-lg drop-shadow-lg '/>
                    </div>
                    <div className='boxgal'>
                      <Image src={im14} alt='' className='rounded-lg drop-shadow-lg '/>
                    </div>
                    </div>
                    
                    <div className='expcolm'>
                    <div className='boxgal'>
                          <Image src={im7} alt='' className='rounded-lg drop-shadow-lg '/>
                        </div>
                        <div className='boxgal'>
                          <Image src={im8} alt='' className='rounded-lg drop-shadow-lg '/>
                        </div>
                        <div className='boxgal'>
                          <Image src={im9} alt='' className='rounded-lg drop-shadow-lg '/>
                        </div>
                        <div className='boxgal'>
                      <Image src={im13} alt='' className='rounded-lg drop-shadow-lg '/>
                    </div>
                    </div>

                    <div className='expcolm'>
                    <div className='boxgal'>
                          <Image src={im10} alt='' className='rounded-lg drop-shadow-lg '/>
                        </div>
                        <div className='boxgal'>
                          <Image src={im11} alt='' className='rounded-lg drop-shadow-lg '/>
                        </div>
                        <div className='boxgal'>
                          <Image src={im12} alt='' className='rounded-lg drop-shadow-lg '/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}
