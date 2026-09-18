import React from 'react'
import Link from 'next/link'
import { navItems } from '../constants/navitems'
import ThemeToggle from './ThemeToggle'

function Nav() {
  return (
    <nav className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
        <div className="shrink-0">
          <h1 className="text-xl font-serif font-bold text-foreground">Rogers Heat and Air</h1>
        </div>
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((navitem) => (
            <Link key={navitem.name} href={navitem.href} className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors duration-200">
              {navitem.name}
            </Link>
          ))}
           <ThemeToggle />
        </div>
       
        </div>
      </div>

    </nav>
  )
}

export default Nav