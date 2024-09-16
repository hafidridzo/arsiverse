import React from 'react'
import { TombolTema } from './button-tema'
import Link from 'next/link'
import Image from 'next/image'
import { MenuNavbar } from './menu-navbar'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-4 px-8 py-4 h-12 bg-white dark:bg-opacity-5 border-b border-gray-100 dark:border-opacity-5 transition-all duration-300 ease-in-out">
            <Link href="/">
            <Image src="/ArsiVerse.svg"
                    width={120} height={40} alt='ArsiVerse'/>
            </Link>
            <MenuNavbar/>
            <TombolTema/>
    </nav>
  )
}

export default Navbar
