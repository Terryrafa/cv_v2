import React from 'react'
import Nav from '@/components/Navbar/index'
import Main from '@/app/Main/Main'
import About from '@/app/about/About'
import Exp from '@/app/Experince/Exp'
import Edu from './Education/Edu'


export default function page() {
  return (
    <div>
        <Nav />
          <div className='app_wrapper'>
            <Main />
            <About />
            <Exp />
            <Edu/>
          </div>
    </div>
  )
}
