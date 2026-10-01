'use client'

import Link from 'next/link'
import { navItems } from '../constants/navitems'
import { usePathname } from 'next/navigation'


export default function Footer() {
    const location = usePathname()
  return (
    <footer className="bg-background border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 sm:px-6 md:flex-row md:justify-between lg:px-8">
        {/* logo */}
        <div className="shrink-0">
        <Link
            href="/"
            className="inline-flex flex-col font-serif text-foreground"
          >
            <span className="text-3xl font-bold leading-none">
              Rogers
            </span>
            <span className="text-md leading-tight">
              Heat and Air
            </span>
        </Link>
        </div>
        {/* Links */}
        <div className="flex items-center space-x-8">
          {navItems.map((navitem) => (
            <Link key={navitem.name} href={navitem.href} className={`text-sm font-medium transition-colors duration-200 ${location === navitem.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {navitem.name}
            </Link>
          ))}
        </div>
        <div className="border-l border-ring pl-4">
            <p className="font-serif text-sm leading-snug text-foreground">
                Comfort for a brighter tomorrow.
                </p>
        </div>
        </div>
    </footer>
    )
}