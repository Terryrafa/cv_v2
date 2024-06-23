"use client"
import React,{ useState } from 'react'
import Link from 'next/link'

// assets
import {FaBars, FaTimes} from 'react-icons/fa'
import about from '@/app/about/About'


export default function Navalb():any {

    const [click, setClick] = useState(false)
    // const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

  return (
    <div>
        <div className="nav drop-shadow-lg">
                <div>
                    <h1 className="textbig font-signiture ml-2">Raff.Page</h1>
                </div>
                    <div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className='navitem hover:scale-90 duration-300 '>
                                <Link href='/'>
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </div>
            </div>
    </div>
  )
}
