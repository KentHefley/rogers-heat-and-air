import React from 'react'
import Link from 'next/link'
import { navItams } from '../constants/navitams'

function Nav() {
  return (
    <nav className="sticky top-0 bg-background/80 backdrop-blur-md border-border/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
        <div className="shrink-0">
          <h1 className="text-xl font-serif font-bold text-foreground">Rogers Heat and Air</h1>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navItams.map((navitam) => (
            <Link key={navitam.name} href={navitam.href}>
              {navitam.name}
            </Link>
          ))}
        </div>
        </div>
      </div>

    </nav>
  )
}

export default Nav