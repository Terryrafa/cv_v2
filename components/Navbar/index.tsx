"use client"
import React,{ useState } from 'react'
import {Link} from 'react-scroll'

// assets
import {FaBars, FaTimes} from 'react-icons/fa'
import about from '@/app/about/About'


export default function Navbar():any {

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
                                <Link to='home' spy={true} smooth={true} duration={500} onClick={closeMenu}>Home</Link>
                            </li>
                            <li className='navitem hover:scale-90 duration-300'>
                                <Link to='about' spy={true} smooth={true} duration={500} onClick={closeMenu}>About</Link>
                            </li>
                            <li className='navitem hover:scale-90 duration-300'>
                                <Link to='exp' spy={true} smooth={true} duration={500} onClick={closeMenu}>Experience</Link>
                            </li>
                            <li className='navitem hover:scale-90 duration-300'>
                                <Link to='education' spy={true} smooth={true} duration={500} onClick={closeMenu}>Education</Link>
                            </li>
                            <li className='navitem hover:scale-90 duration-300'>
                                <Link to='' spy={true} smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
                            </li>
                        </ul>
                    </div>
            </div>
    </div>
  )
}
