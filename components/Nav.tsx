import React from 'react'
import Link from 'next/link'
import { navitams } from '../constants/navitams'

function Nav() {
  return (
    <nav className="sticky top-0 mx-auto max-w-7xl">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h1>Rogers Heat and Air</h1>
        </div>
        <div>
          {navitams.map((navitam) => (
            <Link key={navitam.name} href={navitam.href}>
              {navitam.name}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  )
}

export default Nav