import React from 'react'
import Link from 'next/link'

// TODO: Add Menu for mobile viewing

export default function Header() {
  return (
    <nav>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a className="font-bold text-2xl lg:text-4xl" href="#">
          MA
    </a>
        <div className="hidden lg:block">
          <ul className="inline-flex">
            <li className="px-4 hover:text-gray-800"><Link href="/">Home</Link></li>
            <li className="px-4 hover:text-gray-800" ><Link href="/about">About</Link></li>
            <li className="px-4 hover:text-gray-800"><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
